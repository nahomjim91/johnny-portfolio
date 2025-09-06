
// components/sections/Statistics.tsx
import React from 'react';

export const Statistics = () => {
  const stats = [
    { number: "150+", label: "Weddings Captured" },
    { number: "8+", label: "Years Experience" },
    { number: "15+", label: "Countries Served" },
    { number: "100%", label: "Happy Couples" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-amber-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
