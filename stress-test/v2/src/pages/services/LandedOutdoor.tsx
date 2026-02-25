import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import outdoorSetup from "@/assets/outdoor-traditional-setup.jpg";
import tentSetup from "@/assets/tent-funeral-setup.jpg";
import traditionalSetup from "@/assets/traditional-funeral-tent.jpg";

const LandedOutdoor = () => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24">
        <section className="py-12 bg-grad-calm">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600 mb-4">
              <Link to="/services" className="hover:text-gold">Services</Link> / Landed Property & Outdoor Setups
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              Landed Property & Outdoor Professional Set-ups
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Elegant funeral arrangements at private homes and outdoor spaces across Singapore
            </p>
          </div>
        </section>

        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-ink mb-6">Spacious, Personal Settings</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Honor your loved one in the comfort of your own home or garden. Our professional team 
                specializes in creating elegant, dignified funeral setups at landed properties and outdoor 
                spaces, handling everything from permits to teardown.
              </p>

              <h3 className="text-2xl font-heading font-semibold text-ink mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Custom tent and canopy structures (weather-protected)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Professional altar and seating arrangements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Premium drapery and floral design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Sound system and lighting setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Full setup and teardown coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Compliance with estate and municipal requirements</span>
                </li>
              </ul>

              <div className="bg-dove p-6 rounded-xl mb-8">
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">Benefits of Landed/Outdoor Funerals:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• More spacious and comfortable for large gatherings</li>
                  <li>• Personal, intimate setting in familiar surroundings</li>
                  <li>• Flexibility in setup and customization</li>
                  <li>• No venue booking conflicts or time constraints</li>
                  <li>• Suitable for all religious and cultural traditions</li>
                </ul>
              </div>

              {/* Image Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={outdoorSetup} alt="Traditional outdoor funeral setup with elaborate altar" className="w-full h-64 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={tentSetup} alt="Professional tent funeral arrangement" className="w-full h-64 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={traditionalSetup} alt="Buddhist funeral tent setup" className="w-full h-64 object-cover" />
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

export default LandedOutdoor;
