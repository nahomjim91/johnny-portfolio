
// components/sections/FeaturedWork.tsx
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

export const FeaturedWork = () => {
  const featuredWorks = [
    {
      title: "Sarah & Michael",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      slug: "sarah-michael-santorini"
    },
    {
      title: "Amara & David", 
      location: "Addis Ababa, Ethiopia",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
      slug: "amara-david-ethiopia"
    },
    {
      title: "Zara & Ahmed",
      location: "Dubai, UAE", 
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
      slug: "zara-ahmed-dubai"
    }
  ];

  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light">Featured Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each wedding is a unique celebration of love, culture, and tradition. 
            Here are some of our most cherished stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <a key={index} href={`/stories/${work.slug}`} className="group cursor-pointer block">
              <div className="relative overflow-hidden aspect-[4/5] mb-4">
                <img 
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-full">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-amber-600 transition-colors">{work.title}</h3>
                <p className="text-gray-600 font-medium">{work.location}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};