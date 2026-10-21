import React from 'react';
import { Link } from 'react-router-dom';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { Compass, ArrowLeft, Home, BedDouble } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-between py-16 px-4">
      <div className="max-w-xl mx-auto text-center my-auto space-y-6">
        <div className="w-16 h-16 rounded-full border-2 border-[#C5A059] bg-[#122820] text-[#C5A059] flex items-center justify-center mx-auto shadow-xl">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="font-cinzel text-5xl font-bold text-[#122820] block">404</span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#AA8640] font-bold block mt-1">
            Chamber Uncharted
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#122820] mt-3">
            The Corridor You Seek Leads Elsewhere
          </h1>
          <p className="text-xs sm:text-sm text-[#666] max-w-md mx-auto mt-2 leading-relaxed">
            The page or archival document you requested may have moved or no longer exists. Allow our virtual concierge to escort you back to the grand lobby.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-xs font-bold tracking-wider uppercase px-6 py-3 rounded shadow transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Lobby</span>
          </Link>

          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F3EFEA] text-[#122820] border border-[#DDD5C5] font-cinzel text-xs font-bold tracking-wider uppercase px-6 py-3 rounded shadow-sm transition-all"
          >
            <BedDouble className="w-4 h-4" />
            <span>View Suites</span>
          </Link>
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Heritage Travel & Sovereign Diplomatic Advisory" />
    </div>
  );
};
