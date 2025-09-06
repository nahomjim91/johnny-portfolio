
// components/gallery/GalleryGrid.tsx
import React, { useState, useEffect } from 'react';
import { ImageCard } from './ImageCard';
import { GalleryImage } from '../../lib/data/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (imageId: string) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  const [visibleImages, setVisibleImages] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleImages(prev => prev + 12);
      setIsLoading(false);
    }, 1000);
  };

  const hasMore = visibleImages < images.length;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.slice(0, visibleImages).map((image) => (
          <ImageCard
            key={image.id}
            {...image}
            onClick={onImageClick}
          />
        ))}
      </div>
      
      {hasMore && (
        <div className="text-center mt-16">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};