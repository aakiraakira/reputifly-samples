import { Award, Heart, Shield, Users, Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every family with empathy, patience, and genuine care during their most difficult moments.",
    },
    {
      icon: Users,
      title: "Cultural Sensitivity",
      description: "Deep understanding of Hindu, Christian, Catholic, and other religious traditions and customs.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear, upfront pricing with no hidden fees. You'll always know exactly what you're paying for.",
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Experienced team handling every detail with precision, dignity, and respect.",
    },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20 pb-24 md:pb-32">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-grad-calm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
                About Indian Life Memorial
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Providing compassionate and culturally sensitive funeral services in Singapore. 
                We honor every life with dignity, respect, and care.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink text-center mb-8">
                Our Commitment to You
              </h2>
              
              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p>
                  Indian Life Memorial was founded with a simple mission: to provide families with 
                  compassionate, professional funeral services that honor their loved ones and 
                  respect their cultural traditions.
                </p>
                <p>
                  We understand that losing a loved one is one of life's most difficult experiences. 
                  That's why our dedicated team is available 24/7 to guide you through every step 
                  of the funeral process with care and sensitivity.
                </p>
                <p>
                  Our team has extensive experience with Hindu and Indian funeral traditions, as well 
                  as Roman Catholic, Christian, Freethinker, and other services. We work closely with 
                  religious leaders and families to ensure every ceremony is meaningful and authentic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-dove">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
                Our Values
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Four pillars guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-paper p-6 rounded-xl shadow-gentle text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-paper">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink text-center mb-12">
                Get In Touch
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dove p-8 rounded-xl">
                  <h3 className="text-xl font-heading font-semibold text-ink mb-6">Contact Details</h3>
                  <div className="space-y-4">
                    <a href="tel:+6596875688" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-calm">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+65 9687 5688</span>
                    </a>
                    <a href="tel:+6589608794" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-calm">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+65 8960 8794</span>
                    </a>
                    <a href="mailto:admin@indianlifememorial.com" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-calm">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>admin@indianlifememorial.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-slate-600">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>68 Circular Rd, #02-01<br />Singapore 049422</span>
                    </div>
                  </div>
                </div>

                <div className="bg-dove p-8 rounded-xl">
                  <h3 className="text-xl font-heading font-semibold text-ink mb-6">Operating Hours</h3>
                  <p className="text-slate-600 mb-4">
                    <strong className="text-ink">24/7 Availability</strong><br />
                    We are available around the clock for immediate assistance.
                  </p>
                  <p className="text-slate-600">
                    <strong className="text-ink">Service Area</strong><br />
                    All of Singapore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-deep text-deep-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              We're Here For You
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us anytime for compassionate guidance and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+6596875688"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-full font-semibold text-lg hover:-translate-y-1 transition-calm shadow-gentle hover:shadow-hover"
              >
                <Phone className="w-5 h-5" />
                <span>Call 9687 5688</span>
              </a>
              <a
                href="https://wa.me/6596875688"
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

export default About;
