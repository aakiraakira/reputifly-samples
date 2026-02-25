import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import casketCollection from "@/assets/casket-collection.jpg";
import whiteCasket from "@/assets/white-casket-flowers.jpg";

const Caskets = () => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24">
        <section className="py-12 bg-grad-calm">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600 mb-4">
              <Link to="/services" className="hover:text-gold">Services</Link> / Quality Caskets
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              Full Range of Quality Caskets
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Premium and budget-friendly casket options in various styles and finishes
            </p>
          </div>
        </section>

        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-ink mb-6">Dignified Final Resting</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Choose from our extensive collection of caskets, from elegant solid wood to simple 
                cremation options. Every casket in our range meets the highest quality standards 
                and is presented with dignity and care.
              </p>

              <h3 className="text-2xl font-heading font-semibold text-ink mb-4">Our Casket Selection:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600"><strong>Solid Wood Caskets</strong> – Mahogany, oak, teak with premium finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600"><strong>Polished Caskets</strong> – Satin or velvet lining for elegant presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600"><strong>Simple Caskets</strong> – Dignified, budget-friendly options for cremation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600"><strong>Eco-friendly Options</strong> – Biodegradable materials for green burials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600"><strong>Customization Available</strong> – Engravings, special finishes, personal touches</span>
                </li>
              </ul>

              <div className="bg-dove p-6 rounded-xl mb-8">
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">Choosing the Right Casket:</h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Our team will guide you through the selection process based on:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Budget and transparent pricing</li>
                  <li>• Religious or cultural preferences</li>
                  <li>• Cremation vs. burial requirements</li>
                  <li>• Personal style and wishes of the deceased</li>
                  <li>• Environmental considerations</li>
                </ul>
              </div>

              {/* Image Gallery */}
              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={casketCollection} alt="Wide selection of quality caskets in different styles and finishes" className="w-full h-80 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={whiteCasket} alt="Elegant white casket with floral arrangements" className="w-full h-80 object-cover" />
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

export default Caskets;
