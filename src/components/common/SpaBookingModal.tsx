import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { SPA_TREATMENTS } from '../../data/mockData';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export const SpaBookingModal: React.FC = () => {
  const { 
    isSpaModalOpen, 
    closeSpaModal, 
    preselectedTreatmentId, 
    formatPrice, 
    addSpaBooking 
  } = useHotel();

  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(SPA_TREATMENTS[0].id);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('11:00 AM');
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [therapistGender, setTherapistGender] = useState<'Female' | 'Male' | 'No Preference'>('No Preference');
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    if (preselectedTreatmentId) {
      setSelectedTreatmentId(preselectedTreatmentId);
    }
  }, [preselectedTreatmentId, isSpaModalOpen]);

  if (!isSpaModalOpen) return null;

  const selectedTreatment = SPA_TREATMENTS.find(t => t.id === selectedTreatmentId) || SPA_TREATMENTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) {
      alert('Please fill in required fields.');
      return;
    }

    const booking = addSpaBooking({
      treatmentId: selectedTreatment.id,
      treatmentName: selectedTreatment.name,
      date,
      time,
      guestName,
      guestEmail,
      guestPhone,
      therapistGender
    });

    setConfirmedRef(booking.bookingRef);
  };

  const handleResetAndClose = () => {
    setConfirmedRef(null);
    closeSpaModal();
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
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif-luxury text-xl font-medium">Spa & Wellness Ritual Booking</h3>
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
              Spa Sanctuary Appointment Confirmed
            </h4>
            <p className="text-xs text-[#666]">
              Your appointment for <strong className="text-[#122820]">{selectedTreatment.name}</strong> has been scheduled.
            </p>
            <div className="bg-[#F0ECE1] p-4 rounded text-xs text-left max-w-sm mx-auto space-y-1.5 border border-[#DDD5C5]">
              <div className="flex justify-between">
                <span>Appointment Ref:</span>
                <span className="font-mono font-bold text-[#122820]">{confirmedRef}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="font-medium text-[#122820]">{date} at {time}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-medium text-[#122820]">{selectedTreatment.durationMinutes} Minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Treatment Fee:</span>
                <span className="font-bold text-[#122820]">{formatPrice(selectedTreatment.priceINR)}</span>
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
                Select Therapy or Ritual
              </label>
              <select
                value={selectedTreatmentId}
                onChange={(e) => setSelectedTreatmentId(e.target.value)}
                className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-sm text-[#202020]"
              >
                {SPA_TREATMENTS.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.durationMinutes} min · {formatPrice(t.priceINR)})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                  Preferred Date
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
                  Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-white border border-[#D5CCBC] rounded p-2 text-xs"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block uppercase font-semibold text-[#666] tracking-wider mb-1">
                Therapist Preference
              </label>
              <div className="flex gap-4">
                {(['No Preference', 'Female', 'Male'] as const).map(pref => (
                  <label key={pref} className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="therapistGender"
                      checked={therapistGender === pref}
                      onChange={() => setTherapistGender(pref)}
                      className="accent-[#122820]"
                    />
                    <span>{pref}</span>
                  </label>
                ))}
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
            </div>

            <button
              type="submit"
              className="w-full bg-[#122820] hover:bg-[#1C3D31] text-[#C5A059] font-cinzel text-xs font-bold tracking-widest uppercase py-3 rounded shadow transition-all cursor-pointer"
            >
              Book Spa Ritual · {formatPrice(selectedTreatment.priceINR)}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
