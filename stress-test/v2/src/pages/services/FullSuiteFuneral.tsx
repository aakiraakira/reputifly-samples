import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import buddhistSetup from "@/assets/buddhist-ceremony-setup.jpg";
import monkCeremony from "@/assets/buddhist-ceremony-monks.jpg";

const FullSuiteFuneral = () => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24">
        <section className="py-12 bg-grad-calm">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600 mb-4">
              <Link to="/services" className="hover:text-gold">Services</Link> / Full Suite Funeral Services
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              Full Suite Funeral Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Comprehensive end-to-end funeral management for all faiths and traditions
            </p>
          </div>
        </section>

        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-ink mb-6">Complete Funeral Coordination</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our Full Suite Funeral Services provide complete peace of mind during difficult times. 
                From the moment you contact us until the final farewell, our experienced team handles 
                every detail with compassion, professionalism, and respect for all traditions.
              </p>

              <h3 className="text-2xl font-heading font-semibold text-ink mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Complete coordination from collection to final arrangements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">All religious and non-religious ceremonies supported</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Professional setup at any venue type (HDB, Condo, Landed, Parlour)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Permit handling and NEA coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">24/7 family liaison and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-600">Coordination with religious officiants and celebrants</span>
                </li>
              </ul>

              <div className="bg-dove p-6 rounded-xl mb-8">
                <h3 className="text-xl font-heading font-semibold text-ink mb-3">Who This Service Is For:</h3>
                <p className="text-slate-600 leading-relaxed">
                  Families who want comprehensive support without worrying about details. Perfect for those 
                  managing complex family arrangements, coordinating overseas relatives, or simply wanting 
                  professional guidance through every step of the funeral process.
                </p>
              </div>

              {/* Image Gallery */}
              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={buddhistSetup} alt="Professional Buddhist funeral setup with traditional altar" className="w-full h-80 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-gentle">
                  <img src={monkCeremony} alt="Buddhist ceremony with monks and attendees" className="w-full h-80 object-cover" />
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
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dove text-ink rounded-full font-semibold hover:-translate-y-0.5 transition-calm"
                >
                  View Packages
                </Link>
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

export default FullSuiteFuneral;
