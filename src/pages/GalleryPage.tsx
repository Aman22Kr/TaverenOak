import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', label: 'All Visuals' },
    { id: 'Architecture', label: 'Colonial Architecture' },
    { id: 'Suites', label: 'Suites & Rooms' },
    { id: 'Dining', label: 'Gastronomy & Sanctuaries' },
    { id: 'Spa', label: 'The Spa & Wellness' },
    { id: 'Art & Heritage', label: 'Museum Art Archives' },
    { id: 'Celebrations', label: 'Weddings & Galas' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="relative py-20 bg-[#122820] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
            alt="Estate Chronicle Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Estate Visual Chronicle
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            The TaverenOak Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light">
            An evocative journey through colonnaded verandahs, palatial master bedrooms, and hand-painted dining temples.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-[#E3DBD0] p-3 flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#122820] text-[#C5A059] font-bold shadow'
                  : 'bg-[#FAF8F5] text-[#555] hover:bg-[#F0ECE1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-200 border border-[#E3DBD0] shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] text-[#C5A059] uppercase tracking-wider font-bold">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E3DBD0] mt-1 line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#C5A059] font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Photography</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Container */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-lg overflow-hidden max-h-[70vh] shadow-2xl border border-white/20">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="text-center mt-4 text-white max-w-xl px-4">
              <span className="text-[10px] text-[#C5A059] uppercase tracking-widest font-bold">
                {currentItem.category}
              </span>
              <h4 className="font-serif-luxury text-2xl font-bold mt-0.5">
                {currentItem.title}
              </h4>
              <p className="text-xs text-[#D8CFBF] mt-1">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <AdvertisementPlaceholder slotName="Fine Art Gallery Auctions, Vintage Lithographs & Rare Books" />
    </div>
  );
};
