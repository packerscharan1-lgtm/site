import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'Are Charan Packers reliable?',
    answer: 'Yes, we are a licensed and insured moving company with over 15 years of experience. We have completed 12,000+ moves with a 99% customer satisfaction rate. Our team is trained, background-verified, and committed to handling your belongings with care.',
  },
  {
    question: 'How do I verify original Charan Packers?',
    answer: 'Always check our official website, verify our GST registration, and call our official number 8499984699. Our team members wear branded uniforms and carry company ID cards. Never pay deposits to unverified individuals.',
  },
  {
    question: 'Do packers move everything?',
    answer: 'We move almost all household and office items including furniture, appliances, electronics, and personal belongings. However, we cannot transport hazardous materials, perishables, valuables like jewelry (we recommend you carry these), and certain restricted items.',
  },
  {
    question: 'How much does a local move cost?',
    answer: 'Local move costs depend on the volume of items, distance, and services required. A typical 1BHK local move starts from ₹3,000-5,000. Contact us for a free, detailed quote based on your specific requirements.',
  },
  {
    question: 'Do you provide insurance for goods?',
    answer: 'Yes, we offer transit insurance for all moves. Basic coverage is included, and additional comprehensive insurance can be arranged for high-value items. We ensure your belongings are protected throughout the journey.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve major cities in South India including Visakhapatnam, Hyderabad, Vijayawada, Rajahmundry, Bangalore, and Chennai. We also handle long-distance moves across India.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F3E9] py-20 lg:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#0066ff]" />
            <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
              FAQ
            </span>
            <div className="w-12 h-0.5 bg-[#0066ff]" />
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0a2540] mb-6">
            Answers To Your <span className="text-[#0066ff]">Questions</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Everything you need to know about our moving services. Can't find what you're looking for? Contact our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left - Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#0a2540] p-8 border-l-4 border-[#0066ff] sticky top-28">
              <div className="w-14 h-14 bg-[#0066ff]/10 border-2 border-[#0066ff] flex items-center justify-center mb-6">
                <HelpCircle className="w-7 h-7 text-[#0066ff]" />
              </div>
              
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Still Have Questions?
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our team is here to help. Reach out directly for personalized assistance with your move.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+918499984699"
                  className="group flex items-center gap-4 bg-white/5 hover:bg-[#0066ff] p-4 transition-all duration-300 border border-white/10 hover:border-[#0066ff]"
                >
                  <div className="w-10 h-10 bg-[#0066ff] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wider block">Call Us</span>
                    <span className="text-white font-bold">8499984699</span>
                  </div>
                </a>
                
              </div>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-px bg-gray-300 border-2 border-gray-300">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white group"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full flex items-center justify-between p-6 sm:p-8 text-left transition-all duration-300 tap-target border-l-4 ${
                      openIndex === index 
                        ? 'bg-[#0a2540] border-[#0066ff] text-white' 
                        : 'bg-white border-transparent hover:bg-gray-50 text-[#0a2540]'
                    }`}
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-bold font-display ${
                        openIndex === index ? 'text-[#0066ff]' : 'text-gray-400'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-semibold text-base sm:text-lg pr-4 ${
                        openIndex === index ? 'text-white' : 'text-[#0a2540]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-[#0066ff] rotate-180' 
                        : 'bg-gray-100 group-hover:bg-[#0066ff]/10'
                    }`}>
                      <ChevronDown 
                        className={`w-5 h-5 transition-colors ${
                          openIndex === index ? 'text-white' : 'text-[#0066ff]'
                        }`} 
                      />
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 bg-[#0a2540] border-l-4 border-[#0066ff]">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}