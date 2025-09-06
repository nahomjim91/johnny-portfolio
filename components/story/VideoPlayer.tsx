
// components/story/VideoPlayer.tsx
import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  videoUrl?: string;
  thumbnailUrl: string;
  onPlay: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  videoUrl,
  thumbnailUrl,
  onPlay
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 font-light">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            Experience the full story through our cinematic highlight reel
          </p>
        </div>

        <div className="relative aspect-video bg-black overflow-hidden group cursor-pointer" onClick={onPlay}>
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-full group-hover:bg-white/30 transition-all">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
