import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Thank you. Our 24/7 care team will contact you shortly.");
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      
      <main className="pt-20 pb-24 md:pb-32">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-grad-calm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We're here 24/7 to provide compassionate support. Reach out to us anytime.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+6596875688"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:-translate-y-1 transition-calm shadow-gentle hover:shadow-hover"
              >
                <Phone className="w-6 h-6" />
                <span>Call 9687 5688</span>
              </a>
              <a
                href="https://wa.me/6596875688"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:-translate-y-1 transition-calm shadow-gentle hover:shadow-hover"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-dove p-8 rounded-xl shadow-gentle">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-ink mb-1">24/7 Hotlines</p>
                        <a href="tel:+6596875688" className="text-lg font-bold text-primary hover:text-ink transition-calm block">
                          9687 5688
                        </a>
                        <a href="tel:+6589608794" className="text-lg font-bold text-primary hover:text-ink transition-calm block">
                          8960 8794
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-ink mb-1">WhatsApp</p>
                        <a
                          href="https://wa.me/6596875688"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-ink transition-calm"
                        >
                          +65 9687 5688
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-ink mb-1">Email</p>
                        <a
                          href="mailto:admin@indianlifememorial.com"
                          className="text-slate-600 hover:text-primary transition-calm"
                        >
                          admin@indianlifememorial.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-ink mb-1">Address</p>
                        <p className="text-slate-600">
                          68 Circular Rd, #02-01<br />
                          Singapore 049422
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-ink mb-1">Operating Hours</p>
                        <p className="text-slate-600">
                          <strong>24/7</strong> Immediate Assistance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="bg-dove p-8 rounded-xl shadow-gentle space-y-6">
                  <h2 className="text-2xl font-heading font-bold text-ink mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-600 mb-6">
                    We'll get back to you as soon as possible.
                  </p>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-paper focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-paper focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-paper focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-paper focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:-translate-y-0.5 transition-calm shadow-gentle"
                  >
                    Send Message
                  </button>
                </form>
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

export default Contact;
