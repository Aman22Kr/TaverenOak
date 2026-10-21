import React from 'react';
import { Link } from 'react-router-dom';
import { useHotel } from '../../context/HotelContext';
import { DINING_VENUES } from '../../data/mockData';
import { Utensils, Clock, Award, ArrowRight, Calendar } from 'lucide-react';

export const DiningShowcase: React.FC = () => {
  const { openTableModal } = useHotel();

  return (
    <section className="py-20 sm:py-24 bg-[#122820] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-3">
            <Utensils className="w-4 h-4" />
            <span>Award-Winning Gastronomy</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide">
            Culinary Sanctuaries of New Delhi
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D0C8B8] font-light leading-relaxed">
            From the historic colonial verandah of 1911 to the hand-painted temple walls of The Spice Route and the candlelit Tuscan courtyard of San Gimignano, every meal is an unforgettable voyage.
          </p>
        </div>

        {/* Featured Dining Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DINING_VENUES.slice(0, 3).map(venue => (
            <div
              key={venue.id}
              className="group bg-[#0E2019] rounded-xl overflow-hidden border border-[#2B4B3D] hover:border-[#C5A059]/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={venue.mainImage}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2019] via-transparent to-black/30" />
                  
                  {/* Cuisine Badge */}
                  <span className="absolute top-3 left-3 bg-[#122820]/90 backdrop-blur-md text-[#C5A059] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border border-[#C5A059]/30">
                    {venue.cuisine}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif-luxury text-2xl font-semibold text-white group-hover:text-[#C5A059] transition-colors mb-1">
                    <Link to={`/dining/${venue.id}`}>
                      {venue.name}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#C5A059] italic mb-3">
                    {venue.tagline}
                  </p>

                  <p className="text-xs text-[#B8AF9F] line-clamp-3 leading-relaxed mb-4">
                    {venue.description}
                  </p>

                  {/* Hours & Dress code */}
                  <div className="space-y-1.5 text-xs text-[#9E9585] py-3 border-y border-[#1F3D30]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>Dinner: {venue.hours.dinner} {venue.hours.lunch && `· Lunch: ${venue.hours.lunch}`}</span>
                    </div>
                    {venue.awards[0] && (
                      <div className="flex items-center gap-2 text-[11px] text-[#D5CCBC]">
                        <Award className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span className="truncate">{venue.awards[0]}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <Link
                  to={`/dining/${venue.id}`}
                  className="text-xs font-semibold text-[#D0C8B8] hover:text-white transition-colors"
                >
                  View Menu & Story →
                </Link>
                <button
                  onClick={() => openTableModal(venue.id)}
                  className="bg-[#C5A059] hover:bg-[#D4B066] text-[#122820] font-cinzel text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded shadow transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Dining Venues CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/dining"
            className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors border-b border-[#C5A059] pb-1"
          >
            <span>Explore All 6 Restaurants, Bars & The Patisserie</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
