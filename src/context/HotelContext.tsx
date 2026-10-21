import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { RoomReservation, DiningBooking, SpaBooking } from '../types';
import { HOTEL_INFO } from '../data/mockData';

export type Currency = 'INR' | 'USD' | 'EUR' | 'GBP';

interface ToastItem {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface HotelContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceINR: number) => string;
  
  // Room Reservations
  roomReservations: RoomReservation[];
  addRoomReservation: (data: Omit<RoomReservation, 'id' | 'bookingRef' | 'status' | 'createdAt'>) => RoomReservation;
  cancelRoomReservation: (id: string) => void;

  // Dining Bookings
  diningBookings: DiningBooking[];
  addDiningBooking: (data: Omit<DiningBooking, 'id' | 'bookingRef' | 'createdAt'>) => DiningBooking;
  cancelDiningBooking: (id: string) => void;

  // Spa Bookings
  spaBookings: SpaBooking[];
  addSpaBooking: (data: Omit<SpaBooking, 'id' | 'bookingRef' | 'createdAt'>) => SpaBooking;
  cancelSpaBooking: (id: string) => void;

  // Favorites
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  // Modals
  isBookingModalOpen: boolean;
  openBookingModal: (roomId?: string) => void;
  closeBookingModal: () => void;
  preselectedRoomId: string | null;

  isTableModalOpen: boolean;
  openTableModal: (venueId?: string) => void;
  closeTableModal: () => void;
  preselectedVenueId: string | null;

  isSpaModalOpen: boolean;
  openSpaModal: (treatmentId?: string) => void;
  closeSpaModal: () => void;
  preselectedTreatmentId: string | null;

  // Toasts
  toasts: ToastItem[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const HotelContext = createContext<HotelContextType | undefined>(undefined);

const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // localStorage may fail in restricted privacy mode
    }
  }
};

export const HotelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Currency
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = safeLocalStorage.getItem('taverenoak_currency');
    return (saved as Currency) || 'INR';
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    safeLocalStorage.setItem('taverenoak_currency', c);
  };

  const formatPrice = (priceINR: number): string => {
    const rate = HOTEL_INFO.currencyRates[currency] || 1;
    const converted = Math.round(priceINR * rate);
    
    switch (currency) {
      case 'INR':
        return `₹${converted.toLocaleString('en-IN')}`;
      case 'USD':
        return `$${converted.toLocaleString('en-US')}`;
      case 'EUR':
        return `€${converted.toLocaleString('de-DE')}`;
      case 'GBP':
        return `£${converted.toLocaleString('en-GB')}`;
      default:
        return `₹${converted.toLocaleString('en-IN')}`;
    }
  };

  // Room Reservations
  const [roomReservations, setRoomReservations] = useState<RoomReservation[]>(() => {
    const saved = safeLocalStorage.getItem('taverenoak_reservations');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    safeLocalStorage.setItem('taverenoak_reservations', JSON.stringify(roomReservations));
  }, [roomReservations]);

  const addRoomReservation = (data: Omit<RoomReservation, 'id' | 'bookingRef' | 'status' | 'createdAt'>): RoomReservation => {
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const newReservation: RoomReservation = {
      ...data,
      id: `RES-${Date.now()}`,
      bookingRef: `TO-${randomHex}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };
    setRoomReservations(prev => [newReservation, ...prev]);
    showToast(`Reservation confirmed! Booking Reference: ${newReservation.bookingRef}`, 'success');
    return newReservation;
  };

  const cancelRoomReservation = (id: string) => {
    setRoomReservations(prev => prev.filter(r => r.id !== id));
    showToast('Reservation cancelled successfully.', 'info');
  };

  // Dining Bookings
  const [diningBookings, setDiningBookings] = useState<DiningBooking[]>(() => {
    const saved = safeLocalStorage.getItem('taverenoak_table_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    safeLocalStorage.setItem('taverenoak_table_bookings', JSON.stringify(diningBookings));
  }, [diningBookings]);

  const addDiningBooking = (data: Omit<DiningBooking, 'id' | 'bookingRef' | 'createdAt'>): DiningBooking => {
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const newBooking: DiningBooking = {
      ...data,
      id: `DINE-${Date.now()}`,
      bookingRef: `TB-${randomHex}`,
      createdAt: new Date().toISOString()
    };
    setDiningBookings(prev => [newBooking, ...prev]);
    showToast(`Table reserved at ${data.venueName}! Ref: ${newBooking.bookingRef}`, 'success');
    return newBooking;
  };

  const cancelDiningBooking = (id: string) => {
    setDiningBookings(prev => prev.filter(b => b.id !== id));
    showToast('Table reservation cancelled.', 'info');
  };

  // Spa Bookings
  const [spaBookings, setSpaBookings] = useState<SpaBooking[]>(() => {
    const saved = safeLocalStorage.getItem('taverenoak_spa_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    safeLocalStorage.setItem('taverenoak_spa_bookings', JSON.stringify(spaBookings));
  }, [spaBookings]);

  const addSpaBooking = (data: Omit<SpaBooking, 'id' | 'bookingRef' | 'createdAt'>): SpaBooking => {
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const newBooking: SpaBooking = {
      ...data,
      id: `SPA-${Date.now()}`,
      bookingRef: `SPA-${randomHex}`,
      createdAt: new Date().toISOString()
    };
    setSpaBookings(prev => [newBooking, ...prev]);
    showToast(`Spa appointment booked: ${data.treatmentName}! Ref: ${newBooking.bookingRef}`, 'success');
    return newBooking;
  };

  const cancelSpaBooking = (id: string) => {
    setSpaBookings(prev => prev.filter(b => b.id !== id));
    showToast('Spa appointment cancelled.', 'info');
  };

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = safeLocalStorage.getItem('taverenoak_saved_favorites');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return ['royal-imperial-suite', 'oak-1911-restaurant'];
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      let next;
      if (prev.includes(id)) {
        next = prev.filter(item => item !== id);
        showToast('Removed from your saved collection.', 'info');
      } else {
        next = [...prev, id];
        showToast('Added to your saved collection.', 'success');
      }
      safeLocalStorage.setItem('taverenoak_saved_favorites', JSON.stringify(next));
      return next;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | null>(null);

  const openBookingModal = (roomId?: string) => {
    setPreselectedRoomId(roomId || null);
    setIsBookingModalOpen(true);
  };
  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setPreselectedRoomId(null);
  };

  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [preselectedVenueId, setPreselectedVenueId] = useState<string | null>(null);

  const openTableModal = (venueId?: string) => {
    setPreselectedVenueId(venueId || null);
    setIsTableModalOpen(true);
  };
  const closeTableModal = () => {
    setIsTableModalOpen(false);
    setPreselectedVenueId(null);
  };

  const [isSpaModalOpen, setIsSpaModalOpen] = useState(false);
  const [preselectedTreatmentId, setPreselectedTreatmentId] = useState<string | null>(null);

  const openSpaModal = (treatmentId?: string) => {
    setPreselectedTreatmentId(treatmentId || null);
    setIsSpaModalOpen(true);
  };
  const closeSpaModal = () => {
    setIsSpaModalOpen(false);
    setPreselectedTreatmentId(null);
  };

  // Toasts
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <HotelContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        roomReservations,
        addRoomReservation,
        cancelRoomReservation,
        diningBookings,
        addDiningBooking,
        cancelDiningBooking,
        spaBookings,
        addSpaBooking,
        cancelSpaBooking,
        favorites,
        toggleFavorite,
        isFavorite,
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        preselectedRoomId,
        isTableModalOpen,
        openTableModal,
        closeTableModal,
        preselectedVenueId,
        isSpaModalOpen,
        openSpaModal,
        closeSpaModal,
        preselectedTreatmentId,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error('useHotel must be used within a HotelProvider');
  }
  return context;
};
