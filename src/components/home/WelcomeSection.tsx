import React from 'react';
import { Link } from 'react-router-dom';
import { HOTEL_INFO } from '../../data/mockData';
import { Sparkles, Compass, Shield, ArrowRight } from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] text-[#202020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heritage Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
                  alt="Colonnaded Verandah at TaverenOak"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Smaller Detail Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/5 sm:w-1/2 overflow-hidden rounded-lg shadow-2xl border-4 border-white aspect-[4/3] hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
                  alt="Archival 18th Century Lithograph Detail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vintage Seal Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#122820] text-[#C5A059] border-2 border-[#C5A059] p-4 rounded-lg shadow-xl text-center">
                <span className="font-cinzel text-xl sm:text-2xl font-bold block leading-none">1936</span>
                <span className="text-[9px] uppercase tracking-widest text-white/80 block mt-1">Founding Year</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#AA8640]">
              <Compass className="w-4 h-4" />
              <span>A Monument of Indian Hospitality</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#122820] leading-tight">
              An Architectural Masterpiece Inscribed in the Heart of New Delhi
            </h2>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Step through our wrought-iron gates lined with twenty-four stately king palms and enter a realm of serenity and sovereign grandeur. Inaugurated in 1936 by Lord Willingdon and designed in consultation with Sir Edwin Lutyens, TaverenOak was conceived as the capital’s most prestigious social address.
            </p>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Today, our corridors serve as an accredited living museum showcasing over 4,000 museum-grade colonial lithographs, rare Persian silk carpets, and Burma teak artifacts—offering guests a rare immersion into the romance of India’s grand heritage.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5DFD5]">
              <div className="p-3 bg-[#F3EFEA] rounded border border-[#E0D8CB]">
                <span className="font-serif-luxury text-2xl font-bold text-[#122820] block">235</span>
                <span className="text-xs text-[#706A5F] mt-1 block">Rooms & Bespoke Heritage Suites</span>
              </div>
              <div className="p-3 bg-[#F3EFEA] rounded border border-[#E0D8CB]">
                <span className="font-serif-luxury text-2xl font-bold text-[#122820] block">6</span>
                <span className="text-xs text-[#706A5F] mt-1 block">Celebrated Culinary Sanctuaries</span>
              </div>
              <div className="p-3 bg-[#F3EFEA] rounded border border-[#E0D8CB]">
                <span className="font-serif-luxury text-2xl font-bold text-[#122820] block">4,000+</span>
                <span className="text-xs text-[#706A5F] mt-1 block">Original Colonial Artworks</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/heritage"
                className="inline-flex items-center gap-2 bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase px-6 py-3 rounded shadow transition-colors"
              >
                <span>Explore The Living Museum</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/rooms"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-[#EAE4D9] text-[#122820] border border-[#122820] font-cinzel text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-colors"
              >
                <span>View Accommodations</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
