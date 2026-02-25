import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import ServiceDropdown from "./ServiceDropdown";
import logo from "@/assets/indian-life-memorial-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const whatsappGeneral = `https://wa.me/6596875688?text=${encodeURIComponent("Hi, I need assistance with funeral services.")}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-calm ${
          isScrolled ? "bg-paper/95 backdrop-blur-sm shadow-gentle" : "bg-paper"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="Indian Life Memorial Home">
              <img 
                src={logo} 
                alt="Indian Life Memorial - Funeral Services Singapore" 
                className="h-12 md:h-16 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-calm hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <ServiceDropdown />
            </nav>

            {/* Desktop CTA - WhatsApp Only */}
            <div className="hidden md:flex items-center">
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-calm shadow-gentle hover:shadow-hover hover:bg-[#20BD5A]"
                aria-label="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-ink hover:text-primary transition-calm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            className="fixed inset-0 bg-ink/30 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-paper shadow-hover animate-fade-in overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="p-6">
              {/* Main Navigation */}
              <div className="flex flex-col gap-2 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-calm ${
                      location.pathname === link.to
                        ? "bg-dove text-primary"
                        : "text-ink hover:bg-dove"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Services Dropdown */}
              <div className="border-t border-border pt-4">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-ink hover:bg-dove transition-calm"
                >
                  <span>Our Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <div className="mt-2 space-y-1 pl-4">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="block px-4 py-2.5 rounded-lg text-sm text-ink hover:bg-dove transition-calm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Sticky WhatsApp CTA */}
            <div className="sticky bottom-0 p-6 bg-dove border-t border-border">
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-white rounded-full font-bold text-base shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us Now</span>
              </a>
              <p className="text-xs text-center text-slate-600 mt-2">
                24/7 • Reply in 30 minutes
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
