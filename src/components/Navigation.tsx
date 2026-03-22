import { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]' 
            : 'bg-gradient-to-b from-white/20 to-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            
            {/* Logo - BIGGER & More Prominent */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 sm:gap-4 group tap-target shrink-0"
            >
              {/* Larger Logo Container with Premium Styling */}
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-xl shadow-lg p-2 
                                border-2 border-[#0066ff]/10 group-hover:border-[#0066ff]/30 
                                transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <img 
                    src="/images/logo.png" 
                    alt="Charan Packers" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0066ff] rounded-full 
                                flex items-center justify-center shadow-md hidden sm:flex">
                  <Truck className="w-3 h-3 text-white" />
                </div>
              </div>
              
              {/* Brand Text - Better Typography */}
              <div className="hidden sm:block text-left">
                <span className="font-display font-bold text-base lg:text-lg xl:text-xl text-[#0a2540] leading-tight block tracking-tight">
                  Charan Packers
                </span>
                <span className="text-[#0066ff] text-xs lg:text-sm font-semibold tracking-wider uppercase">
                  & Movers
                </span>
              </div>
            </button>

            {/* Desktop Navigation - Centered with Better Spacing */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-gray-100/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 xl:px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 tap-target ${
                    currentPage === item.id 
                      ? 'text-white bg-[#0066ff] shadow-md' 
                      : 'text-gray-600 hover:text-[#0066ff] hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop - More Prominent */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:+919177965758" 
                className="flex items-center gap-2 text-[#0000ff] hover:text-[#0066ff] transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+91 91779 65758</span>
              </a>
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-6 py-3 rounded-full font-semibold text-sm 
                           shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 
                           flex items-center gap-2"
              >
                <span>Get Quote</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button - Better Styling */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-full tap-target bg-white shadow-md text-[#0a2540] 
                         hover:bg-[#0066ff] hover:text-white transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Premium Full-Screen Design */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#0a2540]/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 py-20">
          {/* Mobile Logo Header */}
          <div className="mb-12 text-center">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-lg p-3 mx-auto mb-4">
              <img 
                src="/images/logo.jpeg" 
                alt="Charan Packers" 
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-white font-display font-bold text-xl">Charan Packers</h2>
            <p className="text-[#0066ff] text-sm font-medium">& Movers</p>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full py-4 px-6 rounded-xl font-display font-semibold text-lg transition-all duration-300 tap-target ${
                  currentPage === item.id 
                    ? 'bg-[#0066ff] text-white shadow-lg' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile CTA */}
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full mt-4 bg-[#0066ff] hover:bg-[#0052cc] text-white py-4 px-6 rounded-xl 
                         font-semibold text-lg shadow-lg flex items-center justify-center gap-2 
                         transition-all duration-300"
              style={{ 
                transitionDelay: isMobileMenuOpen ? '375ms' : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </button>
            
            {/* Contact Info */}
            <div 
              className="mt-8 text-center"
              style={{ 
                transitionDelay: isMobileMenuOpen ? '450ms' : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.3s ease'
              }}
            >
              <p className="text-white/60 text-sm mb-2">Call us anytime</p>
              <a 
                href="tel:+919177965758" 
                className="text-[#0066ff] text-xl font-bold hover:text-white transition-colors"
              >
                +91 91779 65758
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}