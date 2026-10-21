import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHotel } from '../context/HotelContext';
import { SPECIAL_OFFERS } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { Tag, Calendar, Check, ArrowRight, Sparkles } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const { formatPrice, openBookingModal } = useHotel();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredOffers = activeCategory === 'all'
    ? SPECIAL_OFFERS
    : SPECIAL_OFFERS.filter(o => o.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="relative py-20 bg-[#122820] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury Offers Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Curated Privileges
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            Special Offers & Packages
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light">
            Indulge in seasonal sabbaticals, romantic candlelit getaways, holistic Ayurvedic detoxes, and epicurean journeys with bespoke privileges.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-[#E3DBD0] p-3 flex flex-wrap gap-2 justify-center">
          {[
            { id: 'all', label: 'All Curated Packages' },
            { id: 'Stay', label: 'Suite Sabbaticals' },
            { id: 'Celebration', label: 'Romantic Celebrations' },
            { id: 'Wellness', label: 'Ayurvedic Wellness' },
            { id: 'Culinary', label: 'Gastronomy Trails' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#122820] text-[#C5A059] font-bold shadow'
                  : 'bg-[#FAF8F5] text-[#555] hover:bg-[#F0ECE1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredOffers.map(offer => (
            <div
              key={offer.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-stone-200">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#C5A059] text-[#122820] text-xs uppercase font-bold tracking-wider px-3 py-1 rounded shadow">
                    {offer.discountBadge}
                  </span>
                  <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded">
                    Valid till {offer.validTill}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#122820] mb-1">
                    <Link to={`/offers/${offer.id}`} className="hover:text-[#AA8640] transition-colors">
                      {offer.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#AA8640] italic font-medium mb-3">
                    "{offer.tagline}"
                  </p>

                  <p className="text-xs text-[#555] leading-relaxed mb-4">
                    {offer.description}
                  </p>

                  <div className="space-y-1.5 py-3 border-y border-[#F0ECE1]">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C8374] block">
                      Package Inclusions:
                    </span>
                    {offer.inclusions.slice(0, 4).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#333]">
                        <Check className="w-3.5 h-3.5 text-[#122820] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-[#F0ECE1] flex items-center justify-between gap-4 mt-2">
                <div>
                  <span className="text-[10px] text-[#8C8374] uppercase block">Package Rate</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-luxury text-2xl font-bold text-[#122820]">
                      {formatPrice(offer.discountedPriceINR)}
                    </span>
                    <span className="text-xs text-[#999] line-through">
                      {formatPrice(offer.basePriceINR)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/offers/${offer.id}`}
                    className="text-xs font-semibold text-[#122820] hover:text-[#AA8640] px-3 py-2 transition-colors"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => openBookingModal()}
                    className="bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded shadow transition-all cursor-pointer"
                  >
                    Book Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Luxury Chauffeur Services & Sovereign Concierge Privileges" />
    </div>
  );
};
