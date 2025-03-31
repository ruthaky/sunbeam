"use client";
import React from "react";
import { Box } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { MantineProvider } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import heroImage from "@/public/asset/one-on-one.jpg";
import Image from "next/image";
import { Fredoka } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import "@mantine/carousel/styles.css";
import oneonone from "@/public/asset/oneonone.jpg";
import speechtherapy from "@/public/asset/speechtherapy.jpg";
import occupationaltherapy from "@/public/asset/occupationaltherapy.png";
import familytraining from "@/public/asset/familytraining.png";
import grouptherapy from "@/public/asset/speechtherapy.jpg";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ServicesSection() {
  const [isHoveredgreen, setIsHoveredgreen] = useState(false);
  const [isHoveredorange, setIsHoveredorange] = useState(false);
  const [isHoveredblue, setIsHoveredblue] = useState(false);
  const [isHoveredyellow, setIsHoveredyellow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <div>
      <div
        ref={sectionRef}
        className="hidden lg:flex flex-col gap-6 lg:gap-8 h-screen justify-center w-full bg-white lg:py-0 "
      >
        <div className="flex flex-col gap-6 justify-start py-4 px-28">
          <div
            className={` ${merriweather.variable} font-merriweather font-semibold flex flex-col lg:gap-2 text-[35px] lg:text-[42px]  text-[#312f30] leading-none `}
          >
            Our Services
          </div>
        </div>
        <Carousel
          withIndicators
          height={280}
          slideSize={{ base: "100%", sm: "50%", md: "33.33%" }}
          slideGap={10}
          loop
          align="start"
          className="flex justify-center w-full px-28"
        >
          <Carousel.Slide>
            {" "}
            <div className="w-[400px] rounded-[25px] h-full mb-4 lg:mb-0 p-4 flex flex-col gap-2 bg-[#C3F498]  justify-center ">
              <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
                <Link
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                    const section = document.getElementById("oneonone");
                    if (section) {
                      const offset =
                        section.getBoundingClientRect().top +
                        window.scrollY -
                        window.innerHeight / 2 +
                        section.clientHeight / 2;
                      window.scrollTo({ top: offset, behavior: "smooth" });

                      // Update the URL with hash
                      window.history.pushState(null, "", "/services/#oneonone");
                    }
                  }}
                >
                  <motion.div
                    animate={
                      isHoveredgreen
                        ? { opacity: 1, x: 2 }
                        : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-0 flex items-center justify-start cursor-pointer gap-0 h-auto w-auto bg-[#f1f1f1a1] transition-transform ease-in-out z-10 rounded-full"
                    onMouseEnter={() => setIsHoveredgreen(true)}
                    onMouseLeave={() => setIsHoveredgreen(false)}
                  >
                    <div className="h-auto w-auto rounded-full bg-white transition-transform duration-300 hover:-rotate-45 p-1">
                      <ChevronRight width={40} height={40} />
                    </div>

                    {isHoveredgreen && (
                      <motion.div className="rounded-full text-black text-start px-3 py-1 transition-all ease-in-out duration-300 z-10">
                        Read More
                      </motion.div>
                    )}
                  </motion.div>
                </Link>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={oneonone}
                    alt="logo"
                    className="p-0 w-[230px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px] z-0"
                  />
                </motion.div>
              </div>
              <div className="flex flex-row  items-start h-1/3 w-full">
                {" "}
                <p className="font-semibold text-[25px] w-[200px]">
                  ABA one-on-one direct therapy
                </p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="w-[400px] rounded-[25px] h-full p-4 flex flex-col gap-2 bg-[#FF9358] justify-center">
              <div className="flex flex-row  items-end justify-end h-1/3 w-full">
                {" "}
                <p className="font-semibold text-[25px] w-[200px] text-right">
                  Family/Caregiver Training
                </p>
              </div>
              <div className="relative flex flex-row justify-between  items-end h-2/3 w-full">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={heroImage}
                    alt="logo"
                    className="p-0 w-[230px] rounded-tl-[20px] rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px]"
                  />
                </motion.div>

                <Link href="/services/#family">
                  <motion.div
                    animate={
                      isHoveredorange
                        ? { opacity: 1, x: 2 }
                        : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 flex items-center justify-start cursor-pointer  gap-0 h-auto w-auto bg-[#f1f1f1a1] transition-transform  ease-in-out z-10 rounded-full"
                    onMouseEnter={() => setIsHoveredorange(true)}
                    onMouseLeave={() => setIsHoveredorange(false)}
                  >
                    {isHoveredorange && (
                      <motion.div className="rounded-full text-black text-start px-3 py-1 transition-all ease-in-out duration-300 z-10">
                        Read More
                      </motion.div>
                    )}
                    <div className="h-auto w-auto rounded-full bg-white transition-transform duration-300 hover:-rotate-45 p-1">
                      <ChevronRight width={40} height={40} />
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="w-[400px] rounded-[25px] h-full mb-4 lg:mb-0 p-4 flex flex-col gap-2 bg-[#97EAFD] justify-center">
              <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
                <Link href="/services/#occupational">
                  <motion.div
                    animate={
                      isHoveredblue
                        ? { opacity: 1, x: 2 }
                        : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-0 flex items-center justify-start cursor-pointer  gap-0 h-auto w-auto bg-[#f1f1f1a1] transition-transform  ease-in-out z-10 rounded-full"
                    onMouseEnter={() => setIsHoveredblue(true)}
                    onMouseLeave={() => setIsHoveredblue(false)}
                  >
                    {/* Rotating Chevron */}
                    <div className="h-auto w-auto rounded-full bg-white transition-transform duration-300 hover:-rotate-45 p-1">
                      <ChevronRight width={40} height={40} />
                    </div>

                    {/* Read More Text (Appears on Hover) */}
                    {isHoveredblue && (
                      <motion.div
                        // initial={{ opacity: 0, x: -10 }}
                        // animate={
                        //   isHovered
                        //     ? { opacity: 1, x: 0 }
                        //     : { opacity: 0, x: -10 }
                        // }
                        // transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="rounded-full text-black text-start px-3 py-1 transition-all ease-in-out duration-300 z-10"
                      >
                        Read More
                      </motion.div>
                    )}
                  </motion.div>
                </Link>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={heroImage}
                    alt="logo"
                    className="p-0 w-[230px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px] z-0"
                  />
                </motion.div>
              </div>
              <div className="flex flex-row  items-start h-1/3 w-full">
                {" "}
                <p className="font-semibold text-[25px] w-[200px]">
                  Occupational Therapy
                </p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            {" "}
            <div className="w-[400px] h-full mb-4 lg:mb-0 p-4 rounded-[25px] flex flex-col gap-2 bg-[#FFE24F] justify-center">
              <div className="flex flex-row items-start justify-end h-1/3 w-full">
                {" "}
                <p className="font-semibold text-[25px] w-auto">
                  Group Session
                </p>
              </div>
              <div className="relative flex flex-row justify-between items-end h-2/3 w-full">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={heroImage}
                    alt="logo"
                    className="p-0 w-[230px] rounded-tl-[20px] rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px]"
                  />
                </motion.div>

                <Link href="/services/#group">
                  <motion.div
                    animate={
                      isHoveredyellow
                        ? { opacity: 1, x: 2 }
                        : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 flex items-center justify-start cursor-pointer  gap-0 h-auto w-auto bg-[#f1f1f1a1] transition-transform  ease-in-out z-10 rounded-full"
                    onMouseEnter={() => setIsHoveredyellow(true)}
                    onMouseLeave={() => setIsHoveredyellow(false)}
                  >
                    {isHoveredyellow && (
                      <motion.div className="rounded-full text-black text-start px-3 py-1 transition-all ease-in-out duration-300 z-10">
                        Read More
                      </motion.div>
                    )}
                    <div className="h-auto w-auto rounded-full bg-white transition-transform duration-300 hover:-rotate-45 p-1">
                      <ChevronRight width={40} height={40} />
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>

      <div className="py-[100px] flex flex-col gap-6 justify-center lg:hidden">
        <div className="flex flex-col gap-10 justify-start items-start py-4 px-6">
          <div
            className={` ${merriweather.variable} font-merriweather font-semibold flex flex-col lg:gap-2 text-[35px] lg:text-[42px]  text-[#312f30] leading-none `}
          >
            Our Services
          </div>
          {/* <p className="text-[20px] tracking-tight">nnsron</p> */}
        </div>
        <MantineProvider>
          <div className="w-full h-auto flex items-center justify-center">
            <Box className="flex items-center justify-center h-[450px] w-full sm:w-[600px] md:hidden">
              <Carousel
                withIndicators
                loop
                height="100%"
                className="w-full h-full flex-1 snap-x px-6"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                nextControlIcon={
                  <IconArrowRight
                    style={{ width: "2rem", height: "2rem" }}
                    color="black"
                  />
                }
                previousControlIcon={
                  <IconArrowLeft
                    style={{ width: "2rem", height: "2rem" }}
                    color="black"
                  />
                }
              >
                <Carousel.Slide className="w-full flex  items-center justify-center snap-center">
                  <div className="w-[400px] rounded-[25px] h-full p-4 flex flex-col gap-2 bg-[#C3F498]  justify-center ">
                    <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
                      <Image
                        src={heroImage}
                        alt="logo"
                        className="p-0 w-full h-full rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px] z-0"
                      />
                    </div>
                    <div className="flex flex-row  items-center h-1/3 w-full">
                      {" "}
                      <p className="font-semibold text-[25px] w-[200px]">
                        ABA one-on-one direct therapy
                      </p>
                    </div>
                  </div>
                </Carousel.Slide>
                <Carousel.Slide className="w-full flex items-center justify-center snap-center">
                  <div className="w-[400px] rounded-[25px] h-full p-4 flex flex-col gap-2 bg-[#FF9358]  justify-center ">
                    <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
                      <Image
                        src={heroImage}
                        alt="logo"
                        className="p-0 w-full h-full rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px] z-0"
                      />
                    </div>
                    <div className="flex flex-row  items-center h-1/3 w-full">
                      {" "}
                      <p className="font-semibold text-[25px] w-[200px]">
                        Family Caregiver/Training
                      </p>
                    </div>
                  </div>
                </Carousel.Slide>
                <Carousel.Slide className="w-full flex items-center justify-center snap-center">
                  <div className="w-[400px] rounded-[25px] h-full p-4 flex flex-col gap-2 bg-[#97EAFD]  justify-center ">
                    <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
                      <Image
                        src={heroImage}
                        alt="logo"
                        className="p-0 w-full h-full rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px] z-0"
                      />
                    </div>
                    <div className="flex flex-row  items-center h-1/3 w-full">
                      {" "}
                      <p className="font-semibold text-[25px] w-[200px]">
                        Occupational Therapy
                      </p>
                    </div>
                  </div>
                </Carousel.Slide>
                <Carousel.Slide className="w-full flex items-center justify-center snap-center">
                  <div className="w-[400px] rounded-[25px] h-full p-4 flex flex-col gap-2 bg-[#FFE24F]  justify-center ">
                    <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
                      <Image
                        src={heroImage} // Ensure correct reference
                        alt="logo"
                        width={230} // Explicit width
                        height={230} // Explicit height
                        className="p-0 w-full h-full rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px] z-10"
                      />
                    </div>
                    <div className="flex flex-row  items-center h-1/3 w-full">
                      {" "}
                      <p className="font-semibold text-[25px] w-[200px]">
                        Group Session
                      </p>
                    </div>
                  </div>
                </Carousel.Slide>
              </Carousel>
            </Box>
          </div>
        </MantineProvider>
      </div>
    </div>
  );
}
