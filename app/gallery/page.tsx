// app/gallery/page.tsx (Next.js App Router)
"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { GalleryFilter } from "../../components/gallery/GalleryFilter";
import { GalleryGrid } from "../../components/gallery/GalleryGrid";
import { ImageLightbox } from "../../components/shared/ImageLightbox";
import { galleryData } from "../../lib/data/gallery";
import { Contact } from "@/components/sections/Contact";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  // const [lightboxOpen, setLightboxOpen] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Multiple refs for different sections
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount:'some' });
  const galleryInView = useInView(galleryRef, { once: true, amount:'some' });

  const categories = ["all", "ceremony", "reception", "portrait", "detail"];

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") {
      return galleryData;
    }
    return galleryData.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  const handleImageClick = (imageId: string) => {
    const imageIndex = filteredImages.findIndex((img) => img.id === imageId);
    if (imageIndex !== -1) {
      // setCurrentImageIndex(imageIndex);
      // setLightboxOpen(true);
    }
  };


  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        staggerChildren: 0.2
      },
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  const galleryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        staggerChildren: 0.3
      }
    }
  };
    const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <Header />
      
      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="py-24 relative"
          variants={heroVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          {/* Floating Elements Background */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <motion.h1
            className="font-serif text-4xl md:text-5xl mb-6 font-light"
            variants={titleVariants}
            whileHover={{
              scale: 1.05,
              color: "#d97706",
              transition: { duration: 0.3 }
            }}
          > 
              Wedding Gallery
            </motion.h1>
            
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-4 rounded-full"
              initial={{ width: 0 }}
              animate={heroInView ? { width: "6rem" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
              variants={textVariants}
              style={{ lineHeight: "1.6" }}
            >
              A collection of our most cherished moments from weddings around
              the world. Each image tells a unique story of love, culture, and
              celebration.
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-1 h-3 bg-amber-500 rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Gallery Content */}
        <motion.section
          ref={galleryRef}
          className="py-1 bg-white"
          variants={galleryContainerVariants}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Filter Section */}
            <motion.div
              variants={textVariants}
              className="mb-12"
            >
              <GalleryFilter
                categories={categories}
                activeCategory={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </motion.div>

            {/* Gallery Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative"
              >
                <GalleryGrid
                  images={filteredImages}
                  onImageClick={handleImageClick}
                />
                
                {/* Results Counter */}
                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-gray-500 font-light">
                    Showing {filteredImages.length} 
                    {filteredImages.length === 1 ? ' image' : ' images'}
                    {activeFilter !== 'all' && (
                      <span className="ml-1">
                        in <span className="font-medium capitalize">{activeFilter}</span>
                      </span>
                    )}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Call to Action Section */}
       <Contact />
      </main>

      <Footer />

      {/* Lightbox
      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            isOpen={lightboxOpen}
            images={filteredImages}
            currentIndex={currentImageIndex}
            onClose={handleLightboxClose}
            onNavigate={handleLightboxNavigate}
          />
        )}
      </AnimatePresence> */}
    </motion.div>
  );
};

export default GalleryPage;