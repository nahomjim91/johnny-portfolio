// components/story/StoryHero.tsx
import React, { useRef } from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface StoryHeroProps {
  couples: string;
  location: string;
  date: string;
  coverImage: string;
  onVideoPlay: () => void;
}

export const StoryHero: React.FC<StoryHeroProps> = ({
  couples,
  location,
  date,
  coverImage,
  onVideoPlay
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }as const;

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    },
    hover: { 
      scale: 1.05, 
      y: -8,
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut" 
      }
    },
    tap: { 
      scale: 0.96,
      y: -2,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  } as const;

  const backgroundVariants = {
    hidden: { 
      scale: 1.1, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeOut"as const
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.2, 
        delay: 0.3 
      }
    }
  };

  const playIconVariants = {
    idle: {
      x: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut" as const
      }
    },
    hover: {
      x: [0, 4, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse" ,
        ease: "easeInOut" as const
      }
    }
  } ;

  const detailItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"as const
      }
    },
    hover: {
      scale: 1.1,
      x: 6,
      transition: {
        duration: 0.2,
        ease: "easeOut"as const
      }
    }
  };

  const detailItemVariants2 = {
    hidden: { 
      opacity: 0, 
      x: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"as const
      }
    },
    hover: {
      scale: 1.1,
      x: -6,
      transition: {
        duration: 0.2,
        ease: "easeOut"as const
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url('${coverImage}')` }}
        variants={backgroundVariants}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 8, ease: "easeOut" }
        }}
      />
      
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-10"
        variants={overlayVariants}
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto"
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h1 
          className="font-serif text-5xl md:text-7xl mb-8 font-light tracking-wide will-change-transform"
          variants={titleVariants}
          whileHover={{ 
            scale: 1.03,
            textShadow: "0 0 30px rgba(255,255,255,0.6)",
            transition: { duration: 0.3 }
          }}
        >
          {couples}
        </motion.h1>
        
        {/* Details */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 text-lg"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center space-x-2"
            variants={detailItemVariants}
            whileHover="hover"
          >
            <MapPin className="w-5 h-5" />
            <span>{location}</span>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-2"
            variants={detailItemVariants2}
            whileHover="hover"
          >
            <Calendar className="w-5 h-5" />
            <span>{formatDate(date)}</span>
          </motion.div>
        </motion.div>

        <motion.button 
                   onClick={onVideoPlay}
                   className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm border border-white/30 px-10 py-5 hover:bg-white/30 transition-colors duration-300 group mx-auto rounded-lg will-change-transform"
                   variants={buttonVariants}
                   whileHover="hover"
                   whileTap="tap"
                 >
                   <motion.div
                     animate={{ rotate: [0, 360] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     className="group-hover:animate-none"
                   >
                     <Play className="w-5 h-5" />
                   </motion.div>
                   <span className="font-medium">Watch Our Story</span>
                 </motion.button>
      </motion.div>
    </motion.section>
  );
};