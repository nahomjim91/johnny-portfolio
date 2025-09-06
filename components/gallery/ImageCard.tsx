
// components/gallery/ImageCard.tsx
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface ImageCardProps {
  id: string;
  src: string;
  alt: string;
  couples: string;
  country: string;
  hasVideo?: boolean;
  videoPreview?: string;
  weddingSlug: string;
  onClick: (id: string) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ 
  id, 
  src, 
  alt, 
  couples, 
  country, 
  hasVideo, 
  weddingSlug,
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(id)}
    >
      <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-gray-100">
        <img 
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-medium text-lg mb-1">{couples}</h3>
            <p className="text-sm opacity-90">{country}</p>
          </div>
          
          {hasVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-full">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
