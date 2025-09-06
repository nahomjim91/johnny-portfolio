// components/story/StoryHero.tsx
import React from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';

interface StoryHeroProps {
  couples: string;
  location: string;
  date: string;
  coverImage: string;
  onVideoPlay: () => void;
}

export const StoryHero: React.FC<StoryHeroProps> = ({
  couples,
  location,
  date,
  coverImage,
  onVideoPlay
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${coverImage}')` }}
      ></div>
      
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-8 font-light tracking-wide">
          {couples}
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 text-lg">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{formatDate(date)}</span>
          </div>
        </div>

        <button 
          onClick={onVideoPlay}
          className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm border border-white/30 px-10 py-5 hover:bg-white/30 transition-all duration-300 group mx-auto"
        >
          <Play className="w-6 h-6" />
          <span className="font-medium text-lg">Watch Their Story</span>
        </button>
      </div>
    </section>
  );
};