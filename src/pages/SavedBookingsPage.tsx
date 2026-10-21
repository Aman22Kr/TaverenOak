import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHotel } from '../context/HotelContext';
import { ROOMS_DATA, DINING_VENUES } from '../data/mockData';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';
import { 
  Bookmark, 
  Calendar, 
  Trash2, 
  Utensils, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  BedDouble, 
  MapPin,
  Clock
} from 'lucide-react';

export const SavedBookingsPage: React.FC = () => {
  const { 
    roomReservations, 
    cancelRoomReservation, 
    diningBookings, 
    cancelDiningBooking, 
    spaBookings, 
    cancelSpaBooking, 
    favorites, 
    toggleFavorite, 
    formatPrice, 
    openBookingModal, 
    openTableModal,
    showToast
  } = useHotel();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalCount = roomReservations.length + diningBookings.length + spaBookings.length + favorites.length;

  const favoritedRooms = ROOMS_DATA.filter(r => favorites.includes(r.id));
  const favoritedVenues = DINING_VENUES.filter(v => favorites.includes(v.id));

  const handleClearAll = () => {
    if (window.confirm('Are you sure you wish to clear all your saved reservations and favorites from this browser?')) {
      localStorage.removeItem('taverenoak_reservations');
      localStorage.removeItem('taverenoak_table_bookings');
      localStorage.removeItem('taverenoak_spa_bookings');
      localStorage.removeItem('taverenoak_saved_favorites');
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="relative py-20 bg-[#122820] text-white overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block mb-2">
            Client-Side State Storage
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide">
            My Itinerary & Saved Collection
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D0C8B8] max-w-2xl mx-auto font-light">
            Manage your verified room reservations, starlit dinner reservations, Ayurvedic appointments, and saved suites securely saved in your browser.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {totalCount === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E3DBD0] shadow-sm max-w-xl mx-auto space-y-4">
            <Bookmark className="w-12 h-12 text-[#C5A059] mx-auto" />
            <h2 className="font-serif-luxury text-3xl font-bold text-[#122820]">
              Your Itinerary is Currently Empty
            </h2>
            <p className="text-xs text-[#666] leading-relaxed">
              You haven't reserved any suites, dinner tables, or spa treatments yet. Browse our collection and bookmark your favorite rooms.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link
                to="/rooms"
                className="bg-[#122820] text-[#C5A059] font-cinzel text-xs font-bold px-6 py-3 rounded shadow"
              >
                Explore Suites & Rooms
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-[#E0D8CB] pb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#706A5F]">
                Total Saved Items: <strong className="text-[#122820]">{totalCount}</strong>
              </span>
              <button
                onClick={handleClearAll}
                className="text-xs text-red-700 hover:text-red-900 font-semibold inline-flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset All Saved Data</span>
              </button>
            </div>

            {/* Room Reservations Section */}
            {roomReservations.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <BedDouble className="w-5 h-5 text-[#AA8640]" />
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#122820]">
                    Confirmed Suite Reservations ({roomReservations.length})
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roomReservations.map(res => (
                    <div
                      key={res.id}
                      className="bg-white p-6 rounded-xl border border-[#E3DBD0] shadow-sm space-y-4 relative"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase bg-[#122820] text-[#C5A059] px-2.5 py-0.5 rounded font-bold">
                            Ref: {res.bookingRef}
                          </span>
                          <h3 className="font-serif-luxury text-xl font-bold text-[#122820] mt-1.5">
                            {res.roomName}
                          </h3>
                        </div>
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {res.status}
                        </span>
                      </div>

                      <div className="bg-[#FAF8F5] p-3 rounded text-xs text-[#555] space-y-1 border border-[#F0ECE1]">
                        <div className="flex justify-between">
                          <span>Dates:</span>
                          <span className="font-semibold text-[#122820]">{res.checkIn} to {res.checkOut} ({res.nights} {res.nights === 1 ? 'Night' : 'Nights'})</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guests:</span>
                          <span className="font-semibold text-[#122820]">{res.guests} Guests</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Primary Guest:</span>
                          <span className="font-semibold text-[#122820]">{res.guestName}</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-[#F0ECE1]">
                          <span>Total Amount:</span>
                          <span className="font-bold text-[#122820] text-sm">{formatPrice(res.totalPriceINR)}</span>
                        </div>
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => cancelRoomReservation(res.id)}
                          className="text-xs text-red-600 hover:text-red-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Cancel Stay</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Table Bookings Section */}
            {diningBookings.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-[#AA8640]" />
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#122820]">
                    Dining Table Reservations ({diningBookings.length})
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {diningBookings.map(b => (
                    <div
                      key={b.id}
                      className="bg-white p-6 rounded-xl border border-[#E3DBD0] shadow-sm space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase bg-[#122820] text-[#C5A059] px-2 py-0.5 rounded font-bold">
                            Ref: {b.bookingRef}
                          </span>
                          <h3 className="font-serif-luxury text-xl font-bold text-[#122820] mt-1.5">
                            {b.venueName}
                          </h3>
                        </div>
                        <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          Confirmed Table
                        </span>
                      </div>

                      <div className="bg-[#FAF8F5] p-3 rounded text-xs text-[#555] space-y-1 border border-[#F0ECE1]">
                        <div className="flex justify-between">
                          <span>Date & Slot:</span>
                          <span className="font-semibold text-[#122820]">{b.date} at {b.timeSlot}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Party Size:</span>
                          <span className="font-semibold text-[#122820]">{b.guests} Guests</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guest Name:</span>
                          <span className="font-semibold text-[#122820]">{b.guestName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ambiance:</span>
                          <span className="font-semibold text-[#122820]">{b.seatingPreference}</span>
                        </div>
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => cancelDiningBooking(b.id)}
                          className="text-xs text-red-600 hover:text-red-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Cancel Table</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Spa Appointments Section */}
            {spaBookings.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#AA8640]" />
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#122820]">
                    Scheduled Spa Appointments ({spaBookings.length})
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {spaBookings.map(b => (
                    <div
                      key={b.id}
                      className="bg-white p-6 rounded-xl border border-[#E3DBD0] shadow-sm space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase bg-[#122820] text-[#C5A059] px-2 py-0.5 rounded font-bold">
                            Ref: {b.bookingRef}
                          </span>
                          <h3 className="font-serif-luxury text-xl font-bold text-[#122820] mt-1.5">
                            {b.treatmentName}
                          </h3>
                        </div>
                        <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          Confirmed Therapy
                        </span>
                      </div>

                      <div className="bg-[#FAF8F5] p-3 rounded text-xs text-[#555] space-y-1 border border-[#F0ECE1]">
                        <div className="flex justify-between">
                          <span>Appointment:</span>
                          <span className="font-semibold text-[#122820]">{b.date} at {b.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guest:</span>
                          <span className="font-semibold text-[#122820]">{b.guestName}</span>
                        </div>
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => cancelSpaBooking(b.id)}
                          className="text-xs text-red-600 hover:text-red-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Cancel Appointment</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Favorited Items Section */}
            {(favoritedRooms.length > 0 || favoritedVenues.length > 0) && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-[#AA8640] fill-current" />
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#122820]">
                    Your Saved Favorites ({favoritedRooms.length + favoritedVenues.length})
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {favoritedRooms.map(room => (
                    <div
                      key={room.id}
                      className="bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm flex flex-col justify-between"
                    >
                      <div className="relative aspect-[16/10] bg-stone-200">
                        <img src={room.mainImage} alt={room.name} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-[#122820]/90 text-[#C5A059] text-[9px] uppercase font-bold px-2 py-0.5 rounded">
                          {room.category}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif-luxury text-lg font-bold text-[#122820]">
                            {room.name}
                          </h4>
                          <p className="text-xs text-[#AA8640] font-semibold mt-1">
                            {formatPrice(room.pricePerNightINR)} / Night
                          </p>
                        </div>
                        <div className="pt-3 border-t border-[#F0ECE1] flex items-center justify-between mt-3">
                          <button
                            onClick={() => toggleFavorite(room.id)}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => openBookingModal(room.id)}
                            className="bg-[#122820] text-[#C5A059] font-cinzel text-[10px] font-bold uppercase px-3 py-1.5 rounded"
                          >
                            Reserve
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {favoritedVenues.map(venue => (
                    <div
                      key={venue.id}
                      className="bg-white rounded-xl overflow-hidden border border-[#E3DBD0] shadow-sm flex flex-col justify-between"
                    >
                      <div className="relative aspect-[16/10] bg-stone-200">
                        <img src={venue.mainImage} alt={venue.name} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-[#122820]/90 text-[#C5A059] text-[9px] uppercase font-bold px-2 py-0.5 rounded">
                          {venue.cuisine}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif-luxury text-lg font-bold text-[#122820]">
                            {venue.name}
                          </h4>
                          <p className="text-xs text-[#666] mt-1 line-clamp-1">
                            {venue.tagline}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-[#F0ECE1] flex items-center justify-between mt-3">
                          <button
                            onClick={() => toggleFavorite(venue.id)}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => openTableModal(venue.id)}
                            className="bg-[#122820] text-[#C5A059] font-cinzel text-[10px] font-bold uppercase px-3 py-1.5 rounded"
                          >
                            Book Table
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>

      <AdvertisementPlaceholder slotName="Private Wealth Management & Sovereign Family Offices" />
    </div>
  );
};
