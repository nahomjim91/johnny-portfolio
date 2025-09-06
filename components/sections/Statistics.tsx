
// components/sections/Statistics.tsx
import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from string
  const numericValue = parseInt(value.replace(/\D/g, '')) || 100;
  const suffix = value.replace(/\d/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const displayValue = useTransform(rounded, (latest) => `${latest}${suffix}`);
  
  React.useEffect(() => {
    if (isInView) {
      animate(count, numericValue, { duration });
    }
  }, [isInView, count, numericValue, duration]);

  return (
    <motion.div ref={ref} className="text-4xl md:text-5xl font-serif font-bold text-amber-600 mb-2">
      {displayValue}
    </motion.div>
  );
};

export const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "150+", label: "Weddings Captured" },
    { number: "8+", label: "Years Experience" },
    { number: "15+", label: "Countries Served" },
    { number: "100%", label: "Happy Couples" }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-light text-gray-900 mb-4"
            whileHover={{
              scale: 1.05,
              color: "#d97706",
              transition: { duration: 0.3 }
            }}
          >
            Crafting Memories Worldwide
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-amber-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AnimatedCounter value={stat.number} duration={2 + index * 0.2} />
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
          
        </motion.div>
          <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="flex space-x-2"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {[1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 bg-amber-600 rounded-full"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};