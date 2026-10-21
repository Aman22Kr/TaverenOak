import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHotel } from '../../context/HotelContext';
import { ROOMS_DATA } from '../../data/mockData';
import { Bookmark, ArrowRight, Check, Maximize2, Users, BedDouble } from 'lucide-react';

export const RoomsCarousel: React.FC = () => {
  const { formatPrice, openBookingModal, toggleFavorite, isFavorite } = useHotel();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredRooms = activeFilter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter(r => r.category === activeFilter);

  return (
    <section className="py-20 bg-[#F4EDE0]/50 border-y border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#AA8640] block mb-2">
              Sovereign Sanctums
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#122820]">
              Rooms & Heritage Suites
            </h2>
            <p className="text-sm text-[#666] max-w-xl mt-2">
              Each chamber at TaverenOak tells a distinct story of colonial grandeur, soaring 14-foot ceilings, and hand-selected antique craftsmanship.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {[
              { id: 'all', label: 'All Accommodations' },
              { id: 'Colonial Room', label: 'Colonial Rooms' },
              { id: 'Art Deco Suite', label: 'Art Deco Suites' },
              { id: 'Royal Imperial Suite', label: 'Royal Imperial' },
              { id: 'Eliza Room', label: 'Eliza (Women)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#122820] text-[#C5A059] shadow-sm font-semibold'
                    : 'bg-white/80 text-[#605B52] hover:bg-white hover:text-[#122820] border border-[#DDD5C5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map(room => {
            const favorited = isFavorite(room.id);
            return (
              <div
                key={room.id}
                className="group bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-[#122820]/90 backdrop-blur-sm text-[#C5A059] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                    {room.category}
                  </span>

                  {/* Bookmark Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(room.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                      favorited
                        ? 'bg-[#122820] text-[#C5A059]'
                        : 'bg-black/40 text-white hover:bg-[#122820] hover:text-[#C5A059]'
                    }`}
                    aria-label={`Save ${room.name} to favorites`}
                  >
                    <Bookmark className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-serif-luxury text-xl font-semibold text-[#122820] group-hover:text-[#AA8640] transition-colors">
                        <Link to={`/rooms/${room.id}`}>
                          {room.name}
                        </Link>
                      </h3>
                      <span className="text-xs text-amber-800 font-semibold shrink-0">
                        ★ {room.rating}
                      </span>
                    </div>

                    <p className="text-xs text-[#6B655B] line-clamp-2 leading-relaxed mb-4">
                      {room.tagline}
                    </p>

                    {/* Room Meta Badges */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#706A5F] py-2 border-y border-[#F0ECE1] mb-4">
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#AA8640]" />
                        {room.sizeSqFt} sq ft
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <BedDouble className="w-3.5 h-3.5 text-[#AA8640]" />
                        {room.bedType}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#AA8640]" />
                        Max {room.maxGuests}
                      </span>
                    </div>

                    {/* Top Amenities List */}
                    <ul className="space-y-1 mb-5 text-[11px] text-[#555]">
                      {room.amenities.slice(0, 3).map((amenity, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <Check className="w-3.5 h-3.5 text-[#122820] shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Actions */}
                  <div className="pt-4 border-t border-[#F0ECE1] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-[#8C8374] uppercase block">Per Night</span>
                      <span className="font-serif-luxury text-xl font-bold text-[#122820]">
                        {formatPrice(room.pricePerNightINR)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/rooms/${room.id}`}
                        className="text-xs font-semibold text-[#122820] hover:text-[#AA8640] px-3 py-2 transition-colors"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => openBookingModal(room.id)}
                        className="bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded shadow transition-all cursor-pointer"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Rooms page */}
        <div className="mt-12 text-center">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-[#122820] hover:text-[#AA8640] transition-colors border-b-2 border-[#122820] pb-1 hover:border-[#AA8640]"
          >
            <span>Explore All Suites, Floorplans & Inclusions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
