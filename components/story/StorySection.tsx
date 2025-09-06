// components/story/StorySection.tsx
import React, { useState } from 'react';

interface StorySectionProps {
  title: string;
  description: string;
  images: string[];
}

export const StorySection: React.FC<StorySectionProps> = ({
  title,
  description,
  images
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 font-light capitalize">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden aspect-[4/5] bg-gray-100"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Simple Modal for Selected Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
