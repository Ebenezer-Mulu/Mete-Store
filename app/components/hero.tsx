import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-7 ">
      <div className="mb-8 justify-between md:mb-16">
        <div className="mb-6  w-full mt-32 sm:mb-12 lg:mb-0 lg:pb-24 ">
          <h1 className=" mb-4 ml-8 text-4xl font-bold text-gray-600 sm:text-5xl md:mb-8 md:text-6xl text-center">
            Stylish Accessories For{" "}
            <span className="text-center">Everyone!</span>
          </h1>
          <p className=" leading-relaxed text-gray-400 xl:text-lg mt-5 text-center">
            Discover our latest collection of versatile and fashionable items.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src="/assets/1.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src="/assets/2.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
