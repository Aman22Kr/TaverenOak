import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHotel } from '../context/HotelContext';
import { ROOMS_DATA, HOTEL_INFO } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { 
  ArrowLeft, 
  Maximize2, 
  Users, 
  BedDouble, 
  Compass, 
  Check, 
  Bookmark, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  Phone
} from 'lucide-react';

export const RoomDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { formatPrice, openBookingModal, toggleFavorite, isFavorite } = useHotel();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const room = ROOMS_DATA.find(r => r.id === id || r.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [id]);

  if (!room) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-20 px-4 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow border border-[#E3DBD0]">
          <h2 className="font-serif-luxury text-3xl font-bold text-[#122820] mb-2">Chamber Not Found</h2>
          <p className="text-xs text-[#666] mb-6">The accommodation you requested could not be located in our archives.</p>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 bg-[#122820] text-[#C5A059] font-cinzel text-xs font-bold px-6 py-3 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Accommodations</span>
          </Link>
        </div>
      </div>
    );
  }

  const favorited = isFavorite(room.id);
  const galleryImages = room.gallery.length > 0 ? room.gallery : [room.mainImage];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Back button and breadcrumb */}
      <div className="bg-[#122820] text-[#D8CFBF] py-4 px-4 sm:px-6 lg:px-8 border-b border-[#243E33]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#C5A059] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Accommodations</span>
          </Link>
          <span className="text-xs text-[#8C9C93]">{room.category} · {room.name}</span>
        </div>
      </div>

      {/* Main Suite Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Gallery, Narrative, Amenities */}
          <div className="lg:col-span-8 space-y-8">
            {/* Gallery Viewer */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg border border-[#E3DBD0] bg-stone-200">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${room.name} photograph ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#122820]/90 backdrop-blur-md text-[#C5A059] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">
                  {room.category}
                </span>
                <button
                  onClick={() => toggleFavorite(room.id)}
                  className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                    favorited
                      ? 'bg-[#122820] text-[#C5A059]'
                      : 'bg-black/40 text-white hover:bg-[#122820] hover:text-[#C5A059]'
                  }`}
                  aria-label="Save to favorites"
                >
                  <Bookmark className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-24 h-16 rounded overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#122820] scale-95' : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Room Headline & Overview */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                <h1 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#122820]">
                  {room.name}
                </h1>
                <div className="flex items-center gap-1.5 bg-[#F3EFEA] border border-[#DDD5C5] px-3 py-1 rounded-full text-xs font-bold text-amber-900">
                  ★ {room.rating} Rating ({room.reviewsCount} verified guest reviews)
                </div>
              </div>

              <p className="text-sm text-[#8C806D] italic font-medium mb-4">
                "{room.tagline}"
              </p>

              {/* Specifications Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white rounded-lg border border-[#E3DBD0] text-xs text-[#555]">
                <div>
                  <span className="text-[#888] block text-[10px] uppercase font-semibold">Dimensions</span>
                  <span className="font-semibold text-sm text-[#122820] flex items-center gap-1 mt-0.5">
                    <Maximize2 className="w-4 h-4 text-[#AA8640]" />
                    {room.sizeSqFt} sq ft
                  </span>
                </div>
                <div>
                  <span className="text-[#888] block text-[10px] uppercase font-semibold">Bedding</span>
                  <span className="font-semibold text-sm text-[#122820] flex items-center gap-1 mt-0.5">
                    <BedDouble className="w-4 h-4 text-[#AA8640]" />
                    {room.bedType}
                  </span>
                </div>
                <div>
                  <span className="text-[#888] block text-[10px] uppercase font-semibold">Occupancy</span>
                  <span className="font-semibold text-sm text-[#122820] flex items-center gap-1 mt-0.5">
                    <Users className="w-4 h-4 text-[#AA8640]" />
                    Up to {room.maxGuests} Guests
                  </span>
                </div>
                <div>
                  <span className="text-[#888] block text-[10px] uppercase font-semibold">Vista</span>
                  <span className="font-semibold text-sm text-[#122820] flex items-center gap-1 mt-0.5">
                    <Compass className="w-4 h-4 text-[#AA8640]" />
                    {room.view}
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative / Long Description */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0] space-y-4">
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#122820]">
                Chamber Heritage & Architecture
              </h3>
              <p className="text-sm text-[#555] leading-relaxed">
                {room.longDescription}
              </p>
              <p className="text-sm text-[#555] leading-relaxed">
                Conceived in the classical revivalist tradition, each chamber features Burma teak writing desks, authentic British Raj lithographs personally curated from our museum archives, and soaring hand-molded cornices that reflect the grand Edwardian architectural vernacular of New Delhi.
              </p>
            </div>

            {/* Architectural Features */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0]">
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#122820] mb-4">
                Distinguished Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#333]">
                    <Sparkles className="w-4 h-4 text-[#AA8640] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bespoke Inclusions & Amenities */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0]">
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#122820] mb-4">
                Bespoke Inclusions & In-Room Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#333]">
                    <Check className="w-4 h-4 text-[#122820] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-xl shadow-xl border border-[#E3DBD0] p-6 space-y-6">
              <div>
                <span className="text-[10px] text-[#8C8374] uppercase font-bold tracking-wider block">
                  Nightly Royal Tariff
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif-luxury text-3xl font-bold text-[#122820]">
                    {formatPrice(room.pricePerNightINR)}
                  </span>
                  <span className="text-xs text-[#706A5F]">/ Night</span>
                </div>
                <p className="text-[11px] text-[#8C8374] mt-1">
                  Includes Pasticceria High Tea Service, Wi-Fi 6 & butler on request.
                </p>
              </div>

              <div className="p-4 bg-[#F7F4EE] rounded-lg border border-[#E0D8CB] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#666]">Standard Check-In:</span>
                  <span className="font-semibold text-[#122820]">{HOTEL_INFO.checkInTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666]">Standard Check-Out:</span>
                  <span className="font-semibold text-[#122820]">{HOTEL_INFO.checkOutTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666]">Cancellation:</span>
                  <span className="font-semibold text-[#122820]">Free up to 48 hrs prior</span>
                </div>
              </div>

              <button
                onClick={() => openBookingModal(room.id)}
                className="w-full bg-[#122820] hover:bg-[#1C3D31] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase py-3.5 rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve This Suite</span>
              </button>

              <div className="space-y-3 pt-2 text-xs text-[#666] border-t border-[#F0ECE1]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#AA8640] shrink-0 mt-0.5" />
                  <span>Best Rate Direct Guarantee with personalized arrival concierge.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#AA8640] shrink-0 mt-0.5" />
                  <span>Direct Reservations Desk: {HOTEL_INFO.reservationsPhone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Fine Antique Furniture & Heritage Estate Restoration" />
    </div>
  );
};
