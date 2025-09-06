
// components/layout/Footer.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Mail, Heart, Camera, Film, Globe } from 'lucide-react';
import { useRef } from 'react';

export const Footer = () => {
  const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: "some" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  } ;

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const decorativeIcons = [
    { Icon: Heart, delay: 0 },
    { Icon: Camera, delay: 0.5 },
    { Icon: Film, delay: 1 },
    { Icon: Globe, delay: 1.5 }
  ];

  return (
    <motion.footer 
      ref={ref}
      className="bg-gray-900 text-white py-12 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {decorativeIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-5"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 40}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              delay: delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Icon size={60} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.div 
              className="text-2xl font-serif font-bold mb-4"
              whileHover={{
                color: "#fbbf24",
                transition: { duration: 0.3 }
              }}
            >
              Johnny Video Production
            </motion.div>
            <motion.p 
              className="text-gray-400 leading-relaxed max-w-md"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Luxury wedding videography capturing love stories across cultures and continents.
              Creating timeless memories that last forever.
            </motion.p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="font-semibold mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect With Us
            </motion.h3>
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              <motion.a 
                href="https://instagram.com/johnny_video_production" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="mailto:hello@johnnyvideoduaction.com" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &copy; {new Date().getFullYear()} Johnny Video Production. All rights reserved.
          </motion.p>
          <motion.div
            className="mt-2 flex justify-center items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
                      <a href='https://selihom.vercel.app' target='_blank'>  Build by Selihom Kidane</a>

          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};