import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHotel } from '../context/HotelContext';
import { ROOMS_DATA } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { 
  Search, 
  SlidersHorizontal, 
  Maximize2, 
  Users, 
  BedDouble, 
  Check, 
  Bookmark, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const RoomsPage: React.FC = () => {
  const { formatPrice, openBookingModal, toggleFavorite, isFavorite } = useHotel();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [minGuests, setMinGuests] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('featured');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', label: 'All Accommodations' },
    { id: 'Colonial Room', label: 'Colonial Heritage Rooms' },
    { id: 'Art Deco Suite', label: 'Art Deco Luxury Suites' },
    { id: 'Royal Imperial Suite', label: 'The Royal Imperial Suite' },
    { id: 'Eliza Room', label: 'Eliza (Women Travelers)' }
  ];

  const filteredRooms = ROOMS_DATA.filter(room => {
    const matchesCategory = selectedCategory === 'all' || room.category === selectedCategory;
    const matchesGuests = room.maxGuests >= minGuests;
    const query = searchTerm.toLowerCase();
    const matchesSearch = 
      room.name.toLowerCase().includes(query) ||
      room.tagline.toLowerCase().includes(query) ||
      room.description.toLowerCase().includes(query) ||
      room.amenities.some(a => a.toLowerCase().includes(query));

    return matchesCategory && matchesGuests && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.pricePerNightINR - b.pricePerNightINR;
    if (sortBy === 'price-high') return b.pricePerNightINR - a.pricePerNightINR;
    if (sortBy === 'size') return b.sizeSqFt - a.sizeSqFt;
    return b.rating - a.rating;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Page Header */}
      <div className="relative py-20 bg-[#122820] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
            alt="Heritage Suites Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Rest in Living History
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            Rooms & Palatial Suites
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light">
            Indulge in 1930s colonial grandeur, high ceilings, Italian marble en-suites, and round-the-clock bespoke butler service.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-[#E3DBD0] p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8C8374] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by suite name, butler, marble tub, balcony..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FAF8F5] border border-[#DDD5C5] rounded text-xs text-[#202020] focus:outline-none focus:border-[#122820]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Minimum Guests Filter */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#777] font-medium">Guests:</span>
              <select
                value={minGuests}
                onChange={(e) => setMinGuests(Number(e.target.value))}
                className="bg-[#FAF8F5] border border-[#DDD5C5] rounded px-2.5 py-2 text-xs text-[#202020] focus:outline-none"
              >
                <option value={1}>1+ Guest</option>
                <option value={2}>2+ Guests</option>
                <option value={3}>3+ Guests</option>
                <option value={4}>4 Guests</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#777] font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FAF8F5] border border-[#DDD5C5] rounded px-2.5 py-2 text-xs text-[#202020] focus:outline-none"
              >
                <option value="featured">Featured & Royal Honors</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="size">Suite Size (Sq Ft)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-6">
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

      {/* Rooms Listing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredRooms.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E3DBD0] p-8">
            <Sparkles className="w-10 h-10 text-[#C5A059] mx-auto mb-3" />
            <h3 className="font-serif-luxury text-2xl font-bold text-[#122820]">No Accommodations Matched</h3>
            <p className="text-xs text-[#666] mt-2">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setMinGuests(1); }}
              className="mt-4 bg-[#122820] text-[#C5A059] font-cinzel text-xs font-bold px-5 py-2 rounded"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredRooms.map(room => {
              const favorited = isFavorite(room.id);
              return (
                <div
                  key={room.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Left Column: Image & Gallery preview */}
                  <div className="lg:col-span-5 relative bg-stone-100 min-h-[280px]">
                    <img
                      src={room.mainImage}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-[#122820]/90 backdrop-blur-sm text-[#C5A059] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">
                      {room.category}
                    </span>
                    <button
                      onClick={() => toggleFavorite(room.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                        favorited
                          ? 'bg-[#122820] text-[#C5A059]'
                          : 'bg-black/40 text-white hover:bg-[#122820] hover:text-[#C5A059]'
                      }`}
                      aria-label="Save to favorites"
                    >
                      <Bookmark className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Right Column: Information, Specs, Amenities, Rate */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#122820] hover:text-[#AA8640] transition-colors">
                          <Link to={`/rooms/${room.id}`}>
                            {room.name}
                          </Link>
                        </h2>
                        <span className="text-xs font-bold text-amber-800">
                          ★ {room.rating} ({room.reviewsCount} reviews)
                        </span>
                      </div>

                      <p className="text-xs text-[#8C806D] italic mb-3 font-medium">
                        "{room.tagline}"
                      </p>

                      <p className="text-xs text-[#555] leading-relaxed mb-4">
                        {room.description}
                      </p>

                      {/* Room Specifications Row */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[#706A5F] py-2.5 border-y border-[#F0ECE1] mb-4">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Maximize2 className="w-4 h-4 text-[#AA8640]" />
                          {room.sizeSqFt} sq ft ({Math.round(room.sizeSqFt * 0.0929)} m²)
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <BedDouble className="w-4 h-4 text-[#AA8640]" />
                          {room.bedType}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <Users className="w-4 h-4 text-[#AA8640]" />
                          Up to {room.maxGuests} Guests
                        </span>
                        <span>·</span>
                        <span className="text-[#8C8374]">
                          View: {room.view}
                        </span>
                      </div>

                      {/* Amenities checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {room.amenities.slice(0, 4).map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#444]">
                            <Check className="w-3.5 h-3.5 text-[#122820] shrink-0" />
                            <span className="truncate">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Rate & CTAs */}
                    <div className="pt-4 border-t border-[#F0ECE1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] text-[#8C8374] uppercase font-bold tracking-wider block">
                          Privileged Nightly Rate
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#122820]">
                            {formatPrice(room.pricePerNightINR)}
                          </span>
                          <span className="text-xs text-[#706A5F]">+ Taxes & High Tea Service</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to={`/rooms/${room.id}`}
                          className="bg-transparent hover:bg-[#F3EFEA] text-[#122820] border border-[#122820] font-cinzel text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded transition-colors text-center"
                        >
                          Explore Suite
                        </Link>
                        <button
                          onClick={() => openBookingModal(room.id)}
                          className="bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Reserve</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <AdvertisementPlaceholder slotName="International Luxury Hospitality & Private Jet Travel" />
    </div>
  );
};
