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
      return " md:translate-x-[30%]  z-20 scale-90 opacity-80 shadow-lg";
    } else if (currentPosition === totalCards - 1) {
      return " md:-translate-x-[30%]  z-20 scale-90 opacity-80 shadow-lg";
    } else {
      return "opacity-0 scale-75 z-0";
    }
  };

  return (
    <div className="relative w-full px-4 md:max-w-2xl mx-auto h-[400px] md:h-[500px] overflow-visible ">


      <div className=" w-full h-full flex items-center justify-center ">/
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute w-[90%] md:w-full bg-white p-4 md:p-6 rounded-lg transition-all duration-500 ease-in-out ${getCardPosition(index)}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{testimonial.content}</p>
            <div className='flex gap-5 items-center'>
              <Image src={testimonial.image} alt={'userAvatar'} width={40} height={40} className='rounded-full'></Image>
              <p className="text-gray-900 font-semibold ">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute -bottom-10 h-[1px] bg-gray-800 my-4"></div>

      
     <div className='flex items-center justify-center z-4'>
       <div className='relative  bg-black rounded-full flex gap-2 p-1'>

        <button
          onClick={prevSlide}
          className="  !bg-opacity-30 bg-black border border-1-orange-500 text-orange-500 p-2 rounded-full shadow-md  hover:!bg-gray-100  cursor-pointer transition"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>

        </button>

        <button
          onClick={nextSlide}
          className=" bg-orange-500 text-white !bg-opacity-30 p-2 rounded-full shadow-md hover:bg-gray-100 hover:!text-orange-500 cursor-pointer transition"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

        </button>
      </div>
     </div>
      {/* 
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}