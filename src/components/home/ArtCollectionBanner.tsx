import React from 'react';
import { Link } from 'react-router-dom';
import { YouTubePlaceholder } from '../common/YouTubePlaceholder';
import { Palette, Compass, ArrowRight } from 'lucide-react';

export const ArtCollectionBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#122820] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
              <Palette className="w-4 h-4" />
              <span>A Living Museum Gallery</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide leading-tight">
              Four Thousand Museum-Grade Works of Colonial Art
            </h2>

            <p className="text-sm sm:text-base text-[#D0C8B8] leading-relaxed">
              TaverenOak is not merely a hotel; it is home to one of the largest private collections of British Indian art in the world. Walk down silent, marble-clad galleries adorned with original 18th-century aquatints by Thomas & William Daniell, historic prints by Emily Eden, and rare Persian war tapestries.
            </p>

            <ul className="space-y-2.5 text-xs text-[#E3DBD0]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                Daily Resident Curator Art Walks at 11:00 AM & 16:30 PM
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                Original 1786 Daniell Aquatints of Varanasi and Old Delhi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                Royal Durbar 1911 Medals & Silverware Archive
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/heritage"
                className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B066] text-[#122820] font-cinzel text-xs font-bold tracking-widest uppercase px-6 py-3 rounded shadow transition-all"
              >
                <span>Discover The Archives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Architectural Video Feature using the custom blank YouTube placeholder */}
          <div className="lg:col-span-7">
            <div className="p-2 sm:p-3 rounded-2xl bg-[#0D1C16] border border-[#2B4B3D] shadow-2xl">
              <YouTubePlaceholder
                title="TaverenOak: The Living Museum of New Delhi"
                subtitle="Curator's Walking Tour of 4,000+ Colonial Masterpieces & Architectural Splendors"
                aspectRatio="16:9"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
