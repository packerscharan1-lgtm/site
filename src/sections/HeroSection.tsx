import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { useGsapAnimation } from '../hooks/useGsapAnimation';
import { useEffect } from 'react';

export default function HeroSection() {
  const navigate = useNavigate();
  const { elementRef, slideInFromLeft } = useGsapAnimation();

  useEffect(() => {
    slideInFromLeft('.hero-content');
  }, []);

  return (
    <section 
      ref={elementRef}
      className="relative w-full min-h-screen pt-20 sm:pt-24"
      style={{
        backgroundImage: "url('/about.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Mobile Hero Banner Image */}
      <div className="absolute inset-0 lg:hidden">
        <img 
          src="/hero.png" 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60"></div>
      </div>

      {/* Black Gradient Overlay - Desktop */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/40"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-8 md:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col items-start justify-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="hero-content animate-fade-in-up">
            {/* Eyebrow */}
            <span className="mt-10 inline-block text-xs sm:text-sm font-semibold text-[#0066ff] uppercase tracking-wider mb-3 sm:mb-4">
              Local & All over India
            </span>
            
            {/* Headline - Complete and Clear */}
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-4 sm:mb-6">
          Charan Packers and Movers
              <span className="text-[#0066ff] block mt-1 sm:mt-2">Visakhapatnam</span>
            </h1>
            <p className="text-white text-xl font-bold sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
              SETTING NEW STANDARDS IN MOVING
            </p>
            
            {/* Subheadline */}
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Professional packing, transport, and setup services done with care, 
              on time, and on budget. Your trusted partner for hassle-free relocations.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary justify-center"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="btn-secondary text-white border-white justify-center"
              >
                Our Services
              </button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-[#0066ff]" />
                <span>Response in time</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-[#0066ff]" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="w-full bg-[#0a2540] text-white">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { value: '12,000+', label: 'Moves Done' },
              { value: '99%', label: 'Satisfaction' },
              { value: '15+', label: 'Years Exp.' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${600 + index * 100}ms` }}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0066ff]">{stat.value}</div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
