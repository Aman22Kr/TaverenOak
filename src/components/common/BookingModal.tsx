import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { ROOMS_DATA } from '../../data/mockData';
import { X, Calendar, Users, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { 
    isBookingModalOpen, 
    closeBookingModal, 
    preselectedRoomId, 
    formatPrice, 
    addRoomReservation 
  } = useHotel();

  const [selectedRoomId, setSelectedRoomId] = useState<string>(ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [confirmedBookingRef, setConfirmedBookingRef] = useState<string | null>(null);

  // Set default dates: check-in tomorrow, check-out in 3 days
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const checkoutDay = new Date(tomorrow);
    checkoutDay.setDate(tomorrow.getDate() + 2);

    setCheckIn(tomorrow.toISOString().split('T')[0]);
    setCheckOut(checkoutDay.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    if (preselectedRoomId) {
      setSelectedRoomId(preselectedRoomId);
    }
  }, [preselectedRoomId, isBookingModalOpen]);

  if (!isBookingModalOpen) return null;

  const selectedRoom = ROOMS_DATA.find(r => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = checkOutDate.getTime() - checkInDate.getTime();
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1);
  const totalPriceINR = selectedRoom.pricePerNightINR * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) {
      alert('Please fill in all required guest information fields.');
      return;
    }

    const reservation = addRoomReservation({
      roomId: selectedRoom.id,
      roomName: selectedRoom.name,
      checkIn,
      checkOut,
      guests,
      nights,
      totalPriceINR,
      guestName,
      guestEmail,
      guestPhone,
      specialRequests
    });

    setConfirmedBookingRef(reservation.bookingRef);
  };

  const handleResetAndClose = () => {
    setConfirmedBookingRef(null);
    closeBookingModal();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] text-[#202020] rounded-xl shadow-2xl border border-[#D5CCBC] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-[#122820] text-white px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/40">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
              ★
            </div>
            <div>
              <h3 id="booking-modal-title" className="font-serif-luxury text-xl font-medium tracking-wide">
                Direct Royal Reservation
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-[#C5A059]">
                TaverenOak New Delhi · Best Rate Guaranteed
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-[#D8CFBF] hover:text-white p-1 rounded transition-colors"
            aria-label="Close reservation dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmedBookingRef ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#122820] text-[#C5A059] rounded-full flex items-center justify-center mx-auto border-2 border-[#C5A059]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#857B6B] font-semibold block mb-1">
                Reservation Confirmed
              </span>
              <h4 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#122820]">
                We Look Forward to Welcoming You
              </h4>
              <p className="text-sm text-[#555] max-w-md mx-auto mt-2">
                Your reservation at TaverenOak has been registered with our Concierge Desk and stored in your browser session.
              </p>
            </div>

            <div className="bg-[#F0ECE1] border border-[#DDD5C5] rounded-lg p-5 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#DDD5C5] pb-2">
                <span className="text-[#666]">Booking Reference:</span>
                <span className="font-mono font-bold text-sm text-[#122820]">{confirmedBookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Selected Suite:</span>
                <span className="font-medium text-[#122820]">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Dates of Stay:</span>
                <span className="font-medium text-[#122820]">{checkIn} to {checkOut} ({nights} {nights === 1 ? 'Night' : 'Nights'})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Total Reserved Amount:</span>
                <span className="font-bold text-[#122820] text-sm">{formatPrice(totalPriceINR)}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#666]">Primary Guest:</span>
                <span className="font-medium text-[#122820]">{guestName} ({guestEmail})</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleResetAndClose}
                className="bg-[#122820] hover:bg-[#1C3D31] text-[#C5A059] font-cinzel text-xs font-bold tracking-wider uppercase px-6 py-3 rounded shadow transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Room selection */}
            <div>
              <label className="block text-xs uppercase font-semibold text-[#666] tracking-wider mb-1.5">
                Select Suite or Room
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-white border border-[#D5CCBC] rounded p-2.5 text-sm text-[#202020] focus:outline-none focus:border-[#122820]"
              >
                {ROOMS_DATA.map(room => (
                  <option key={room.id} value={room.id}>
                    {room.name} — {formatPrice(room.pricePerNightINR)} / night ({room.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Room Preview Snippet */}
            <div className="flex gap-4 p-3 bg-[#F0ECE1] rounded border border-[#E3DBD0] items-center">
              <img 
                src={selectedRoom.mainImage} 
                alt={selectedRoom.name} 
                className="w-20 h-16 object-cover rounded shrink-0" 
              />
              <div className="text-xs">
                <p className="font-semibold text-sm text-[#122820]">{selectedRoom.name}</p>
                <p className="text-[#666] mt-0.5">{selectedRoom.sizeSqFt} sq ft · {selectedRoom.bedType} · {selectedRoom.view}</p>
                <p className="text-[#857B6B] mt-0.5 font-medium">{formatPrice(selectedRoom.pricePerNightINR)} per night</p>
              </div>
            </div>

            {/* Dates & Guests row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Check-in Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full bg-white border border-[#D5CCBC] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Check-out Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    className="w-full bg-white border border-[#D5CCBC] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-white border border-[#D5CCBC] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#122820]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="pt-2 border-t border-[#E3DBD0] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#122820]">
                Primary Guest Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                    className="w-full bg-white border border-[#D5CCBC] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-[#D5CCBC] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number *"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    required
                    className="w-full bg-white border border-[#D5CCBC] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Special requests (e.g. Airport pickup, quiet floor)..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-white border border-[#D5CCBC] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#122820]"
                  />
                </div>
              </div>
            </div>

            {/* Price calculation summary */}
            <div className="bg-[#FAF3E8] border border-[#E0D3BE] rounded p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-[#706654]">
                  Estimated Stay Total ({nights} {nights === 1 ? 'night' : 'nights'} · {guests} {guests === 1 ? 'guest' : 'guests'})
                </p>
                <p className="font-serif-luxury text-2xl font-bold text-[#122820]">
                  {formatPrice(totalPriceINR)}
                </p>
                <p className="text-[10px] text-[#8C806D]">
                  Includes high tea privileges, heritage taxes & Wi-Fi. Free cancellation up to 48 hours.
                </p>
              </div>

              <button
                type="submit"
                className="bg-[#122820] hover:bg-[#1A382D] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase px-6 py-3 rounded shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Confirm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
