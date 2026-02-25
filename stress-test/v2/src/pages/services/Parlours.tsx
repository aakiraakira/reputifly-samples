import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import memorialSetup from "@/assets/memorial-table-setup.jpg";
import elegantSetup from "@/assets/elegant-funeral-setup.jpg";

const Parlours = () => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24">
        <section className="py-12 bg-grad-calm">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600 mb-4">
              <Link to="/services" className="hover:text-gold">Services</Link> / Funeral Parlours
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              Funeral Parlours (Official Partners)
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Access to premier funeral parlours across Singapore with professional facilities
            </p>
          </div>
        </section>

        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-ink mb-6">Professional Parlour Facilities</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Through our official partnerships with trusted funeral parlours island-wide, we provide 
                families with access to premium, climate-controlled facilities for comfortable wake 
                arrangements and memorial services.
              </p>

              <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Parlour Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Strategic locations island-wide for easy access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Climate-controlled facilities for comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Private family rooms for quiet reflection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Professional staff on-site throughout</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Catering and AV facilities available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Ample parking and accessibility features</span>
                </li>
              </ul>

              <div className="bg-dove p-6 rounded-xl mb-8">
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">Benefits of Parlour Wakes:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• No weather concerns – fully sheltered</li>
                  <li>• Professional ambiance and facilities</li>
                  <li>• Available 24/7 with security</li>
                  <li>• Suitable for all wake durations (1, 3, or 5 days)</li>
                  <li>• Multiple rooms available for large families</li>
                </ul>
                <p className="text-sm text-slate-600 mt-4">
                  <strong>Note:</strong> We work with trusted parlour partners across Singapore to ensure 
                  comfort and dignity. Parlour fees are quoted separately from our service packages.
                </p>
              </div>

              {/* Image Gallery */}
              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={memorialSetup} alt="Memorial table setup in funeral parlour" className="w-full h-80 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={elegantSetup} alt="Elegant funeral parlour setup with casket and flowers" className="w-full h-80 object-cover" />
                </div>
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

export default Parlours;
