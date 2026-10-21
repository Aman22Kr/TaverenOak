import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHotel } from '../../context/HotelContext';
import { HOTEL_INFO } from '../../data/mockData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { showToast } = useHotel();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(() => {
    return localStorage.getItem('taverenoak_newsletter_subscribed') === 'true';
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    localStorage.setItem('taverenoak_newsletter_subscribed', 'true');
    localStorage.setItem('taverenoak_newsletter_email', email);
    setIsSubscribed(true);
    showToast('Thank you for subscribing to the TaverenOak Heritage Gazette.', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-[#0C1A14] text-[#E5DFD5] border-t-2 border-[#C5A059]/40 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Insignia Ribbon */}
        <div className="bg-[#122820] border border-[#2B4B3D] rounded-xl p-6 sm:p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059] mb-2">
                <Compass className="w-4 h-4" />
                The TaverenOak Heritage Gazette
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
                Receive Curated Royal Privileges & Private Seasonal Invitations
              </h3>
              <p className="text-sm text-[#BDB5A4] mt-2 max-w-xl">
                Subscribe to our discreet quarterly bulletin featuring exclusive seasonal offers, culinary guest chef residencies, and art symposiums.
              </p>
            </div>

            <div className="lg:col-span-5">
              {isSubscribed ? (
                <div className="flex items-center gap-3 bg-[#1A382D] text-[#C5A059] border border-[#C5A059]/40 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold text-white">Privileged Subscription Active</p>
                    <p className="text-xs text-[#C8BFB0]">You will receive the next edition of the Gazette directly in your inbox.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 bg-[#0E2019] border border-[#2B4B3D] text-white placeholder-[#87938D] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#C5A059] hover:bg-[#D4B066] text-[#122820] font-cinzel text-xs font-bold tracking-wider uppercase px-6 py-3 rounded flex items-center justify-center gap-2 transition-all cursor-pointer shadow"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4-Column Navigation & Information Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#20362C]">
          {/* Col 1: Heritage Brand Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A059] bg-[#122820] flex items-center justify-center p-1.5">
                <svg viewBox="0 0 40 40" className="w-full h-full text-[#C5A059]">
                  <path d="M20 4 L25 14 L36 15 L28 23 L30 34 L20 28 L10 34 L12 23 L4 15 L15 14 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="20" r="5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#F3EFEA] uppercase block">
                  TaverenOak
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#A39986]">
                  New Delhi · Est. 1936
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#BDB5A4] max-w-sm">
              Erected during the golden era of New Delhi architecture, TaverenOak offers an incomparable blend of colonial Victorian dignity, Art Deco grandeur, and refined Indian royal hospitality.
            </p>

            <div className="pt-2 text-xs space-y-2 text-[#C8BFB0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Concierge: {HOTEL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Accommodations & Suites */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs text-[#BDB5A4]">
              <li>
                <Link to="/rooms/royal-imperial-suite" className="hover:text-white transition-colors">
                  The Royal Imperial Suite
                </Link>
              </li>
              <li>
                <Link to="/rooms/art-deco-suite" className="hover:text-white transition-colors">
                  Art Deco Luxury Suite
                </Link>
              </li>
              <li>
                <Link to="/rooms/heritage-grand-room" className="hover:text-white transition-colors">
                  Heritage Grand Room
                </Link>
              </li>
              <li>
                <Link to="/rooms/eliza-luxury-room" className="hover:text-white transition-colors">
                  Eliza Room (Women Travelers)
                </Link>
              </li>
              <li>
                <Link to="/rooms/viceroy-heritage-suite" className="hover:text-white transition-colors">
                  Viceroy Heritage Suite
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#C5A059] text-white font-medium inline-block pt-1">
                  View All Rooms & Rates →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Gastronomy & Venues */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">
              Gastronomy & Bars
            </h4>
            <ul className="space-y-2 text-xs text-[#BDB5A4]">
              <li>
                <Link to="/dining/oak-1911-restaurant" className="hover:text-white transition-colors">
                  1911 Restaurant & Verandah
                </Link>
              </li>
              <li>
                <Link to="/dining/the-spice-route" className="hover:text-white transition-colors">
                  The Spice Route
                </Link>
              </li>
              <li>
                <Link to="/dining/san-gimignano" className="hover:text-white transition-colors">
                  San Gimignano (Tuscan)
                </Link>
              </li>
              <li>
                <Link to="/dining/daniells-tavern" className="hover:text-white transition-colors">
                  Daniell's Tavern (Pan-Indian)
                </Link>
              </li>
              <li>
                <Link to="/dining/the-patisserie" className="hover:text-white transition-colors">
                  The Imperial Patisserie
                </Link>
              </li>
              <li>
                <Link to="/dining/oak-1911-bar" className="hover:text-white transition-colors">
                  1911 Bar & Club Lounge
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Experiences & Services */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">
              The Estate & Discovery
            </h4>
            <ul className="space-y-2 text-xs text-[#BDB5A4]">
              <li>
                <Link to="/spa" className="hover:text-white transition-colors">
                  The Imperial Spa & Ayurveda
                </Link>
              </li>
              <li>
                <Link to="/heritage" className="hover:text-white transition-colors">
                  Museum Art Collection (4,000+ Works)
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors">
                  Weddings & Royal Celebrations
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-white transition-colors">
                  Privileged Packages & Sabbaticals
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Estate Visual Chronicle
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-white transition-colors">
                  My Reservations & Itinerary
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Directions & Concierge Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Accolades Bar */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-[#20362C] text-xs text-[#A39986]">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#C5A059]" />
            <span className="font-medium text-white">Distinguished Accolades:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>World Luxury Hotel Awards 2026 Winner</span>
            <span>·</span>
            <span>Forbes Travel Guide Five-Star Award</span>
            <span>·</span>
            <span>Condé Nast Traveler Gold List</span>
            <span>·</span>
            <span>Historic Hotels Worldwide Member</span>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7468]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>© {new Date().getFullYear()} TaverenOak Heritage Hotels. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[#C5A059] transition-colors">Concierge Desk</Link>
            <span>·</span>
            <Link to="/heritage" className="hover:text-[#C5A059] transition-colors">Historical Archives</Link>
            <span>·</span>
            <span className="text-[#5F5A50]">Client-side persistence via browser localStorage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
