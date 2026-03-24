import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cities = [
  'Hyderabad',
  'Visakhapatnam',
  'Vijayawada',
  'Rajahmundry',
  'Bangalore',
  'Chennai',
];

import { useNavigate } from 'react-router-dom';

export default function CoverageSection() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const map = mapRef.current;
    const citiesEl = citiesRef.current;

    if (!section || !heading || !map || !citiesEl) return;

    const ctx = gsap.context(() => {
      // Heading + body animation
      gsap.fromTo(heading.children,
        { x: '-8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Map animation
      gsap.fromTo(map,
        { x: '20vw', scale: 0.92, opacity: 0 },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: map,
            start: 'top 75%',
            end: 'top 40%',
            scrub: true,
          }
        }
      );

      // Cities list animation
      const cityItems = citiesEl.querySelectorAll('.city-item');
      gsap.fromTo(cityItems,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: citiesEl,
            start: 'top 70%',
            end: 'top 40%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-teal py-20 lg:py-32"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div ref={headingRef}>
              <h2 className="section-heading mb-6">
                Where we <span className="text-orange">move</span>
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed mb-10 max-w-md">
                Local crews across the region. Long-distance coordination 
                when you need it. We've got India covered.
              </p>
            </div>

            {/* Cities Grid */}
            <div ref={citiesRef} className="grid grid-cols-2 gap-4 mb-10">
              {cities.map((city, index) => (
                <div 
                  key={index}
                  className="city-item flex items-center gap-3 bg-teal-light/30 border border-cream/10 p-4 hover:border-orange/30 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-orange flex-shrink-0" />
                  <span className="text-cream font-medium">{city}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Check Availability
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right - Map Visualization */}
          <div ref={mapRef} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* India Map SVG */}
              <svg 
                viewBox="0 0 400 500" 
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified India outline */}
                <path 
                  d="M120,80 Q150,60 180,70 L220,65 Q260,70 280,100 L300,140 Q310,180 290,220 L280,260 Q275,300 290,340 L310,380 Q320,420 300,450 L280,480 Q250,490 220,480 L180,470 Q150,460 130,440 L110,400 Q100,360 110,320 L120,280 Q125,240 115,200 L100,160 Q90,120 120,80Z"
                  fill="#0d4a4f"
                  stroke="#FF6A00"
                  strokeWidth="2"
                />
                
                {/* Location dots */}
                {[
                  { cx: 200, cy: 200, name: 'Hyderabad' },
                  { cx: 240, cy: 160, name: 'Visakhapatnam' },
                  { cx: 220, cy: 180, name: 'Vijayawada' },
                  { cx: 230, cy: 170, name: 'Rajahmundry' },
                  { cx: 160, cy: 320, name: 'Bangalore' },
                  { cx: 200, cy: 360, name: 'Chennai' },
                ].map((city, index) => (
                  <g key={index}>
                    <circle 
                      cx={city.cx} 
                      cy={city.cy} 
                      r="8" 
                      fill="#FF6A00"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                    <circle 
                      cx={city.cx} 
                      cy={city.cy} 
                      r="12" 
                      fill="none"
                      stroke="#FF6A00"
                      strokeWidth="2"
                      opacity="0.5"
                    />
                  </g>
                ))}
                
                {/* Connection lines */}
                <path 
                  d="M200,200 L240,160 M200,200 L220,180 M200,200 L230,170 M200,200 L160,320 M200,200 L200,360"
                  stroke="#FF6A00"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
              </svg>
              
              {/* Overlay info */}
              <div className="absolute bottom-4 left-4 right-4 bg-teal/90 backdrop-blur-sm border border-cream/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-cream font-bold">6+ Major Cities</div>
                  <div className="text-cream/50 text-sm">And counting...</div>
                  </div>
                  <div className="w-12 h-12 bg-orange flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
