// app/gallery/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { GalleryFilter } from '../../components/gallery/GalleryFilter';
import { GalleryGrid } from '../../components/gallery/GalleryGrid';
import { ImageLightbox } from '../../components/shared/ImageLightbox';
import { galleryData, GalleryImage } from '../../lib/data/gallery';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['all', 'ceremony', 'reception', 'portrait', 'detail'];

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') {
      return galleryData;
    }
    return galleryData.filter(image => image.category === activeFilter);
  }, [activeFilter]);

  const handleImageClick = (imageId: string) => {
    const imageIndex = filteredImages.findIndex(img => img.id === imageId);
    if (imageIndex !== -1) {
      setCurrentImageIndex(imageIndex);
      setLightboxOpen(true);
    }
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };

  const handleLightboxNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl md:text-6xl mb-6 font-light">
              Wedding Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of our most cherished moments from weddings around the world. 
              Each image tells a unique story of love, culture, and celebration.
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <GalleryFilter
              categories={categories}
              activeCategory={activeFilter}
              onFilterChange={setActiveFilter}
            />
            
            <GalleryGrid
              images={filteredImages}
              onImageClick={handleImageClick}
            />
          </div>
        </section>
      </main>

      <Footer />
      
      <ImageLightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={currentImageIndex}
        onClose={handleLightboxClose}
        onNavigate={handleLightboxNavigate}
      />
    </div>
  );
};

export default GalleryPage;