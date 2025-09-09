
// components/story/VideoPlayer.tsx
import React, { useRef } from 'react';
import { Play } from 'lucide-react';
import { useInView , motion } from 'framer-motion';

interface VideoPlayerProps {
  title: string;
  videoUrl?: string;
  thumbnailUrl: string;
  onPlay: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> =  ({ title, videoUrl, thumbnailUrl, onPlay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl mb-6 font-light"
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the full story through our cinematic highlight reel
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative aspect-video bg-black overflow-hidden group cursor-pointer rounded-lg shadow-2xl"
          onClick={onPlay}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            y: -10,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />
          <motion.div 
            className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors"
            whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <motion.div 
              className="bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-full group-hover:bg-white/30 transition-all"
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-16 h-16 text-white"
                animate={{ 
                  x: [0, 2, 0],
                  transition: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                ▶
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

