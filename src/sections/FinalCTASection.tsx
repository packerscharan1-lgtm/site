import { ArrowRight, Clock, Shield, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const guarantees = [
  { icon: Clock, label: 'On-time Delivery' },
  { icon: Shield, label: 'Damage Protection' },
  { icon: Headphones, label: '24/7 Support' },
];

export default function FinalCTASection() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#0a2540] text-white py-12 sm:py-16 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
              Ready When{' '}
              <span className="text-[#0066ff]">You Are.</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Tell us what you are moving. We will reply with a plan and a price—fast. 
              No obligations, just professional advice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary justify-center"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            
            <div className="text-gray-500 text-sm">
              <p>Or call us directly:</p>
              <a 
                href="tel:+918499984699" 
                className="text-[#0066ff] font-bold text-lg sm:text-xl hover:underline"
              >
                8499984699
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="aspect-[4/3] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80"
                alt="Happy moving team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Guarantee Cards */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white shadow-xl p-3 sm:p-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {guarantees.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0066ff]/10 flex items-center justify-center mx-auto mb-1 sm:mb-2">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066ff]" />
                    </div>
                    <span className="text-[#0a2540] text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
