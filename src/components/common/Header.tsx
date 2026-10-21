import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHotel, Currency } from '../../context/HotelContext';
import { 
  Phone, 
  MapPin, 
  Bookmark, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    currency, 
    setCurrency, 
    roomReservations, 
    diningBookings, 
    spaBookings, 
    favorites, 
    openBookingModal 
  } = useHotel();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDiningDropdownOpen, setIsDiningDropdownOpen] = useState(false);
  const [isRoomsDropdownOpen, setIsRoomsDropdownOpen] = useState(false);
  const location = useLocation();

  const totalSavedCount = roomReservations.length + diningBookings.length + spaBookings.length + favorites.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDiningDropdownOpen(false);
    setIsRoomsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Ribbon */}
      <div className="bg-[#0D1C16] text-[#D0C8B8] text-xs border-b border-[#243E33] px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#A39986]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              Janpath, Connaught Place, New Delhi 110001
            </span>
            <a 
              href="tel:+911123341234" 
              className="inline-flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>+91 11 2334 1234</span>
            </a>
            <span className="hidden lg:inline-block text-[#52645C]">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-[#C5A059]">
              <Sparkles className="w-3 h-3" />
              Living Heritage Museum Est. 1936
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            {/* Currency Selector */}
            <div className="flex items-center gap-1 bg-[#152B22] border border-[#2B4B3D] rounded px-2 py-0.5">
              <span className="text-[10px] text-[#8C9C93] uppercase font-semibold">Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-[#E8E1D5] font-medium text-xs focus:outline-none cursor-pointer"
                aria-label="Select currency"
              >
                <option value="INR" className="bg-[#122820] text-white">INR (₹)</option>
                <option value="USD" className="bg-[#122820] text-white">USD ($)</option>
                <option value="EUR" className="bg-[#122820] text-white">EUR (€)</option>
                <option value="GBP" className="bg-[#122820] text-white">GBP (£)</option>
              </select>
            </div>

            {/* My Bookings & Saved Favorites */}
            <Link 
              to="/saved" 
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-medium hover:text-white transition-colors bg-[#1E3B30] text-[#D8CFBF] hover:bg-[#284E40]"
              title="View your saved items & active reservations"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">My Itinerary</span>
              {totalSavedCount > 0 && (
                <span className="bg-[#C5A059] text-[#122820] font-bold text-[10px] px-1.5 py-0.2 rounded-full">
                  {totalSavedCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#122820]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#C5A059]/30' 
            : 'bg-[#122820] py-4 border-b border-[#224034]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Royal Crest */}
          <Link to="/" className="group flex items-center gap-3 select-none">
            {/* SVG Royal Crest Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C5A059] bg-[#0E2019] flex items-center justify-center p-1.5 shadow-md group-hover:border-[#DFBD76] transition-colors">
              <svg viewBox="0 0 40 40" className="w-full h-full text-[#C5A059] group-hover:text-[#DFBD76]">
                <path d="M20 4 L25 14 L36 15 L28 23 L30 34 L20 28 L10 34 L12 23 L4 15 L15 14 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="20" r="5" fill="currentColor" />
                <path d="M20 17 L22 21 L18 21 Z" fill="#122820" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F3EFEA] uppercase leading-none group-hover:text-[#C5A059] transition-colors">
                TaverenOak
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#A39986] mt-1 font-medium">
                New Delhi · Est. 1936
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 text-[13px] tracking-wider uppercase font-medium text-[#D8CFBF]">
            <Link 
              to="/" 
              className={`hover:text-[#C5A059] transition-colors py-1 ${
                isActive('/') && location.pathname === '/' ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Home
            </Link>

            {/* Rooms Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsRoomsDropdownOpen(true)}
              onMouseLeave={() => setIsRoomsDropdownOpen(false)}
            >
              <Link 
                to="/rooms" 
                className={`inline-flex items-center gap-1 hover:text-[#C5A059] transition-colors py-1 ${
                  isActive('/rooms') ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
                }`}
              >
                Rooms & Suites
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {isRoomsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#0E2019] border border-[#C5A059]/40 shadow-2xl rounded-b-md py-2 px-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link to="/rooms" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-white font-medium">
                    All Accommodations
                  </Link>
                  <Link to="/rooms/royal-imperial-suite" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    The Royal Imperial Suite
                  </Link>
                  <Link to="/rooms/art-deco-suite" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    Art Deco Luxury Suite
                  </Link>
                  <Link to="/rooms/heritage-grand-room" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    Heritage Grand Room
                  </Link>
                  <Link to="/rooms/eliza-luxury-room" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    Eliza Room (Women Travelers)
                  </Link>
                </div>
              )}
            </div>

            {/* Dining Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDiningDropdownOpen(true)}
              onMouseLeave={() => setIsDiningDropdownOpen(false)}
            >
              <Link 
                to="/dining" 
                className={`inline-flex items-center gap-1 hover:text-[#C5A059] transition-colors py-1 ${
                  isActive('/dining') ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
                }`}
              >
                Dining & Bars
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {isDiningDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#0E2019] border border-[#C5A059]/40 shadow-2xl rounded-b-md py-2 px-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link to="/dining" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-white font-medium">
                    All Restaurants & Bars
                  </Link>
                  <Link to="/dining/oak-1911-restaurant" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    1911 Restaurant & Verandah
                  </Link>
                  <Link to="/dining/the-spice-route" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    The Spice Route (Southeast Asian)
                  </Link>
                  <Link to="/dining/san-gimignano" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    San Gimignano (Tuscan Italian)
                  </Link>
                  <Link to="/dining/daniells-tavern" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    Daniell's Tavern (Pan-Indian)
                  </Link>
                  <Link to="/dining/the-patisserie" className="block px-3 py-2 text-xs hover:bg-[#1A382D] hover:text-[#C5A059] rounded transition-colors text-[#D8CFBF]">
                    The Imperial Patisserie & Tea
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/spa" 
              className={`hover:text-[#C5A059] transition-colors py-1 ${
                isActive('/spa') ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
              }`}
            >
              The Spa
            </Link>

            <Link 
              to="/heritage" 
              className={`hover:text-[#C5A059] transition-colors py-1 ${
                isActive('/heritage') ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Heritage & Art
            </Link>

            <Link 
              to="/offers" 
              className={`hover:text-[#C5A059] transition-colors py-1 ${
                isActive('/offers') ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Offers
            </Link>

            <Link 
              to="/events" 
              className={`hover:text-[#C5A059] transition-colors py-1 ${
                isActive('/events') ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Weddings & Events
            </Link>

            <Link 
              to="/gallery" 
              className={`hover:text-[#C5A059] transition-colors py-1 ${
                isActive('/gallery') ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Gallery
            </Link>

            <Link 
              to="/contact" 
              className={`hover:text-[#C5A059] transition-colors py-1 ${
                isActive('/contact') ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Book Now Button CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B066] active:bg-[#B38F48] text-[#122820] font-cinzel text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openBookingModal()}
              className="bg-[#C5A059] text-[#122820] font-cinzel text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded mr-1"
            >
              Reserve
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded text-[#D8CFBF] hover:text-white hover:bg-[#1A382D] transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0D1C16] border-b border-[#2C483C] px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2 text-sm uppercase tracking-wider font-medium text-[#E5DFD5]">
              <Link to="/" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                Home
              </Link>
              <Link to="/rooms" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                Rooms & Suites
              </Link>
              <Link to="/dining" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                Dining & Culinary Sanctuaries
              </Link>
              <Link to="/spa" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                The Imperial Spa & Wellness
              </Link>
              <Link to="/heritage" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                Heritage & Museum Art
              </Link>
              <Link to="/offers" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                Special Offers & Packages
              </Link>
              <Link to="/events" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                Weddings & Royal Celebrations
              </Link>
              <Link to="/gallery" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                Photo Gallery
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded hover:bg-[#1A382D] hover:text-[#C5A059] transition-colors">
                Location & Contact
              </Link>
              <Link to="/saved" className="px-3 py-2 rounded bg-[#183329] text-[#C5A059] flex items-center justify-between">
                <span>My Itinerary & Saved Items</span>
                <span className="font-bold text-xs bg-[#C5A059] text-[#122820] px-2 py-0.5 rounded-full">
                  {totalSavedCount}
                </span>
              </Link>
            </div>

            <div className="pt-3 border-t border-[#243E33]">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full bg-[#C5A059] hover:bg-[#D4B066] text-[#122820] font-cinzel text-xs font-bold tracking-widest uppercase py-3 rounded text-center block shadow"
              >
                Book Accommodation Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
