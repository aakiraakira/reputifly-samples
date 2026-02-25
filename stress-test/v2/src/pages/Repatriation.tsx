import { Plane, FileText, Phone, MessageCircle, CheckCircle } from "lucide-react";
import repatriationImage from "@/assets/elegant-funeral-setup.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Repatriation = () => {
  const sendingServices = [
    "Embassy liaison and documentation",
    "Death certificate and permit arrangements",
    "Embalming and body preparation to international standards",
    "Zinc-lined coffin (airline-approved)",
    "Flight booking and cargo coordination",
    "Customs clearance assistance",
    "Receiving agent coordination in destination country",
    "Family support and updates throughout the process",
  ];

  const importingServices = [
    "Coordination with overseas funeral home",
    "Singapore customs and NEA permits",
    "Arrival handling and clearance",
    "Transfer to parlour or home",
    "Local funeral rites arrangement (all faiths)",
    "Cremation or burial coordination",
    "Family liaison and support",
  ];

  const requiredDocuments = [
    "Original Death Certificate or CCOD",
    "Deceased's passport and NRIC",
    "Next-of-kin NRIC and passport",
    "Embalming certificate (if applicable)",
    "Airline cargo booking confirmation",
    "Receiving country's import permits",
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20 pb-24 md:pb-32">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-grad-calm">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink leading-tight">
                  International Repatriation Services
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Compassionate, professional handling of international funeral logistics. 
                  Whether sending your loved one home or bringing them to Singapore, 
                  we manage every detail with care.
                </p>
                <div className="flex flex-wrap gap-3">
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

              <div className="relative">
                <img
                  src={repatriationImage}
                  alt="Professional funeral repatriation coordination team"
                  className="w-full h-auto rounded-2xl shadow-hover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Two Main Services */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Sending */}
              <article className="bg-dove rounded-2xl p-8 shadow-gentle">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 rounded-full mb-6">
                  <Plane className="w-7 h-7 text-gold" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4">
                  International Repatriation
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Sending your loved one to their home country
                </p>

                <h3 className="text-lg font-semibold text-ink mb-4">
                  Our Services Include:
                </h3>
                <ul className="space-y-3 mb-8">
                  {sendingServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-paper p-4 rounded-lg mb-6">
                  <p className="text-sm text-slate-600">
                    <strong>Countries we serve:</strong> China, India, Indonesia, Malaysia, Philippines, 
                    Myanmar, Vietnam, Thailand, Bangladesh, Sri Lanka, and more. Contact us for your 
                    specific destination.
                  </p>
                </div>

                <a
                  href="tel:+6581275655"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                >
                  Request Repatriation Quote
                </a>
              </article>

              {/* Importing */}
              <article className="bg-dove rounded-2xl p-8 shadow-gentle">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-full mb-6">
                  <Plane className="w-7 h-7 text-accent-foreground transform scale-x-[-1]" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink mb-4">
                  International Importing to Singapore
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Bringing your loved one to Singapore for final rites
                </p>

                <h3 className="text-lg font-semibold text-ink mb-4">
                  Our Services Include:
                </h3>
                <ul className="space-y-3 mb-8">
                  {importingServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-paper p-4 rounded-lg mb-6">
                  <p className="text-sm text-slate-600">
                    <strong>Full support:</strong> We coordinate with overseas funeral homes and 
                    handle all Singapore customs, permits, and local funeral arrangements.
                  </p>
                </div>

                <a
                  href="tel:+6581275655"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-ink rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                >
                  Discuss Import Arrangements
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-dove">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 rounded-full mb-4">
                  <FileText className="w-7 h-7 text-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
                  Required Documents
                </h2>
                <p className="text-lg text-slate-600">
                  Typical documents needed for international repatriation
                </p>
              </div>

              <div className="bg-paper rounded-2xl p-8 shadow-gentle">
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-dove rounded-lg">
                  <p className="text-sm text-slate-600">
                    <strong>Note:</strong> Requirements vary by destination country. 
                    Our team will provide a complete checklist specific to your case and 
                    assist in obtaining all necessary documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
                Typical Repatriation Timeline
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                We work urgently to expedite the process while ensuring all requirements are met.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-dove p-6 rounded-xl">
                  <div className="text-3xl font-bold text-gold mb-2">1-2</div>
                  <div className="text-sm text-slate-600">
                    Days for documentation & embalming
                  </div>
                </div>
                <div className="bg-dove p-6 rounded-xl">
                  <div className="text-3xl font-bold text-gold mb-2">2-3</div>
                  <div className="text-sm text-slate-600">
                    Days for permits & embassy clearance
                  </div>
                </div>
                <div className="bg-dove p-6 rounded-xl">
                  <div className="text-3xl font-bold text-gold mb-2">1-2</div>
                  <div className="text-sm text-slate-600">
                    Days for flight booking & cargo
                  </div>
                </div>
                <div className="bg-dove p-6 rounded-xl">
                  <div className="text-3xl font-bold text-gold mb-2">5-7</div>
                  <div className="text-sm text-slate-600">
                    Total days (typical timeframe)
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-slate-600 max-w-2xl mx-auto">
                Actual timelines depend on destination country requirements, embassy processing times, 
                and flight availability. We provide regular updates throughout the process.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-deep text-deep-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Dedicated Repatriation Specialists Are On Standby
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Call us now to discuss your international repatriation needs. 
              We handle all complexities with compassion and professionalism.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+6581275655"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-paper rounded-full font-semibold text-lg hover:-translate-y-1 transition-calm shadow-gentle hover:shadow-hover"
              >
                <Phone className="w-5 h-5" />
                <span>Call 8127 5655</span>
              </a>
              <a
                href="https://wa.me/6581275655"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-paper text-ink rounded-full font-semibold text-lg hover:-translate-y-1 transition-calm shadow-gentle hover:shadow-hover"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default Repatriation;
