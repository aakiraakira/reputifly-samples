import { MessageCircle, Phone, Mail } from "lucide-react";

const MobileBottomBar = () => {
  const whatsappUrgent = `https://wa.me/6596875688?text=${encodeURIComponent("Hi, I need immediate assistance with funeral services.")}`;
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-paper border-t border-border shadow-hover safe-area-bottom">
      <div className="grid grid-cols-3 gap-1 p-2 pb-3">
        <a
          href={whatsappUrgent}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg bg-[#25D366] text-white min-h-[52px]"
          aria-label="WhatsApp Us Now"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span className="text-xs font-bold">WhatsApp</span>
        </a>
        
        <a
          href="tel:+6596875688"
          className="flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg bg-primary text-white min-h-[52px]"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span className="text-xs font-bold">Call Now</span>
        </a>
        
        <a
          href="mailto:admin@indianlifememorial.com"
          className="flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg hover:bg-dove transition-calm min-h-[52px]"
          aria-label="Email Us"
        >
          <Mail className="w-5 h-5 text-ink" aria-hidden="true" />
          <span className="text-xs font-medium text-ink">Email</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
