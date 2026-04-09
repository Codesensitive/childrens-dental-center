import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ClinicVibeSection from '../components/ClinicVibeSection';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ClinicVibeSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
