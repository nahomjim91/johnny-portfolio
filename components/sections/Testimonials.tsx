
// components/sections/Testimonials.tsx
import React, { useState, useEffect } from 'react';

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Johnny captured our wedding day with such artistry and emotion. Every frame tells our love story perfectly. The videos still make us cry happy tears!",
      author: "Sarah & Michael",
      wedding: "Santorini Wedding 2024"
    },
    {
      text: "Professional, creative, and so easy to work with. Johnny made us feel comfortable and the results were beyond our wildest dreams.",
      author: "Amara & David", 
      wedding: "Ethiopian Traditional Wedding"
    },
    {
      text: "The way Johnny captures cultural traditions while telling our personal story is incredible. Our families treasure these memories forever.",
      author: "Zara & Ahmed",
      wedding: "Dubai Destination Wedding"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light">What Couples Say</h2>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <div className="transition-all duration-1000 ease-in-out">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-800">
               &quot;{testimonials[currentTestimonial].text} &quot;
            </blockquote>
            <div className="text-lg font-medium text-amber-600 mb-2">
              {testimonials[currentTestimonial].author}
            </div>
            <div className="text-gray-600">
              {testimonials[currentTestimonial].wedding}
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-amber-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
