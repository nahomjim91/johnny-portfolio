// components/story/StorySection.tsx
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImageLightboxNormal } from "../shared/ImageLightbox";

interface StorySectionProps {
  title: string;
  description: string;
  images: string[];
  index?: number;
}

export const StorySection: React.FC<StorySectionProps> = ({
  title,
  description,
  images,
  index = 0
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 'some' });

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxClose = () => setLightboxOpen(false);

  const handleLightboxNavigate = (direction: "next" | "prev") => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % images.length;
      }
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  // Create a dynamic masonry-like layout
  const getImageLayout = (index: number, totalImages: number) => {
    const patterns = [
      // Pattern 1: Large image on left, smaller on right
      [
        { span: "col-span-2 row-span-2", aspect: "aspect-[4/3]" },
        { span: "col-span-1 row-span-1", aspect: "aspect-square" },
        { span: "col-span-1 row-span-1", aspect: "aspect-square" },
        { span: "col-span-1 row-span-1", aspect: "aspect-[3/4]" },
        { span: "col-span-1 row-span-1", aspect: "aspect-[3/4]" },
        { span: "col-span-1 row-span-1", aspect: "aspect-square" },
      ],
      // Pattern 2: Grid with featured image
      [
        { span: "col-span-1 row-span-1", aspect: "aspect-square" },
        { span: "col-span-2 row-span-1", aspect: "aspect-[8/3]" },
        { span: "col-span-1 row-span-2", aspect: "aspect-[3/4]" },
        { span: "col-span-1 row-span-1", aspect: "aspect-square" },
        { span: "col-span-1 row-span-1", aspect: "aspect-square" },
        { span: "col-span-1 row-span-1", aspect: "aspect-[4/3]" },
      ]
    ];
    
    const pattern = patterns[index % patterns.length];
    return pattern[index % pattern.length] || { span: "col-span-1 row-span-1", aspect: "aspect-square" };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-16 overflow-clip"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Full-width container */}
      <div className="w-full">
        {/* Header with padding */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div 
            className="text-center"
            variants={headerVariants}
          >
            <motion.h2 
              className="font-serif text-3xl md:text-4xl mb-4 font-light capitalize"
              whileHover={{ scale: 1.02, color: "#d97706" }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>

        {/* Full-width image grid */}
        <div className="w-full px-0">
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px] gap-1 md:gap-2"
            variants={containerVariants}
          >
            {images.slice(0, 12).map((image, imgIndex) => {
              const layout = getImageLayout(imgIndex, images.length);
              return (
                <motion.div
                  key={imgIndex}
                  className={`${layout.span} group cursor-pointer overflow-hidden bg-gray-100 relative`}
                  onClick={() => handleImageClick(imgIndex)}
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.02,
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <motion.img
                    src={image}
                    alt={`${title} ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                  >
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightboxNormal
          isOpen={lightboxOpen}
          images={images}
          currentIndex={currentImageIndex}
          onClose={handleLightboxClose}
          onNavigate={handleLightboxNavigate}
        />
      )}
    </motion.section>
  );
};