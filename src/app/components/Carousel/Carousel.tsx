"use client";
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    rating: 5,
    content: "Outstanding logistics service! My shipment arrived on time with real-time tracking updates. Highly professional team!",
    author: "Guy Hawkins",
    image: '/images/guypic.png'
  },
  {
    id: 2,
    rating: 5,
    content: "Exceptional service and on-time deliveries every time! The tracking system is highly accurate, and customer support is always helpful.",
    author: "Jidan.D",
    image: '/images/jidanpic.png'
  },
  {
    id: 3,
    rating: 5,
    content: "Great experience from start to finish. Customer service is responsive, and deliveries are always on schedule.",
    author: "Judy Paul",
    image: '/images/judypic.png'
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getCardPosition = (index) => {
    const totalCards = testimonials.length;
    const positions = [];

    for (let i = 0; i < totalCards; i++) {
      let position = (i - activeIndex + totalCards) % totalCards;
      positions.push(position);
    }

    const currentPosition = positions[index];

    if (currentPosition === 0) {
      return "translate-x-0 z-30 scale-100 opacity-100 shadow-xl";
    } else if (currentPosition === 1) {
      return "translate-x-[15%] md:translate-x-[30%] z-20 scale-90 opacity-80 shadow-lg";
    } else if (currentPosition === totalCards - 1) {
      return "-translate-x-[15%] md:-translate-x-[30%] z-20 scale-90 opacity-80 shadow-lg";
    } else {
      return "opacity-0 scale-75 z-0";
    }
  };

  return (
    <div className="relative w-full px-4 md:max-w-2xl mx-auto h-[300px] md:h-[360px] overflow-visible">
      <div className="w-full h-[calc(100%-70px)] flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute w-[80%] md:w-full bg-white p-4 md:p-6 rounded-lg transition-all duration-500 ease-in-out ${getCardPosition(index)}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg md:text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">{testimonial.content}</p>
            <div className='flex gap-3 md:gap-5 items-center'>
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image 
                  src={testimonial.image} 
                  alt={'userAvatar'} 
                  fill
                  className='rounded-full object-cover'
                />
              </div>
              <p className="text-gray-900 font-semibold text-sm md:text-base">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>

  <div className="divider divider-neutral">

      <div className='flex items-center justify-center'>
        <div className='relative bg-black rounded-full flex gap-2 p-1 z-10'>
          <button
            onClick={prevSlide}
            className="bg-opacity-30 bg-black border border-orange-500 text-orange-500 p-2 rounded-full shadow-md hover:bg-gray-100 hover:bg-opacity-10 cursor-pointer transition"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="bg-orange-500 text-white bg-opacity-30 p-2 rounded-full shadow-md hover:bg-opacity-50 hover:bg-white hover:text-orange-500 cursor-pointer transition"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}