import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Columbarium = () => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24">
        <section className="py-12 bg-grad-calm">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600 mb-4">
              <Link to="/services" className="hover:text-gold">Services</Link> / Columbarium Services
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              Columbarium Services (Official Partners)
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Guidance and arrangement for ash placement in reputable columbariums across Singapore
            </p>
          </div>
        </section>

        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-ink mb-6">Peaceful Final Resting Place</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                After cremation, many families choose to place their loved one's ashes in a columbarium—a 
                dignified, permanent memorial space. We guide you through every step, from selecting the 
                right columbarium to coordinating the placement ceremony.
              </p>

              <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Our Columbarium Services:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Consultation on government and private columbarium options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Booking and reservation assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Niche selection guidance (location, size, pricing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Transfer and placement coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Annual memorial service arrangements</span>
                </li>
              </ul>

              <div className="bg-dove p-6 rounded-xl mb-8">
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">Columbarium Options in Singapore:</h3>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <p className="font-semibold mb-1">Government Columbariums:</p>
                    <p className="text-sm">Mandai Columbarium, Choa Chu Kang Columbarium – Affordable, public facilities maintained by NEA.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Private Columbariums:</p>
                    <p className="text-sm">Temple-based and commercial facilities across Singapore – Premium options with various amenities and locations.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Home Ash Storage:</p>
                    <p className="text-sm">Keeping ashes at home in a proper urn is also permitted in Singapore.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Sea Ash Scattering:</p>
                    <p className="text-sm">NEA-approved sea scattering for those who prefer returning ashes to nature.</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  <strong>Note:</strong> We have official partnerships with government and private columbariums, 
                  ensuring priority bookings and smooth coordination.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="tel:+6581275655"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-paper rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                >
                  <Phone className="w-5 h-5" />
                  Call 8127 5655
                </a>
                <a
                  href="https://wa.me/6581275655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-ink rounded-full font-semibold hover:-translate-y-0.5 transition-calm shadow-gentle"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
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

export default Columbarium;
