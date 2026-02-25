import { CheckCircle, Phone, MessageCircle, Star, Clock, Users, Shield, Heart, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQAccordion from "@/components/FAQAccordion";

const Freethinker = () => {
  const whatsappLink = `https://wa.me/6596875688?text=${encodeURIComponent("Hi, I need assistance with non-religious/Freethinker funeral services.")}`;

  const inclusions = [
    "Non-religious, personalized ceremony",
    "Professional emcee or celebrant",
    "Customized tribute and eulogy",
    "Photo and video tribute setup",
    "Quality casket selection",
    "Hearse and transportation services",
    "Funeral tent and seating arrangement",
    "Sound system and music of choice",
    "Cremation coordination at Mandai",
    "Memorial keepsakes available",
    "24/7 family support and coordination",
  ];

  const process = [
    { step: "1", title: "Immediate Response", desc: "Call us 24/7. We arrive promptly to begin arrangements." },
    { step: "2", title: "Personalization", desc: "Design a unique ceremony reflecting their life and values." },
    { step: "3", title: "Celebration of Life", desc: "1-3 day wake with personal tributes and gatherings." },
    { step: "4", title: "Final Farewell", desc: "Meaningful ceremony followed by cremation." },
  ];

  const whyChooseUs = [
    { icon: Sparkles, title: "Fully Personalized", desc: "No templates—every ceremony is unique" },
    { icon: Heart, title: "Celebration of Life", desc: "Focus on memories, stories, and legacy" },
    { icon: Shield, title: "No Hidden Fees", desc: "Clear, transparent pricing always" },
    { icon: Clock, title: "24/7 Support", desc: "Available whenever you need us" },
  ];

  const faqItems = [
    {
      id: "what",
      question: "What is a Freethinker funeral?",
      answer: "A Freethinker (non-religious) funeral focuses on celebrating the person's life, values, and memories without religious rituals. It's personalized to reflect who they were—their passions, achievements, and the love they shared.",
    },
    {
      id: "ceremony",
      question: "What happens during a non-religious funeral?",
      answer: "The ceremony typically includes eulogies, sharing of memories, music meaningful to the deceased, photo tributes, and personal touches that celebrate their life. We can include poetry, readings, or any elements the family wishes.",
    },
    {
      id: "celebrant",
      question: "Who leads the ceremony?",
      answer: "A professional celebrant or emcee guides the ceremony. They work with the family beforehand to understand the deceased and create a meaningful, personalized service. Family members can also participate as much as they wish.",
    },
    {
      id: "venue",
      question: "Where can a Freethinker funeral be held?",
      answer: "Anywhere you choose—HDB void deck, landed property, funeral parlour, or any meaningful location. We handle all setup and logistics to create a dignified, comfortable space.",
    },
    {
      id: "cost",
      question: "How much does a Freethinker funeral cost?",
      answer: "Our packages are transparent and competitive. Contact us for a personalized quotation based on your preferences—no obligation, no pressure. We work with all budgets.",
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
              <span>Freethinker Funeral Services</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-6">
                Freethinker & Non-Religious Funeral Services
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Personalized celebration of life ceremonies that honor your loved one's unique story. 
                No religious obligations—just meaningful tributes and heartfelt farewells. 
                <strong> 24/7 immediate assistance available.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
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
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">24/7 Immediate Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium text-ink">500+ Families Served</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">Fully Customizable</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4 text-center">
                What's Included in Our Services
              </h2>
              <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                Every celebration of life is as unique as the person we're honoring.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-dove rounded-xl">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-dove">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-10 text-center">
              Creating a Meaningful Farewell
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {process.map((item, idx) => (
                <div key={idx} className="bg-paper rounded-2xl p-6 text-center relative shadow-gentle">
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

        {/* Why Choose Us */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-10 text-center">
              Why Families Choose Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="text-center p-6">
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

        {/* Mid-page CTA */}
        <section className="py-12 bg-deep text-deep-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Want to Plan a Meaningful Celebration of Life?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              We're here 24/7 to help you create something truly special.
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
                Let Us Help You Honor Their Memory
              </h2>
              <p className="text-slate-600 mb-8">
                Contact us for a free consultation. We'll help you plan a personalized 
                celebration that truly reflects your loved one.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Consultation
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
                ✓ No obligation &nbsp;•&nbsp; ✓ Transparent pricing &nbsp;•&nbsp; ✓ 24/7 support
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

export default Freethinker;
