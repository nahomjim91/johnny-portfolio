
// components/sections/Contact.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Heart, Sparkles, Camera, Globe } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" ,
        type: "spring",
        stiffness: 100
      }
    }
  } as const;

  const floatingElements = [
    { Icon: Heart, position: { top: '15%', left: '10%' }, delay: 0, color: 'text-red-500' },
    { Icon: Sparkles, position: { top: '25%', right: '15%' }, delay: 0.5, color: 'text-yellow-400' },
    { Icon: Camera, position: { bottom: '30%', left: '5%' }, delay: 1, color: 'text-blue-400' },
    { Icon: Globe, position: { bottom: '20%', right: '10%' }, delay: 1.5, color: 'text-green-400' },
  ];

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden" ref={ref}>
      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Floating Background Elements */}
      {floatingElements.map(({ Icon, position, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          style={position}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl mb-6 font-light"
            variants={titleVariants}
            whileHover={{
              scale: 1.05,
              color: "#fbbf24",
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Ready to Tell Your Story?
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-xl mb-12 text-gray-300 leading-relaxed max-w-2xl mx-auto"
            variants={titleVariants}
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            Let&apos;s create something beautiful together. Every love story deserves to be told with passion, 
            artistry, and the attention it deserves.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            variants={containerVariants}
          >
            <motion.a 
              href="mailto:hello@johnnyvideoduaction.com"
              className="flex items-center space-x-3 bg-amber-600 text-white px-8 py-4 hover:bg-amber-700 transition-colors rounded-lg relative overflow-hidden group"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <Mail className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">Start the Conversation</span>
              
              {/* Sparkle Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>

            <motion.a 
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-white border border-white/30 px-8 py-4 hover:border-white hover:bg-white hover:text-black transition-all rounded-lg group"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="group-hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              <span>Call Now</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="text-gray-400 text-sm relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.span
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Currently booking {new Date().getFullYear()} to {new Date().getFullYear() + 1} weddings worldwide
            </motion.span>
            
            {/* Decorative dots */}
            <motion.div
              className="flex justify-center space-x-2 mt-4"
              animate={{
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-1.5 h-1.5 bg-amber-600 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: dot * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom glow effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-amber-600 opacity-10 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};
