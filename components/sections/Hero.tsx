// components/sections/Hero.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onVideoPlay: () => void;
}

const backgroundMedia = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop',
    alt: 'Wedding ceremony'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&h=1080&fit=crop',
    alt: 'Wedding couple'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&h=1080&fit=crop',
    alt: 'Wedding reception'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1920&h=1080&fit=crop',
    alt: 'Wedding venue'
  }
];

export const Hero: React.FC<HeroProps> = ({ onVideoPlay }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % backgroundMedia.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Overlay */}
      <motion.div 
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)",
              "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)",
              "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Dynamic Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMediaIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundMedia[currentMediaIndex].url}')`
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-light tracking-wide leading-tight"
          variants={childVariants}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Capturing Love
          </motion.span>
          <motion.span 
            className="block font-normal italic text-amber-400"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{
              color: "#fbbf24",
              transition: { duration: 0.3 }
            }}
          >
            Beyond Borders
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto"
          variants={childVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Luxury wedding videography that transforms your special day into cinematic poetry, 
          preserving every heartfelt moment across cultures and continents
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
         

          <motion.a 
            href="#work" 
            className="flex items-center space-x-2 text-white border-b border-white/50 pb-1 hover:border-amber-400 hover:text-amber-400 transition-colors"
            variants={buttonVariants}
            whileHover={{
              x: 10,
              transition: { duration: 0.3 }
            }}
          >
            <span className="font-medium">View Portfolio</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};