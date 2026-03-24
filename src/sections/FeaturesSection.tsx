import { Clock, Shield, Tag, TrendingUp, Award } from 'lucide-react';
import { useGsapAnimation } from '../hooks/useGsapAnimation';
import { useEffect } from 'react';

const features = [
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    description: 'We schedule tight and stick to it. Your time matters to us.',
  },
  {
    icon: Shield,
    title: 'Careful Handling',
    description: 'Blankets, wraps, and crates as standard for all items.',
  },
  {
    icon: Tag,
    title: 'Clear Pricing',
    description: 'No hidden fees. No surprises. Transparent quotes always.',
  },
];

const stats = [
  { value: '12,000+', label: 'Moves Completed', icon: TrendingUp },
  { value: '99.2%', label: 'On-Time Rate', icon: Clock },
  { value: '4.9/5', label: 'Customer Rating', icon: Award },
];

export default function FeaturesSection() {
  const { elementRef, dropIn, popOut } = useGsapAnimation();

  useEffect(() => {
    dropIn('.features-title');
    popOut('.feature-card', 0.1);
    popOut('.feature-stats', 0.1);
  }, []);

  return (
    <section ref={elementRef} className="w-full bg-[#F7F3E9] py-12 sm:py-16 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 features-title">
          <span className="text-[#0066ff] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
            Why Choose Us
          </span>
          <h2 className="section-title text-[#0a2540] mb-3 sm:mb-4">
            Reliable Moving Services{' '}
            <span className="text-[#0066ff]">Built Around You</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We combine professional expertise with personalized care to ensure 
            every move is smooth and stress-free.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="icon-box mb-4 sm:mb-6 group-hover:bg-[#0066ff] group-hover:text-white">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              
              {/* Content */}
              <h3 className="font-display font-semibold text-lg sm:text-xl text-[#0a2540] mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-gray-50 p-4 sm:p-6 feature-stats"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0066ff] flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#0a2540]">{stat.value}</div>
                <div className="text-gray-500 text-xs sm:text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
