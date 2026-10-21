import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { ROOMS_DATA } from '../../data/mockData';
import { Calendar, Users, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openBookingModal } = useHotel();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [checkIn, setCheckIn] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState<number>(2);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    openBookingModal();
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0D1C16]">
      {/* Background Image with Heritage Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="TaverenOak Grand Colonial Facade"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105 transform scale-105 transition-transform duration-10000"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A14] via-[#0C1A14]/30 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(12,26,20,0.85)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 flex-1 flex flex-col items-center justify-center text-center">
        {/* Subtle royal badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#122820]/80 backdrop-blur-md text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>New Delhi’s Premier Living Heritage Icon · Est. 1936</span>
          <Star className="w-3.5 h-3.5 fill-current" />
        </div>

        <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-wide max-w-4xl leading-tight sm:leading-tight">
          Where Regal Colonial History Meets <span className="italic text-[#E5C27C]">Haute Luxury</span>
        </h1>

        <p className="mt-5 text-sm sm:text-lg text-[#E3DBD0] font-light max-w-2xl leading-relaxed">
          Stroll along our historic king palm avenues, slumber in palatial suites, savor culinary artistry at six award-winning restaurants, and discover 4,000 museum-grade colonial artworks.
        </p>

        {/* Quick Highlights / Trust Pillars */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#D5CCBC]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            24 Stately Royal King Palms
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Sir Edwin Lutyens Heritage Circle
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            24-Hour Imperial Butler Service
          </span>
        </div>
      </div>

      {/* Floating Booking Engine Bar */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-4 sm:px-6 pb-8">
        <form
          onSubmit={handleQuickBook}
          className="bg-[#122820]/95 backdrop-blur-md border border-[#C5A059]/50 rounded-xl p-4 sm:p-5 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center"
        >
          {/* Check In */}
          <div className="bg-[#0E2019] border border-[#264436] rounded p-2.5">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-1">
              Check-In Date
            </label>
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none w-full cursor-pointer"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="bg-[#0E2019] border border-[#264436] rounded p-2.5">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-1">
              Check-Out Date
            </label>
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none w-full cursor-pointer"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="bg-[#0E2019] border border-[#264436] rounded p-2.5">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-1">
              Guests
            </label>
            <div className="flex items-center gap-2 text-white">
              <Users className="w-4 h-4 text-[#C5A059] shrink-0" />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="bg-transparent text-xs text-white focus:outline-none w-full cursor-pointer"
              >
                <option value={1} className="bg-[#122820]">1 Adult</option>
                <option value={2} className="bg-[#122820]">2 Adults</option>
                <option value={3} className="bg-[#122820]">3 Adults</option>
                <option value={4} className="bg-[#122820]">4 Adults (Suite)</option>
              </select>
            </div>
          </div>

          {/* Room Category */}
          <div className="bg-[#0E2019] border border-[#264436] rounded p-2.5">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-1">
              Accommodation
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-xs text-white focus:outline-none w-full cursor-pointer"
            >
              <option value="all" className="bg-[#122820]">All Suites & Rooms</option>
              <option value="Colonial Room" className="bg-[#122820]">Colonial Grand Rooms</option>
              <option value="Art Deco Suite" className="bg-[#122820]">Art Deco Suites</option>
              <option value="Royal Imperial Suite" className="bg-[#122820]">The Royal Imperial Suite</option>
              <option value="Eliza Room" className="bg-[#122820]">Eliza Rooms (Women)</option>
            </select>
          </div>

          {/* Reserve CTA */}
          <button
            type="submit"
            className="w-full h-full min-h-[48px] bg-[#C5A059] hover:bg-[#D4B066] active:bg-[#B38F48] text-[#122820] font-cinzel text-xs font-bold tracking-widest uppercase rounded flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-2.5 flex items-center justify-center gap-2 text-[11px] text-[#A69E90]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Official Direct Booking Privileges: Complimentary High Tea & Early Check-In Priority</span>
        </div>
      </div>
    </section>
  );
};
