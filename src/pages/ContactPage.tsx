import { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm ${formData.name}. I want to move from ${formData.from} to ${formData.to}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/919177965758?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="relative overflow-x-hidden">
      
      {/* Banner Section with Image & Black Gradient */}
      <section className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative mt-20 sm:mt-24 lg:mt-28">
        <img 
          src="/contact.png" 
          alt="Contact Banner" 
          className="w-full h-full object-cover"
        />
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Text Content Over Banner */}
        <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#0066ff]" />
              <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                Contact Us
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
              Let's Start<br />
              <span className="text-[#0066ff]">Your Move</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-lg leading-relaxed mb-8">
              Have questions or ready to relocate? Reach out and our team will respond within 2 hours.
            </p>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-[#F7F3E9] py-16 sm:py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">

          {/* Main Grid - Map + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-16 lg:mb-20 border border-gray-200">
            
            {/* Left - Contact Form - Sharp Angular Design (First on mobile, left on desktop) */}
            <div className="bg-[#0a2540] p-8 sm:p-10 lg:p-12 lg:order-2">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 border-2 border-[#0066ff]">
                  <div className="w-16 h-16 bg-[#0066ff] flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    We'll get back to you within 2 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                    Request a Quote
                  </h3>
                  <p className="text-gray-400 mb-8 text-sm">
                    Fill out the form below and we'll respond via WhatsApp within 2 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-white font-semibold text-sm mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white placeholder-gray-500 
                                   focus:border-[#0066ff] focus:bg-white/10 focus:outline-none transition-all tap-target
                                   hover:border-white/40"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-white font-semibold text-sm mb-2 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white placeholder-gray-500 
                                   focus:border-[#0066ff] focus:bg-white/10 focus:outline-none transition-all tap-target
                                   hover:border-white/40"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* From/To Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-semibold text-sm mb-2 uppercase tracking-wider">
                          From *
                        </label>
                        <input
                          type="text"
                          name="from"
                          value={formData.from}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white placeholder-gray-500 
                                     focus:border-[#0066ff] focus:bg-white/10 focus:outline-none transition-all tap-target
                                     hover:border-white/40"
                          placeholder="Current city"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold text-sm mb-2 uppercase tracking-wider">
                          To *
                        </label>
                        <input
                          type="text"
                          name="to"
                          value={formData.to}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white placeholder-gray-500 
                                     focus:border-[#0066ff] focus:bg-white/10 focus:outline-none transition-all tap-target
                                     hover:border-white/40"
                          placeholder="Destination"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white font-semibold text-sm mb-2 uppercase tracking-wider">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 text-white placeholder-gray-500 
                                   focus:border-[#0066ff] focus:bg-white/10 focus:outline-none transition-all resize-none tap-target
                                   hover:border-white/40"
                        placeholder="Tell us about your move..."
                      />
                    </div>

                    {/* Submit Button - Sharp */}
                    <button
                      type="submit"
                      className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white py-4 px-8 font-bold uppercase tracking-wider
                                 transition-all duration-300 flex items-center justify-center gap-3 group
                                 border border-[#0066ff] hover:border-[#0052cc] hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* WhatsApp Note */}
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-xs pt-2">
                      <span>We'll reply on WhatsApp within 2 hours</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </form>
                </div>
              )}
            </div>
            {/* Right - Embedded Google Map (Second on mobile, right on desktop) */}
            <div className="relative h-[400px] lg:h-[600px] bg-gray-100 overflow-hidden lg:order-1">
              <a
  href="https://www.google.com/maps?q=17.7494736,83.2490311"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full h-full"
>
  <iframe
    src="https://www.google.com/maps?q=17.7494736,83.2490311&z=17&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
    title="Charan Packers and Movers Location"
  />
</a>
            </div>          </div>

          {/* Quick Contact */}
          <div className="bg-[#0a2540] p-6 border-l-4 border-[#0066ff]">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Direct Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919177965758"
                className="flex items-center gap-3 text-white hover:text-[#0066ff] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center group-hover:bg-[#0066ff] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Call Anytime</span>
                  <span className="font-bold">9177965758</span>
                </div>
              </a>
              <a 
                href="tel:+918499984699"
                className="flex items-center gap-3 text-white hover:text-[#0066ff] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center group-hover:bg-[#0066ff] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Call Anytime</span>
                  <span className="font-bold">8499984699</span>
                </div>
              </a>
              <a 
                href="mailto:charanpackersandmovers@gmail.com"
                className="flex items-center gap-3 text-white hover:text-[#0066ff] transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center group-hover:bg-[#0066ff] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Email Us</span>
                  <span className="font-bold text-sm">charanpackersandmovers@gmail.com</span>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Working Hours</span>
                  <span className="font-bold text-sm">Mon - Sun: 6AM - 9PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
