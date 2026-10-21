import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HotelProvider } from './context/HotelContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { BookingModal } from './components/common/BookingModal';
import { TableReservationModal } from './components/common/TableReservationModal';
import { SpaBookingModal } from './components/common/SpaBookingModal';
import { ToastContainer } from './components/common/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { DiningPage } from './pages/DiningPage';
import { DiningDetailPage } from './pages/DiningDetailPage';
import { SpaPage } from './pages/SpaPage';
import { HeritagePage } from './pages/HeritagePage';
import { OffersPage } from './pages/OffersPage';
import { OfferDetailPage } from './pages/OfferDetailPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { SavedBookingsPage } from './pages/SavedBookingsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <HotelProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#222220]">
          {/* Header Navigation */}
          <Header />

          {/* Main Routing Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/rooms/:id" element={<RoomDetailPage />} />
              <Route path="/dining" element={<DiningPage />} />
              <Route path="/dining/:id" element={<DiningDetailPage />} />
              <Route path="/spa" element={<SpaPage />} />
              <Route path="/heritage" element={<HeritagePage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/offers/:id" element={<OfferDetailPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/saved" element={<SavedBookingsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Luxury Footer */}
          <Footer />

          {/* Global Modals & Toast System */}
          <BookingModal />
          <TableReservationModal />
          <SpaBookingModal />
          <ToastContainer />
        </div>
      </HashRouter>
    </HotelProvider>
  );
}
