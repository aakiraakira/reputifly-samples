import { CheckCircle, Phone, MessageCircle, Star, Clock, Shield, FileText, ArrowRight, Scale, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQAccordion from "@/components/FAQAccordion";

const WillEstate = () => {
  const whatsappLink = `https://wa.me/6596875688?text=${encodeURIComponent("Hi, I'd like to learn about will writing and estate planning services.")}`;

  const services = [
    "Referral to trusted estate lawyers",
    "Will drafting consultation",
    "Executor appointment guidance",
    "Asset distribution planning",
    "CPF nomination assistance",
    "LPA (Lasting Power of Attorney) coordination",
    "Funeral pre-planning coordination",
    "Family trust setup referrals",
  ];

  const benefits = [
    { icon: Scale, title: "Legal Protection", desc: "Ensure your will is valid under Singapore law" },
    { icon: Users, title: "Family Clarity", desc: "Prevent disputes with clear documentation" },
    { icon: Shield, title: "Asset Protection", desc: "Your assets go exactly where you want" },
    { icon: FileText, title: "Complete Planning", desc: "Coordinate will with funeral wishes" },
  ];

  const process = [
    { step: "1", title: "Initial Consultation", desc: "Discuss your estate planning needs with us." },
    { step: "2", title: "Lawyer Referral", desc: "We connect you with trusted estate lawyers." },
    { step: "3", title: "Will Drafting", desc: "Work with the lawyer to draft your will." },
    { step: "4", title: "Coordinate Plans", desc: "Link your will with funeral pre-planning." },
  ];

  const faqItems = [
    {
      id: "need",
      question: "Do I need a will in Singapore?",
      answer: "Without a will, your estate is distributed according to the Intestate Succession Act, which may not align with your wishes. A will ensures your assets go to exactly who you want, and you can appoint guardians for minor children.",
    },
    {
      id: "lawyer",
      question: "Do I need a lawyer to write a will?",
      answer: "While not legally required, a lawyer ensures your will is valid, clear, and enforceable. DIY wills often have issues that cause problems later. We refer you to experienced, affordable estate lawyers.",
    },
    {
      id: "cpf",
      question: "What about my CPF savings?",
      answer: "CPF savings are NOT covered by your will. You need a separate CPF nomination to specify beneficiaries. We help coordinate this alongside your will and funeral planning.",
    },
    {
      id: "cost",
      question: "How much does will writing cost?",
      answer: "Simple wills in Singapore typically range from $200-$500 through our partner lawyers. More complex estates may cost more. We provide referrals to affordable, reputable professionals.",
    },
    {
      id: "update",
      question: "When should I update my will?",
      answer: "Update your will after major life events: marriage, divorce, children, property purchase, or significant asset changes. We recommend reviewing it every 3-5 years.",
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
              <span>Will Writing & Estate Planning</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-6">
                Will Writing & Estate Planning in Singapore
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Secure your legacy and protect your family's future. We connect you with trusted 
                legal partners for comprehensive estate planning, wills, and asset distribution.
                <strong> Free initial consultation available.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:-translate-y-1 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Started Today
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
                <Scale className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">Trusted Legal Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-ink">Comprehensive Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium text-ink">500+ Families Served</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-10 text-center">
              Why Estate Planning Matters
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
                Our Estate Planning Support
              </h2>
              <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                We guide you through the process and connect you with the right professionals.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {services.map((item, idx) => (
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
              How It Works
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
              Ready to Secure Your Legacy?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Free consultation to discuss your estate planning needs.
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

        {/* Related Services */}
        <section className="py-12 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-heading font-semibold text-ink mb-4">
                Complete Your Planning
              </h3>
              <p className="text-slate-600 mb-6">
                Combine will writing with funeral pre-planning for complete peace of mind.
              </p>
              <Link
                to="/services/pre-planning"
                className="inline-flex items-center gap-2 text-primary hover:text-ink font-semibold transition-colors"
              >
                Learn About Funeral Pre-Planning <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-dove">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4">
                Protect Your Family's Future
              </h2>
              <p className="text-slate-600 mb-8">
                Contact us for a free consultation. We'll help you get started 
                with proper estate planning and connect you with trusted professionals.
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
                ✓ No obligation &nbsp;•&nbsp; ✓ Trusted legal partners &nbsp;•&nbsp; ✓ Comprehensive planning
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

export default WillEstate;
