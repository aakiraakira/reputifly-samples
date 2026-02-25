import { FileText, Download, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQAccordion from "@/components/FAQAccordion";

const Resources = () => {
  const immediateSteps = [
    {
      step: "1",
      title: "Stay Calm & Contact Us",
      description: "Call or WhatsApp 8127 5655 immediately. We'll guide you through everything step by step.",
    },
    {
      step: "2",
      title: "At Home: Call 995",
      description: "If your loved one passed at home, call 995 for an ambulance. They will transport to the hospital for a Doctor's Certificate.",
    },
    {
      step: "3",
      title: "At Hospital: Get CCOD",
      description: "If at hospital, request the Medical Certificate of Cause of Death (CCOD) from the attending doctor.",
    },
    {
      step: "4",
      title: "Prepare Documents",
      description: "Have ready: Deceased's NRIC, Doctor's Certificate or CCOD, Next-of-kin NRIC.",
    },
    {
      step: "5",
      title: "We Handle the Rest",
      description: "Collection, permits, cremation booking, venue setup, and all arrangements—leave it to us.",
    },
  ];

  const guides = [
    {
      title: "Choosing a Venue",
      content: "HDB void deck (common & economical), Condo function rooms (more private), Landed property (spacious & personal), Funeral parlours (climate-controlled, professional facilities). We handle setups for all venue types.",
    },
    {
      title: "How Many Days for a Wake?",
      content: "1-day wake: Quick, simple, often for direct cremation or immediate family only. 3-day wake: Most common—allows relatives to travel and pay respects. 5-day wake: Extended for large families or overseas relatives. We accommodate your needs.",
    },
    {
      title: "Choosing Religious Rites",
      content: "Buddhist: Monks chant sutras; lotus flowers and incense. Taoist: Dialect-specific priests; paper offerings and rituals. Christian: Pastor-led service; hymns and prayers. Roman Catholic: Priest and Mass; crucifix and candles. Soka: SGI leaders; simple, dignified setup. Freethinker: Non-religious celebrant; personalized tributes. Bespoke: Your custom vision—we create it.",
    },
    {
      title: "What 'Nett Pricing' Includes",
      content: "All essential services in the package (casket, setup, hearse, permits, coordination). No hidden fees within the stated nett price. Optional upgrades and venue/parlour fees quoted separately upfront. Total transparency—you know exactly what you're paying for.",
    },
    {
      title: "What to Bring to a Wake",
      content: "Condolence money (white envelope with odd amount, e.g., $30, $50). Appropriate attire (dark colors, modest). Respectful demeanor. Incense or flowers (often provided, but additional offerings welcome). Your presence and support for the family.",
    },
    {
      title: "After-Care: Columbarium & Ash Storage",
      content: "Government columbariums: Mandai, Choa Chu Kang (affordable, public). Private columbariums: Various locations, premium facilities. Home ash storage: Allowed, with proper urn. Sea ash scattering: Requires NEA permit. We assist with bookings, niche selection, and all arrangements.",
    },
  ];

  const faqItems = [
    {
      id: "immediate-documents",
      question: "What documents are required immediately when someone passes away?",
      answer: "You'll need the deceased's NRIC and either a Medical Certificate of Cause of Death (CCOD) from the hospital or a Doctor's Certificate if they passed at home. We will help you obtain these and handle all subsequent permits with NEA.",
    },
    {
      id: "cost-estimate",
      question: "How much does a typical funeral cost in Singapore?",
      answer: "Costs vary by faith, venue, and duration. Direct Cremation starts from $1,188 nett. Full 3-day Buddhist/Christian/Taoist funerals range from $4,288 to $7,288 nett. All our prices are transparent nett pricing with no hidden fees.",
    },
    {
      id: "nett-meaning",
      question: "What does 'nett' pricing mean?",
      answer: "Nett pricing means the stated price includes all essential services in that package—no hidden fees or surprise charges. Optional upgrades, venue/parlour fees, and religious officiant honorariums are quoted separately and clearly upfront.",
    },
    {
      id: "response-time",
      question: "How quickly can you respond?",
      answer: "We respond within minutes, 24/7. Call or WhatsApp 8127 5655 and our team will immediately guide you through the next steps and arrange collection if needed.",
    },
    {
      id: "all-faiths",
      question: "Do you serve all religions?",
      answer: "Yes. We respectfully serve Buddhist, Taoist (all dialects), Christian, Roman Catholic, Soka, Freethinker, and Bespoke (fully customized) funerals. Our team is experienced in all traditions.",
    },
    {
      id: "landed-setup",
      question: "Can you set up a funeral at my landed property or outdoor space?",
      answer: "Absolutely. We specialize in professional setups at landed homes and outdoor spaces—tents, seating, altars, florals, and full coordination. We handle permits and compliance with estate rules.",
    },
    {
      id: "cremation-time",
      question: "How long does it take to arrange a cremation?",
      answer: "With all documents ready, we can typically schedule cremation within 1-3 days. NEA permit processing is usually same-day or next-day. We expedite all bookings and keep you informed.",
    },
    {
      id: "payment-terms",
      question: "What are your payment terms?",
      answer: "We require a deposit upon booking, with the balance payable before or shortly after the funeral. We accept bank transfer, PayNow, cash, and cheque. Payment plans can be discussed for pre-planning.",
    },
    {
      id: "repatriation-time",
      question: "How long does international repatriation take?",
      answer: "Typically 5-7 days including documentation, embalming, permits, embassy clearance, and flight booking. We expedite the process urgently and provide regular updates.",
    },
    {
      id: "pre-planning",
      question: "Can I plan my own funeral in advance?",
      answer: "Yes. Pre-planning relieves your family of difficult decisions and locks in current pricing. We'll sit with you to discuss preferences, select a package, and document your wishes.",
    },
    {
      id: "wake-duration",
      question: "How long is a typical wake?",
      answer: "Most families choose a 3-day wake. We also offer 1-day (quick, simple) and 5-day (extended for large families or overseas relatives) options. Duration depends on your faith and family needs.",
    },
    {
      id: "venue-options",
      question: "What venue options do you support?",
      answer: "HDB void decks, condo function rooms, landed properties, outdoor spaces, and funeral parlours. We handle professional setups at all venue types with full permit and compliance support.",
    },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20 pb-24 md:pb-32">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-grad-calm">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 rounded-full mb-6">
              <FileText className="w-7 h-7 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              What To Do When Someone Passes in Singapore
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides, FAQs, and resources to help you through this difficult time.
            </p>
          </div>
        </section>

        {/* Immediate Steps */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink text-center mb-12">
              Immediate Steps: What to Do Right Now
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {immediateSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-dove p-6 md:p-8 rounded-xl shadow-gentle flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-slate-600 mb-6">
                Too much to handle? We can manage every step.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+6581275655"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 8127 5655</span>
                </a>
                <a
                  href="https://wa.me/6581275655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-ink rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="py-16 bg-dove">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink text-center mb-12">
              Helpful Guides
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {guides.map((guide, idx) => (
                <div
                  key={idx}
                  className="bg-paper p-6 md:p-8 rounded-xl shadow-gentle"
                >
                  <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {guide.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadables */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-6">
                Downloadable Resources
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Helpful checklists and guides you can download and print
              </p>

              <div className="bg-dove p-8 rounded-xl shadow-gentle">
                <Download className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                  Funeral Planning Checklist (PDF)
                </h3>
                <p className="text-slate-600 mb-6">
                  A comprehensive checklist covering documents, decisions, and steps when planning a funeral in Singapore.
                </p>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                  onClick={() => alert("PDF download would be available here")}
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-dove">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="max-w-4xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-slate-600 mb-6">
                Still have questions? We're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+6581275655"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 8127 5655</span>
                </a>
                <a
                  href="https://wa.me/6581275655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-ink rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default Resources;
