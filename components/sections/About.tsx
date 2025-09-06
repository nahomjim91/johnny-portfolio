// components/sections/About.tsx
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Quote, Heart, Camera, Star } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  const isImageInView = useInView(imageRef, { once: true, amount: "some" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingElements = [
    { Icon: Heart, delay: 0, position: { top: "10%", left: "5%" } },
    { Icon: Camera, delay: 0.5, position: { top: "20%", right: "10%" } },
    { Icon: Star, delay: 1, position: { bottom: "15%", left: "8%" } },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Floating Background Elements */}
      {floatingElements.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-amber-100 opacity-30"
          style={position}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={textVariants}>
            <motion.h2
              className="font-serif text-4xl md:text-5xl mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="block"
                whileHover={{
                  color: "#d97706",
                  transition: { duration: 0.3 },
                }}
              >
                Hello, I&apos;m Johnny
              </motion.span>
              <motion.span
                className="block text-2xl text-gray-600 mt-4 font-normal"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your Wedding Storyteller
              </motion.span>
            </motion.h2>

            <motion.div
              className="prose prose-lg text-gray-700 leading-relaxed space-y-6"
              variants={containerVariants}
            >
              <motion.p variants={paragraphVariants}>
                For over 8 years, I&apos;ve had the incredible honor of
                documenting love stories that transcend borders, cultures, and
                languages. From intimate ceremonies in ancient Ethiopian
                churches to grand celebrations overlooking the Santorini sunset,
                each wedding is a unique tapestry of emotion and tradition.
              </motion.p>

              <motion.p variants={paragraphVariants}>
                My approach goes beyond just capturing moments—I weave together
                the subtle glances, joyful tears, and cultural richness that
                make your story uniquely yours. Every couple deserves a wedding
                film that feels like poetry in motion.
              </motion.p>

              <motion.div className="relative" variants={paragraphVariants}>
                <motion.div
                  className="absolute -left-4 top-0 text-amber-600 opacity-50"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote size={24} />
                </motion.div>
                <motion.p
                  className="text-amber-600 font-medium italic pl-8 relative"
                  whileHover={{
                    scale: 1.02,
                    color: "#f59e0b",
                    transition: { duration: 0.3 },
                  }}
                >
                  &quot;Your love story deserves to be told with the artistry it
                  inspired.&quot;
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
          >
            <motion.div
              className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-lg shadow-2xl"
              style={{ y }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                alt="Johnny - Wedding Videographer"
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 max-w-64 rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={
                isImageInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                      rotate: -10,
                    }
              }
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div className="text-sm font-medium" style={{ opacity }}>
                &quot;Every frame tells a story, every story deserves to be
                timeless&quot;
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
