import { CheckCircle, Phone, MessageCircle, Star, Clock, Shield, Heart, ArrowRight, Calendar, Lock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQAccordion from "@/components/FAQAccordion";

const PrePlanning = () => {
  const whatsappLink = `https://wa.me/6596875688?text=${encodeURIComponent("Hi, I'd like to learn about funeral pre-planning services.")}`;

  const inclusions = [
    "Personal consultation to discuss preferences",
    "Complete package selection and customization",
    "Religious or non-religious ceremony planning",
    "Venue selection (HDB, landed, parlour)",
    "Casket and floral arrangement selection",
    "Pre-payment options with price lock",
    "Secure documentation and storage",
    "Updateable anytime as wishes change",
  ];

  const benefits = [
    { icon: Heart, title: "Relieve Family Burden", desc: "No difficult decisions during grief" },
    { icon: Lock, title: "Lock in Prices", desc: "Today's rates guaranteed forever" },
    { icon: Shield, title: "Your Wishes Honored", desc: "Everything exactly as you want" },
    { icon: Users, title: "Prevent Disputes", desc: "Clear documentation for family" },
  ];

  const process = [
    { step: "1", title: "Free Consultation", desc: "Discuss your wishes, preferences, and questions." },
    { step: "2", title: "Plan & Customize", desc: "Choose your package, venue, and all details." },
    { step: "3", title: "Secure & Document", desc: "We store your plan securely and accessibly." },
    { step: "4", title: "Peace of Mind", desc: "Rest easy knowing everything is arranged." },
  ];

  const faqItems = [
    {
      id: "why",
      question: "Why should I pre-plan my funeral?",
      answer: "Pre-planning removes difficult decisions from your family during grief, ensures your wishes are honored exactly, and locks in today's pricing against future increases. It's an act of love and practicality.",
    },
    {
      id: "age",
      question: "Am I too young to pre-plan?",
      answer: "Anyone can pre-plan, but it's especially valuable for those 50+, those with specific cultural/religious wishes, or anyone wanting to protect family from financial burden. The earlier you plan, the more you save.",
    },
    {
      id: "change",
      question: "Can I change my plan later?",
      answer: "Absolutely. Your pre-plan can be updated anytime as circumstances or wishes change. We keep your documentation secure and accessible for modifications.",
    },
    {
      id: "payment",
      question: "What are the payment options?",
      answer: "We offer flexible options: full payment upfront (locks pricing forever), installment plans over 12-36 months, or deposit now with balance later. CPF and insurance coordination also available.",
    },
    {
      id: "cost",
      question: "How much does pre-planning save?",
      answer: "By locking in today's prices, you protect against funeral cost inflation (typically 3-5% annually). Over 10+ years, this can mean significant savings. Plus, the peace of mind is priceless.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20 pb-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-grad-calm">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600 mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Funeral Pre-Planning</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-6">
                Funeral Pre-Planning in Singapore
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Plan ahead to ease the burden on your loved ones and ensure your final wishes are honored. 
                Lock in today's prices, make decisions calmly, and give your family the gift of peace.
                <strong> Free, no-obligation consultation available.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Planning Today
                </a>
                <a
                  href="tel:+6596875688"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call 9687 5688
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-6 bg-paper border-b border-dove">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">Plan at Your Own Pace</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">Lock in Today's Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium text-ink">Trusted by 500+ Families</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-10 text-center">
              Why Pre-Plan Your Funeral?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((item, idx) => (
                <div key={idx} className="bg-dove rounded-2xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-dove">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4 text-center">
                What You Can Pre-Plan
              </h2>
              <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                From ceremony type to final resting place—every detail, your way.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-paper rounded-xl">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-10 text-center">
              Simple Pre-Planning Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {process.map((item, idx) => (
                <div key={idx} className="bg-dove rounded-2xl p-6 text-center relative shadow-gentle">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-base font-heading font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-12 bg-deep text-deep-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Free consultation, no pressure. Just honest guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:-translate-y-1 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
              <a
                href="tel:+6596875688"
                className="inline-flex items-center gap-2 px-8 py-4 bg-paper text-ink rounded-full font-bold hover:-translate-y-1 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call 9687 5688
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-dove">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4">
                Give Your Family the Gift of Peace
              </h2>
              <p className="text-slate-600 mb-8">
                Contact us for a free, no-obligation consultation. 
                We'll answer all your questions and help you plan with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
                <a
                  href="tel:+6596875688"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call 9687 5688
                </a>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                ✓ No obligation &nbsp;•&nbsp; ✓ Flexible payment plans &nbsp;•&nbsp; ✓ Price lock guarantee
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default PrePlanning;
