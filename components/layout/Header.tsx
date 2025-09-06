// components/layout/Header.tsx
import React from 'react';
import { Instagram, Mail } from 'lucide-react';

export const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-wide">
            Johnny Video Production
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-amber-600 transition-colors">Home</a>
            <a href="#work" className="hover:text-amber-600 transition-colors">Work</a>
            <a href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/johnny_video_production" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-amber-600 transition-colors" />
            </a>
            <button className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
