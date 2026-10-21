import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHotel } from '../context/HotelContext';
import { DINING_VENUES } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  Calendar, 
  Utensils, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const DiningDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { formatPrice, openTableModal } = useHotel();
  const [activeMenuTab, setActiveMenuTab] = useState<'starters' | 'mains' | 'desserts' | 'beverages'>('starters');

  const venue = DINING_VENUES.find(v => v.id === id || v.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!venue) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-20 px-4 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow border border-[#E3DBD0]">
          <h2 className="font-serif-luxury text-3xl font-bold text-[#122820] mb-2">Venue Not Found</h2>
          <p className="text-xs text-[#666] mb-6">The culinary sanctuary requested is not currently listed.</p>
          <Link
            to="/dining"
            className="inline-flex items-center gap-2 bg-[#122820] text-[#C5A059] font-cinzel text-xs font-bold px-6 py-3 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Dining</span>
          </Link>
        </div>
      </div>
    );
  }

  const currentMenuItems = venue.sampleMenu[activeMenuTab] || [];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Top Banner & Breadcrumb */}
      <div className="bg-[#122820] text-[#D8CFBF] py-4 px-4 sm:px-6 lg:px-8 border-b border-[#243E33]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/dining"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#C5A059] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Dining Sanctuaries</span>
          </Link>
          <span className="text-xs text-[#8C9C93]">{venue.cuisine}</span>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative h-80 sm:h-96 bg-[#0E2019] overflow-hidden">
        <img
          src={venue.mainImage}
          alt={venue.name}
          className="w-full h-full object-cover filter brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122820] via-transparent to-black/40" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="bg-[#C5A059] text-[#122820] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded inline-block mb-2">
            {venue.cuisine}
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-semibold tracking-wide">
            {venue.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#E3DBD0] mt-1 max-w-xl italic">
            "{venue.tagline}"
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Story & Interactive Sample Menu */}
          <div className="lg:col-span-8 space-y-8">
            {/* Philosophy & Narrative */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0] space-y-4">
              <h2 className="font-serif-luxury text-2xl font-semibold text-[#122820]">
                Philosophy & Epicurean Heritage
              </h2>
              <p className="text-sm text-[#555] leading-relaxed">
                {venue.longDescription}
              </p>
              
              {venue.awards.length > 0 && (
                <div className="p-4 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5] flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#AA8640] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#122820] block">Distinguished Accolade</span>
                    <span className="text-[#666]">{venue.awards.join(' · ')}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Chef's Signature Dishes */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0]">
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#122820] mb-4">
                Signature Masterpieces
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {venue.signatureDishes.map((dish, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#333] p-2 bg-[#FAF8F5] rounded">
                    <Sparkles className="w-4 h-4 text-[#AA8640] shrink-0" />
                    <span className="font-medium">{dish}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Sample Menu Tabs */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F0ECE1]">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-semibold text-[#122820]">
                    A Taste of the Menu
                  </h3>
                  <p className="text-xs text-[#777]">Handcrafted seasonal selections & pairings</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-1.5 bg-[#FAF8F5] p-1 rounded-lg border border-[#E3DBD0]">
                  {(['starters', 'mains', 'desserts', 'beverages'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveMenuTab(tab)}
                      className={`px-3 py-1.5 rounded text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                        activeMenuTab === tab
                          ? 'bg-[#122820] text-[#C5A059]'
                          : 'text-[#666] hover:text-[#122820]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Items List */}
              <div className="space-y-4">
                {currentMenuItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#FAF8F5] border border-[#F0ECE1] flex items-start justify-between gap-4 hover:border-[#D5CCBC] transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif-luxury text-lg font-bold text-[#122820]">
                          {item.name}
                        </h4>
                        {item.dietary && (
                          <span className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded ${
                            item.dietary === 'Vegetarian'
                              ? 'bg-emerald-100 text-emerald-800'
                              : item.dietary === 'Chef Signature'
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : item.dietary === 'Vegan'
                              ? 'bg-teal-100 text-teal-800'
                              : 'bg-stone-200 text-stone-700'
                          }`}>
                            {item.dietary}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#666] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-serif-luxury text-base font-bold text-[#122820]">
                        {formatPrice(item.priceINR)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Table Reservation Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-xl shadow-xl border border-[#E3DBD0] p-6 space-y-6">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#122820]">
                  Reserve Your Table
                </h3>
                <p className="text-xs text-[#777] mt-1">
                  Reservations recommended at least 24 hours in advance for dinner service.
                </p>
              </div>

              {/* Practical Info Strip */}
              <div className="p-4 bg-[#FAF7F2] rounded-lg border border-[#E5DFD5] space-y-3 text-xs">
                <div>
                  <span className="text-[#888] block text-[10px] uppercase font-semibold">Service Hours</span>
                  <div className="space-y-1 mt-1 text-[#202020] font-medium">
                    {venue.hours.breakfast && <p>Breakfast: {venue.hours.breakfast}</p>}
                    {venue.hours.lunch && <p>Lunch: {venue.hours.lunch}</p>}
                    {venue.hours.highTea && <p>High Tea: {venue.hours.highTea}</p>}
                    <p>Dinner: {venue.hours.dinner}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E5DFD5]">
                  <span className="text-[#888] block text-[10px] uppercase font-semibold">Location & Seating</span>
                  <p className="font-medium text-[#202020] mt-0.5">{venue.location} · {venue.seatingCapacity} Seats</p>
                </div>

                <div className="pt-2 border-t border-[#E5DFD5]">
                  <span className="text-[#888] block text-[10px] uppercase font-semibold">Dress Code</span>
                  <p className="font-medium text-[#202020] mt-0.5">{venue.dressCode}</p>
                </div>
              </div>

              <button
                onClick={() => openTableModal(venue.id)}
                className="w-full bg-[#122820] hover:bg-[#1C3D31] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase py-3.5 rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Table Online</span>
              </button>

              <div className="text-xs text-[#777] text-center">
                For groups larger than 8 or private dining salons, please contact our Maître d' at <span className="font-bold text-[#122820]">+91 11 2334 1234</span>.
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Fine Culinary Truffles, Caviar & Artisanal Spices" />
    </div>
  );
};
