import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const services = [
  { to: "/services/hindu-indian", label: "Hindu / Indian Funeral" },
  { to: "/services/roman-catholic", label: "Roman Catholic Funeral" },
  { to: "/services/christian", label: "Christian Funeral" },
  { to: "/services/freethinker", label: "Freethinker Funeral" },
  { to: "/services/direct-cremation", label: "Direct Cremation" },
  { to: "/services/pre-planning", label: "Funeral Pre-Planning" },
  { to: "/services/will-estate", label: "Will Writing & Estate Planning" },
  { to: "/services/pet-cremation", label: "Pet Cremation Services" },
  { to: "/services/baby-funeral", label: "Baby Funeral Services" },
  { to: "/repatriation", label: "Repatriation" },
];

const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-ink hover:text-primary transition-calm"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-calm ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-paper rounded-xl shadow-hover py-2 z-50 animate-fade-in">
          {services.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-dove hover:text-ink transition-calm"
              onClick={() => setIsOpen(false)}
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDropdown;
