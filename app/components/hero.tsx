"use client";

import { Button } from "@/components/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const images = [
  {
    url: "/assets/1.jpg",
    text: "Sunglasses",
    link: "",
  },
  {
    url: "/assets/2.jpg",
    text: "Watches",
    link: "",
  },
  {
    url: "/assets/3.jpg",
    text: "Jackets",
    link: "",
  },
  {
    url: "/assets/1.jpg",
    text: "Shirt",
    link: "",
  },
  {
    urlurl: "/assets/2.jpg",
    text: "Shoes",
    link: "",
  },
  {
    url: "/assets/3.jpg",
    text: "Trousers",
    link: "",
  },
  {
    url: "/assets/1.jpg",
    text: "Suit",
    link: "",
  },
  {
    url: "/assets/2.jpg",
    text: "Hoodie",
    link: "",
  },
  {
    url: "/assets/3.jpg",
    text: "Shorts",
    link: "",
  },
];

export const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleRadioClick = (index: number) => {
    const container = scrollRef.current;
    if (container) {
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentSlide(index);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      handleRadioClick(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < images.length - 1) {
      handleRadioClick(currentSlide + 1);
    } else {
      // Loop back to first slide
      handleRadioClick(0);
    }
  };

  // Auto slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]); // Restart timer on slide change

  return (
    <section className="mx-auto max-w-7xl px-4 sm:pb-6 lg:px-7">
      <div className="mt-32 text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-600 sm:text-5xl md:text-6xl">
          Stylish Accessories For <span>Everyone!</span>
        </h1>
        <p className="mt-5 text-gray-400 xl:text-lg">
          Discover our latest collection of versatile and fashionable items.
        </p>
      </div>

      {/* Scrollable Image Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide rounded-lg shadow-lg h-[300px] sm:h-[400px] lg:h-[500px]"
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="relative min-w-full h-full flex-shrink-0 snap-center"
          >
            <Image
              src={item.url}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover object-center rounded-lg"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center  bg-opacity-40 rounded-lg">
              <h2 className="text-gray-400 text-2xl sm:text-3xl font-bold drop-shadow-lg">
                {item.text}
              </h2>
              <Button className="bg-white hover:bg-purple-100  text-white px-6 py-2  shadow-lg ">
                <Link
                  href={item.text}
                  className="flex items-center gap-x-2 text-black"
                >
                  View All
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <button
          onClick={goToPrevious}
          disabled={currentSlide === 0}
          className={` font-medium border-gray-400 ${
            currentSlide === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-black hover:bg-gray-200"
          }`}
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        <div className="flex space-x-3">
          {images.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="slider"
              checked={currentSlide === index}
              onChange={() => handleRadioClick(index)}
              className="h-3 w-3 cursor-pointer appearance-none rounded-full border border-gray-400 checked:bg-gray-300"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentSlide === images.length - 1}
          className={` font-medium border-gray-400 ${
            currentSlide === images.length - 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-black hover:bg-gray-200"
          }`}
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};
