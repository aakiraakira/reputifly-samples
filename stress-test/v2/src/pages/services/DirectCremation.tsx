import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const DirectCremation = () => {
  const inclusions = ["Collection and transfer", "Body preparation", "Simple casket", "Cremation booking", "Permit handling", "Ashes collection"];
  return (
    <><Header /><main className="pt-20 pb-24">
      <section className="py-12 bg-grad-calm"><div className="container mx-auto px-4">
        <nav className="text-sm text-slate-600 mb-4"><Link to="/" className="hover:text-primary">Home</Link> / Direct Cremation</nav>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">Direct Cremation Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl">Simple, dignified cremation without a ceremony.</p>
      </div></section>
      <section className="py-16 bg-paper"><div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-ink mb-6">Affordable Direct Cremation</h2>
        <ul className="space-y-3 mb-8">{inclusions.map((item, idx) => (<li key={idx} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span className="text-slate-600">{item}</span></li>))}</ul>
        <div className="flex flex-wrap gap-4"><a href="tel:+6596875688" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold"><Phone className="w-5 h-5" />Call 9687 5688</a><a href="https://wa.me/6596875688" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold"><MessageCircle className="w-5 h-5" />WhatsApp Us</a></div>
      </div></section>
    </main><Footer /><MobileBottomBar /></>
  );
};
export default DirectCremation;
