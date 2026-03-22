import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya R.',
    location: 'Visakhapatnam',
    rating: 5,
    text: 'They treated our stuff like their own. Everything arrived in perfect condition. Highly recommended!',
  },
  {
    name: 'Arjun M.',
    location: 'Hyderabad',
    rating: 5,
    text: 'Fast, polite, and nothing broken. The team was professional from start to finish. Best moving experience!',
  },
  {
    name: 'Sunita K.',
    location: 'Rajahmundry',
    rating: 5,
    text: 'Best moving experience we have had. On time, courteous staff, and very reasonable pricing.',
  },
  {
    name: 'Rahul S.',
    location: 'Vijayawada',
    rating: 5,
    text: 'Excellent service! The packing was done professionally and everything was delivered on time.',
  },
  {
    name: 'Lakshmi P.',
    location: 'Bangalore',
    rating: 5,
    text: 'Very reliable and trustworthy. They handled our office relocation seamlessly with zero downtime.',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-16">
          <div>
            <span className="text-[#0066ff] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
              Testimonials
            </span>
            <h2 className="section-title text-[#0a2540]">
              What People <span className="text-[#0066ff]">Say</span>
            </h2>
          </div>
          
          {/* Navigation Arrows - Desktop */}
          <div className="hidden sm:flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#0a2540] hover:bg-[#0066ff] hover:text-white transition-colors tap-target"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#0a2540] hover:bg-[#0066ff] hover:text-white transition-colors tap-target"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card p-5 sm:p-6 lg:p-8 relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-[#0066ff]/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066ff] fill-[#0066ff]" 
                  />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a2540] flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-[#0a2540] text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden justify-center gap-3 mt-6">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#0a2540] tap-target"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#0a2540] tap-target"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 tap-target ${
                index === currentIndex ? 'bg-[#0066ff] w-6' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
