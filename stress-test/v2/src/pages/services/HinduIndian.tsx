import { CheckCircle, Phone, MessageCircle, Star, Clock, Users, Shield, Heart, ArrowRight, Flame, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQAccordion from "@/components/FAQAccordion";
import hinduImage1 from "@/assets/hindu-funeral-1.jpeg";
import hinduImage2 from "@/assets/hindu-funeral-2.jpeg";
import hinduImage3 from "@/assets/hindu-funeral-3.jpeg";
import hinduImage4 from "@/assets/hindu-funeral-4.jpeg";

const HinduIndian = () => {
  const whatsappLink = `https://wa.me/6596875688?text=${encodeURIComponent("Hi, I need assistance with Hindu/Indian funeral services.")}`;

  const inclusions = [
    "Traditional Hindu funeral rites and Vedic ceremonies",
    "Experienced Hindu priest (Pandit) arrangement",
    "Sacred altar setup with proper religious items",
    "Traditional floral arrangements and garlands",
    "Professional embalming and body preparation",
    "Quality casket with traditional decorations",
    "Cremation coordination at Mandai Crematorium",
    "Transportation and hearse services",
    "Funeral tent and seating arrangements",
    "Sound system for prayers and hymns",
    "24/7 coordination and family support",
    "Post-funeral ceremony guidance",
  ];

  const process = [
    { step: "1", title: "Immediate Response", desc: "Call us 24/7. We arrive within 2 hours to begin arrangements.", icon: Phone },
    { step: "2", title: "Sacred Preparation", desc: "Body collection, traditional bathing, and dressing rituals.", icon: Flame },
    { step: "3", title: "Wake Ceremony", desc: "1-3 day wake with priest, prayers, and family gatherings.", icon: BookOpen },
    { step: "4", title: "Final Rites", desc: "Cremation at Mandai with full Hindu ceremony and ash collection.", icon: Heart },
  ];

  const whyChooseUs = [
    { icon: Flame, title: "Vedic Expertise", desc: "Authentic ceremonies following ancient Hindu traditions" },
    { icon: Users, title: "Experienced Pandits", desc: "Network of qualified priests for all Hindu ceremonies" },
    { icon: Shield, title: "Transparent Pricing", desc: "No hidden fees—clear packages from the start" },
    { icon: Clock, title: "24/7 Immediate Help", desc: "We're here the moment you need us most" },
    { icon: Award, title: "500+ Families Served", desc: "Trusted by the Indian community in Singapore" },
    { icon: Heart, title: "Compassionate Care", desc: "We treat your family as our own" },
  ];

  const aboutService = [
    {
      title: "Understanding Hindu Funeral Traditions",
      content: "Hindu funeral customs are deeply rooted in Vedic traditions that have been practiced for thousands of years. The ceremonies are designed to help the soul (Atman) transition peacefully to the next life. At Indian Life Memorial, we understand the sacred importance of performing these rites correctly and with complete devotion."
    },
    {
      title: "The Importance of Antyesti (Last Rites)",
      content: "Antyesti, the Hindu funeral rites, are considered one of the most important Samskaras (life ceremonies). These rituals include the sacred bathing, dressing in white, the funeral pyre or cremation, and the collection of ashes. We ensure every step is performed according to your family's traditions, whether North Indian, South Indian, or specific regional customs."
    },
    {
      title: "Supporting Your Family Through Grief",
      content: "Beyond the ceremonies, we provide guidance on the mourning period, the 13-day rituals, and the proper ways to honor your loved one's memory. Our team is here to support your family every step of the way, handling all logistics so you can focus on what matters most—being with family."
    },
  ];

  const faqItems = [
    {
      id: "traditions",
      question: "What Hindu funeral traditions do you follow?",
      answer: "We follow authentic Vedic funeral rites including the Antyesti (last sacrifice), with proper mantras, sacred fire rituals, and all traditional customs. Our priests are experienced in both North and South Indian traditions, including Tamil, Telugu, Malayalam, Kannada, Bengali, and Gujarati customs.",
    },
    {
      id: "timing",
      question: "How quickly can you arrange a Hindu funeral?",
      answer: "We understand Hindu tradition prefers cremation within 24 hours. We respond immediately and can arrange everything within hours. For cases requiring more time due to overseas family, we provide proper preservation while maintaining respect for traditions.",
    },
    {
      id: "cremation",
      question: "Where is the cremation performed?",
      answer: "Cremations are performed at Mandai Crematorium, Singapore's main cremation facility. We handle all bookings, permits, and logistics. The family can witness the final rites and collect ashes after the ceremony.",
    },
    {
      id: "pricing",
      question: "What is the cost of a Hindu funeral?",
      answer: "Our Hindu funeral packages are competitively priced with complete transparency. Contact us for a detailed quotation based on your specific requirements—no obligation, no hidden fees. We work with families of all budgets.",
    },
    {
      id: "ashes",
      question: "Can you help with ash scattering in the Ganges?",
      answer: "Yes, we can arrange for ashes to be transported to India for immersion in the Ganges or other sacred rivers. We handle all documentation, coordination with receiving parties, and ensure the sacred journey is completed with proper protocols.",
    },
    {
      id: "priest",
      question: "Do you provide Hindu priests?",
      answer: "Yes, we have a network of experienced and qualified Hindu priests (Pandits) who can conduct ceremonies in various traditions. Whether you need a priest for Tamil, Telugu, North Indian, or other regional customs, we can arrange the right pandit for your family.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20 pb-24">
        {/* Hero Section - Enhanced with Image */}
        <section className="py-12 md:py-20 bg-grad-calm overflow-hidden">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600 mb-6 animate-fade-in" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-primary font-medium">Hindu / Indian Funeral Services</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-6 animate-slide-in-left">
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-bold text-primary">
                  <Flame className="w-4 h-4" />
                  Traditional Vedic Funeral Experts
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink leading-tight">
                  Hindu & Indian Funeral Services in Singapore
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Authentic <strong>Hindu funeral ceremonies</strong> with proper Vedic rites and experienced priests. 
                  We honor your loved one according to sacred traditions. <strong>24/7 immediate assistance.</strong>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg btn-lift shadow-lg animate-pulse-glow"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us Now
                  </a>
                  <a
                    href="tel:+6596875688"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg btn-lift shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call 9687 5688
                  </a>
                </div>
                
                <p className="text-sm text-slate-500">
                  ✓ Free consultation &nbsp;•&nbsp; ✓ No obligation &nbsp;•&nbsp; ✓ All Hindu traditions
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative animate-slide-in-right">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={hinduImage1}
                    alt="Traditional Hindu funeral ceremony in Singapore"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 md:left-8 bg-paper rounded-2xl shadow-elevated p-4 border border-primary/10 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-gold fill-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-ink">500+ Families</p>
                      <p className="text-sm text-slate-600">Trusted Us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges - Enhanced */}
        <section className="py-8 bg-paper border-y border-dove">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {[
                { icon: Clock, text: "24/7 Immediate Response" },
                { icon: Star, text: "500+ Families Served", highlight: true },
                { icon: Shield, text: "Transparent Pricing" },
                { icon: Flame, text: "Vedic Traditions" },
              ].map((badge, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl ${
                    badge.highlight ? "bg-gold/10" : "bg-dove"
                  } stagger-${idx + 1}`}
                >
                  <badge.icon className={`w-5 h-5 ${badge.highlight ? "text-gold" : "text-primary"}`} />
                  <span className="text-sm font-semibold text-ink">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About This Service - SEO Rich Content */}
        <section className="py-16 md:py-20 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink mb-4">
                  Why Hindu Funeral Traditions Matter
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Understanding the sacred significance behind every ritual we perform
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                <div className="space-y-6">
                  {aboutService.map((item, idx) => (
                    <div key={idx} className={`stagger-${idx + 1}`}>
                      <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={hinduImage2}
                    alt="Hindu funeral altar setup"
                    className="rounded-2xl shadow-gentle w-full h-48 object-cover stagger-1"
                  />
                  <img
                    src={hinduImage3}
                    alt="Traditional Hindu ceremony"
                    className="rounded-2xl shadow-gentle w-full h-48 object-cover mt-8 stagger-2"
                  />
                  <img
                    src={hinduImage4}
                    alt="Hindu funeral arrangements"
                    className="rounded-2xl shadow-gentle w-full h-48 object-cover stagger-3"
                  />
                  <div className="bg-primary rounded-2xl p-6 flex flex-col justify-center items-center text-white mt-8 stagger-4">
                    <Flame className="w-10 h-10 mb-2" />
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm opacity-90">Always Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Included - Card Layout */}
        <section className="py-16 md:py-20 bg-dove">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  What's Included
                </span>
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink mb-4">
                  Complete Hindu Funeral Package
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Everything your family needs for a dignified traditional Hindu funeral
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inclusions.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 p-5 bg-paper rounded-2xl shadow-card card-hover"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-ink font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Unique Design */}
        <section className="py-16 md:py-20 bg-paper">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Our Process
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink mb-4">
                How We Guide Your Family
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                A clear, step-by-step process with support at every stage
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {process.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-dove rounded-3xl p-8 text-center card-hover h-full relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl mb-5 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="absolute top-6 right-6 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-ink mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Grid */}
        <section className="py-16 md:py-20 bg-dove">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink mb-4">
                Trusted by 500+ Indian Families
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                The Indian community's trusted funeral service provider in Singapore
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-paper rounded-3xl p-8 shadow-card card-hover text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-5">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ink mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA - Elegant */}
        <section className="py-16 md:py-20 bg-deep text-deep-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Our compassionate team is available 24/7 to guide you through this difficult time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg btn-lift shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Now
                </a>
                <a
                  href="tel:+6596875688"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-paper text-ink rounded-2xl font-bold text-lg btn-lift shadow-xl"
                >
                  <Phone className="w-6 h-6" />
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
                Common Questions
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Everything you need to know about Hindu funeral services
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* Final CTA - Warm */}
        <section className="py-16 md:py-20 bg-dove">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-paper rounded-3xl shadow-elevated p-8 md:p-12 text-center animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink mb-4">
                  Let Us Honor Your Loved One
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Contact us for a free, compassionate consultation. We're here to guide your family 
                  through this sacred journey with care and expertise.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg btn-lift shadow-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+6596875688"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg btn-lift shadow-lg"
                  >
                    <Phone className="w-6 h-6" />
                    Call 9687 5688
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> No obligation</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Transparent pricing</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> 24/7 support</span>
                </div>
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

export default HinduIndian;
