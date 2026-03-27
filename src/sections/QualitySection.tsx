import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Double-walled boxes for heavy items',
  'Bubble + foam for glass & electronics',
  'Wooden crating for fragile valuables',
  'Labeling system for easy unpacking',
];

import { useNavigate } from 'react-router-dom';

export default function QualitySection() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftImage = leftImageRef.current;
    const rightPanel = rightPanelRef.current;
    const heading = headingRef.current;
    const bullets = bulletsRef.current;

    if (!section || !leftImage || !rightPanel || !heading || !bullets) return;

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
        .fromTo(leftImage, 
          { x: '-70vw' }, 
          { x: 0, ease: 'none' }, 
          0
        )
        .fromTo(rightPanel, 
          { x: '60vw' }, 
          { x: 0, ease: 'none' }, 
          0
        )
        .fromTo(heading.children, 
          { y: 60, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.05, ease: 'power3.out' }, 
          0.1
        )
        .fromTo(bullets.children, 
          { x: '8vw', opacity: 0 }, 
          { x: 0, opacity: 1, stagger: 0.08, ease: 'power3.out' }, 
          0.15
        );

      // SETTLE (30% - 70%): Hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(leftImage, 
          { x: 0, opacity: 1 }, 
          { x: '-14vw', opacity: 0.35, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(rightPanel, 
          { x: 0, opacity: 1 }, 
          { x: '14vw', opacity: 0.35, ease: 'power2.in' }, 
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-teal"
    >
      {/* Left Image */}
      <div 
        ref={leftImageRef}
        className="absolute left-0 top-0 w-[55vw] h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
          alt="Careful packing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal/80" />
      </div>

      {/* Right Content Panel */}
      <div 
        ref={rightPanelRef}
        className="absolute right-0 top-0 w-[45vw] h-full bg-teal flex items-center"
      >
        <div className="px-8 lg:px-16 max-w-lg">
          {/* Heading */}
          <div ref={headingRef} className="mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-cream uppercase leading-[0.95]">
              Packed to protect.
              <span className="block text-orange mt-2">Built to last.</span>
            </h2>
          </div>

          {/* Feature Bullets */}
          <ul ref={bulletsRef} className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 bg-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-cream/80 text-base">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button 
            onClick={() => navigate('/contact')}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Ask About Packing Options
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
