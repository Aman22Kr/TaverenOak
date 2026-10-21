import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHotel } from '../context/HotelContext';
import { DINING_VENUES } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { Utensils, Clock, Award, Calendar, MapPin, Sparkles } from 'lucide-react';

export const DiningPage: React.FC = () => {
  const { openTableModal } = useHotel();
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredVenues = DINING_VENUES.filter(venue => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'asian') return venue.cuisine.toLowerCase().includes('asian');
    if (selectedFilter === 'italian') return venue.cuisine.toLowerCase().includes('italian');
    if (selectedFilter === 'indian') return venue.cuisine.toLowerCase().includes('indian');
    if (selectedFilter === 'tea') return venue.cuisine.toLowerCase().includes('tea') || venue.cuisine.toLowerCase().includes('french');
    if (selectedFilter === 'bar') return venue.cuisine.toLowerCase().includes('malt') || venue.cuisine.toLowerCase().includes('cocktail');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="relative py-20 bg-[#122820] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt="Dining Sanctuaries Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Legendary Gastronomy
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            Dining & Culinary Sanctuaries
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light">
            Embark on a sensorial journey across Southeast Asia, regional Italy, Anglo-Indian heritage, and French viennoiserie curated by celebrated master chefs.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-[#E3DBD0] p-3 flex flex-wrap gap-2 justify-center">
          {[
            { id: 'all', label: 'All Sanctuaries' },
            { id: 'asian', label: 'The Spice Route (Southeast Asian)' },
            { id: 'italian', label: 'San Gimignano (Tuscan Italian)' },
            { id: 'indian', label: "Daniell's Tavern (Pan-Indian)" },
            { id: 'tea', label: 'The Imperial Patisserie & Tea' },
            { id: 'bar', label: '1911 Bar & Heritage Malts' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#122820] text-[#C5A059] font-bold shadow'
                  : 'bg-[#FAF8F5] text-[#555] hover:bg-[#F0ECE1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Venues Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.map(venue => (
            <div
              key={venue.id}
              className="group bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={venue.mainImage}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#122820]/90 backdrop-blur-md text-[#C5A059] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                    {venue.cuisine}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="font-serif-luxury text-2xl font-semibold text-[#122820] group-hover:text-[#AA8640] transition-colors mb-1">
                    <Link to={`/dining/${venue.id}`}>
                      {venue.name}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#AA8640] italic mb-3">
                    {venue.tagline}
                  </p>

                  <p className="text-xs text-[#555] line-clamp-3 leading-relaxed mb-4">
                    {venue.description}
                  </p>

                  {/* Hours & Location */}
                  <div className="space-y-1.5 text-xs text-[#706A5F] py-3 border-y border-[#F0ECE1]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#AA8640] shrink-0" />
                      <span>Dinner: {venue.hours.dinner}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#AA8640] shrink-0" />
                      <span>{venue.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#888]">
                      <span>Dress: {venue.dressCode}</span>
                    </div>
                  </div>

                  {/* Signature Dishes */}
                  <div className="mt-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C8374] block mb-1.5">
                      Chef's Signature Creations:
                    </span>
                    <ul className="text-xs text-[#333] space-y-1">
                      {venue.signatureDishes.slice(0, 2).map((dish, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#AA8640] shrink-0" />
                          <span className="truncate">{dish}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 border-t border-[#F0ECE1] flex items-center justify-between gap-3 mt-4">
                <Link
                  to={`/dining/${venue.id}`}
                  className="text-xs font-semibold text-[#122820] hover:text-[#AA8640] transition-colors"
                >
                  View Full Menu & Story →
                </Link>
                <button
                  onClick={() => openTableModal(venue.id)}
                  className="bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-xs font-bold tracking-wider uppercase px-4 py-2 rounded shadow transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Single Malt Whiskies & Vintage Champagne Cellars" />
    </div>
  );
};
