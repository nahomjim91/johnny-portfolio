
// components/shared/ImageLightbox.tsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../../lib/data/gallery';

interface ImageLightboxProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-6 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-6 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Image Container */}
      <div className="relative w-full h-full flex items-center justify-center p-12">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain"
        />
        
        {/* Image Info */}
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-xl font-medium mb-1">{currentImage.couples}</h3>
          <p className="text-gray-300">{currentImage.country}</p>
          <p className="text-sm text-gray-400 mt-2">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};
