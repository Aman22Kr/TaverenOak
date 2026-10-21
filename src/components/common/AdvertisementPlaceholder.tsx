import React from 'react';

interface AdvertisementPlaceholderProps {
  slotName?: string;
  className?: string;
}

export const AdvertisementPlaceholder: React.FC<AdvertisementPlaceholderProps> = ({
  slotName = 'Luxury Partner Showcase',
  className = ''
}) => {
  return (
    <section 
      aria-label="Sponsor Advertisement Slot" 
      className={`w-full max-w-6xl mx-auto px-4 my-8 ${className}`}
    >
      <div className="relative overflow-hidden rounded border border-[#E0D8CB] bg-[#F7F4EE] px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all duration-200">
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8B857A] bg-[#ECE5D8] px-2 py-0.5 rounded">
            ADVERTISEMENT
          </span>
          <p className="text-xs sm:text-sm text-[#5C574F] font-medium">
            <span className="font-serif-luxury text-[#122820] font-semibold text-base mr-2">{slotName}</span>
            Curated heritage luxury experiences & private aviation partners
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-[#8B857A] border border-[#D5CCBC] rounded px-3 py-1 bg-white/70 hover:bg-white transition-colors cursor-default select-none">
            Sponsored Slot (728 × 90)
          </span>
        </div>
      </div>
    </section>
  );
};
