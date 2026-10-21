import React, { useEffect } from 'react';
import { HERITAGE_TIMELINE, HOTEL_INFO } from '../data/mockData';
import { YouTubePlaceholder } from '../components/common/YouTubePlaceholder';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { Palette, Compass, Clock, BookOpen, Award, Sparkles } from 'lucide-react';

export const HeritagePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="relative py-24 bg-[#122820] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80"
            alt="Heritage Art and Museum Gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Living Museum of India
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            Heritage, Architecture & Art Archives
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light leading-relaxed">
            Preserving over four thousand museum-grade colonial prints, rare Persian war carpets, and architectural relics from the monumental 1911 Delhi Durbar.
          </p>
        </div>
      </div>

      {/* Main Narrative & Video Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#AA8640]">
              <Compass className="w-4 h-4" />
              <span>Conceived by Blomfield & Sir Edwin Lutyens</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#122820] leading-tight">
              An Architectural Marvel Born in 1936
            </h2>

            <p className="text-sm text-[#555] leading-relaxed">
              When King George V announced the transfer of the capital from Calcutta to Delhi at the 1911 Coronation Durbar, an ambitious imperial capital began to take shape under the mastermind of Sir Edwin Lutyens and Herbert Baker.
            </p>

            <p className="text-sm text-[#555] leading-relaxed">
              In 1936, the hotel was opened by Lord Willingdon, the Viceroy of India, designed by architect Blomfield with advice from Lutyens. Its blend of Art Deco proportions, Victorian colonnaded verandahs, and wide green lawns lined with twenty-four royal king palm trees immediately established it as the crown jewel of Delhi society.
            </p>

            <div className="p-4 bg-white rounded-lg border border-[#E3DBD0] shadow-sm flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#AA8640] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-[#122820] block text-sm">Resident Curator Guided Art Walks</span>
                <p className="text-[#666] mt-0.5">
                  Complimentary for hotel guests daily at <strong>11:00 AM</strong> and <strong>16:30 PM</strong>. Private tours available upon request at the Concierge Desk.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-3 bg-white rounded-2xl shadow-xl border border-[#E3DBD0]">
              <YouTubePlaceholder
                title="TaverenOak: An Architectural Chronicle (1936 - 2026)"
                subtitle="Exclusive archival exploration of the living museum and colonial suites"
                aspectRatio="16:9"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Historical Timeline */}
      <div className="bg-[#F3EFEA] py-16 border-y border-[#E5DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#AA8640] block mb-2">
              Chronicles of Destiny
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#122820]">
              The TaverenOak Historical Timeline
            </h2>
          </div>

          <div className="relative border-l-2 border-[#C5A059] ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {HERITAGE_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Year Marker Pin */}
                <div className="absolute -left-[31px] md:-left-[47px] top-0 w-8 h-8 rounded-full bg-[#122820] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] text-xs font-bold shadow">
                  ★
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#E3DBD0] shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="font-cinzel text-xl font-bold text-[#AA8640] block mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#122820] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Art Collection Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#AA8640] block mb-2">
            The Living Museum
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#122820]">
            The World’s Foremost Daniell Aquatint Collection
          </h2>
          <p className="text-xs sm:text-sm text-[#666] mt-2">
            Over four thousand original lithographs and hand-colored prints decorate the corridors of TaverenOak, creating an unparalleled journey through 18th and 19th-century India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
              alt="Thomas & William Daniell Aquatints"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#122820] mb-2">
                Thomas & William Daniell (1786)
              </h3>
              <p className="text-xs text-[#666] leading-relaxed">
                Original aquatints from 'Oriental Scenery' capturing the Mughal riverfront of the Yamuna, the palaces of Lucknow, and the temple ghats of Varanasi.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
              alt="1911 Delhi Durbar Silverware Archive"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#122820] mb-2">
                1911 Delhi Durbar Insignia
              </h3>
              <p className="text-xs text-[#666] leading-relaxed">
                Historic brass tokens, menu cards of royal state banquets, coronation medals, and military regalia honoring King George V and Queen Mary.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Art Deco Architectural Artifacts"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#122820] mb-2">
                Vintage Burma Teak & Silverware
              </h3>
              <p className="text-xs text-[#666] leading-relaxed">
                Original 1930s hand-carved writing bureaus, silver teapots, and hand-knotted silk carpets woven in the royal workshops of Kashmir.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Fine Art Auctions, Antiquities & Heritage Preservation Society" />
    </div>
  );
};
