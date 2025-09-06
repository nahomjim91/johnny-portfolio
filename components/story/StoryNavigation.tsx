
// components/story/StoryNavigation.tsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Wedding } from '@/lib/data/wedding';

interface StoryNavigationProps {
  previousStory?: Wedding;
  nextStory?: Wedding;
}

export const StoryNavigation: React.FC<StoryNavigationProps> = ({
  previousStory,
  nextStory
}) => {
  return (
    <section className="py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Story */}
          {previousStory ? (
            <a 
              href={`/stories/${previousStory.slug}`}
              className="group flex items-center space-x-4 p-6 border border-gray-200 hover:border-amber-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-amber-600 transition-colors" />
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Previous Story</div>
                <h3 className="font-serif text-xl group-hover:text-amber-600 transition-colors">
                  {previousStory.couples}
                </h3>
                <p className="text-gray-600 text-sm">{previousStory.location}</p>
              </div>
              <div className="w-16 h-16 bg-gray-100 overflow-hidden">
                <img
                  src={previousStory.coverImage}
                  alt={previousStory.couples}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ) : (
            <div></div>
          )}

          {/* Next Story */}
          {nextStory ? (
            <a 
              href={`/stories/${nextStory.slug}`}
              className="group flex items-center space-x-4 p-6 border border-gray-200 hover:border-amber-600 transition-colors md:flex-row-reverse md:text-right"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-amber-600 transition-colors md:order-first" />
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Next Story</div>
                <h3 className="font-serif text-xl group-hover:text-amber-600 transition-colors">
                  {nextStory.couples}
                </h3>
                <p className="text-gray-600 text-sm">{nextStory.location}</p>
              </div>
              <div className="w-16 h-16 bg-gray-100 overflow-hidden">
                <img
                  src={nextStory.coverImage}
                  alt={nextStory.couples}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
};
