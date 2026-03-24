import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import { useNavigate } from 'react-router-dom';

export default function CredibilitySection() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const overlay = overlayRef.current;
    const quote = quoteRef.current;
    const cta = ctaRef.current;

    if (!section || !bg || !overlay || !quote || !cta) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(bg, 
          { scale: 1.12, y: '10vh' }, 
          { scale: 1, y: 0, ease: 'none' }, 
          0
        )
        .fromTo(overlay, 
          { opacity: 0 }, 
          { opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(quote.children, 
          { y: 80, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.03, ease: 'power3.out' }, 
          0.1
        )
        .fromTo(cta.children, 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.1, ease: 'power3.out' }, 
          0.2
        );

      // SETTLE (30% - 70%): Hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(quote, 
          { y: 0, opacity: 1 }, 
          { y: '-12vh', opacity: 0.25, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(bg, 
          { scale: 1, opacity: 1 }, 
          { scale: 1.06, opacity: 0.45, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(cta, 
          { y: 0, opacity: 1 }, 
          { y: '8vh', opacity: 0.2, ease: 'power2.in' }, 
          0.75
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
          alt="Moving truck at dusk"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-teal/70"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <div 
          ref={quoteRef}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-cream uppercase leading-[1.1] tracking-tight">
            If you want a move done right,
            <span className="block text-orange mt-2">
              you need a crew that cares.
            </span>
          </h2>
        </div>

        {/* Caption + CTA */}
        <div 
          ref={ctaRef}
          className="mt-12 text-center"
        >
          <p className="text-cream/70 text-base lg:text-lg mb-8 max-w-xl mx-auto">
            Licensed, insured, and reviewed by thousands of happy customers 
            across India. Your belongings are in safe hands.
          </p>
          
          <button 
            onClick={() => navigate('/about')}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            <Users className="w-5 h-5" />
            Meet The Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-teal/90 backdrop-blur-sm border-t border-cream/10">
        <div className="flex justify-around py-6 px-4">
          {[
            { label: 'Licensed', value: '✓' },
            { label: 'Insured', value: '✓' },
            { label: 'Trusted', value: '✓' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-black text-orange">{item.value}</div>
              <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
