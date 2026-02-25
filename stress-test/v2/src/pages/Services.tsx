import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Services = () => {
  const services = [
    {
      id: "full-suite",
      title: "Full Suite Funeral Services",
      description: "Comprehensive end-to-end funeral management for all faiths and traditions",
      link: "/services/full-suite",
      details: [
        "Complete coordination from collection to final arrangements",
        "All religious and non-religious ceremonies",
        "Professional setup at any venue type",
        "Permit handling and NEA coordination",
        "Family liaison and 24/7 support",
      ],
    },
    {
      id: "landed-outdoor",
      title: "Landed Property & Outdoor Professional Set-ups",
      description: "Elegant funeral arrangements at private homes and outdoor spaces",
      link: "/services/landed-outdoor",
      details: [
        "Custom tent and canopy structures",
        "Professional altar and seating arrangements",
        "Premium drapery and floral design",
        "Sound system and lighting",
        "Full setup and teardown coordination",
        "Compliance with estate and municipal requirements",
      ],
    },
    {
      id: "caskets",
      title: "Full Range of Quality Caskets",
      description: "Premium and budget-friendly casket options in various styles",
      link: "/services/caskets",
      details: [
        "Solid wood caskets (mahogany, oak, teak)",
        "Polished caskets with satin or velvet lining",
        "Simple caskets for cremation",
        "Eco-friendly and biodegradable options",
        "Customization available (engravings, finishes)",
      ],
    },
    {
      id: "parlours",
      title: "Funeral Parlours (Official Partners)",
      description: "Access to premier funeral parlours across Singapore",
      link: "/services/parlours",
      details: [
        "Strategic locations island-wide",
        "Climate-controlled facilities",
        "Private family rooms",
        "Professional staff on-site",
        "Catering and AV facilities available",
        "Parking and accessibility",
      ],
      partnersNote: "We work with trusted parlour partners to ensure comfort and dignity.",
    },
    {
      id: "columbarium",
      title: "Columbarium Services (Official Partners)",
      description: "Guidance and arrangement for ash placement in reputable columbariums",
      link: "/services/columbarium",
      details: [
        "Consultation on columbarium options",
        "Booking and reservation assistance",
        "Niche selection guidance",
        "Transfer and placement coordination",
        "Annual memorial service arrangements",
      ],
      partnersNote: "Official partnerships with government and private columbariums.",
    },
    {
      id: "will-estate",
      title: "Will Writing & Estate Planning",
      description: "Professional referral and coordination for estate matters",
      link: "/services/will-estate",
      details: [
        "Referral to trusted legal partners",
        "Will drafting and estate planning support",
        "Executor appointment guidance",
        "Asset distribution advice",
        "CPF nomination assistance",
      ],
    },
    {
      id: "pre-planning",
      title: "Funeral Pre-Planning",
      description: "Plan ahead to ease the burden on your loved ones",
      link: "/services/pre-planning",
      details: [
        "Personal consultation to discuss preferences",
        "Package selection and customization",
        "Pre-payment options with price guarantee",
        "Documentation and wishes recording",
        "Peace of mind for you and your family",
      ],
    },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20 pb-24 md:pb-32">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-grad-calm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              Complete Funeral Services & Professional Set-ups
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From intimate home arrangements to grand outdoor ceremonies, we provide every service
              needed to honor your loved one with dignity and care.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="bg-paper rounded-2xl p-6 md:p-8 shadow-gentle hover:shadow-hover transition-calm"
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-3">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    {service.description}
                  </p>

                  <h3 className="text-lg font-semibold text-ink mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {service.partnersNote && (
                    <div className="bg-dove p-4 rounded-lg">
                      <p className="text-sm text-slate-600">
                        <strong>Note:</strong> {service.partnersNote}
                      </p>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="tel:+6581275655"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                    >
                      Call to Discuss
                    </a>
                    <a
                      href="https://wa.me/6581275655"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-ink rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Repatriation Callout */}
            <div className="mt-12 max-w-5xl mx-auto bg-deep text-deep-foreground rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                International Repatriation & Importing
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Need to send your loved one overseas or bring them to Singapore? 
                We manage all international funeral logistics.
              </p>
              <Link
                to="/repatriation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
              >
                Learn About Repatriation
              </Link>
            </div>

            {/* Pre-Planning Callout */}
            <div className="mt-8 max-w-5xl mx-auto bg-dove rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4">
                Plan Ahead for Peace of Mind
              </h2>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                Pre-planning your funeral arrangements removes the burden from your family and ensures
                your wishes are honored.
              </p>
              <Link
                to="/services/pre-planning"
                className="inline-block px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
              >
                Schedule a Pre-Planning Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default Services;
