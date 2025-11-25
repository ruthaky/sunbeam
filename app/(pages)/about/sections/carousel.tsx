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

const aboutImages = [
  {
    src: "/asset/Center1.jpeg",
    alt: "Bright therapy room with sensory stations",
  },
  {
    src: "/asset/Center2.jpeg",
    alt: "Bright therapy room with sensory stations",
  },
  {
    src: "/asset/Center3.jpeg",
    alt: "Bright therapy room with sensory stations",
  },
  {
    src: "/asset/Center4.jpeg",
    alt: "Play-based learning area",
  },
  {
    src: "/asset/Center5.jpeg",
    alt: "Bright therapy room with sensory stations",
  },
  {
    src: "/asset/Center6.jpeg",
    alt: "Bright therapy room with sensory stations",
  },
  // {
  //   src: "/asset/Center7.jpeg",
  //   alt: "Therapist guiding a child through activities",
  // },
  // {
  //   src: "/asset/Center8.jpeg",
  //   alt: "Group session celebrating a milestone",
  // },
  // {
  //   src: "/asset/center9.jpeg",
  //   alt: "Quiet reading corner for individual sessions",
  // },
  {
    src: "/asset/center10.jpeg",
    alt: "Quiet reading corner for individual sessions",
  },
  {
    src: "/asset/center11.jpeg",
    alt: "Quiet reading corner for individual sessions",
  },
  {
    src: "/asset/center12.jpeg",
    alt: "Quiet reading corner for individual sessions",
  },
  {
    src: "/asset/center13.jpeg",
    alt: "Quiet reading corner for individual sessions",
  },
];

export default function AboutImageCarousel() {
  const [embla, setEmbla] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", handleSelect);
    handleSelect();

    const interval = setInterval(() => {
      if (!embla) return;
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0);
      }
    }, 4500);

    return () => {
      clearInterval(interval);
      embla.off("select", handleSelect);
    };
  }, [embla, handleSelect]);

  return (
    <div className="w-full flex flex-col items-center gap-6 lg:gap-8 justify-center py-[80px] px-5 lg:px-28">
      <div
        className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] font-semibold leading-none text-center text-[#312f30]`}
      >
        A Glimpse Inside SunBeam
      </div>
      <div className="w-full flex justify-center items-center">
        <Carousel
          withIndicators
          height={500}
          slideSize="60%"
          slideGap="xl"
          loop
          align="center"
          getEmblaApi={setEmbla}
          className="w-full flex items-center justify-center"
        >
          {aboutImages.map((image, index) => (
            <Carousel.Slide key={image.src} className="flex justify-center">
              <div
                className={`transition-all duration-[1000ms] ease-in-out will-change-transform rounded-[24px] overflow-hidden ${
                  selectedIndex === index
                    ? "w-[680px] h-[460px] scale-100 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    : "w-[600px] h-[420px] scale-90 opacity-80"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={680}
                  height={460}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <p className="max-w-3xl text-center text-[#545454] text-[16px] lg:text-[18px]">
        Every corner of our center is designed to celebrate progress—whether
        it&apos;s a lively group session, sensory play zone, or calm nook for
        focused breakthroughs.
      </p>
    </div>
  );
}
