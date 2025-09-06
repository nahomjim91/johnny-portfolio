
// components/sections/Contact.tsx
import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light">
          Ready to Tell Your Story?
        </h2>
        <p className="text-xl mb-12 text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Let&apos;s create something beautiful together. Every love story deserves to be told with passion, 
          artistry, and the attention it deserves.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <a 
            href="mailto:hello@johnnyvideoduaction.com"
            className="flex items-center space-x-3 bg-amber-600 text-white px-8 py-4 hover:bg-amber-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Start the Conversation</span>
          </a>
          <a 
            href="tel:+1234567890"
            className="flex items-center space-x-2 text-white border border-white/30 px-8 py-4 hover:border-white hover:bg-white hover:text-black transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        <div className="text-gray-400 text-sm">
          Currently booking {new Date().getFullYear()-1 } to {new Date().getFullYear()} weddings worldwide
        </div>
      </div>
    </section>
  );
};