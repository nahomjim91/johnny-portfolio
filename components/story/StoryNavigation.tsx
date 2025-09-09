// components/story/StoryNavigation.tsx
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Wedding } from '@/lib/data/wedding';
import { useInView, motion } from 'framer-motion';

interface StoryNavigationProps {
  previousStory?: Wedding;
  nextStory?: Wedding;
}

export const StoryNavigation: React.FC<StoryNavigationProps> = ({
  previousStory,
  nextStory
}) => {
  const sectionRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isPrevInView = useInView(prevRef, { once: true, amount: 0.3 });
  const isNextInView = useInView(nextRef, { once: true, amount: 0.3 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const prevCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  } as const;

  const nextCardVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  } as const;

  const cardHoverVariants = {
    hover: { 
      scale: 1.03,
      y: -8,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const imageHoverVariants = {
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 border-t border-gray-200"
      variants={sectionVariants}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Previous Story */}
          <div ref={prevRef}>
            {previousStory ? (
              <motion.a 
                href={`/stories/${previousStory.slug}`}
                className="group flex items-center space-x-6 p-8 border border-gray-200 hover:border-amber-600 transition-colors duration-300 rounded-lg "
                variants={prevCardVariants}
                initial="hidden"
                animate={isPrevInView ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
                {...cardHoverVariants}
              >
                                <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors duration-300 flex-shrink-0" />

                <motion.div 
                  className="w-20 h-20 bg-gray-100 overflow-hidden rounded-lg flex-shrink-0"
                  variants={imageHoverVariants}
                  whileHover="hover"
                >
                  
                  <img
                    src={previousStory.coverImage}
                    alt={previousStory.couples}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-500 mb-2">Previous Story</div>
                  <h3 className="font-serif text-2xl group-hover:text-amber-600 transition-colors duration-300 mb-1 truncate">
                    {previousStory.couples}
                  </h3>
                  <p className="text-gray-600 truncate">{previousStory.location}</p>
                </div>
              </motion.a>
            ) : (
              <div className="invisible"></div>
            )}
          </div>

          {/* Next Story */}
          <div ref={nextRef}>
            {nextStory ? (
              <motion.a 
                href={`/stories/${nextStory.slug}`}
                className="group flex items-center space-x-6 p-8 border border-gray-200 hover:border-amber-600 transition-colors duration-300 md:flex-row-reverse md:text-right rounded-lg block"
                variants={nextCardVariants}
                initial="hidden"
                animate={isNextInView ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
                {...cardHoverVariants}
              >
                <motion.div 
                  className="w-20 h-20 bg-gray-100 overflow-hidden rounded-lg flex-shrink-0"
                  variants={imageHoverVariants}
                  whileHover="hover"
                >
                  <img
                    src={nextStory.coverImage}
                    alt={nextStory.couples}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-500 mb-2">Next Story</div>
                  <h3 className="font-serif text-2xl group-hover:text-amber-600 transition-colors duration-300 mb-1 truncate">
                    {nextStory.couples}
                  </h3>
                  <p className="text-gray-600 truncate">{nextStory.location}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors duration-300 flex-shrink-0 md:order-first" />
              </motion.a>
            ) : (
              <div className="invisible"></div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};