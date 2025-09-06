
// components/sections/About.tsx
import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 font-light">
              Hello, I&apos;m Johnny
              <span className="block text-2xl text-gray-600 mt-4 font-normal">Your Wedding Storyteller</span>
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                For over 8 years, I&apos;ve had the incredible honor of documenting love stories that transcend borders, 
                cultures, and languages. From intimate ceremonies in ancient Ethiopian churches to grand celebrations 
                overlooking the Santorini sunset, each wedding is a unique tapestry of emotion and tradition.
              </p>
              <p>
                My approach goes beyond just capturing moments—I weave together the subtle glances, joyful tears, 
                and cultural richness that make your story uniquely yours. Every couple deserves a wedding film 
                that feels like poetry in motion.
              </p>
              <p className="text-amber-600 font-medium italic">
                 &quot;Your love story deserves to be told with the artistry it inspired. &quot;
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop" 
                alt="Johnny - Wedding Videographer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 max-w-64">
              <div className="text-sm font-medium">
                &quot;Every frame tells a story, every story deserves to be timeless &quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
