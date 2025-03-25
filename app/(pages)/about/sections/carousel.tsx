"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Fredoka } from "next/font/google";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
const images = [
  "/asset/tour1.jpg",
  "/asset/tour2.jpg",
  "/asset/tour3.jpg",
  "/asset/tour1.jpg",
  "/asset/tour2.jpg",
  "/asset/tour3.jpg",
];

export default function MobileVillas() {
  const [embla, setEmbla] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on("select", handleSelect);
      handleSelect();
    }
  }, [embla]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-[100px]">
      <div
        className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] font-semibold leading-none `}
      >
        Virtual Tour
        {/* <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
        <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" /> */}
      </div>
      <div className="w-[85%] flex justify-center items-center py-10">
        <Carousel
          withIndicators
          height={600}
          slideSize="60.33%"
          slideGap="0%"
          loop
          align="center"
          getEmblaApi={setEmbla}
          className="w-full flex items-center justify-center"
        >
          {images.map((src, index) => (
            <Carousel.Slide key={index} className="flex justify-center">
              <div
                className={`transition-all duration-[1000ms] ease-in-out will-change-transform opacity-100 rounded-lg overflow-hidden ${
                  selectedIndex === index
                    ? "w-[700px] h-[600px] scale-100 shadow-lg rounded-[30px]"
                    : "w-[700px] h-[550px] scale-90 opacity-80 rounded-[10px]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Villa ${index + 1}`}
                  width={750}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                  priority={index === 0} // Load the first image first
                />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
