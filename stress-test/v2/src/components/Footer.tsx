import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/indian-life-memorial-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact (24/7)" },
  ];

  const services = [
    { to: "/services/hindu-indian", label: "Hindu / Indian Funeral" },
    { to: "/services/roman-catholic", label: "Roman Catholic Funeral" },
    { to: "/services/christian", label: "Christian Funeral" },
    { to: "/services/freethinker", label: "Freethinker Funeral" },
    { to: "/services/direct-cremation", label: "Direct Cremation" },
    { to: "/services/pre-planning", label: "Funeral Pre-Planning" },
    { to: "/services/will-estate", label: "Will Writing & Estate" },
    { to: "/services/pet-cremation", label: "Pet Cremation" },
    { to: "/services/baby-funeral", label: "Baby Funeral Services" },
    { to: "/repatriation", label: "Repatriation" },
  ];

  return (
    <footer className="bg-grad-dignity text-deep-foreground pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <img src={logo} alt="Indian Life Memorial" className="h-12 mb-3 brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-deep-foreground/80">
              Compassionate funeral services honoring all faiths and traditions. 24/7 support when you need us most.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-paper/10 hover:bg-paper/20 rounded-full transition-calm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-paper/10 hover:bg-paper/20 rounded-full transition-calm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-deep-foreground/80 hover:text-primary transition-calm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-sm text-deep-foreground/80 hover:text-primary transition-calm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">24/7 Assistance</h4>
            <div className="space-y-3">
              <a
                href="tel:+6596875688"
                className="flex items-center gap-3 text-sm hover:text-primary transition-calm"
              >
                <Phone className="w-5 h-5" />
                <span>9687 5688</span>
              </a>
              <a
                href="tel:+6589608794"
                className="flex items-center gap-3 text-sm hover:text-primary transition-calm"
              >
                <Phone className="w-5 h-5" />
                <span>8960 8794</span>
              </a>
              <a
                href="mailto:admin@indianlifememorial.com"
                className="flex items-center gap-3 text-sm hover:text-primary transition-calm"
              >
                <Mail className="w-5 h-5" />
                <span>admin@indianlifememorial.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-deep-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>68 Circular Rd, #02-01<br />Singapore 049422</span>
              </div>
              <p className="text-sm text-deep-foreground/80 leading-relaxed pt-2">
                <strong>24/7 Immediate Assistance</strong><br />
                Service Area: All of Singapore
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-paper/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-deep-foreground/70">
            <p>
              © {currentYear} Indian Life Memorial. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
