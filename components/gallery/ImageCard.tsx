
// components/gallery/ImageCard.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ImageCardProps {
  id: string;
  src: string;
  alt: string;
  couples: string;
  country: string;
  hasVideo?: boolean;
  videoPreview?: string;
  weddingSlug: string;
  index?: number;
}

export const ImageCard: React.FC<ImageCardProps> = ({ 
  id, 
  src, 
  alt, 
  couples, 
  country, 
  index = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
    const router = useRouter();

    const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  const handleClick = () => {
    const slugCouples = slugify(couples);
    const slugCountry = slugify(country);
    const slug = `${slugCouples}-${slugCountry}`;
    router.push(`/stories/${slug}`);
  };

  return (
    <motion.a 
      ref={ref}
      className="group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="relative overflow-hidden h-full rounded-lg bg-gray-100 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration: 0.6, 
            ease: "easeOut",
            delay: index * 0.1
          }
        } : {}}
      >
        {/* Main Image */}
        <motion.img 
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.7, ease: "easeOut" }
          }}
        />
        
        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0.6,
            transition: { duration: 0.4 }
          }}
        />



        {/* Content */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          <motion.h3 
            className="font-semibold text-lg mb-1 text-white"
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            {couples}
          </motion.h3>
          <motion.p 
            className="text-sm text-white/90 mb-2"
            initial={{ opacity: 0.7 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
              transition: { duration: 0.3 }
            }}
          >
            {country}
          </motion.p>
          
          {/* Animated Underline */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-white to-transparent"
            initial={{ width: 0 }}
            animate={{ 
              width: isHovered ? "60px" : "30px",
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          />
        </motion.div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          animate={isHovered ? {
            x: "100%",
            transition: { duration: 0.8, ease: "easeOut" }
          } : {}}
        />
      </motion.div>
    </motion.a>
  );
};