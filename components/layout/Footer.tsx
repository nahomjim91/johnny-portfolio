
// components/layout/Footer.tsx
import React from 'react';
import { Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div>
            <div className="text-2xl font-serif font-bold mb-4">Johnny Video Production</div>
            <p className="text-gray-400 leading-relaxed">
              Luxury wedding videography capturing love stories across cultures and continents.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/johnny_video_production" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:hello@johnnyvideoduaction.com" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Johnny Video Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};