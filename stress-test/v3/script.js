console.log("NovaFlow landing page loaded.");

function handleCTA(label) {
  console.log(label + " clicked");
  alert(label + " clicked (demo only)");
}

document.getElementById("heroCta")?.addEventListener("click", function () {
  handleCTA("Hero CTA");
});

document.getElementById("pricingCta")?.addEventListener("click", function () {
  handleCTA("Pricing CTA");
});

document.getElementById("navCta")?.addEventListener("click", function () {
  handleCTA("Header CTA");
});
