import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHotel } from '../context/HotelContext';
import { SPECIAL_OFFERS } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { ArrowLeft, Check, Calendar, ShieldCheck, Tag } from 'lucide-react';

export const OfferDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { formatPrice, openBookingModal } = useHotel();

  const offer = SPECIAL_OFFERS.find(o => o.id === id || o.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!offer) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-20 px-4 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow border border-[#E3DBD0]">
          <h2 className="font-serif-luxury text-3xl font-bold text-[#122820] mb-2">Package Not Found</h2>
          <p className="text-xs text-[#666] mb-6">The requested seasonal privilege could not be found.</p>
          <Link
            to="/offers"
            className="inline-flex items-center gap-2 bg-[#122820] text-[#C5A059] font-cinzel text-xs font-bold px-6 py-3 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Offers</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Breadcrumb banner */}
      <div className="bg-[#122820] text-[#D8CFBF] py-4 px-4 sm:px-6 lg:px-8 border-b border-[#243E33]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/offers"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#C5A059] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Privileged Offers</span>
          </Link>
          <span className="text-xs text-[#8C9C93]">{offer.category} Package</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg border border-[#E3DBD0] bg-stone-200">
              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-[#C5A059] text-[#122820] text-xs uppercase font-bold tracking-wider px-3 py-1 rounded shadow">
                {offer.discountBadge}
              </span>
            </div>

            <div>
              <h1 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#122820]">
                {offer.title}
              </h1>
              <p className="text-sm text-[#AA8640] italic font-medium mt-1">
                "{offer.tagline}"
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0] space-y-4">
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#122820]">
                Package Narrative
              </h3>
              <p className="text-sm text-[#555] leading-relaxed">
                {offer.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0] space-y-4">
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#122820]">
                Comprehensive Privileges & Inclusions
              </h3>
              <div className="space-y-2">
                {offer.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#333]">
                    <Check className="w-4 h-4 text-[#122820] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DBD0] space-y-3">
              <h3 className="font-serif-luxury text-xl font-semibold text-[#122820]">
                Terms & Conditions
              </h3>
              <ul className="list-disc pl-5 text-xs text-[#666] space-y-1">
                {offer.terms.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
                <li>Valid for stays until {offer.validTill}.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-xl shadow-xl border border-[#E3DBD0] p-6 space-y-6">
              <div>
                <span className="text-[10px] text-[#8C8374] uppercase font-bold tracking-wider block">
                  Package Investment
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif-luxury text-3xl font-bold text-[#122820]">
                    {formatPrice(offer.discountedPriceINR)}
                  </span>
                  <span className="text-sm text-[#999] line-through">
                    {formatPrice(offer.basePriceINR)}
                  </span>
                </div>
                <span className="text-xs text-emerald-700 font-semibold block mt-1">
                  Privileged Savings Applied
                </span>
              </div>

              <div className="p-4 bg-[#F7F4EE] rounded border border-[#E0D8CB] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#666]">Validity:</span>
                  <span className="font-semibold text-[#122820]">Until {offer.validTill}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666]">Reservation:</span>
                  <span className="font-semibold text-[#122820]">Instant Confirmation</span>
                </div>
              </div>

              <button
                onClick={() => openBookingModal()}
                className="w-full bg-[#122820] hover:bg-[#1C3D31] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase py-3.5 rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Package Now</span>
              </button>

              <div className="space-y-2 pt-2 text-xs text-[#777] border-t border-[#F0ECE1]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#AA8640] shrink-0 mt-0.5" />
                  <span>Free cancellation up to 48 hours prior to arrival.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Fine Watchmaking, High Jewelry & Royal Heritage Timepieces" />
    </div>
  );
};
