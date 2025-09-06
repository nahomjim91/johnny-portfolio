// components/gallery/GalleryFilter.tsx
import React from 'react';

interface GalleryFilterProps {
  categories: string[];
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

export const GalleryFilter: React.FC<GalleryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onFilterChange 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 text-sm font-medium capitalize transition-colors ${
            activeCategory === category
              ? 'bg-amber-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category === 'all' ? 'All Work' : category}
        </button>
      ))}
    </div>
  );
};