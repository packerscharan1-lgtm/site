import { Calendar, Package, Truck, CheckCircle } from 'lucide-react';
import { useGsapAnimation } from '../hooks/useGsapAnimation';
import { useEffect } from 'react';

const steps = [
  {
    icon: Calendar,
    step: '01',
    title: 'Book',
    description: 'Pick a date and get a clear, upfront quote with no hidden fees.',
  },
  {
    icon: Package,
    step: '02',
    title: 'Pack',
    description: 'We pack everything carefully using quality materials.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Move',
    description: 'Transport with live updates and careful handling throughout.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Settle',
    description: 'Unloaded and placed exactly where you want everything.',
  },
];

export default function ProcessSection() {
  const { elementRef, fadeIn, slideInFromBottom } = useGsapAnimation();

  useEffect(() => {
    fadeIn('.process-title');
    slideInFromBottom('.process-step');
  }, []);

  return (
    <section ref={elementRef} className="w-full bg-[#0a2540] text-white py-12 sm:py-16 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 process-title">
          <span className="text-[#0066ff] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
            <span className="text-white">A Smooth Move.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Our streamlined process ensures your move is handled efficiently from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="relative text-center animate-fade-in-up process-step"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-white/20" />
              )}
              
              {/* Icon Circle */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/10 border-2 border-[#0066ff] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066ff]" />
                
                {/* Step Number Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-[#0066ff] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">{item.step}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
