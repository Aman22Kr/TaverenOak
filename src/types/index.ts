export interface Room {
  id: string;
  slug: string;
  name: string;
  category: 'Colonial Room' | 'Art Deco Suite' | 'Royal Imperial Suite' | 'Eliza Room';
  tagline: string;
  description: string;
  longDescription: string;
  sizeSqFt: number;
  bedType: string;
  maxGuests: number;
  pricePerNightINR: number;
  view: string;
  mainImage: string;
  gallery: string[];
  amenities: string[];
  features: string[];
  rating: number;
  reviewsCount: number;
}

export interface MenuItem {
  name: string;
  description: string;
  priceINR: number;
  dietary?: 'Vegetarian' | 'Non-Vegetarian' | 'Vegan' | 'Chef Signature';
}

export interface DiningVenue {
  id: string;
  slug: string;
  name: string;
  cuisine: string;
  tagline: string;
  description: string;
  longDescription: string;
  hours: {
    breakfast?: string;
    lunch?: string;
    highTea?: string;
    dinner: string;
  };
  dressCode: string;
  seatingCapacity: number;
  location: string;
  mainImage: string;
  gallery: string[];
  signatureDishes: string[];
  sampleMenu: {
    starters: MenuItem[];
    mains: MenuItem[];
    desserts: MenuItem[];
    beverages: MenuItem[];
  };
  awards: string[];
}

export interface SpaTreatment {
  id: string;
  name: string;
  category: 'Ayurvedic Rituals' | 'Imperial Signatures' | 'Therapeutic Massages' | 'Hydrotherapy & Facials';
  durationMinutes: number;
  priceINR: number;
  description: string;
  benefits: string[];
  image: string;
}

export interface SpecialOffer {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  discountBadge: string;
  description: string;
  inclusions: string[];
  terms: string[];
  validTill: string;
  basePriceINR: number;
  discountedPriceINR: number;
  image: string;
  category: 'Stay' | 'Culinary' | 'Wellness' | 'Celebration';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Suites' | 'Dining' | 'Spa' | 'Art & Heritage' | 'Celebrations';
  imageUrl: string;
  caption: string;
}

export interface RoomReservation {
  id: string;
  bookingRef: string;
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  totalPriceINR: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  status: 'Confirmed' | 'Pending Arrival' | 'Cancelled';
  createdAt: string;
}

export interface DiningBooking {
  id: string;
  bookingRef: string;
  venueId: string;
  venueName: string;
  date: string;
  timeSlot: string;
  guests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  seatingPreference: string;
  specialRequests?: string;
  createdAt: string;
}

export interface SpaBooking {
  id: string;
  bookingRef: string;
  treatmentId: string;
  treatmentName: string;
  date: string;
  time: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  therapistGender?: 'Female' | 'Male' | 'No Preference';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  roomStayed: string;
  quote: string;
  rating: number;
  date: string;
  publication?: string;
}
