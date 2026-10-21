import React from 'react';
import { Film, Play } from 'lucide-react';

interface YouTubePlaceholderProps {
  title?: string;
  subtitle?: string;
  aspectRatio?: '16:9' | '4:3' | '21:9';
  className?: string;
}

export const YouTubePlaceholder: React.FC<YouTubePlaceholderProps> = ({
  title = 'TaverenOak: A Living Heritage Chronicle (1936 - Present)',
  subtitle = 'Archival Footage & Architectural Masterpiece Tour',
  aspectRatio = '16:9',
  className = ''
}) => {
  const aspectClass = aspectRatio === '16:9' 
    ? 'aspect-video' 
    : aspectRatio === '21:9' 
      ? 'aspect-[21/9]' 
      : 'aspect-[4/3]';

  return (
    <div 
      className={`relative w-full ${aspectClass} overflow-hidden rounded-lg bg-gradient-to-br from-[#122820] via-[#1a382e] to-[#0d1e18] border border-[#C5A059]/40 shadow-2xl flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      role="region"
      aria-label="Heritage Video Presentation"
    >
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Gold corner ornaments */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]/60 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]/60 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]/60 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]/60 pointer-events-none" />

      {/* Center play icon badge */}
      <div className="relative mb-4 group cursor-pointer">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#C5A059] bg-[#C5A059]/15 backdrop-blur-sm flex items-center justify-center text-[#C5A059] shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 text-[#C5A059]" />
        </div>
      </div>

      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#C5A059] font-medium mb-1">
          <Film className="w-3.5 h-3.5" />
          <span>Heritage Video Chronicle</span>
        </div>
        <h4 className="font-serif-luxury text-xl sm:text-2xl text-white font-medium tracking-wide">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-[#D5CCBC] mt-1 line-clamp-2">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] text-[#A69E90] tracking-wider uppercase bg-black/40 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
        Heritage Cinema Reel · 4K Master
      </div>
    </div>
  );
};
