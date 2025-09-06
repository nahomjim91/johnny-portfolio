
// components/sections/Hero.tsx
import { Play, ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onVideoPlay: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onVideoPlay }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-light tracking-wide leading-tight">
          Capturing Love
          <span className="block font-normal italic text-amber-400">Beyond Borders</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
          Luxury wedding videography that transforms your special day into cinematic poetry, 
          preserving every heartfelt moment across cultures and continents
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={onVideoPlay}
            className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 hover:bg-white/30 transition-all duration-300 group"
          >
            <Play className="w-5 h-5" />
            <span className="font-medium">Watch Our Story</span>
          </button>
          <a 
            href="#work" 
            className="flex items-center space-x-2 text-white border-b border-white/50 pb-1 hover:border-white transition-colors"
          >
            <span className="font-medium">View Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};