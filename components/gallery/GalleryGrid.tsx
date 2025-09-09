// components/gallery/GalleryGrid.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ImageCard } from './ImageCard';
import { GalleryImage } from '../../lib/data/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (imageId: string) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images, }) => {
  const [visibleImages, setVisibleImages] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.15,
        ease: "easeOut" as const
      }
    }
  };

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleImages(prev => prev + 12);
      setIsLoading(false);
    }, 1000);
  };

  const hasMore = visibleImages < images.length;

  // Create masonry-style layout with varying heights
  const getMasonryClass = (index: number) => {
    const patterns = [
      'row-span-4', // tall
      'row-span-3', // medium
      'row-span-5', // extra tall
      'row-span-3', // medium
      'row-span-4', // tall
      'row-span-2', // short
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div ref={ref}>
      {/* Masonry Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[100px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {images.slice(0, visibleImages).map((image, index) => (
          <motion.div
            key={image.id}
            className={`${getMasonryClass(index)}`}
            variants={{
              hidden: { 
                opacity: 0, 
                y: 30,
                scale: 0.95
              },
              visible: { 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: { 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: index * 0.05
                }
              }
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <ImageCard
              {...image}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Load More Button */}
      {hasMore && (
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <motion.button
            onClick={loadMore}
            disabled={isLoading}
            className="relative bg-black text-white px-12 py-4 overflow-hidden group disabled:opacity-50 font-medium tracking-wide"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button text */}
            <motion.span
              className="relative z-10"
              animate={isLoading ? { 
                opacity: [1, 0.5, 1],
                transition: { duration: 1.5, repeat: Infinity }
              } : {}}
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};
