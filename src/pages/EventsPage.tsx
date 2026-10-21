import React, { useState, useEffect } from 'react';
import { useHotel } from '../context/HotelContext';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { 
  GlassWater, 
  Users, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Send,
  Building2
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { showToast } = useHotel();
  const [eventType, setEventType] = useState('Royal Wedding');
  const [guestCount, setGuestCount] = useState('200 - 400 Guests');
  const [preferredDate, setPreferredDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const venues = [
    {
      name: 'The Royal Ballroom',
      areaSqFt: 6200,
      theatre: 450,
      banquet: 320,
      reception: 500,
      description: 'Opulent colonial ballroom with restored Belgian crystal chandeliers and Burma teak floorboards.'
    },
    {
      name: 'One Imperial Lawns',
      areaSqFt: 18500,
      theatre: 800,
      banquet: 650,
      reception: 850,
      description: 'Expansive manicured lawn framed by century-old banyan trees and royal king palms for starlit celebrations.'
    },
    {
      name: 'The Lutyens Boardrooms',
      areaSqFt: 1200,
      theatre: 40,
      banquet: 24,
      reception: 50,
      description: 'Edwardian mahogany boardrooms tailored for state diplomacy, executive summits, and confidential meetings.'
    },
    {
      name: 'The Palm Verandah',
      areaSqFt: 2800,
      theatre: 140,
      banquet: 90,
      reception: 160,
      description: 'Open-air colonial colonnade overlooking the central heritage courtyard and fountains.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      showToast('Please fill in required contact fields.', 'error');
      return;
    }

    const ref = `RFP-${Date.now().toString(36).toUpperCase()}`;
    const rfpData = {
      ref,
      eventType,
      guestCount,
      preferredDate,
      name,
      email,
      phone,
      notes,
      createdAt: new Date().toISOString()
    };

    // Save RFP to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('taverenoak_rfps') || '[]');
      localStorage.setItem('taverenoak_rfps', JSON.stringify([rfpData, ...existing]));
    } catch {
      // fallback
    }

    setSubmittedRef(ref);
    showToast(`RFP submitted successfully! Reference: ${ref}`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="relative py-24 bg-[#122820] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
            alt="Royal Weddings & Events Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Regal Celebrations & Galas
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            Weddings, Banquets & Sovereign Summits
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light leading-relaxed">
            Host historic occasions in New Delhi’s most revered heritage halls, where diplomatic galas and grand Indian weddings have unfolded for ninety years.
          </p>
        </div>
      </div>

      {/* Venues Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#AA8640] block mb-2">
            Distinguished Venues
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#122820]">
            Spaces Tailored for Grandeur
          </h2>
          <p className="text-xs sm:text-sm text-[#666] mt-2">
            Each venue blends majestic British Raj architectural proportions with contemporary banquet technology and discreet master service.
          </p>
        </div>

        {/* Venues Capacity Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E3DBD0] overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#122820] text-[#C5A059] font-cinzel uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Venue Name</th>
                  <th className="p-4">Dimensions (Sq Ft)</th>
                  <th className="p-4">Theatre</th>
                  <th className="p-4">Banquet Round</th>
                  <th className="p-4">Cocktail Reception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0ECE1] text-[#333]">
                {venues.map((v, i) => (
                  <tr key={i} className="hover:bg-[#FAF8F5]">
                    <td className="p-4">
                      <p className="font-bold text-sm text-[#122820] font-serif-luxury">{v.name}</p>
                      <p className="text-[#666] text-[11px] mt-0.5">{v.description}</p>
                    </td>
                    <td className="p-4 font-semibold text-[#122820]">{v.areaSqFt.toLocaleString()} sq ft</td>
                    <td className="p-4">{v.theatre} Guests</td>
                    <td className="p-4">{v.banquet} Guests</td>
                    <td className="p-4 font-bold text-[#AA8640]">{v.reception} Guests</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RFP Form Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#E3DBD0] p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <GlassWater className="w-8 h-8 text-[#AA8640] mx-auto mb-2" />
            <h3 className="font-serif-luxury text-3xl font-bold text-[#122820]">
              Request a Proposal (RFP)
            </h3>
            <p className="text-xs text-[#666] mt-1">
              Our Senior Banquet Director will contact you within 24 hours with customized floor plans, culinary portfolios, and availability.
            </p>
          </div>

          {submittedRef ? (
            <div className="p-8 text-center bg-[#FAF8F5] rounded-xl border border-[#E0D8CB] space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#122820] mx-auto" />
              <h4 className="font-serif-luxury text-2xl font-bold text-[#122820]">
                Proposal Request Received
              </h4>
              <p className="text-xs text-[#666] max-w-md mx-auto">
                Thank you, <strong className="text-[#122820]">{name}</strong>. Your inquiry for a <strong>{eventType}</strong> ({guestCount}) has been assigned reference:
              </p>
              <div className="font-mono font-bold text-base text-[#122820] bg-white px-4 py-2 rounded inline-block border border-[#DDD5C5]">
                {submittedRef}
              </div>
              <div>
                <button
                  onClick={() => setSubmittedRef(null)}
                  className="mt-4 bg-[#122820] text-[#C5A059] font-cinzel text-xs font-bold uppercase px-6 py-2.5 rounded"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Event Type *
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs focus:outline-none focus:border-[#122820]"
                  >
                    <option value="Royal Wedding">Royal Wedding Celebration</option>
                    <option value="Diplomatic Banquet">State / Diplomatic Dinner</option>
                    <option value="Corporate Summit">Executive Board Summit</option>
                    <option value="Gala Reception">Anniversary / Private Gala</option>
                    <option value="Art Exhibition">Art & Fashion Exhibition</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Estimated Guests *
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs focus:outline-none focus:border-[#122820]"
                  >
                    <option value="20 - 50 Guests">20 - 50 Guests (Intimate)</option>
                    <option value="50 - 150 Guests">50 - 150 Guests</option>
                    <option value="150 - 300 Guests">150 - 300 Guests</option>
                    <option value="300 - 500 Guests">300 - 500 Guests</option>
                    <option value="500 - 800+ Guests">500 - 800+ Guests (Royal Lawns)</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Lord Harrington / Mr. Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>

                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>

                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 / International number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Additional Vision, Catering Expectations or Themes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your catering preferences (Awadhi, European, Southeast Asian), entertainment, decor themes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs focus:outline-none focus:border-[#122820]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#122820] hover:bg-[#1C3D31] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase py-3.5 rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Event Request for Proposal</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Royal Wedding Haute Couture, Bespoke Jewellery & Floral Stylists" />
    </div>
  );
};
