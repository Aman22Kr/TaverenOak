import React, { useState, useEffect } from 'react';
import { useHotel } from '../context/HotelContext';
import { HOTEL_INFO, FAQ_ITEMS } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Car, 
  Train, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useHotel();
  const [inquiryType, setInquiryType] = useState('General Concierge');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const inquiry = {
      id: `INQ-${Date.now()}`,
      inquiryType,
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('taverenoak_inquiries') || '[]');
      localStorage.setItem('taverenoak_inquiries', JSON.stringify([inquiry, ...existing]));
    } catch {
      // fallback
    }

    setIsSubmitted(true);
    showToast('Your inquiry has been submitted to the Chief Concierge.', 'success');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="relative py-20 bg-[#122820] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80"
            alt="Estate Driveway and Palms"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Discreet Concierge Service
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            Location, Directions & Concierge Desk
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light">
            Situated on Janpath in the heart of Lutyens' New Delhi, just steps from Connaught Place and diplomatic embassies.
          </p>
        </div>
      </div>

      {/* Contact Cards Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#E3DBD0] flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#122820] text-[#C5A059] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#122820]">The Royal Estate</h3>
              <p className="text-xs text-[#666] mt-1 leading-relaxed">{HOTEL_INFO.address}</p>
              <p className="text-[11px] text-[#8C806D] font-medium mt-2">Central Delhi · Near Connaught Place</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-[#E3DBD0] flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#122820] text-[#C5A059] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#122820]">Direct Desks</h3>
              <p className="text-xs text-[#666] mt-1">Concierge: {HOTEL_INFO.phone}</p>
              <p className="text-xs text-[#666]">Reservations: {HOTEL_INFO.reservationsPhone}</p>
              <p className="text-[11px] text-[#8C806D] font-medium mt-2">Available 24 Hours / 7 Days</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-[#E3DBD0] flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#122820] text-[#C5A059] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#122820]">Written Correspondence</h3>
              <p className="text-xs text-[#666] mt-1">General: {HOTEL_INFO.email}</p>
              <p className="text-xs text-[#666]">Suites: {HOTEL_INFO.reservationsEmail}</p>
              <p className="text-[11px] text-[#8C806D] font-medium mt-2">Guaranteed reply within 4 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form & Getting Here Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-[#E3DBD0]">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#122820] mb-2">
              Send a Note to the Chief Concierge
            </h2>
            <p className="text-xs text-[#666] mb-6">
              Inquire about special room arrangements, dining dietary requests, private art tours, or airport limousine transfers.
            </p>

            {isSubmitted ? (
              <div className="p-8 text-center bg-[#FAF8F5] rounded-xl border border-[#E0D8CB] space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#122820] mx-auto" />
                <h3 className="font-serif-luxury text-2xl font-bold text-[#122820]">
                  Message Dispatched
                </h3>
                <p className="text-xs text-[#666]">
                  Thank you, <strong className="text-[#122820]">{name}</strong>. Our Head Concierge will review your correspondence and respond via email shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 bg-[#122820] text-[#C5A059] font-cinzel text-xs font-bold px-5 py-2 rounded"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs text-[#202020]"
                  >
                    <option value="General Concierge">General Concierge & Stay Inquiries</option>
                    <option value="Airport Limousine">Chauffeur / Airport Limousine Transfer</option>
                    <option value="Private Dining">Private Dining & Special Dietary Request</option>
                    <option value="Art Museum Tour">Curator Art Walk & Archives</option>
                    <option value="Press & Media">Press, Photography & Media</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your full name"
                      className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs text-[#202020]"
                    />
                  </div>

                  <div>
                    <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="email@domain.com"
                      className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs text-[#202020]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 / International mobile"
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs text-[#202020]"
                  />
                </div>

                <div>
                  <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="How may our concierge assist your upcoming visit to TaverenOak?"
                    className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded p-2.5 text-xs text-[#202020]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#122820] hover:bg-[#1C3D31] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase py-3.5 rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Getting Here & Airport Transfers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#E3DBD0] space-y-4">
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#122820]">
                Getting to TaverenOak
              </h3>

              <div className="space-y-4 text-xs text-[#555]">
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#AA8640] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#122820]">From Indira Gandhi International Airport (DEL)</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Distance: 16 km (approx. 30–40 minutes via NH 48). Chauffeur-driven Rolls-Royce, BMW 7 Series, and Mercedes-Benz airport transfers can be pre-arranged with the Concierge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-[#AA8640] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#122820]">New Delhi Railway Station & Metro Access</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Distance: 2.5 km (10 minutes). Adjacent to Janpath Metro Station (Violet Line) and 5 minutes from Rajiv Chowk Metro Interchange.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#AA8640] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#122820]">Valet & Secure On-Site Parking</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Complimentary 24-hour valet parking and electric vehicle charging bays for all resident and dining guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-[#122820] text-white p-6 rounded-2xl shadow-lg border border-[#2B4B3D] space-y-3">
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Estate Check-In & Policies
              </h4>
              <div className="space-y-2 text-xs text-[#D0C8B8]">
                <div className="flex justify-between border-b border-[#20362C] pb-1.5">
                  <span>Standard Check-In:</span>
                  <span className="font-bold text-white">{HOTEL_INFO.checkInTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#20362C] pb-1.5">
                  <span>Standard Check-Out:</span>
                  <span className="font-bold text-white">{HOTEL_INFO.checkOutTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Concierge Languages:</span>
                  <span className="font-bold text-white">English, Hindi, French, Japanese</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#AA8640] block mb-2">
            Essential Guest Knowledge
          </span>
          <h2 className="font-serif-luxury text-3xl font-medium text-[#122820]">
            Frequently Asked Inquiries
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-[#E3DBD0] overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif-luxury text-lg font-semibold text-[#122820] hover:text-[#AA8640] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                {openFaqIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-[#AA8640] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#888] shrink-0" />
                )}
              </button>
              {openFaqIndex === i && (
                <div className="px-5 pb-5 text-xs text-[#555] leading-relaxed border-t border-[#F0ECE1] pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <AdvertisementPlaceholder slotName="Private Aviation Charters & Diplomatic Security Services" />
    </div>
  );
};
