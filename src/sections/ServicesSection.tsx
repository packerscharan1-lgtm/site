import { useNavigate } from 'react-router-dom';
import { Home, Building2, Package, Truck, Warehouse, Users, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Moving',
    description: 'Complete home relocation services for apartments, houses, and villas.',
    features: ['Packing & unpacking', 'Furniture handling', 'Safe transport'],
  },
  {
    icon: Building2,
    title: 'IT Equipment Handling',
    description: 'Business relocation with minimal downtime and maximum efficiency.',
    features: ['Office equipment', 'Document security', 'After-hours service'],
  },
  {
    icon: Package,
    title: 'Packing Services',
    description: 'Professional packing with quality materials and expert techniques.',
    features: ['Quality materials', 'Expert techniques', 'Labeling system'],
  },
  {
    icon: Truck,
    title: 'Loading & Transport',
    description: 'Secure stacking, careful handling, and smooth transit guaranteed.',
    features: ['Secure stacking', 'Careful handling'],
  },
  {
    icon: Warehouse,
    title: 'Storage Solutions',
    description: 'Short-term and long-term storage in secure, monitored facilities.',
    features: ['24/7 security'],
  },
  {
    icon: Users,
    title: 'Moving Assistance',
    description: 'Labor support for loading, unloading, and heavy lifting tasks.',
    features: ['Experienced crew', 'Hourly rates', 'Same day services', 'In time services'],
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#F7F3C9] py-12 sm:py-16 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#0066ff] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
            Our Services
          </span>
          <h2 className="section-title text-[#0a2540] mb-3 sm:mb-4">
            Everything You Need For a{' '}
            <span className="text-[#0066ff]">Perfect Move</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            From packing to unpacking, local to long-distance—we handle every step 
            with professionalism and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card group p-5 sm:p-6 lg:p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="icon-box mb-4 sm:mb-6 group-hover:bg-[#0066ff] group-hover:text-white">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              
              {/* Title */}
              <h3 className="font-display font-semibold text-lg sm:text-xl text-[#0a2540] mb-2 sm:mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#0066ff] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <button 
                onClick={() => navigate('/contact')}
                className="text-[#0066ff] font-semibold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-16 animate-fade-in-up delay-500">
          <button 
            onClick={() => navigate('/services')}
            className="btn-secondary"
          >
            View All Services
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
