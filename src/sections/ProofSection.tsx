import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProofSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftImage = leftImageRef.current;
    const rightTop = rightTopRef.current;
    const rightBottom = rightBottomRef.current;
    const badge = badgeRef.current;

    if (!section || !leftImage || !rightTop || !rightBottom || !badge) return;

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
          { x: '-70vw', opacity: 1 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(rightTop, 
          { x: '50vw' }, 
          { x: 0, ease: 'none' }, 
          0
        )
        .fromTo(rightBottom, 
          { x: '50vw', y: '30vh' }, 
          { x: 0, y: 0, ease: 'none' }, 
          0
        )
        .fromTo(badge, 
          { scale: 0, rotation: -90 }, 
          { scale: 1, rotation: 0, ease: 'back.out(1.4)' }, 
          0.15
        );

      // SETTLE (30% - 70%): Hold position - no animation needed

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(leftImage, 
          { x: 0, opacity: 1 }, 
          { x: '-18vw', opacity: 0.35, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(rightTop, 
          { x: 0, opacity: 1 }, 
          { x: '18vw', opacity: 0.35, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(rightBottom, 
          { x: 0, opacity: 1 }, 
          { x: '18vw', opacity: 0.35, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(badge, 
          { y: 0, scale: 1, opacity: 1 }, 
          { y: '-16vh', scale: 0.85, opacity: 0.2, ease: 'power2.in' }, 
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
      {/* Left Large Image */}
      <div 
        ref={leftImageRef}
        className="absolute left-0 top-0 w-[62vw] h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
          alt="Movers in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal/60" />
      </div>

      {/* Right Top Image */}
      <div 
        ref={rightTopRef}
        className="absolute right-0 top-0 w-[38vw] h-[52vh]"
      >
        <img 
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
          alt="Team stacking boxes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal/40" />
      </div>

      {/* Right Bottom Image */}
      <div 
        ref={rightBottomRef}
        className="absolute right-0 bottom-0 w-[38vw] h-[48vh]"
      >
        <img 
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
          alt="Packed boxes in room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal/60 to-transparent" />
      </div>

      {/* Circular Badge */}
      <div 
        ref={badgeRef}
        className="absolute left-[56vw] top-[46%] -translate-y-1/2 z-10"
      >
        <div className="relative w-[170px] h-[170px]">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-orange rounded-full" />
          
          {/* Inner circle */}
          <div className="absolute inset-2 bg-orange rounded-full flex items-center justify-center">
            <div className="text-center">
              <span className="text-white font-black text-lg uppercase tracking-wider block">
                WE ARE
              </span>
              <span className="text-white font-black text-2xl uppercase tracking-wider block">
                MOVING
              </span>
            </div>
          </div>
          
          {/* Rotating text */}
          <svg 
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: '20s' }}
            viewBox="0 0 170 170"
          >
            <defs>
              <path 
                id="circlePath" 
                d="M 85, 85 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              />
            </defs>
            <text className="fill-cream/40 text-[10px] uppercase tracking-[0.3em]">
              <textPath href="#circlePath">
                Residential • Commercial • Storage • Residential • Commercial • Storage •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-8 left-8 z-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
          Residential • Commercial • Storage
        </span>
      </div>
    </section>
  );
}
