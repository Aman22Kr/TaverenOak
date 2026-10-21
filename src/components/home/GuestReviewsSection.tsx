import React from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { Star, Quote } from 'lucide-react';

export const GuestReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#AA8640] block mb-2">
            Guest Testimonials
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#122820]">
            The Voices of Our Distinguished Guests
          </h2>
          <p className="text-sm text-[#666] mt-3">
            Honored by leaders, authors, diplomats, and discerning travelers across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-8 border border-[#E3DBD0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#C5A059]/40 mb-4" />
              
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-serif-luxury text-base text-[#333] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#F0ECE1] mt-6">
                <p className="font-semibold text-sm text-[#122820]">{t.guestName}</p>
                <p className="text-xs text-[#7A7468]">{t.location} · {t.roomStayed}</p>
                {t.publication && (
                  <span className="inline-block mt-1 text-[10px] uppercase font-bold tracking-wider text-[#AA8640]">
                    {t.publication}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
