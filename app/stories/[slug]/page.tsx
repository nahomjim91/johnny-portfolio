// app/stories/[slug]/page.tsx (Next.js App Router)
'use client';

import React, { useState, useMemo, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { StoryHero } from '../../../components/story/StoryHero';
import { StorySection } from '../../../components/story/StorySection';
import { VideoPlayer } from '../../../components/story/VideoPlayer';
import { StoryNavigation } from '../../../components/story/StoryNavigation';
import { Contact } from '../../../components/sections/Contact';
import { VideoModal } from '../../../components/shared/VideoModal';
import { weddingsData } from '@/lib/data/wedding';

const StoryPage = () => {
  const params = useParams();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const wedding = useMemo(() => {
    return weddingsData.find(w => w.slug === params.slug);
  }, [params.slug]);

  const { previousStory, nextStory } = useMemo(() => {
    if (!wedding) return { previousStory: undefined, nextStory: undefined };
    
    const currentIndex = weddingsData.findIndex(w => w.slug === wedding.slug);
    
    return {
      previousStory: currentIndex > 0 ? weddingsData[currentIndex - 1] : undefined,
      nextStory: currentIndex < weddingsData.length - 1 ? weddingsData[currentIndex + 1] : undefined
    };
  }, [wedding]);

  if (!wedding) {
    return (
      <motion.div 
        className="min-h-screen bg-white flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl font-serif mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-8">The wedding story you&apos;re looking for doesn&apos;t exist.</p>
          <motion.a 
            href="/gallery" 
            className="bg-black text-white px-6 py-3 hover:bg-gradient-to-r from-amber-500 to-amber-700 transition-colors inline-block rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Stories
          </motion.a>
        </motion.div>
      </motion.div>
    );
  }

  const handleVideoPlay = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  const sectionDescriptions = {
    ceremony: "The sacred moment where two souls become one. Every glance, every tear, every smile captured in its purest form.",
    reception: "The celebration of love with family and friends. Dancing, laughter, and joy filling every frame.",
    portraits: "Intimate moments between the couple, showcasing their unique connection and genuine emotions.",
    details: "The carefully chosen elements that make each wedding unique - from rings to flowers to cultural traditions."
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <Header />
      
      <main ref={ref}>
        <StoryHero
          couples={wedding.couples}
          location={wedding.location}
          date={wedding.date}
          coverImage={wedding.coverImage}
          onVideoPlay={handleVideoPlay}
        />

        {/* Love Story Section */}
        <motion.section 
          className="py-24 bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              className="font-serif text-4xl md:text-5xl mb-3 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
             whileHover={{
              scale: 1.05,
              color: "#d97706",
              transition: { duration: 0.3 }
            }}
            >
              Their Love Story
            </motion.h2>
            <motion.div 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>{wedding.loveStory}</p>
            </motion.div>
          </div>
        </motion.section>
 
        {/* Gallery Sections */}
        {Object.entries(wedding.images).map(([section, images], index) => (
          <React.Fragment key={section}>
            <StorySection
              title={section}
              description={sectionDescriptions[section as keyof typeof sectionDescriptions]}
              images={images}
              index={index}
            />

          </React.Fragment>
        ))}

        {/* Video Section */}
        <VideoPlayer
          title="Wedding Highlight Reel"
          videoUrl={wedding.videos.highlight}
          thumbnailUrl={wedding.coverImage}
          onPlay={handleVideoPlay}
        />

        {/* Testimonial Section */}
        {wedding.testimonial && (
          <motion.section 
            className="py-24 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.blockquote 
                className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                &quot;{wedding.testimonial.text}&quot;
              </motion.blockquote>
              <motion.div 
                className="text-lg font-medium text-amber-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {wedding.testimonial.author}
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Story Navigation */}
        <StoryNavigation
          previousStory={previousStory}
          nextStory={nextStory}
        />
        {/* Contact CTA */}
        <Contact />

        {/* Video Modal */}
        {isVideoModalOpen && (
          <VideoModal
            isOpen={isVideoModalOpen}
            videoUrl={wedding.videos.highlight}
            onClose={handleCloseModal}
          />
        )}
      </main>
            <Footer />
      
    </motion.div>
  );
};
export default StoryPage;