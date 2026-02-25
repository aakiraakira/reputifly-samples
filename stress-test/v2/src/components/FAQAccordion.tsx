import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4" role="list">
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        
        return (
          <div
            key={item.id}
            id={item.id}
            className={`bg-paper rounded-2xl shadow-card overflow-hidden border-2 transition-all duration-300 ${
              isOpen ? "border-primary/30 shadow-gentle" : "border-transparent hover:border-primary/10"
            }`}
            style={{ animationDelay: `${idx * 80}ms` }}
            role="listitem"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
              aria-expanded={isOpen}
              aria-controls={`answer-${item.id}`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-primary text-white" : "bg-dove text-primary group-hover:bg-primary/10"
                }`}>
                  <HelpCircle className="w-5 h-5" />
                </div>
                <span className={`font-heading text-lg font-semibold pr-4 transition-colors duration-300 ${
                  isOpen ? "text-primary" : "text-ink group-hover:text-primary"
                }`}>
                  {item.question}
                </span>
              </div>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen ? "bg-primary/10 rotate-180" : "bg-dove group-hover:bg-primary/10"
              }`}>
                <ChevronDown
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isOpen ? "text-primary" : "text-slate-600"
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>

            <div
              id={`answer-${item.id}`}
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
              role="region"
              aria-labelledby={item.id}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0 ml-14 text-slate-600 leading-relaxed border-t border-dove mt-0 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
