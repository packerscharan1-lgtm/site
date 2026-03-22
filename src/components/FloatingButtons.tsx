import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const phoneNumber = '+919177965758';
  const whatsappNumber = '919177965758';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 tap-target"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        
        {/* Tooltip - hidden on mobile */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-white text-[#0a2540] text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
          WhatsApp Us
        </span>
        
        {/* Pulse ring */}
        <span className="absolute inset-0 bg-[#25D366] animate-ping opacity-20" />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#0066ff] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 tap-target"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
        
        {/* Tooltip - hidden on mobile */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-white text-[#0a2540] text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
          Call Now
        </span>
        
        {/* Pulse ring */}
        <span className="absolute inset-0 bg-[#0066ff] animate-ping opacity-20" />
      </button>
    </div>
  );
}
