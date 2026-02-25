import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

interface SearchResult {
  title: string;
  path: string;
  category: string;
}

const SearchBar = ({ mobile = false }: { mobile?: boolean }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const searchData: SearchResult[] = [
    // Main Pages
    { title: "Home", path: "/", category: "Page" },
    { title: "Packages & Pricing", path: "/packages", category: "Page" },
    { title: "Repatriation Services", path: "/repatriation", category: "Page" },
    { title: "Resources", path: "/resources", category: "Page" },
    { title: "About Us", path: "/about", category: "Page" },
    { title: "Contact Us", path: "/contact", category: "Page" },
    
    // Services
    { title: "All Services Overview", path: "/services", category: "Services" },
    { title: "Full Suite Funeral Services", path: "/services/full-suite", category: "Services" },
    { title: "Buddhist Funeral", path: "/services/full-suite", category: "Services" },
    { title: "Taoist Funeral", path: "/services/full-suite", category: "Services" },
    { title: "Christian Funeral", path: "/services/full-suite", category: "Services" },
    { title: "Catholic Funeral", path: "/services/full-suite", category: "Services" },
    { title: "Soka Funeral", path: "/services/full-suite", category: "Services" },
    { title: "Freethinker Funeral", path: "/services/full-suite", category: "Services" },
    { title: "Landed Property & Outdoor Setups", path: "/services/landed-outdoor", category: "Services" },
    { title: "Quality Caskets", path: "/services/caskets", category: "Services" },
    { title: "Funeral Parlours", path: "/services/parlours", category: "Services" },
    { title: "Columbarium Services", path: "/services/columbarium", category: "Services" },
    { title: "Will Writing & Estate Planning", path: "/services/will-estate", category: "Services" },
    { title: "Funeral Pre-Planning", path: "/services/pre-planning", category: "Services" },
    
    // Packages
    { title: "Direct Cremation Package", path: "/packages", category: "Packages" },
    { title: "Buddhist Simple Package", path: "/packages", category: "Packages" },
    { title: "Taoist Package", path: "/packages", category: "Packages" },
    { title: "Christian Simple Package", path: "/packages", category: "Packages" },
    { title: "Catholic Simple Package with Tentage", path: "/packages", category: "Packages" },
    { title: "Catholic Simple Package without Tentage", path: "/packages", category: "Packages" },
    { title: "Soka Package", path: "/packages", category: "Packages" },
    { title: "Freethinker Package", path: "/packages", category: "Packages" },
    { title: "Little Angels Package", path: "/packages", category: "Packages" },
    { title: "Bespoke Funeral Package", path: "/packages", category: "Packages" },
  ];

  // Fuzzy search algorithm
  const fuzzySearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const scored = searchData
      .map((item) => {
        const title = item.title.toLowerCase();
        
        // Exact match gets highest score
        if (title.includes(query)) {
          return { ...item, score: 100 };
        }

        // Check if all characters exist in order (fuzzy)
        let queryIndex = 0;
        let titleIndex = 0;
        let matches = 0;

        while (queryIndex < query.length && titleIndex < title.length) {
          if (query[queryIndex] === title[titleIndex]) {
            matches++;
            queryIndex++;
          }
          titleIndex++;
        }

        // Calculate score based on match ratio
        const score = (matches / query.length) * 100;
        return { ...item, score };
      })
      .filter((item) => item.score > 50) // Only show items with >50% match
      .sort((a, b) => b.score - a.score)
      .slice(0, 6); // Show top 6 results

    setResults(scored);
  };

  useEffect(() => {
    fuzzySearch(query);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (path: string) => {
    navigate(path);
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <div ref={searchRef} className={`relative ${mobile ? 'w-full' : 'w-full max-w-md'}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search services, packages..."
          className="w-full pl-10 pr-10 py-2.5 bg-dove border border-border rounded-full text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-calm"
          aria-label="Search services and packages"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-ink transition-calm"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-paper rounded-xl shadow-hover border border-border max-h-80 overflow-y-auto z-50 animate-fade-in">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleSelect(result.path)}
              className="w-full px-4 py-3 text-left hover:bg-dove transition-calm border-b border-border last:border-0 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium text-ink group-hover:text-gold transition-calm">
                    {result.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {result.category}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-paper rounded-xl shadow-hover border border-border p-4 z-50 animate-fade-in">
          <p className="text-sm text-slate-500 text-center">No results found</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
