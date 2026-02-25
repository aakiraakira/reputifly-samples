import { CheckCircle, Phone, MessageCircle, Star, Clock, Users, Shield, Heart, ArrowRight, Church } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQAccordion from "@/components/FAQAccordion";

const RomanCatholic = () => {
  const whatsappLink = `https://wa.me/6596875688?text=${encodeURIComponent("Hi, I need assistance with Roman Catholic funeral services.")}`;

  const inclusions = [
    "Wake vigil service with prayers and rosary",
    "Church funeral mass coordination",
    "Priest arrangement and liturgy planning",
    "Professional floral arrangements",
    "Quality casket with crucifix",
    "Hearse and transportation services",
    "Funeral tent and seating setup",
    "Sound system for hymns and prayers",
    "Cremation or burial coordination",
    "Death certificate and permit handling",
    "24/7 family support and coordination",
  ];

  const process = [
    { step: "1", title: "Immediate Response", desc: "Call us 24/7. We arrive promptly to begin arrangements." },
    { step: "2", title: "Church Coordination", desc: "We liaise with your parish for mass scheduling and priest." },
    { step: "3", title: "Wake & Vigil", desc: "1-3 day wake with prayers, rosary, and family visitation." },
    { step: "4", title: "Funeral Mass & Committal", desc: "Church service followed by cremation or burial." },
  ];

  const whyChooseUs = [
    { icon: Church, title: "Parish Coordination", desc: "We work with Catholic churches across Singapore" },
    { icon: Heart, title: "Respectful Service", desc: "Deep understanding of Catholic funeral rites" },
    { icon: Shield, title: "All-Inclusive Packages", desc: "Clear pricing with no hidden costs" },
    { icon: Clock, title: "24/7 Support", desc: "Available whenever you need assistance" },
  ];

  const faqItems = [
    {
      id: "mass",
      question: "How do you coordinate with the church for funeral mass?",
      answer: "We contact your parish directly to arrange the funeral mass, coordinate with the priest, and handle all scheduling. If you don't have a regular parish, we can recommend churches that accommodate funeral services.",
    },
    {
      id: "vigil",
      question: "What happens during the wake vigil?",
      answer: "The Catholic wake typically includes rosary prayers, scripture readings, and time for family and friends to pay respects. We arrange for prayer leaders and ensure the wake reflects Catholic traditions with proper altar setup.",
    },
    {
      id: "cremation",
      question: "Does the Catholic Church allow cremation?",
      answer: "Yes, the Catholic Church permits cremation, though it prefers burial. If cremation is chosen, the ashes should be kept in a sacred place (columbarium) and not scattered. We can advise on Church-approved options.",
    },
    {
      id: "timing",
      question: "How long does a Catholic funeral take to arrange?",
      answer: "Typically 3-5 days to allow for proper church coordination and family gathering. We work efficiently while ensuring all liturgical requirements are met. Urgent cases can be accommodated.",
    },
    {
      id: "cost",
      question: "What is included in your Catholic funeral packages?",
      answer: "Our packages include wake setup, church mass coordination, casket, flowers, transportation, and all logistics. Contact us for a detailed quotation based on your specific needs—no obligation.",
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
              <span>Roman Catholic Funeral Services</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-6">
                Roman Catholic Funeral Services in Singapore
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Complete Catholic funeral services with church coordination, vigil prayers, and proper 
                religious rites. We ensure your loved one receives a dignified Catholic farewell. 
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
                <Church className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">All Parishes Covered</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4 text-center">
                Complete Catholic Funeral Services
              </h2>
              <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                From vigil to committal, we handle every aspect of Catholic funeral arrangements with reverence.
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
              The Catholic Funeral Process
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
              Need Help Arranging a Catholic Funeral?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              We're here 24/7 to guide you with compassion and expertise.
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
                Let Us Help You Honor Your Loved One
              </h2>
              <p className="text-slate-600 mb-8">
                Contact us for a free consultation. We'll guide you through the Catholic funeral 
                process with compassion and care.
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

export default RomanCatholic;
