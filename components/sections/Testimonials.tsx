
// components/sections/Testimonials.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Quote, Heart, Star } from 'lucide-react';

interface TestimonialData {
  text: string;
  author: string;
}

interface TestimonialProps {
  testimonial: TestimonialData;
}

export const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className="py-32 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.blockquote 
          className="text-3xl md:text-4xl font-light leading-relaxed mb-12 text-gray-800 italic"
          whileHover={{ scale: 1.02 }}
        >
          &quot;{testimonial.text}&quot;
        </motion.blockquote>
        <motion.div 
          className="text-xl font-medium text-amber-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          {testimonial.author}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      text: "Johnny captured our wedding day with such artistry and emotion. Every frame tells our love story perfectly. The videos still make us cry happy tears!",
      author: "Sarah & Michael",
      wedding: "Santorini Wedding 2024"
    },
    {
      text: "Professional, creative, and so easy to work with. Johnny made us feel comfortable and the results were beyond our wildest dreams.",
      author: "Amara & David", 
      wedding: "Ethiopian Traditional Wedding"
    },
    {
      text: "The way Johnny captures cultural traditions while telling our personal story is incredible. Our families treasure these memories forever.",
      author: "Zara & Ahmed",
      wedding: "Dubai Destination Wedding"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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

  const testimonialVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeIn" as const
      }
    }
  };

  const dotVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#d1d5db"
    },
    active: {
      scale: 1.5,
      backgroundColor: "#d97706",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const floatingElements = [
    { Icon: Heart, position: { top: '10%', left: '10%' }, delay: 0 },
    { Icon: Star, position: { top: '20%', right: '15%' }, delay: 1 },
    { Icon: Quote, position: { bottom: '20%', left: '5%' }, delay: 0.5 },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Floating Background Elements */}
      {floatingElements.map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-amber-100 opacity-20"
          style={position}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Icon size={50} />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl mb-6 font-light"
            variants={titleVariants}
            whileHover={{
              scale: 1.05,
              color: "#d97706",
              transition: { duration: 0.3 }
            }}
          > 
            What Couples Say
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-amber-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div 
          className="relative min-h-[300px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-3xl"
            >
              {/* Large Quote Icon */}
              <motion.div 
                className="flex justify-center mb-6"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Quote className="w-12 h-12 text-amber-600 opacity-50" />
              </motion.div>

              <motion.blockquote 
                className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-800"
                animate={{
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                &quot;{testimonials[currentTestimonial].text}&quot;
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="text-lg font-medium text-amber-600 mb-2"
                  whileHover={{
                    scale: 1.05,
                    color: "#f59e0b",
                    transition: { duration: 0.2 }
                  }}
                >
                  {testimonials[currentTestimonial].author}
                </motion.div>
                <motion.div 
                  className="text-gray-600"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  {testimonials[currentTestimonial].wedding}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className="w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
              variants={dotVariants}
              animate={index === currentTestimonial ? "active" : "inactive"}
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="w-32 h-1 bg-gray-200 mx-auto mt-8 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div
            className="h-full bg-amber-600"
            animate={{
              width: ["0%", "100%"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};