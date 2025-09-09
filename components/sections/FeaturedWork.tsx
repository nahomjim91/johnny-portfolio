
// components/sections/FeaturedWork.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const featuredWorks = [
    {
      title: "Sarah & Michael",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      slug: "sarah-michael-santorini",
      size: "tall"
    },
    {
      title: "Amara & David", 
      location: "Addis Ababa, Ethiopia",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
      slug: "amara-david-ethiopia",
      size: "wide"
    },
    {
      title: "Zara & Ahmed",
      location: "Dubai, UAE", 
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
      slug: "zara-ahmed-dubai",
      size: "standard"
    },
    {
      title: "Emma & James",
      location: "Tuscany, Italy",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
      slug: "emma-james-tuscany",
      size: "standard"
    },
    {
      title: "Priya & Raj",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      slug: "priya-raj-mumbai",
      size: "tall"
    },
    {
      title: "Isabella & Carlos",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      slug: "isabella-carlos-barcelona",
      size: "wide"
    },
    {
      title: "Aisha & Omar",
      location: "Marrakech, Morocco",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop",
      slug: "aisha-omar-marrakech",
      size: "standard"
    },
    {
      title: "Sophie & Antoine",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      slug: "sophie-antoine-paris",
      size: "tall"
    },
    {
      title: "Yuki & Hiroshi",
      location: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      slug: "yuki-hiroshi-kyoto",
      size: "standard"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
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

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'tall':
        return 'md:row-span-2 aspect-[4/7] md:aspect-[4/9]';
      case 'wide':
        return 'md:col-span-2 aspect-[4/3] md:aspect-[8/5]';
      default:
        return 'aspect-[4/5]';
    }
  };

  return (
    <section id="work" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl mb-6 font-light"
            whileHover={{
              scale: 1.05,
              color: "#d97706",
              transition: { duration: 0.3 }
            }}
          >
            Featured Stories
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Each wedding is a unique celebration of love, culture, and tradition. 
            Here are some of our most cherished stories.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-amber-600 mx-auto mt-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredWorks.map((work, index) => (
            <motion.a 
              key={index} 
              href={`/stories/${work.slug}`} 
              className={`group cursor-pointer block relative overflow-hidden ${getSizeClasses(work.size)}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative overflow-hidden w-full h-full rounded-lg"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { duration: 0.4 }
                }}
              >
                <motion.img 
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }}
                />
                
                {/* Overlay - Always visible on mobile, hover on desktop */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:opacity-0"
                  initial={{ opacity: 1 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.4 }
                  }}
                />


                {/* Content Overlay - Always visible on mobile, hover on desktop */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white md:opacity-0"
                  initial={{ y: 0, opacity: 1 }}
                  whileHover={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.1 }
                  }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.h3 
                    className="font-serif text-lg md:text-2xl mb-1 md:mb-2"
                    whileHover={{
                      color: "#fbbf24",
                      transition: { duration: 0.2 }
                    }}
                    animate={{
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {work.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/90 font-medium text-sm md:text-base"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    animate={{
                      opacity: [0.7, 0.9, 0.7]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    {work.location}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a 
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 hover:bg-gradient-to-r from-amber-500 to-amber-700 transition-colors rounded-lg"
            whileHover={{
              scale: 1.05,
              // backgroundColor: "#374151",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Stories</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};