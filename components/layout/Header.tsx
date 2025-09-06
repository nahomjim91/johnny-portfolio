

// components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Mail, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.98)"]
  );
  
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.1,
      color: "#d97706",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#374151",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 backdrop-blur-sm "
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-serif font-bold tracking-wide cursor-pointer"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <motion.span
              animate={isScrolled ? { 
                color: ["#000", "#d97706", "#000"],
              } : {}}
              transition={{
                duration: 2,
                repeat: isScrolled ? Infinity : 0,
                repeatType: "reverse"
              }}
            >
              Johnny Video Production
            </motion.span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.a 
              href="https://instagram.com/johnny_video_production" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                whileTap={{ rotate: -15 }}
              >
                <Instagram className="w-5 h-5 hover:text-amber-600 transition-colors" />
              </motion.div>
            </motion.a>
            
            <motion.a 
              href="mailto:hello@johnnyvideoduaction.com"
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                <Mail className="w-5 h-5 hover:text-amber-600 transition-colors" />
              </motion.div>
            </motion.a>

            <motion.button 
              className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Get In Touch
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
