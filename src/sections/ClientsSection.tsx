import { Award, Shield, Clock } from 'lucide-react';
import { useGsapAnimation } from '../hooks/useGsapAnimation';
import { useEffect } from 'react';

const clients = [
  { name: 'SBI', fullName: 'State Bank of India', logo: '/clients/sbi.png' },
  { name: 'LIC', fullName: 'Life Insurance Corp', logo: '/clients/lic.png' },
  { name: 'Infosys', fullName: 'Infosys Limited', logo: '/clients/infosys.png' },
  { name: 'Wipro', fullName: 'Wipro Technologies', logo: '/clients/wipro.png' },
  { name: 'TCS', fullName: 'Tata Consultancy', logo: '/clients/tcs.webp' },
  { name: 'HDFC', fullName: 'HDFC Bank', logo: '/clients/hdfc.webp' },
  { name: 'ICICI', fullName: 'ICICI Bank', logo: '/clients/icici.png' },
  { name: 'Axis', fullName: 'Axis Bank', logo: '/clients/axis.png' },
];

const badges = [
  { icon: Award, label: 'ISO Certified' },
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock, label: '15+ Years Experience' },
];

export default function ClientsSection() {
  const { elementRef, dropIn, slideInFromBottom, popOut } = useGsapAnimation();

  useEffect(() => {
    dropIn('.clients-header');
    slideInFromBottom('.clients-badges');
    popOut('.client-logo', 0.08);
  }, []);

  return (
    <section ref={elementRef} className="w-full bg-[#F7F3C9] py-20 lg:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 clients-header">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#0066ff]" />
            <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
              Trusted By
            </span>
            <div className="w-12 h-0.5 bg-[#0066ff]" />
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] mb-6">
            Our <span className="text-[#0066ff]">Corporate</span> Partners
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Proudly serving India's leading organizations with professional relocation services.
          </p>
        </div>

        {/* Trust Badges Bar */}
        <div className="bg-[#0a2540] border-y-4 border-[#0066ff] mb-16 clients-badges">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
              {badges.map((badge, index) => (
                <div 
                  key={index} 
                  className="bg-[#0a2540] p-6 flex items-center justify-center gap-4"
                >
                  <div className="w-12 h-12 bg-[#0066ff]/10 border-2 border-[#0066ff] flex items-center justify-center">
                    <badge.icon className="w-6 h-6 text-[#0066ff]" />
                  </div>
                  <span className="text-white font-bold text-sm uppercase tracking-wider">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clients Grid - Sharp Logo Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-200 shadow-md p-6 lg:p-10 flex flex-col items-center justify-center min-h-[200px] rounded-lg client-logo"
            >
              {/* Logo Container */}
              <div className="relative w-full flex items-center justify-center mb-4">
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="h-20 sm:h-24 lg:h-28 object-contain mx-auto"
                />
              </div>
              
              {/* Full Name */}
              <span className="block text-gray-700 text-xs sm:text-sm text-center font-semibold uppercase tracking-wider">
                {client.fullName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}