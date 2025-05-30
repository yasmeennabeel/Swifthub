// components/TestimonialCarousel.tsx
'use client';

import { useRef } from 'react';

export default function TestimonialCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="py-12 relative mx-auto px-4 w-full max-w-screen-xl">
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 scrollbar-hide"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="min-w-[250px] md:min-w-[450px] bg-white shadow-md p-6 rounded-xl snap-center flex-shrink-0"
          >
            <div className="text-orange-500 text-xl mb-2">★★★★★</div>
            <p className="text-gray-700 mb-4">
              Exceptional service and on-time deliveries every time!
            </p>
            <div className="flex items-center gap-3">
              <img
                src={`https://i.pravatar.cc/40?img=${i + 1}`}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold">Jidan D</p>
                <p className="text-sm text-gray-500">CEO</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-orange-500"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-black"
        >
          →
        </button>
      </div>
    </div>
  );
}
