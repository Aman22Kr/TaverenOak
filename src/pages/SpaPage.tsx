import React, { useState, useEffect } from 'react';
import { useHotel } from '../context/HotelContext';
import { SPA_TREATMENTS } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { 
  Sparkles, 
  Clock, 
  Check, 
  Flower2, 
  Calendar, 
  Sun, 
  Waves, 
  Heart,
  Droplets
} from 'lucide-react';

export const SpaPage: React.FC = () => {
  const { formatPrice, openSpaModal } = useHotel();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', label: 'All Therapies & Ceremonies' },
    { id: 'Ayurvedic Rituals', label: 'Ancient Ayurvedic Rituals' },
    { id: 'Imperial Signatures', label: 'Imperial Signatures & Sufi' },
    { id: 'Therapeutic Massages', label: 'Therapeutic Massages' },
    { id: 'Hydrotherapy & Facials', label: 'Hydrotherapy & 24K Facials' }
  ];

  const filteredTreatments = selectedCategory === 'all'
    ? SPA_TREATMENTS
    : SPA_TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="relative py-24 bg-[#122820] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
            alt="The Imperial Spa Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Sanctuary of Tranquility & Longevity
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            The Imperial Spa & Ayurvedic Wellness Oasis
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light leading-relaxed">
            Spanning sixteen thousand square feet of marble pavilions, therapeutic water pools, and fragrant gardens, our spa synthesizes ancient Vedic healing with imperial opulence.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => openSpaModal()}
              className="bg-[#C5A059] hover:bg-[#D4B066] text-[#122820] font-cinzel text-xs font-bold tracking-widest uppercase px-6 py-3 rounded shadow-lg transition-all cursor-pointer"
            >
              Book Spa Appointment Online
            </button>
          </div>
        </div>
      </div>

      {/* Wellness Facilities Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-[#E3DBD0] p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <Flower2 className="w-6 h-6 text-[#AA8640] mx-auto mb-2" />
            <h4 className="font-semibold text-xs uppercase text-[#122820]">Ayurvedic Vaidya</h4>
            <p className="text-[11px] text-[#777] mt-1">Personalized Dosha analysis & custom botanical decoctions</p>
          </div>
          <div>
            <Waves className="w-6 h-6 text-[#AA8640] mx-auto mb-2" />
            <h4 className="font-semibold text-xs uppercase text-[#122820]">Garden Pool & Jacuzzis</h4>
            <p className="text-[11px] text-[#777] mt-1">Temperature-regulated outdoor pool surrounded by king palms</p>
          </div>
          <div>
            <Droplets className="w-6 h-6 text-[#AA8640] mx-auto mb-2" />
            <h4 className="font-semibold text-xs uppercase text-[#122820]">Hydrotherapy Hammam</h4>
            <p className="text-[11px] text-[#777] mt-1">Turkish steam chambers & Scandinavian pine dry saunas</p>
          </div>
          <div>
            <Sun className="w-6 h-6 text-[#AA8640] mx-auto mb-2" />
            <h4 className="font-semibold text-xs uppercase text-[#122820]">Sunrise Royal Yoga</h4>
            <p className="text-[11px] text-[#777] mt-1">Complimentary morning hatha yoga on the sprawling lawns</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#122820] text-[#C5A059] font-bold shadow'
                  : 'bg-white text-[#605B52] border border-[#DDD5C5] hover:bg-[#F3EFEA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Treatment Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map(treatment => (
            <div
              key={treatment.id}
              className="group bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#122820]/90 backdrop-blur-md text-[#C5A059] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                    {treatment.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif-luxury text-xl font-bold text-[#122820]">
                      {treatment.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#8C806D] font-medium mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#AA8640]" />
                    <span>Duration: {treatment.durationMinutes} Minutes</span>
                  </div>

                  <p className="text-xs text-[#555] leading-relaxed mb-4">
                    {treatment.description}
                  </p>

                  <div className="space-y-1.5 py-3 border-t border-[#F0ECE1]">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C8374] block">
                      Holistic Benefits:
                    </span>
                    {treatment.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[#444]">
                        <Check className="w-3.5 h-3.5 text-[#AA8640] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F0ECE1] flex items-center justify-between gap-3 mt-4">
                <div>
                  <span className="text-[10px] text-[#8C8374] uppercase block">Ritual Investment</span>
                  <span className="font-serif-luxury text-xl font-bold text-[#122820]">
                    {formatPrice(treatment.priceINR)}
                  </span>
                </div>
                <button
                  onClick={() => openSpaModal(treatment.id)}
                  className="bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded shadow transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Ritual</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Organic Ayurvedic Botanicals, Essential Oils & Yoga Retreats" />
    </div>
  );
};
