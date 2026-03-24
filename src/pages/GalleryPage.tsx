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

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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
      <section className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative mt-20 sm:mt-24 lg:mt-28">
        <img 
          src="gallery.png" 
          alt="Gallery Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex items-center px-6 lg:px-16">
          <div className="max-w-2xl">
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
      <section className="w-full bg-[#F7F3E9] py-16">
        <div className="px-4 sm:px-6 lg:px-12">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-sm ${
                  selectedCategory === category
                    ? 'bg-[#0066ff] text-white'
                    : 'bg-[#EFE4C9] border hover:border-[#C2A96F]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer"
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