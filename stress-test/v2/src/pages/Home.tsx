import { MessageCircle, CheckCircle, Heart, Shield, Clock, Users, Star, ArrowRight, Phone, ThumbsUp, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hindu-funeral-1.jpeg";
import hinduImage2 from "@/assets/hindu-funeral-2.jpeg";
import hinduImage3 from "@/assets/hindu-funeral-3.jpeg";
import hinduImage4 from "@/assets/hindu-funeral-4.jpeg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQAccordion from "@/components/FAQAccordion";

const Home = () => {
  const whatsappBase = "https://wa.me/6596875688?text=";
  const whatsappGeneral = `${whatsappBase}${encodeURIComponent("Hi, I need assistance with funeral services.")}`;
  const whatsappUrgent = `${whatsappBase}${encodeURIComponent("Hi, I need immediate assistance. Someone has just passed away.")}`;

  const services = [
    {
      title: "Hindu / Indian Funeral",
      description: "Traditional Hindu funeral rites with proper Vedic ceremonies and experienced priests",
      link: "/services/hindu-indian",
      featured: true,
    },
    {
      title: "Roman Catholic Funeral",
      description: "Complete Catholic funeral with church coordination and proper sacraments",
      link: "/services/roman-catholic",
    },
    {
      title: "Christian Funeral",
      description: "Protestant Christian funeral services with pastoral care",
      link: "/services/christian",
    },
    {
      title: "Freethinker Funeral",
      description: "Non-religious, personalized celebration of life",
      link: "/services/freethinker",
    },
    {
      title: "Direct Cremation",
      description: "Simple, dignified cremation without a ceremony",
      link: "/services/direct-cremation",
    },
    {
      title: "Pet Cremation",
      description: "Compassionate farewell for your beloved pets",
      link: "/services/pet-cremation",
    },
  ];

  const urgencyStats = [
    { icon: Clock, value: "< 30 min", label: "Response Time" },
    { icon: Users, value: "500+", label: "Families Helped" },
    { icon: Star, value: "4.9★", label: "Google Rating" },
    { icon: ThumbsUp, value: "100%", label: "Satisfaction" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      desc: "We treat every family with empathy and respect.",
    },
    {
      icon: Shield,
      title: "Transparent Pricing",
      desc: "No hidden fees. Clear, upfront pricing always.",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      desc: "We're here whenever you need us, day or night.",
    },
    {
      icon: Users,
      title: "All Faiths Welcome",
      desc: "Experienced with Hindu, Christian, Catholic & more.",
    },
  ];

  const faqItems = [
    {
      id: "immediate",
      question: "What should I do when someone passes away?",
      answer: "Call or WhatsApp us immediately at 9687 5688. We respond within 30 minutes, 24/7. We'll guide you step-by-step—just have the deceased's NRIC ready. We handle collection, permits, venue, and everything else.",
    },
    {
      id: "pricing",
      question: "What are your pricing options?",
      answer: "Our pricing is transparent and varies based on the type of service and your requirements. We provide clear quotations with no hidden fees. Contact us for a personalized quote.",
    },
    {
      id: "faiths",
      question: "Do you handle Hindu/Indian funerals?",
      answer: "Yes, we specialize in Hindu and Indian funeral services with proper Vedic ceremonies, traditional rites, and experienced priests. We also serve all other faiths including Christian, Catholic, and Freethinker.",
    },
    {
      id: "repatriation",
      question: "Can you help with international repatriation?",
      answer: "Yes, we provide complete repatriation services for families who wish to transport their loved ones to India or other countries. We handle all documentation, embalming, and logistics.",
    },
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section - Enhanced */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-grad-calm overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-7 animate-slide-in-left">
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-500/15 border border-green-500/30 rounded-full text-sm font-bold text-green-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Online Now — Reply in 30 mins
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-ink leading-tight">
                Compassionate Funeral Services in Singapore
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                <strong>Indian Life Memorial</strong> provides dignified funeral services for all faiths. 
                <strong> 24/7 support</strong>, transparent pricing, and compassionate care when you need it most.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrgent}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg btn-lift shadow-lg animate-pulse-glow"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp Us Now</span>
                </a>
                <a
                  href="tel:+6596875688"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white rounded-2xl font-bold text-lg btn-lift shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 9687 5688</span>
                </a>
              </div>
              
              <p className="text-sm text-slate-500">
                ✓ Free consultation &nbsp;•&nbsp; ✓ No obligation &nbsp;•&nbsp; ✓ All faiths welcome
              </p>
            </div>

            {/* Hero Image Grid */}
            <div className="relative animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-elevated">
                    <img
                      src={heroImage}
                      alt="Professional funeral setup Singapore"
                      className="w-full h-48 md:h-64 object-cover"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-gentle">
                    <img
                      src={hinduImage3}
                      alt="Traditional ceremony"
                      className="w-full h-32 md:h-40 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden shadow-gentle">
                    <img
                      src={hinduImage2}
                      alt="Funeral arrangements"
                      className="w-full h-32 md:h-40 object-cover"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-elevated">
                    <img
                      src={hinduImage4}
                      alt="Memorial service"
                      className="w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Review Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-72 bg-paper rounded-2xl shadow-elevated p-4 border border-primary/10 animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-paper flex items-center justify-center text-xs font-bold text-primary">
                        {["R", "S", "P"][i]}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Trusted by 500+ families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-8 border-t border-primary/10">
            {urgencyStats.map((stat, idx) => (
              <div key={idx} className={`text-center stagger-${idx + 1}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-ink">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar - Cards */}
      <section className="py-10 bg-paper border-b border-dove">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-5 bg-dove rounded-2xl card-hover stagger-${idx + 1}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-ink">{feature.title}</p>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced Cards */}
      <section className="py-16 md:py-20 bg-dove" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-ink mb-4">
              Funeral Services for All Faiths
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive funeral services tailored to your faith and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className={`relative bg-paper rounded-3xl p-8 shadow-card card-hover group overflow-hidden ${
                  service.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3" /> Popular
                  </div>
                )}
                <h3 className="text-xl font-heading font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services/pre-planning"
              className="inline-flex items-center gap-2 text-primary hover:text-ink font-bold text-lg transition-colors"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Steps */}
      <section className="py-16 md:py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink mb-4">
              How We Can Help You
            </h2>
            <p className="text-lg text-slate-600">
              One call or message—we handle everything with care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Contact Us", desc: "Call or WhatsApp us anytime. We respond within 30 minutes, 24/7.", icon: Phone },
              { step: "2", title: "We Guide You", desc: "Our team handles collection, permits, venue, and all arrangements.", icon: Shield },
              { step: "3", title: "Peaceful Farewell", desc: "We ensure a dignified ceremony honoring your loved one.", icon: Heart },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-dove rounded-3xl p-8 text-center card-hover h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="absolute top-6 right-6 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="text-center mt-12">
            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg btn-lift shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Start Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA - Dramatic */}
      <section className="py-16 md:py-24 bg-deep text-deep-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Need Immediate Help?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're available 24/7. Contact us now for compassionate guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrgent}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-[#25D366] text-white rounded-2xl font-bold text-xl btn-lift shadow-xl"
              >
                <MessageCircle className="w-7 h-7" />
                WhatsApp Us Now
              </a>
              <a
                href="tel:+6596875688"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-paper text-ink rounded-2xl font-bold text-xl btn-lift shadow-xl"
              >
                <Phone className="w-7 h-7" />
                Call 9687 5688
              </a>
            </div>
            
            <p className="text-sm mt-6 opacity-70">
              Average response: under 30 minutes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-16 md:py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Questions?
            </span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
          <div className="text-center mt-10">
            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold btn-lift"
            >
              <MessageCircle className="w-5 h-5" />
              Ask Us Anything
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default Home;
