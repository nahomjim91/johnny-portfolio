import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Statistics } from '@/components/sections/Statistics';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { VideoModal } from '@/components/shared/VideoModal';

const HomePage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onVideoPlay={handleVideoPlay} />
      <Statistics />
      <About />
      <FeaturedWork />
      <Testimonials />
      <Contact />
      <Footer />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={handleCloseModal}
        videoUrl="demo-video-url"
      />
    </div>
  );
};

export default HomePage;