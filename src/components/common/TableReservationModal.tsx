import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { DINING_VENUES } from '../../data/mockData';
import { X, Utensils, CheckCircle2 } from 'lucide-react';

export const TableReservationModal: React.FC = () => {
  const { 
    isTableModalOpen, 
    closeTableModal, 
    preselectedVenueId, 
    addDiningBooking 
  } = useHotel();

  const [selectedVenueId, setSelectedVenueId] = useState<string>(DINING_VENUES[0].id);
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('20:00 (Dinner)');
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [seatingPreference, setSeatingPreference] = useState<string>('Courtyard / Verandah');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    if (preselectedVenueId) {
      setSelectedVenueId(preselectedVenueId);
    }
  }, [preselectedVenueId, isTableModalOpen]);

  if (!isTableModalOpen) return null;

  const selectedVenue = DINING_VENUES.find(v => v.id === selectedVenueId) || DINING_VENUES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) {
      alert('Please fill in required fields.');
      return;
    }

    const booking = addDiningBooking({
      venueId: selectedVenue.id,
      venueName: selectedVenue.name,
      date,
      timeSlot,
      guests,
      guestName,
      guestEmail,
      guestPhone,
      seatingPreference,
      specialRequests
    });

    setConfirmedRef(booking.bookingRef);
  };

  const handleResetAndClose = () => {
    setConfirmedRef(null);
    closeTableModal();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-[#FAF8F5] text-[#202020] rounded-xl shadow-2xl border border-[#D5CCBC] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#122820] text-white px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/40">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif-luxury text-xl font-medium">Table Reservation</h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-[#D8CFBF] hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmedRef ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#122820] text-[#C5A059] rounded-full flex items-center justify-center mx-auto border-2 border-[#C5A059]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-serif-luxury text-2xl font-bold text-[#122820]">
              Table Reserved with Our Compliments
            </h4>
            <p className="text-xs text-[#666]">
              Your table at <strong className="text-[#122820]">{selectedVenue.name}</strong> has been secured.
            </p>
            <div className="bg-[#F0ECE1] p-4 rounded text-xs text-left max-w-sm mx-auto space-y-1.5 border border-[#DDD5C5]">
              <div className="flex justify-between">
                <span>Confirmation Ref:</span>
                <span className="font-mono font-bold text-[#122820]">{confirmedRef}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="font-medium text-[#122820]">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span>Party Size:</span>
                <span className="font-medium text-[#122820]">{guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span>Seating:</span>
                <span className="font-medium text-[#122820]">{seatingPreference}</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="bg-[#122820] text-[#C5A059] font-cinzel text-xs font-bold uppercase px-6 py-2.5 rounded"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                Culinary Sanctuary
              </label>
              <select
                value={selectedVenueId}
                onChange={(e) => setSelectedVenueId(e.target.value)}
                className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-sm text-[#202020]"
              >
                {DINING_VENUES.map(v => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.cuisine})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
                />
              </div>

              <div>
                <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
                >
                  <option value="12:30 (Lunch)">12:30 (Lunch)</option>
                  <option value="13:30 (Lunch)">13:30 (Lunch)</option>
                  <option value="16:30 (High Tea)">16:30 (High Tea)</option>
                  <option value="19:30 (Dinner)">19:30 (Dinner)</option>
                  <option value="20:30 (Dinner)">20:30 (Dinner)</option>
                  <option value="21:30 (Dinner)">21:30 (Dinner)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={6}>6 Guests</option>
                  <option value={8}>8+ Guests (Private Dining)</option>
                </select>
              </div>

              <div>
                <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Seating Ambiance
                </label>
                <select
                  value={seatingPreference}
                  onChange={(e) => setSeatingPreference(e.target.value)}
                  className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
                >
                  <option value="Courtyard / Verandah">Courtyard / Verandah</option>
                  <option value="Indoor Salon">Indoor Salon</option>
                  <option value="Window View">Window Garden View</option>
                  <option value="Private Alcove">Private Alcove</option>
                </select>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E3DBD0] space-y-2">
              <input
                type="text"
                placeholder="Full Name *"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  required
                  className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  required
                  className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
                />
              </div>
              <input
                type="text"
                placeholder="Dietary preferences (e.g. Vegetarian, Jain, Allergies, Anniversary cake)..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#122820] hover:bg-[#1C3D31] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase py-3 rounded shadow transition-all cursor-pointer"
            >
              Reserve Table
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
