import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryImages = [
  {
    src: '/gallery/moving/WhatsApp Image 2026-03-21 at 00.16.26.jpeg',
    alt: 'Professional movers carrying boxes',
    category: 'Moving',
  },
  {
    src: '/gallery/moving/WhatsApp Image 2026-03-21 at 00.16.28 (1).jpeg',
    alt: 'Team lifting furniture',
    category: 'Moving',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.16 (1).jpeg',
    alt: 'Packed boxes ready for transport',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.17 (1).jpeg',
    alt: 'Careful packing of items',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.17 (3).jpeg',
    alt: 'Professional packing materials',
    category: 'Packing',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.15.jpeg',
    alt: 'Moving truck on the road',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.16.jpeg',
    alt: 'Loading furniture into truck',
    category: 'Transport',
  },
  {
    src: '/gallery/storage/WhatsApp Image 2026-03-21 at 00.16.28 (1).jpeg',
    alt: 'Warehouse storage facility',
    category: 'Storage',
  },
];

const categories = ['All', 'Moving', 'Packing', 'Transport', 'Storage'];

interface GallerySectionProps {
  onPageChange?: (page: string) => void;
}

export default function GallerySection({ onPageChange }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <>
      <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[#0066ff] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
              Our Gallery
            </span>
            <h2 className="section-title text-[#0a2540] mb-3 sm:mb-4">
              Moves In <span className="text-[#0066ff]">Action</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              See our team in action. From packing to delivery, we handle every step professionally.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 font-medium text-xs sm:text-sm transition-all duration-300 tap-target ${
                  selectedCategory === category
                    ? 'bg-[#0066ff] text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#0066ff]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0a2540]/0 group-hover:bg-[#0a2540]/60 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-[#0a2540]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">{image.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8 sm:mt-12">
            <button 
              onClick={() => onPageChange && onPageChange('gallery')}
              className="btn-secondary"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-[#0a2540]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-[#0066ff] transition-colors tap-target"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 sm:left-6 text-white hover:text-[#0066ff] transition-colors tap-target p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 sm:right-6 text-white hover:text-[#0066ff] transition-colors tap-target p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          
          <div 
            className="max-w-[90vw] max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredImages[currentImage].src} 
              alt={filteredImages[currentImage].alt}
              className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-sm sm:text-base">{filteredImages[currentImage].alt}</p>
              <span className="text-[#0066ff] text-xs sm:text-sm">
                {filteredImages[currentImage].category} • {currentImage + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
