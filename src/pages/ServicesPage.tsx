import { 
  Home, 
  Building2, 
  Package, 
  Truck, 
  Warehouse, 
  Users,
  ArrowRight,
  Check,
  Phone,
  Star,
  Shield,
  Clock,
  MapPin
} from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

const services = [
  {
    icon: Home,
    title: 'Residential Moving',
    description: 'Complete home relocation services for apartments, houses, and villas with utmost care.',
    features: ['Packing & unpacking', 'Furniture handling', 'Safe transport', 'Setup at destination'],
    color: 'bg-blue-500',
  },
  {
    icon: Building2,
    title: 'Commercial Moving',
    description: 'Business relocation with minimal downtime and maximum efficiency.',
    features: ['Office equipment', 'Document security', 'After-hours service', 'Minimal disruption'],
    color: 'bg-purple-500',
  },
  {
    icon: Package,
    title: 'Packing Services',
    description: 'Professional packing with quality materials and expert techniques.',
    features: ['Quality materials', 'Expert techniques', 'Labeling system', 'Fragile item care'],
    color: 'bg-green-500',
  },
  {
    icon: Truck,
    title: 'Loading & Transport',
    description: 'Secure stacking, careful handling, and smooth transit with our fleet.',
    features: ['Secure stacking', 'Careful handling', 'GPS tracking', 'Insurance coverage'],
    color: 'bg-orange-500',
  },
  {
    icon: Warehouse,
    title: 'Storage Solutions',
    description: 'Short-term and long-term storage in secure, monitored facilities.',
    features: ['24/7 security', 'Climate control', 'Flexible terms', 'Easy access'],
    color: 'bg-red-500',
  },
  {
    icon: Users,
    title: 'Moving Assistance',
    description: 'Labor support for loading, unloading, and heavy lifting tasks.',
    features: ['Experienced crew', 'Hourly rates', 'Same-day service', 'All equipment included'],
    color: 'bg-teal-500',
  },
];

const trustBadges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Clock, label: '24/7 Available' },
  { icon: MapPin, label: 'All India Service' },
];

export default function ServicesPage({ onPageChange }: ServicesPageProps) {
  return (
    <main className="relative overflow-x-hidden bg-white">
      
      {/* Hero Banner - Sharp & Bold */}
      <section className="w-full bg-white pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#0066ff]" />
              <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                Our Services
              </span>
              <div className="w-12 h-0.5 bg-[#0066ff]" />
            </div>
            
            <h1 className="text-black font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
              Everything You Need<br />
              For A <span className="text-[#0066ff]">Perfect Move</span>
            </h1>
            
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              From packing to unpacking, local to long-distance—we handle every step 
              with professionalism and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919177965758"
                className="group bg-transparent hover:bg-white/10 text-white px-8 py-4 font-bold uppercase tracking-wider
                           transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner - Sharp Strip */}
      <section className="w-full bg-[#0066ff] border-y-4 border-[#0a2540]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#0a2540]/20">
            {trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className="bg-[#0066ff] p-4 flex items-center justify-center gap-3"
              >
                <badge.icon className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Sharp Cards */}
      <section className="w-full py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300 border-2 border-gray-300">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 lg:p-10 hover:bg-[#0a2540] transition-all duration-500 relative overflow-hidden"
              >
                {/* Color Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${service.color}`} />
                
                {/* Icon Container */}
                <div className={`w-16 h-16 ${service.color} bg-opacity-10 border-2 border-opacity-20 flex items-center justify-center mb-6 group-hover:bg-[#0066ff] group-hover:border-[#0066ff] transition-all duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color.replace('bg-', 'text-')} group-hover:text-white transition-colors`} />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-bold text-2xl text-[#0a2540] mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 group-hover:text-gray-400 transition-colors leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-600 group-hover:text-gray-400 transition-colors">
                      <div className="w-5 h-5 bg-[#0066ff]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#0066ff]" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <button 
                  onClick={() => onPageChange('contact')}
                  className="w-full group/btn bg-gray-100 hover:bg-[#0066ff] text-[#0a2540] hover:text-white py-3 px-4 font-semibold text-sm uppercase tracking-wider
                             transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#0066ff]"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Services Details & Benefits */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#0066ff]" />
              <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                Service Excellence
              </span>
              <div className="w-12 h-0.5 bg-[#0066ff]" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0a2540]">
              What's Included In<br />
              <span className="text-[#0066ff]">Our Services</span>
            </h2>
          </div>

          {/* Detailed Service Cards */}
          <div className="space-y-12 mb-20">
            
            {/* Service 1: Residential Moving */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#0066ff]" />
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                  alt="Residential moving service"
                  className="w-full h-80 object-cover border-4 border-[#0a2540]"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#0066ff]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl text-[#0a2540] mb-4">
                  Residential Moving
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you're moving to a new apartment or relocating your entire household, we provide comprehensive residential moving services tailored to your needs. Our experienced team ensures that every item from your home is packed, transported, and unpacked with utmost care.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Professional Packing</h4>
                      <p className="text-gray-600 text-sm">Using high-quality materials and proven techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Furniture Assembly/Disassembly</h4>
                      <p className="text-gray-600 text-sm">Expert handling of all furniture types</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Setup at Destination</h4>
                      <p className="text-gray-600 text-sm">Complete unpacking and arrangement services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Insurance Coverage</h4>
                      <p className="text-gray-600 text-sm">Full protection for your belongings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Commercial Moving */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl text-[#0a2540] mb-4">
                  Commercial Moving
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Moving a business requires precision, planning, and expertise. We specialize in office relocations with minimal downtime, ensuring your business operations continue smoothly. From small offices to large corporate moves, we handle it all.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Minimal Downtime</h4>
                      <p className="text-gray-600 text-sm">Scheduled after-hours and weekend moves</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">IT Equipment Handling</h4>
                      <p className="text-gray-600 text-sm">Specialized care for servers and technology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Document Security</h4>
                      <p className="text-gray-600 text-sm">Secure handling of sensitive materials</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Workspace Setup</h4>
                      <p className="text-gray-600 text-sm">Arrange your new office exactly as planned</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-[#0066ff]" />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="Commercial moving service"
                  className="w-full h-80 object-cover border-4 border-[#0a2540]"
                />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-[#0066ff]" />
              </div>
            </div>

            {/* Service 3: Packing & Storage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#0066ff]" />
                <img 
                  src="https://images.unsplash.com/photo-1589939705066-5470d92fb2cc?w=600&q=80"
                  alt="Professional packing"
                  className="w-full h-80 object-cover border-4 border-[#0a2540]"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#0066ff]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl text-[#0a2540] mb-4">
                  Packing & Storage
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our professional packing services ensure your belongings are protected during transit. Combined with our secure storage facilities, we provide a complete solution for all your moving and storage needs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Quality Materials</h4>
                      <p className="text-gray-600 text-sm">Premium cardboard, bubble wrap, and protective padding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Fragile Item Care</h4>
                      <p className="text-gray-600 text-sm">Special handling for dishes, electronics, and valuables</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Secure Warehousing</h4>
                      <p className="text-gray-600 text-sm">Climate-controlled, 24/7 monitored facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Flexible Terms</h4>
                      <p className="text-gray-600 text-sm">Short-term to long-term storage options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: Transport & Loading */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-3xl text-[#0a2540] mb-4">
                  Transport & Loading
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With a modern fleet of vehicles and experienced logistics team, we ensure safe and timely transport of your belongings. Our vehicles are equipped with GPS tracking and safety features for complete peace of mind.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Modern Fleet</h4>
                      <p className="text-gray-600 text-sm">Well-maintained vehicles of all sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">GPS Tracking</h4>
                      <p className="text-gray-600 text-sm">Real-time tracking of your shipment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Insurance Coverage</h4>
                      <p className="text-gray-600 text-sm">Comprehensive coverage for transit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0a2540]">Experienced Drivers</h4>
                      <p className="text-gray-600 text-sm">Trained professionals for safe delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-[#0066ff]" />
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40038f63dd4b?w=600&q=80"
                  alt="Transport and loading"
                  className="w-full h-80 object-cover border-4 border-[#0a2540]"
                />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-[#0066ff]" />
              </div>
            </div>

          </div>

          {/* Key Benefits Summary */}
          <div className="border-t-4 border-[#0066ff] pt-16">
            <h2 className="font-display font-bold text-3xl text-[#0a2540] text-center mb-12">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 border-2 border-gray-300">
              <div className="bg-white p-8 hover:bg-[#0a2540] group transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#0066ff]/10 border border-[#0066ff]/20 flex items-center justify-center mb-4 group-hover:bg-[#0066ff] transition-all">
                  <Shield className="w-6 h-6 text-[#0066ff] group-hover:text-white" />
                </div>
                <h3 className="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-white">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-400">Complete protection and compliance</p>
              </div>
              
              <div className="bg-white p-8 hover:bg-[#0a2540] group transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#0066ff]/10 border border-[#0066ff]/20 flex items-center justify-center mb-4 group-hover:bg-[#0066ff] transition-all">
                  <Star className="w-6 h-6 text-[#0066ff] group-hover:text-white" />
                </div>
                <h3 className="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-white">5-Star Rated</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-400">Thousands of satisfied customers</p>
              </div>
              
              <div className="bg-white p-8 hover:bg-[#0a2540] group transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#0066ff]/10 border border-[#0066ff]/20 flex items-center justify-center mb-4 group-hover:bg-[#0066ff] transition-all">
                  <Clock className="w-6 h-6 text-[#0066ff] group-hover:text-white" />
                </div>
                <h3 className="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-white">24/7 Available</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-400">Always ready to assist you</p>
              </div>
              
              <div className="bg-white p-8 hover:bg-[#0a2540] group transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#0066ff]/10 border border-[#0066ff]/20 flex items-center justify-center mb-4 group-hover:bg-[#0066ff] transition-all">
                  <MapPin className="w-6 h-6 text-[#0066ff] group-hover:text-white" />
                </div>
                <h3 className="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-white">Pan-India Service</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-400">Serving across South India</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}