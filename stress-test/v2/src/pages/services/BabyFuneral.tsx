import { CheckCircle, Phone, MessageCircle, Star, Clock, Shield, Heart, ArrowRight, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQAccordion from "@/components/FAQAccordion";

const BabyFuneral = () => {
  const whatsappLink = `https://wa.me/6596875688?text=${encodeURIComponent("Hi, I need assistance with baby/infant funeral services.")}`;

  const inclusions = [
    "Gentle, sensitive handling and preparation",
    "Small, beautiful casket or crib",
    "Keepsake memory kit (footprints, lock of hair)",
    "Delicate floral arrangements",
    "Private family farewell ceremony",
    "Professional photography (optional)",
    "Cremation coordination",
    "Grief support resources and referrals",
    "24/7 compassionate support",
  ];

  const process = [
    { step: "1", title: "Gentle Contact", desc: "Reach out when ready—no rush, no pressure." },
    { step: "2", title: "Tender Care", desc: "We handle your little one with utmost gentleness." },
    { step: "3", title: "Memory Keepsakes", desc: "Create lasting mementos to treasure forever." },
    { step: "4", title: "Peaceful Farewell", desc: "A private, loving ceremony for your angel." },
  ];

  const whyChooseUs = [
    { icon: Heart, title: "Gentle Care", desc: "The most tender handling for your little one" },
    { icon: Baby, title: "Specialized Service", desc: "Trained in infant and child funerals" },
    { icon: Shield, title: "Memory Keepsakes", desc: "Beautiful ways to remember your angel" },
    { icon: Clock, title: "Your Pace", desc: "No rush—we follow your timing" },
  ];

  const faqItems = [
    {
      id: "when",
      question: "When should we contact you?",
      answer: "Whenever you're ready. There's no rush. We're available 24/7 and will work at your pace. Some families need time before making arrangements—that's completely okay.",
    },
    {
      id: "keepsakes",
      question: "What keepsakes are available?",
      answer: "We offer footprint and handprint impressions, a lock of hair (if applicable), photographs, and other mementos. These can be precious treasures for remembering your little one.",
    },
    {
      id: "ceremony",
      question: "Do we need to have a ceremony?",
      answer: "It's entirely your choice. Some families prefer a private moment, others want a small gathering. We can arrange anything from a simple farewell to a more formal service—whatever brings you comfort.",
    },
    {
      id: "cost",
      question: "What are the costs involved?",
      answer: "We offer compassionate pricing for baby and infant services. Contact us for details—we handle these cases with sensitivity and will never add to your burden during this difficult time.",
    },
    {
      id: "support",
      question: "Do you provide grief support?",
      answer: "We can connect you with grief counselors and support groups specializing in infant loss. Many families find it helpful to talk to others who understand their experience.",
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
              <span>Baby Funeral Services</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-6">
                Baby & Infant Funeral Services
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Gentle, compassionate care for your little angel. We provide tender arrangements 
                for infants and children, honoring their brief but beautiful lives.
                <strong> We're here whenever you're ready.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
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
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">Gentle, Tender Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">At Your Pace, 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium text-ink">Compassionate Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4 text-center">
                Tender Care for Your Little One
              </h2>
              <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                Every detail handled with the gentlest care and deepest respect.
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
              A Gentle Process
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
              Why Families Trust Us
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

        {/* Compassionate Message */}
        <section className="py-12 bg-deep text-deep-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              We Understand Your Pain
            </h2>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              Losing a baby is one of life's most profound sorrows. There are no words adequate 
              for such loss. We're here not to rush you, but to support you whenever you're ready, 
              with the gentlest care possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:-translate-y-1 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Reach Out When Ready
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
              Questions You May Have
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
                We're Here for You
              </h2>
              <p className="text-slate-600 mb-8">
                When you're ready, reach out. We'll handle everything with the 
                tenderness your little angel deserves.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
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
                ✓ No rush &nbsp;•&nbsp; ✓ Gentle care &nbsp;•&nbsp; ✓ Memory keepsakes
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

export default BabyFuneral;
