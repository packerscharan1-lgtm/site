import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useGsapAnimation } from '../hooks/useGsapAnimation';

const galleryImages = [
  // Moving Category
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
    src: '/gallery/moving/WhatsApp Image 2026-03-21 at 00.16.28 (2).jpeg',
    alt: 'Moving team in action',
    category: 'Moving',
  },
  {
    src: '/gallery/moving/WhatsApp Image 2026-03-21 at 00.16.34 (1).jpeg',
    alt: 'Professional moving service',
    category: 'Moving',
  },
  {
    src: '/gallery/moving/WhatsApp Image 2026-03-21 at 00.16.38 (2).jpeg',
    alt: 'Furniture handling and transport',
    category: 'Moving',
  },
  {
    src: '/gallery/moving/WhatsApp Image 2026-03-21 at 00.16.53 (1).jpeg',
    alt: 'Moving equipment and logistics',
    category: 'Moving',
  },

  // Packing Category
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
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.17.jpeg',
    alt: 'Quality packing services',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.18 (1).jpeg',
    alt: 'Organized packing system',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.18.jpeg',
    alt: 'Expert packing techniques',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.19.jpeg',
    alt: 'Protective wrapping and packing',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.20 (2).jpeg',
    alt: 'Secure packing for delicate items',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.21.jpeg',
    alt: 'Packing materials and supplies',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.22 (2).jpeg',
    alt: 'Professional packing service',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.25.jpeg',
    alt: 'Labeled boxes for easy transport',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.26 (1).jpeg',
    alt: 'Efficient packing methods',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.27 (1).jpeg',
    alt: 'Packing expertise and care',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.27 (2).jpeg',
    alt: 'Fragile item packing',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.29.jpeg',
    alt: 'Professional packing supplies',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.30 (2).jpeg',
    alt: 'Organized packing area',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.31 (1).jpeg',
    alt: 'Secure box packing',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.33 (1).jpeg',
    alt: 'Careful wrapping process',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.33.jpeg',
    alt: 'Professional packing team',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.34.jpeg',
    alt: 'Packing materials in use',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.35.jpeg',
    alt: 'Bubble wrap protection',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.36 (1).jpeg',
    alt: 'Packing service excellence',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.36 (2).jpeg',
    alt: 'Professional box preparation',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.36.jpeg',
    alt: 'Quality packing standards',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.38 (1).jpeg',
    alt: 'Expert packing and wrapping',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.38.jpeg',
    alt: 'Efficient packing workflow',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.39 (2).jpeg',
    alt: 'Professional packing materials',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.40 (1).jpeg',
    alt: 'Careful item protection',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.40 (2).jpeg',
    alt: 'Packing process in progress',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.42 (2).jpeg',
    alt: 'Secure packing solutions',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.42.jpeg',
    alt: 'Professional packing standards',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.44 (1).jpeg',
    alt: 'Quality wrapping service',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.44.jpeg',
    alt: 'Protective packing methods',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.45.jpeg',
    alt: 'Expert item packing',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.46 (1).jpeg',
    alt: 'Packing excellence',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.47.jpeg',
    alt: 'Professional packing setup',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.51.jpeg',
    alt: 'Safe item packaging',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.52.jpeg',
    alt: 'Quality packing service',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.53.jpeg',
    alt: 'Packing expertise showcase',
    category: 'Packing',
  },
  {
    src: '/gallery/packing/WhatsApp Image 2026-03-21 at 00.16.54.jpeg',
    alt: 'Professional packing team in action',
    category: 'Packing',
  },

  // Transport Category
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
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.17 (2).jpeg',
    alt: 'Fleet of moving vehicles',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.19 (1).jpeg',
    alt: 'Professional transport service',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.20 (1).jpeg',
    alt: 'Cargo loading and securing',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.23 (2).jpeg',
    alt: 'Vehicle transportation logistics',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.24 (1).jpeg',
    alt: 'Transport equipment and tools',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.24.jpeg',
    alt: 'Professional moving fleet',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.25 (2).jpeg',
    alt: 'Safe cargo transportation',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.29 (2).jpeg',
    alt: 'Transport and delivery service',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.30 (1).jpeg',
    alt: 'Professional vehicle maintenance',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.30.jpeg',
    alt: 'Fleet vehicle inspection',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.35 (1).jpeg',
    alt: 'Cargo securing methods',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.39 (1).jpeg',
    alt: 'Modern moving vehicles',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.40.jpeg',
    alt: 'Transport logistics management',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.41.jpeg',
    alt: 'Professional transport team',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.42 (1).jpeg',
    alt: 'Safe loading procedures',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.43.jpeg',
    alt: 'Vehicle fleet management',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.47 (1).jpeg',
    alt: 'Transport route planning',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.50 (1).jpeg',
    alt: 'Professional moving equipment',
    category: 'Transport',
  },
  {
    src: '/gallery/transport/WhatsApp Image 2026-03-21 at 00.16.50.jpeg',
    alt: 'Transport service excellence',
    category: 'Transport',
  },

  // Storage Category
  {
    src: '/gallery/storage/WhatsApp Image 2026-03-21 at 00.16.28 (1).jpeg',
    alt: 'Warehouse storage facility',
    category: 'Storage',
  },
  {
    src: '/gallery/storage/WhatsApp Image 2026-03-21 at 00.16.28 (2).jpeg',
    alt: 'Organized storage racks',
    category: 'Storage',
  },
  {
    src: '/gallery/storage/WhatsApp Image 2026-03-21 at 00.16.32 (1).jpeg',
    alt: 'Secure storage compartments',
    category: 'Storage',
  },
  {
    src: '/gallery/storage/WhatsApp Image 2026-03-21 at 00.16.34 (1).jpeg',
    alt: 'Climate-controlled storage',
    category: 'Storage',
  },
  {
    src: '/gallery/storage/WhatsApp Image 2026-03-21 at 00.16.37.jpeg',
    alt: 'Professional storage services',
    category: 'Storage',
  },
];

const categories = ['All', 'Moving', 'Packing', 'Transport', 'Storage'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const bannerAnimation = useGsapAnimation();
  const filtersAnimation = useGsapAnimation();
  const imagesAnimation = useGsapAnimation();

  useEffect(() => {
    bannerAnimation.slideInFromLeft('.gallery-banner-content');
  }, []);

  useEffect(() => {
    filtersAnimation.popOut('.gallery-filter', 0.08);
  }, []);

  useEffect(() => {
    imagesAnimation.popOut('.gallery-image', 0.05);
  }, []);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <main className="relative overflow-x-hidden">
      
      {/* Banner */}
      <section ref={bannerAnimation.elementRef} className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative mt-20 sm:mt-24 lg:mt-28">
        <img 
          src="gallery.png" 
          alt="Gallery Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex items-center px-6 lg:px-16">
          <div className="gallery-banner-content max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#0066ff]" />
              <span className="text-[#0066ff] text-sm font-bold uppercase tracking-[0.2em]">
                Gallery
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Moves In <br />
              <span className="text-[#0066ff]">Action</span>
            </h1>

            <p className="text-gray-200 text-lg max-w-lg">
              See our team in action. From packing to delivery, we handle every step professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={filtersAnimation.elementRef} className="w-full bg-[#F7F3E9] py-16">
        <div className="px-4 sm:px-6 lg:px-12">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                className={`gallery-filter px-5 py-2 text-sm ${
                  selectedCategory === category
                    ? 'bg-[#0066ff] text-white'
                    : 'bg-[#EFE4C9] border hover:border-[#C2A96F]'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={imagesAnimation.elementRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="gallery-image group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-5 text-white"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-5 text-white"
          >
            <ChevronRight />
          </button>

          <img
            src={filteredImages[currentImage].src}
            className="max-h-[80vh]"
          />
        </div>
      )}
    </main>
  );
}