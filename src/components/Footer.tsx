import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  
  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const quickLinks = [
    { label: 'Home', page: '/' },
    { label: 'About Us', page: '/about' },
    { label: 'Services', page: '/services' },
    { label: 'Gallery', page: '/gallery' },
    { label: 'Contact', page: '/contact' },
  ];

  return (
    <footer className="relative bg-[#0a2540] text-white overflow-hidden">
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066ff] via-[#00d4ff] to-[#0066ff]" />
      
      {/* CTA Section - Pre-Footer */}
      <div className="relative bg-[#0d2d4a] border-b border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
                Ready to Move?
              </h3>
              <p className="text-gray-400 text-base lg:text-lg">
                Get a free quote today and experience stress-free relocation with Charan Packers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleNavClick('/contact')}
                className="group bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-4 rounded-full font-semibold text-base 
                           shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 
                           flex items-center justify-center gap-2 min-w-[200px]"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+919177965758"
                className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-base 
                           border border-white/20 transition-all duration-300 
                           flex items-center justify-center gap-2 min-w-[200px]"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand Column - Takes 4 columns */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-32 sm:w-48 lg:w-64 aspect-video bg-white rounded-xl p-2 hover:scale-105">
                  <img 
                    src="/logo1.png" 
                    alt="Charan Packers" 
                    className="w-full h-full object-contain"
                  />
                </div>
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl text-white block leading-tight">
                  Charan Packers & Movers
                </span>
                <span className="text-[#0066ff] text-sm font-semibold tracking-wider uppercase">
                
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Professional relocation services with a focus on safety, reliability, 
              and customer satisfaction. We make moving simple and stress-free across Visakhapatnam and all over India.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center 
                             text-gray-400 hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] 
                             transition-all duration-300 hover:scale-110 tap-target"
                  aria-label={`Social link ${index + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* BOLD Quick Links - Takes 8 columns (2/3 of space) */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Section Label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-0.5 bg-[#0066ff] rounded-full" />
                <span className="text-[#0066ff] text-sm font-semibold uppercase tracking-widest">
                  Navigation
                </span>
              </div>

              {/* Two Column Bold Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {quickLinks.map((link, index) => (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className="group relative flex items-center justify-between p-5 sm:p-6 
                               bg-white/5 hover:bg-[#0066ff] border border-white/10 hover:border-[#0066ff] 
                               rounded-xl transition-all duration-300 text-left tap-target
                               hover:shadow-lg hover:shadow-[#0066ff]/20 hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-white 
                                     group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                      <span className="text-xs text-gray-500 group-hover:text-white/70 mt-1 
                                     transition-colors uppercase tracking-wider">
                        {index === 0 && 'Start here'}
                        {index === 1 && 'Our story'}
                        {index === 2 && 'What we do'}
                        {index === 3 && 'See our work'}
                        {index === 4 && 'Get in touch'}
                        {index === 5 && 'Free estimate'}
                      </span>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 
                                    flex items-center justify-center transition-all duration-300
                                    group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5 text-[#0066ff] group-hover:text-white transition-colors" />
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0066ff]/0 to-[#00d4ff]/0 
                                    group-hover:from-[#0066ff]/10 group-hover:to-[#00d4ff]/10 
                                    transition-all duration-500 pointer-events-none" />
                  </button>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 
                              bg-[#0066ff]/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Contact Info Bar - Full Width Below */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <a 
              href="https://maps.google.com/?q=Door+No.+39-33-94/1,+HIG-104,+Madhavadhara,+Visakhapatnam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-start gap-4 hover:bg-white/5 p-4 rounded-xl transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0066ff]/10 border border-[#0066ff]/20 
                              flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066ff]/20 transition-colors">
                <MapPin className="w-6 h-6 text-[#0066ff]" />
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Address</span>
                <span className="text-sm text-white leading-relaxed">
                  Door No. 39-33-94/1, HIG-104,<br />
                  Madhavadhara, Visakhapatnam, AP – 530007
                </span>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+919177965758" 
              className="group flex items-start gap-4 hover:bg-white/5 p-4 rounded-xl transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0066ff]/10 border border-[#0066ff]/20 
                              flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066ff]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#0066ff]" />
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Phone</span>
                <span className="text-lg font-bold text-white">+91 91779 65758</span>
                <span className="text-xs text-gray-500 block mt-1">Mon - Sun: 7AM - 9PM</span>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:charanilla23@gmail.com" 
              className="group flex items-start gap-4 hover:bg-white/5 p-4 rounded-xl transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0066ff]/10 border border-[#0066ff]/20 
                              flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066ff]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#0066ff]" />
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Email</span>
                <span className="text-lg font-bold text-white">charanilla23@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#081e33]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Charan Packers & Movers. All rights reserved.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-gray-500 hover:text-[#0066ff] text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-gray-500 hover:text-[#0066ff] text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>

            {/* Back to Top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-gray-500 hover:text-[#0066ff] text-xs sm:text-sm transition-colors group"
            >
              Back to Top
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#0066ff] group-hover:bg-[#0066ff]/10 transition-all">
                <ArrowUpRight className="w-4 h-4 -rotate-45" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}