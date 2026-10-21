import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, GlassWater } from 'lucide-react';

export const RoyalWeddingsPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] text-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#122820] text-white rounded-2xl overflow-hidden shadow-2xl border border-[#2B4B3D] grid grid-cols-1 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
              alt="Royal Wedding Ballroom Banquet Setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#122820]/90" />
            <span className="absolute top-4 left-4 bg-[#122820]/90 text-[#C5A059] border border-[#C5A059]/40 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">
              Regal Celebrations & Galas
            </span>
          </div>

          {/* Copy & RFP CTA */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
                <GlassWater className="w-4 h-4" />
                <span>Weddings & Sovereign Gatherings</span>
              </div>

              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-medium tracking-wide leading-tight">
                Celebrate Life’s Most Majestic Milestones Under Royal Palm Skies
              </h3>

              <p className="text-sm text-[#D0C8B8] leading-relaxed">
                Whether an opulent royal Indian wedding for 800 guests across our starlit royal lawns, an intimate ceremony in our colonial glass rotunda, or an international diplomatic banquet, our master wedding artisans and culinary brigade turn every gathering into enduring legend.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-[#E3DBD0]">
                <div className="border-l-2 border-[#C5A059] pl-3">
                  <p className="font-bold text-white text-sm">The Royal Ballroom</p>
                  <p className="text-[#A69E90]">Up to 500 Guests · Belgian Chandeliers</p>
                </div>
                <div className="border-l-2 border-[#C5A059] pl-3">
                  <p className="font-bold text-white text-sm">One Imperial Lawns</p>
                  <p className="text-[#A69E90]">Up to 800 Guests · Century-Old Banyan</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <Link
                to="/events"
                className="bg-[#C5A059] hover:bg-[#D4B066] text-[#122820] font-cinzel text-xs font-bold tracking-widest uppercase px-6 py-3 rounded shadow transition-all flex items-center gap-2"
              >
                <span>Request Proposal (RFP)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
