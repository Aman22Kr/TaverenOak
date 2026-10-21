import React from 'react';
import { Link } from 'react-router-dom';
import { useHotel } from '../../context/HotelContext';
import { SPA_TREATMENTS } from '../../data/mockData';
import { Sparkles, Flower2, Heart, ArrowRight } from 'lucide-react';

export const SpaWellnessPreview: React.FC = () => {
  const { openSpaModal, formatPrice } = useHotel();

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] text-[#202020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#AA8640]">
              <Flower2 className="w-4 h-4" />
              <span>Holistic Healing & Sanctuary</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#122820] leading-tight">
              The Imperial Spa & Ayurvedic Wellness Oasis
            </h2>

            <p className="text-sm sm:text-base text-[#555] leading-relaxed">
              Spanning over 16,000 square feet of tranquil sanctuary, The Imperial Spa combines the ancient healing sciences of 5,000-year-old Ayurveda with mystic Sufi floral ceremonies, hydrotherapy, and modern holistic therapies.
            </p>

            {/* Treatment Snippets */}
            <div className="space-y-4 pt-2">
              {SPA_TREATMENTS.slice(0, 2).map(t => (
                <div
                  key={t.id}
                  className="p-4 bg-white rounded-lg border border-[#E3DBD0] flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <h4 className="font-serif-luxury text-lg font-semibold text-[#122820]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#706A5F] mt-0.5">
                      {t.durationMinutes} Minutes · {t.category}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif-luxury text-base font-bold text-[#122820] block">
                      {formatPrice(t.priceINR)}
                    </span>
                    <button
                      onClick={() => openSpaModal(t.id)}
                      className="text-xs text-[#AA8640] hover:text-[#122820] font-semibold transition-colors mt-0.5 inline-block"
                    >
                      Book Therapy →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/spa"
                className="inline-flex items-center gap-2 bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase px-6 py-3 rounded shadow transition-colors"
              >
                <span>View Full Spa Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => openSpaModal()}
                className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B066] text-[#122820] font-cinzel text-xs font-bold tracking-widest uppercase px-6 py-3 rounded shadow transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Reserve Spa Treatment</span>
              </button>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
                  alt="Ayurvedic Shirodhara Treatment Room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Detail */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 w-1/2 overflow-hidden rounded-xl shadow-2xl border-4 border-white aspect-square hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80"
                  alt="Aromatherapy Rose Petals and Essential Oils"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tag box */}
              <div className="absolute top-4 right-4 bg-[#122820]/95 backdrop-blur-md text-[#C5A059] border border-[#C5A059]/40 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider">
                Ranked Best Luxury Hotel Spa in Asia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
