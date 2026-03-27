import { Target, Check, ArrowRight, Users, Award, Phone, Shield, Truck } from 'lucide-react';
import { useNavigate} from 'react-router-dom';
import { useGsapAnimation } from '../hooks/useGsapAnimation';
import { useEffect } from 'react';

const stats = [
  { value: '99%', label: 'Customer Satisfaction', suffix: '' },
  { value: '100K+', label: 'Moves Completed', suffix: '' },
  { value: '15+', label: 'Years Experience', suffix: '' },
  { value: '24/7', label: 'Support Available', suffix: '' },
];

const whyChooseUs = [
  { icon: Shield, title: 'Safe Handling', desc: 'Extra care for your valuables' },
  { icon: Truck, title: 'Fast Delivery', desc: 'On-time every time' },
  { icon: Users, title: 'Expert Team', desc: 'Trained professionals' },
  { icon: Award, title: 'Best Pricing', desc: 'Competitive rates' },
];

const processSteps = [
  { icon: Phone, step: '01', title: 'Contact', desc: 'Reach out for a quote' },
  { icon: Target, step: '02', title: 'Plan', desc: 'Custom moving strategy' },
  { icon: Truck, step: '03', title: 'Execute', desc: 'Professional moving day' },
  { icon: Check, step: '04', title: 'Complete', desc: 'Settle into your new space' },
];

export default function AboutPage() {
  const navigate = useNavigate();
  const heroAnimation = useGsapAnimation();
  const statsAnimation = useGsapAnimation();
  const missionAnimation = useGsapAnimation();
  const whyAnimation = useGsapAnimation();
  const processAnimation = useGsapAnimation();
  const partnersAnimation = useGsapAnimation();

  useEffect(() => {
    heroAnimation.slideInFromLeft('.hero-banner-content');
  }, []);

  useEffect(() => {
    statsAnimation.popOut('.stat-card', 0.1);
  }, []);

  useEffect(() => {
    missionAnimation.dropIn('.mission-header');
    missionAnimation.popOut('.mission-card', 0.15);
  }, []);

  useEffect(() => {
    whyAnimation.slideInFromLeft('.why-us-image');
    whyAnimation.dropIn('.why-us-title', 0.2);
    whyAnimation.popOut('.why-card', 0.1);
  }, []);

  useEffect(() => {
    processAnimation.dropIn('.process-header');
    processAnimation.popOut('.process-card', 0.1);
  }, []);

  useEffect(() => {
    partnersAnimation.dropIn('.partners-header');
    partnersAnimation.popOut('.partner-card', 0.1);
  }, []);
  return (
    <main className="relative overflow-x-hidden bg-white">
      
      {/* Banner Section with Image & Black Gradient */}
      <section ref={heroAnimation.elementRef} className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative mt-20 sm:mt-24 lg:mt-28">
        <img 
          src="/images/banner1.png" 
          alt="About Us Banner" 
          className="w-full h-full object-cover"
        />
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Text Content Over Banner */}
        <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="max-w-2xl hero-banner-content">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#0066ff]" />
              <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-6">
  WE MOVE HOMES, <span className="text-[#0066ff]">YOU KEEP MEMORIES</span>
</h1>
            <p className="text-gray-200 text-lg max-w-lg leading-relaxed mb-8">
              With over 15 years of experience, Charan Packers and Movers has become 
              a trusted name in relocation services across South India.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="group bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-4 font-bold uppercase tracking-wider
                         transition-all duration-300 flex items-center gap-3 border-2 border-[#0066ff] hover:border-[#0052cc]
                         hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Stats Section Below Banner */}
      <section ref={statsAnimation.elementRef} className="w-full bg-[#F7F3C9] pt-0">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="py-12 lg:py-20">
            {/* Right Stats Grid - Sharp Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-2 border-[#0066ff]/30 max-w-5xl">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card bg-white p-6 sm:p-8 border-r-2 border-b-2 border-[#0066ff]/30 hover:bg-gray-50 transition-colors last:border-r-0"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0066ff] mb-2 font-display">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Sharp Cards */}
      <section ref={missionAnimation.elementRef} className="w-full py-20 lg:py-28 bg-[#F7F3E9]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16 mission-header">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#0066ff]" />
              <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                Our Purpose
              </span>
              <div className="w-12 h-0.5 bg-[#0066ff]" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0a2540]">
              Mission & <span className="text-[#0066ff]">Vision</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 max-w-5xl mx-auto border-2 border-gray-200">
            {/* Mission */}
            <div className="mission-card bg-white p-8 sm:p-12 hover:bg-gray-50 transition-colors group">
              <div className="w-16 h-16 bg-[#0066ff]/10 border-2 border-[#0066ff]/20 flex items-center justify-center mb-6 group-hover:bg-[#0066ff] group-hover:border-[#0066ff] transition-all">
                <Target className="w-8 h-8 text-[#0066ff] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0a2540] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, efficient, and affordable moving services that exceed 
                customer expectations. We aim to make every relocation a positive 
                experience through professionalism, care, and attention to detail.
              </p>
            </div>
            
            {/* Vision */}
            <div className="mission-card bg-[#0a2540] p-8 sm:p-12 group">
              <div className="w-16 h-16 bg-[#0066ff]/20 border-2 border-[#0066ff] flex items-center justify-center mb-6 group-hover:bg-[#0066ff] transition-all">
                <Target className="w-8 h-8 text-[#0066ff] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be India's most trusted moving company, known for reliability, 
                innovation, and customer-centric service. We envision a future where 
                moving is never a source of stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Sharp Grid */}
      <section ref={whyAnimation.elementRef} className="w-full py-20 lg:py-28 bg-[#F3EAD7] border-y-2 border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Image with Sharp Frame */}
            <div className="relative why-us-image">
              <div className="relative border-4 border-[#0a2540] p-2">
  <img 
    src="wcu.jpeg"
    alt="Professional packing services"
    className="w-full aspect-square object-cover"
  />
</div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#0066ff]" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#0066ff]" />
            
            </div>
            
            
            {/* Right - Content Grid */}
            <div>
              <div className="flex items-center gap-3 mb-4 why-us-title">
                <div className="w-12 h-0.5 bg-[#0066ff]" />
                <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                  Why Us
                </span>
              </div>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] mb-6">
                Why Clients<br />
                <span className="text-[#0066ff]">Choose Us?</span>
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We combine expertise, care, and competitive pricing to deliver 
                moving experiences that exceed expectations every single time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border-2 border-gray-200">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={index} 
                    className="why-card bg-white p-6 hover:bg-[#0a2540] group transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-[#0066ff]/10 border border-[#0066ff]/20 flex items-center justify-center mb-4 group-hover:bg-[#0066ff] group-hover:border-[#0066ff] transition-all">
                      <item.icon className="w-6 h-6 text-[#0066ff] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-[#0a2540] text-lg mb-1 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Sharp Steps */}
      <section ref={processAnimation.elementRef} className="w-full py-20 lg:py-28 bg-[#0a2540]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16 process-header">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#0066ff]" />
              <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                How It Works
              </span>
              <div className="w-12 h-0.5 bg-[#0066ff]" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Our <span className="text-[#0066ff]">Process</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-2 border-white/10 max-w-6xl mx-auto">
            {processSteps.map((item, index) => (
              <div 
                key={index} 
                className="process-card bg-[#0a2540] p-6 sm:p-8 relative group hover:bg-[#0d2d4a] transition-colors"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/5 font-display">
                  {item.step}
                </div>
                
                <div className="w-14 h-14 bg-[#0066ff]/10 border-2 border-[#0066ff] flex items-center justify-center mb-6 group-hover:bg-[#0066ff] transition-all">
                  <item.icon className="w-7 h-7 text-[#0066ff] group-hover:text-white transition-colors" />
                </div>
                
                <div className="text-[#0066ff] text-sm font-bold mb-2">STEP {item.step}</div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                
                {/* Connector Line (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-px w-px h-20 bg-[#0066ff]/30 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section ref={partnersAnimation.elementRef} className="w-full py-20 lg:py-28 bg-[#F7F3E9]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          
          {/* Success Stories Section */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16 partners-header">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-[#0066ff]" />
                <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                  Our Partners
                </span>
                <div className="w-12 h-0.5 bg-[#0066ff]" />
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0a2540]">
                Trusted By<br />
                <span className="text-[#0066ff]">Leading Corporations</span>
              </h2>
              <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl mx-auto">
                India's top companies including SBI, LIC, Infosys, Wipro, TCS, HDFC, ICICI, and Axis Bank rely on us for their relocation and moving solutions.
              </p>
            </div>

            {/* Corporate Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Partner 1 - SBI */}
              <div className="partner-card group border-2 border-gray-200 hover:border-[#0066ff] transition-all p-8 text-center">
                <img 
                  src="/clients/sbi.png"
                  alt="State Bank of India"
                  className="h-16 object-contain mx-auto mb-6"
                />
                <h3 className="font-display font-bold text-xl text-[#0a2540] mb-3">
                  State Bank of India
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Trusted partner for employee relocation across India. We handle smooth transitions for SBI staff movements nationwide.
                </p>
              </div>

              {/* Partner 2 - Infosys */}
              <div className="partner-card group border-2 border-gray-200 hover:border-[#0066ff] transition-all p-8 text-center">
                <img 
                  src="/clients/infosys.png"
                  alt="Infosys"
                  className="h-16 object-contain mx-auto mb-6"
                />
                <h3 className="font-display font-bold text-xl text-[#0a2540] mb-3">
                  Infosys Limited
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Expert in tech company relocations. We've managed office setups and employee moves for Infosys multiple times.
                </p>
              </div>

              {/* Partner 3 - TCS */}
              <div className="partner-card group border-2 border-gray-200 hover:border-[#0066ff] transition-all p-8 text-center">
                <img 
                  src="/clients/tcs.webp"
                  alt="Tata Consultancy Services"
                  className="h-16 object-contain mx-auto mb-6"
                />
                <h3 className="font-display font-bold text-xl text-[#0a2540] mb-3">
                  Tata Consultancy
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Reliable partner for large-scale corporate relocations. We've successfully managed TCS facility moves and transitions.
                </p>
              </div>

              {/* Partner 4 - Wipro */}
              <div className="partner-card group border-2 border-gray-200 hover:border-[#0066ff] transition-all p-8 text-center">
                <img 
                  src="/clients/wipro.png"
                  alt="Wipro Technologies"
                  className="h-16 object-contain mx-auto mb-6"
                />
                <h3 className="font-display font-bold text-xl text-[#0a2540] mb-3">
                  Wipro Technologies
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Trusted for employee relocation and office setup services. We've partnered with Wipro for seamless transitions nationwide.
                </p>
              </div>

              {/* Partner 5 - HDFC */}
              <div className="partner-card group border-2 border-gray-200 hover:border-[#0066ff] transition-all p-8 text-center">
                <img 
                  src="/clients/hdfc.webp"
                  alt="HDFC Bank"
                  className="h-16 object-contain mx-auto mb-6"
                />
                <h3 className="font-display font-bold text-xl text-[#0a2540] mb-3">
                  HDFC Bank
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Specialized in banking sector relocations. We've managed branch setups and employee transitions for HDFC Bank.
                </p>
              </div>

              {/* Partner 6 - LIC */}
              <div className="partner-card group border-2 border-gray-200 hover:border-[#0066ff] transition-all p-8 text-center">
                <img 
                  src="/clients/lic.png"
                  alt="Life Insurance Corporation"
                  className="h-16 object-contain mx-auto mb-6"
                />
                <h3 className="font-display font-bold text-xl text-[#0a2540] mb-3">
                  Life Insurance Corp
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Expert in insurance sector moves. We've consistently delivered reliable relocation services for LIC across regions.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}