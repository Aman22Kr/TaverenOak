import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WelcomeSection } from '../components/home/WelcomeSection';
import { RoomsCarousel } from '../components/home/RoomsCarousel';
import { DiningShowcase } from '../components/home/DiningShowcase';
import { SpaWellnessPreview } from '../components/home/SpaWellnessPreview';
import { ArtCollectionBanner } from '../components/home/ArtCollectionBanner';
import { RoyalWeddingsPreview } from '../components/home/RoyalWeddingsPreview';
import { GuestReviewsSection } from '../components/home/GuestReviewsSection';
import { AdvertisementPlaceholder } from '../components/common/AdvertisementPlaceholder';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <RoomsCarousel />
      <DiningShowcase />
      <SpaWellnessPreview />
      <ArtCollectionBanner />
      <RoyalWeddingsPreview />
      <GuestReviewsSection />
      <AdvertisementPlaceholder slotName="Royal Indian Heritage Tourism & Luxury Rail Partners" />
    </div>
  );
};
