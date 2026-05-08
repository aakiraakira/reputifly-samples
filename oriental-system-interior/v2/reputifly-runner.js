#!/usr/bin/env node

const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");

const SCRIPT_VERSION = 1;
const STATE_FILE_NAME = ".reputifly-run-state.json";
const RESULT_START = "REPUTIFLY_RUNNER_RESULT_START";
const RESULT_END = "REPUTIFLY_RUNNER_RESULT_END";
const DEFAULT_SHARED_KEY = "ReputiflyAgentRunsV1";
const DEFAULT_NOTIFY_URL = "https://asia-southeast1-b2b-software.cloudfunctions.net/agentRunNotify";
const DEFAULT_STATUS_URL = "https://asia-southeast1-b2b-software.cloudfunctions.net/agentRunStatus";
const DEFAULT_NEXT_ACTION_URL = "https://asia-southeast1-b2b-software.cloudfunctions.net/agentRunNextAction";
const DEFAULT_ANSWER_URL = "https://asia-southeast1-b2b-software.cloudfunctions.net/agentRunAnswer";
const DEFAULT_IDLE_TIMEOUT_MINUTES = 15;
const DEFAULT_TARGET_EMAIL = "runikojane@gmail.com";
const DEFAULT_SOURCE = "reputifly-local-runner";
const DEFAULT_WAIT_SECONDS = 15;

function log(message, extra = "") {
	const line = `[reputifly-runner] ${message}${extra ? ` ${extra}` : ""}`;
	process.stderr.write(`${line}\n`);
}

function parseCli(argv) {
	const result = {
		command: "",
		args: {},
	};

	for (let i = 0; i < argv.length; i += 1) {
		const value = argv[i];
		if (!result.command && !value.startsWith("--")) {
			result.command = value;
			continue;
		}
		if (!value.startsWith("--")) {
			throw new Error(`Unexpected argument: ${value}`);
		}
		const key = value.slice(2);
		const next = argv[i + 1];
		if (!next || next.startsWith("--")) {
			result.args[key] = true;
			continue;
		}
		result.args[key] = next;
		i += 1;
	}

	return result;
}

function normalizeLinks(links) {
	if (!Array.isArray(links)) return [];
	return links
		.map((item) => {
			if (typeof item === "string") {
				const clean = item.trim();
				return clean ? { label: clean, url: clean } : null;
			}
			if (!item || typeof item !== "object") return null;
			const url = typeof item.url === "string" ? item.url.trim() : "";
			if (!url) return null;
			const label = typeof item.label === "string" && item.label.trim() ? item.label.trim() : url;
			return { label, url };
		})
		.filter(Boolean)
		.slice(0, 8);
}

function safeString(value, fallback = "") {
	if (value === undefined || value === null) return fallback;
	return String(value).trim();
}

function asInt(value, fallback) {
	const parsed = Number.parseInt(String(value ?? "").trim(), 10);
	return Number.isFinite(parsed) ? parsed : fallback;
}

function resolvePath(baseDir, value) {
	const normalized = safeString(value);
	if (!normalized) return "";
	if (path.isAbsolute(normalized)) return normalized;
	return path.resolve(baseDir, normalized);
}

async function readJsonFile(filePath, label) {
	const raw = await fsp.readFile(filePath, "utf8");
	try {
		return JSON.parse(raw);
	} catch (error) {
		throw new Error(`${label} is not valid JSON: ${error.message}`);
	}
}

function getProfileSiteInfo(profile) {
	const agentReviewLoop = profile.agent_review_loop || {};
	const payloadTemplate = (((agentReviewLoop.local_runner || {}).input_contracts || {}).notify || {}).defaults || {};
	const siteUrl = safeString(profile.site_url || profile.siteUrl);
	if (!siteUrl) {
		throw new Error("Profile JSON is missing site_url.");
	}

	const siteName = safeString(
		profile.site_name ||
		profile.siteName ||
		payloadTemplate.siteName ||
		"Unknown Site",
		"Unknown Site"
	);

	const targetEmail = safeString(
		agentReviewLoop.default_target_email ||
		payloadTemplate.targetEmail ||
		DEFAULT_TARGET_EMAIL,
		DEFAULT_TARGET_EMAIL
	);

	const idleTimeoutMinutes = asInt(
		(((agentReviewLoop.recommended_defaults || {}).idle_timeout_minutes) ?? payloadTemplate.reviewTimeoutMinutes),
		DEFAULT_IDLE_TIMEOUT_MINUTES
	);

	return {
		siteUrl,
		siteName,
		targetEmail,
		idleTimeoutMinutes,
	};
}

function getStateFilePath(baseDir) {
	return path.join(baseDir, STATE_FILE_NAME);
}

async function readState(statePath) {
	try {
		const raw = await fsp.readFile(statePath, "utf8");
		return JSON.parse(raw);
	} catch (error) {
		if (error && error.code === "ENOENT") return null;
		throw new Error(`Failed to read ${STATE_FILE_NAME}: ${error.message}`);
	}
}

async function writeState(statePath, state) {
	await fsp.writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

function buildBaseState(profileInfo, existingState = null) {
	const now = new Date().toISOString();
	return {
		version: SCRIPT_VERSION,
		runId: existingState && existingState.runId ? existingState.runId : "",
		runnerId: existingState && existingState.runnerId ? existingState.runnerId : `local-runner-${randomUUID().slice(0, 12)}`,
		siteUrl: profileInfo.siteUrl,
		siteName: profileInfo.siteName,
		targetEmail: profileInfo.targetEmail,
		createdAt: existingState && existingState.createdAt ? existingState.createdAt : now,
		updatedAt: now,
		lastAction: existingState && existingState.lastAction ? existingState.lastAction : "initialized",
		feedbackVersion: existingState && existingState.feedbackVersion ? existingState.feedbackVersion : 0,
		questionVersion: existingState && existingState.questionVersion ? existingState.questionVersion : 0,
		latestText: existingState && existingState.latestText ? existingState.latestText : "",
		latestReason: existingState && existingState.latestReason ? existingState.latestReason : "",
		reviewTimeoutMinutes: existingState && Number.isFinite(existingState.reviewTimeoutMinutes)
			? existingState.reviewTimeoutMinutes
			: profileInfo.idleTimeoutMinutes,
	};
}

function buildFreshState(profileInfo, existingState = null) {
	const preservedRunnerId = existingState && existingState.runnerId ? existingState.runnerId : `local-runner-${randomUUID().slice(0, 12)}`;
	return buildBaseState(profileInfo, {
		runnerId: preservedRunnerId,
		reviewTimeoutMinutes: existingState && Number.isFinite(existingState.reviewTimeoutMinutes)
			? existingState.reviewTimeoutMinutes
			: profileInfo.idleTimeoutMinutes,
	});
}

function ensureStateMatchesProfile(existingState, profileInfo) {
	if (!existingState) return;
	if (safeString(existingState.siteUrl) && safeString(existingState.siteUrl) !== profileInfo.siteUrl) {
		throw new Error(`Existing ${STATE_FILE_NAME} belongs to ${existingState.siteUrl}. Run reset first before reusing this directory for ${profileInfo.siteUrl}.`);
	}
}

function isTerminalRemoteStatus(status) {
	const normalized = safeString(status).toLowerCase();
	return normalized === "approved" || normalized === "timed_out";
}

async function fetchRemoteRun(runId) {
	if (!safeString(runId)) return null;
	try {
		const remote = await apiRequest(DEFAULT_STATUS_URL, {
			method: "GET",
			query: {
				runId,
				key: DEFAULT_SHARED_KEY,
			},
		});
		return remote && remote.run ? remote.run : null;
	} catch (error) {
		const message = safeString(error && error.message);
		if (message.includes("Run not found")) {
			return null;
		}
		throw error;
	}
}

async function apiRequest(url, { method = "GET", body, query = null } = {}) {
	const finalUrl = query
		? `${url}?${new URLSearchParams(query).toString()}`
		: url;
	const headers = {
		Accept: "application/json",
		"x-agent-run-key": DEFAULT_SHARED_KEY,
	};
	if (body !== undefined) {
		headers["Content-Type"] = "application/json";
	}

	const response = await fetch(finalUrl, {
		method,
		headers,
		body: body !== undefined ? JSON.stringify(body) : undefined,
	});

	const text = await response.text();
	let data = {};
	try {
		data = text ? JSON.parse(text) : {};
	} catch (_error) {
		throw new Error(`Non-JSON response from ${url}: ${text.slice(0, 300)}`);
	}

	if (!response.ok || data.success === false) {
		throw new Error(data.error || `HTTP ${response.status} from ${url}`);
	}

	return data;
}

function emitResultAndExit(result, code = 0) {
	process.stdout.write(`${RESULT_START}\n`);
	process.stdout.write(`${JSON.stringify(result)}\n`);
	process.stdout.write(`${RESULT_END}\n`);
	process.exit(code);
}

function mapTerminalAction(nextAction, state) {
	if (nextAction.action === "revise" && nextAction.feedback) {
		return {
			action: "changes_requested",
			runId: state.runId,
			reason: nextAction.reason || "changes_requested",
			text: safeString(nextAction.feedback.text),
			images: Array.isArray(nextAction.feedback.images) ? nextAction.feedback.images : [],
			data: nextAction.feedback.data || null,
			feedbackVersion: asInt(nextAction.feedback.version, 0),
			questionVersion: 0,
		};
	}

	if (nextAction.action === "answer" && nextAction.question) {
		return {
			action: "ask_requested",
			runId: state.runId,
			reason: nextAction.reason || "question_requested",
			text: safeString(nextAction.question.text),
			images: Array.isArray(nextAction.question.images) ? nextAction.question.images : [],
			data: nextAction.question.data || null,
			feedbackVersion: 0,
			questionVersion: asInt(nextAction.question.version, 0),
		};
	}

	if (nextAction.action === "stop") {
		if (nextAction.reason === "approved") {
			return {
				action: "approved",
				runId: state.runId,
				reason: "approved",
				text: "",
				feedbackVersion: 0,
				questionVersion: 0,
			};
		}
		if (nextAction.reason === "review_timeout") {
			return {
				action: "review_timeout",
				runId: state.runId,
				reason: "review_timeout",
				text: "",
				feedbackVersion: 0,
				questionVersion: 0,
			};
		}
	}

	return {
		action: "error",
		runId: state.runId,
		reason: safeString(nextAction.reason || "unexpected_next_action", "unexpected_next_action"),
		text: `Unexpected next action payload: ${JSON.stringify(nextAction)}`,
		feedbackVersion: 0,
		questionVersion: 0,
	};
}

async function waitForHumanAction(statePath, state) {
	while (true) {
		const next = await apiRequest(DEFAULT_NEXT_ACTION_URL, {
			method: "POST",
			body: {
				runId: state.runId,
				runnerId: state.runnerId,
				claim: true,
				waitSeconds: DEFAULT_WAIT_SECONDS,
				includeEvents: false,
			},
		});

		if (next.action === "wait") {
			continue;
		}

		const terminal = mapTerminalAction(next, state);
		const nextState = {
			...state,
			updatedAt: new Date().toISOString(),
			lastAction: terminal.action,
			latestReason: terminal.reason,
			latestText: terminal.text || "",
			feedbackVersion: terminal.feedbackVersion || 0,
			questionVersion: terminal.questionVersion || 0,
		};
		await writeState(statePath, nextState);
		emitResultAndExit(terminal, terminal.action === "error" ? 1 : 0);
	}
}

async function handleNotify(profilePath, inputPath) {
	const profile = await readJsonFile(profilePath, "Profile JSON");
	const profileInfo = getProfileSiteInfo(profile);
	const cwd = path.dirname(profilePath);
	const statePath = getStateFilePath(cwd);
	const existingState = await readState(statePath);
	ensureStateMatchesProfile(existingState, profileInfo);
	let baseState = buildBaseState(profileInfo, existingState);
	const remoteRun = existingState && existingState.runId
		? await fetchRemoteRun(existingState.runId)
		: null;
	if (existingState && existingState.runId && (!remoteRun || isTerminalRemoteStatus(remoteRun.status))) {
		baseState = buildFreshState(profileInfo, existingState);
	}
	const input = await readJsonFile(inputPath, "Notify input");
	const resolvedFeedbackVersion = asInt(
		input.resolvedFeedbackVersion,
		baseState.lastAction === "changes_requested" && asInt(baseState.feedbackVersion, 0) > 0
			? asInt(baseState.feedbackVersion, 0)
			: 0
	);

	const payload = {
		runId: safeString(input.runId || baseState.runId || randomUUID()),
		runnerId: baseState.runnerId,
		title: safeString(input.title || "Agent Task", "Agent Task"),
		summary: safeString(input.summary),
		details: safeString(input.details),
		siteName: profileInfo.siteName,
		siteUrl: profileInfo.siteUrl,
		targetEmail: safeString(input.targetEmail || profileInfo.targetEmail, profileInfo.targetEmail),
		links: normalizeLinks(input.links),
		notify: input.notify !== false,
		reviewTimeoutMinutes: asInt(input.reviewTimeoutMinutes, baseState.reviewTimeoutMinutes || profileInfo.idleTimeoutMinutes),
		resolvedFeedbackVersion,
		source: safeString(input.source || DEFAULT_SOURCE, DEFAULT_SOURCE),
	};

	if (!payload.summary) {
		throw new Error("Notify input must include summary.");
	}

	const response = await apiRequest(DEFAULT_NOTIFY_URL, {
		method: "POST",
		body: payload,
	});

	const canonicalRunId = safeString(response && response.run && response.run.runId, payload.runId);
	const nextState = {
		...baseState,
		runId: canonicalRunId,
		targetEmail: payload.targetEmail,
		reviewTimeoutMinutes: payload.reviewTimeoutMinutes,
		updatedAt: new Date().toISOString(),
		lastAction: "notified",
		latestReason: "notified",
		latestText: "",
		feedbackVersion: 0,
		questionVersion: 0,
	};
	await writeState(statePath, nextState);
	await waitForHumanAction(statePath, nextState);
}

async function handleAnswer(profilePath, inputPath) {
	const profile = await readJsonFile(profilePath, "Profile JSON");
	const profileInfo = getProfileSiteInfo(profile);
	const cwd = path.dirname(profilePath);
	const statePath = getStateFilePath(cwd);
	const existingState = await readState(statePath);
	ensureStateMatchesProfile(existingState, profileInfo);

	if (!existingState || !existingState.runId) {
		throw new Error(`No active ${STATE_FILE_NAME} found for this project. Run notify first.`);
	}

	const input = await readJsonFile(inputPath, "Answer input");
	const questionVersion = asInt(input.questionVersion, asInt(existingState.questionVersion, 0));
	if (!questionVersion) {
		throw new Error("Answer input must include questionVersion, or the state file must already contain one.");
	}

	const payload = {
		runId: existingState.runId,
		runnerId: existingState.runnerId,
		questionVersion,
		answerTitle: safeString(input.answerTitle || input.title || "Agent Answer", "Agent Answer"),
		answer: safeString(input.answer),
		details: safeString(input.details),
		links: normalizeLinks(input.links),
		source: safeString(input.source || DEFAULT_SOURCE, DEFAULT_SOURCE),
	};

	if (!payload.answer) {
		throw new Error("Answer input must include answer.");
	}

	await apiRequest(DEFAULT_ANSWER_URL, {
		method: "POST",
		body: payload,
	});

	const nextState = {
		...existingState,
		updatedAt: new Date().toISOString(),
		lastAction: "question_answered",
		latestReason: "question_answered",
		latestText: "",
		questionVersion: 0,
	};
	await writeState(statePath, nextState);
	await waitForHumanAction(statePath, nextState);
}

async function handleStatus(profilePath) {
	const profile = await readJsonFile(profilePath, "Profile JSON");
	const profileInfo = getProfileSiteInfo(profile);
	const cwd = path.dirname(profilePath);
	const statePath = getStateFilePath(cwd);
	const existingState = await readState(statePath);
	ensureStateMatchesProfile(existingState, profileInfo);

	if (!existingState || !existingState.runId) {
		process.stdout.write(`${JSON.stringify({ success: true, status: "no_active_run", stateFile: STATE_FILE_NAME }, null, 2)}\n`);
		return;
	}

	const remote = await apiRequest(DEFAULT_STATUS_URL, {
		method: "GET",
		query: {
			runId: existingState.runId,
			key: DEFAULT_SHARED_KEY,
		},
	});

	process.stdout.write(`${JSON.stringify({
		success: true,
		localState: existingState,
		remoteRun: remote.run || null,
		events: remote.events || [],
	}, null, 2)}\n`);
}

async function handleReset(profilePath) {
	await readJsonFile(profilePath, "Profile JSON");
	const cwd = path.dirname(profilePath);
	const statePath = getStateFilePath(cwd);
	await fsp.rm(statePath, { force: true });
	log(`Removed ${STATE_FILE_NAME}`);
}

async function main() {
	const cli = parseCli(process.argv.slice(2));
	const command = safeString(cli.command).toLowerCase();
	const cwd = process.cwd();
	const profilePath = resolvePath(cwd, cli.args.profile);
	const inputPath = resolvePath(cwd, cli.args.input);

	if (!command || !["notify", "answer", "status", "reset"].includes(command)) {
		throw new Error("Usage: node reputifly-runner.js <notify|answer|status|reset> --profile <profile.json> [--input <input.json>]");
	}
	if (!profilePath) {
		throw new Error("Missing --profile <profile.json>.");
	}
	if ((command === "notify" || command === "answer") && !inputPath) {
		throw new Error(`Missing --input <input.json> for ${command}.`);
	}

	if (command === "notify") {
		await handleNotify(profilePath, inputPath);
		return;
	}
	if (command === "answer") {
		await handleAnswer(profilePath, inputPath);
		return;
	}
	if (command === "status") {
		await handleStatus(profilePath);
		return;
	}
	await handleReset(profilePath);
}

main().catch((error) => {
	log("Fatal error", error.stack || error.message || String(error));
	emitResultAndExit({
		action: "error",
		runId: "",
		reason: "local_error",
		text: error.message || String(error),
		feedbackVersion: 0,
		questionVersion: 0,
	}, 1);
});
