
// app/stories/[slug]/page.tsx (Next.js App Router)
'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-8">The wedding story you&apos;re looking for doesn&apos;t exist.</p>
          <a href="/gallery" className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
            View All Stories
          </a>
        </div>
      </div>
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <StoryHero
          couples={wedding.couples}
          location={wedding.location}
          date={wedding.date}
          coverImage={wedding.coverImage}
          onVideoPlay={handleVideoPlay}
        />

        {/* Love Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 font-light">
              Their Love Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p>{wedding.loveStory}</p>
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        {Object.entries(wedding.images).map(([section, images], index) => (
          <React.Fragment key={section}>
            <StorySection
              title={section}
              description={sectionDescriptions[section as keyof typeof sectionDescriptions]}
              images={images}
            />
            {index < Object.entries(wedding.images).length - 1 && <hr className="border-gray-200" />}
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
          <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-800">
                &quot;{wedding.testimonial.text}&quot;
              </blockquote>
              <div className="text-lg font-medium text-amber-600">
                {wedding.testimonial.author}
              </div>
            </div>
          </section>
        )}

        {/* Story Navigation */}
        <StoryNavigation
          previousStory={previousStory}
          nextStory={nextStory}
        />

        {/* Contact CTA */}
        <Contact />
      </main>

      <Footer />
      
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={handleCloseModal}
        videoUrl={wedding.videos.highlight}
      />
    </div>
  );
};

export default StoryPage;