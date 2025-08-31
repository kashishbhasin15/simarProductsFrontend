import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import CollectionsSection from './components/CollectionsSection/CollectionsSection';
import OccasionsSection from './components/OccasionsSection/OccasionsSection';
import RecipientsSection from './components/RecipientsSection/RecipientsSection';
import CustomHampers from './components/CustomHampers/CustomHampers';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection />
      <CollectionsSection />
      <OccasionsSection />
      <RecipientsSection />
      <CustomHampers />
    </div>
  );
};

export default Home;