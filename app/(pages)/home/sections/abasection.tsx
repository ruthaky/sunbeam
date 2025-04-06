"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Fredoka } from "next/font/google";
import Bluebg from "@/public/asset/bluebg.svg";
import star from "@/public/asset/bluestarnew.svg";

const merriweather = Fredoka({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

// ✅ Ensure component is properly exported
export default function Abasection() {
  return (
    <div
      className="relative w-full h-auto py-[70px] lg:pt-[150px] lg:pb-[180px] flex flex-col gap-6 lg:gap-8 px-6 lg:px-[200px] bg-[#D4F9FF] lg:bg-opacity-0 justify-center bg-cover"
      style={{ backgroundImage: `url(${Bluebg.src})` }}
    >
      {/* ✅ Floating Star 1 */}
      <motion.div
        animate={{ y: [0, -20, 0] }} // Moves up & down
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 lg:-top-10 right-0 z-0"
      >
        <Image
          src={star}
          alt="Gallery Image"
          width={10}
          height={12}
          className="flex  w-[150px] lg:w-[300px] h-full object-cover"
        />
      </motion.div>

      {/* ✅ Floating Star 2 */}
      <motion.div
        animate={{ y: [0, 20, 0] }} // Moves slightly different than the first
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[15%] lg:-bottom-20 -left-10 w-[400px] h-[350px] z-0"
      >
        <Image
          src={star}
          alt="Gallery Image"
          width={0}
          height={0}
          className="w-[150px] lg:w-[400px] lg:h-full object-cover"
        />
      </motion.div>

      {/* ✅ Section Content */}
      <div
        className={` ${merriweather.variable} font-merriweather text-[#312f30] flex flex-col lg:gap-2 text-[36px] lg:text-[42px] font-semibold leading-none `}
      >
        What is ABA?
        {/* <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
        <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" /> */}
      </div>

      <div className="text-[#545454] lg:pb-10 z-0 flex flex-col gap-6 lg:gap-8">
        <p className="text-[18px] lg:text-[20px] tracking-tight">
          Sunbeam ABA Therapy understands that every child is unique and
          deserves a personalized, compassionate approach to therapy. We are
          dedicated to providing individualized, evidence-based Applied Behavior
          Analysis (ABA) therapy that supports meaningful progress in each
          child's life. Our team works closely with both the child and their
          family to develop customized treatment plans that address specific
          challenges while promoting independence, communication, and functional
          skills.
          <br />
          <br />
          We believe that early intervention can be life-changing, but we also
          recognize the importance of allowing children to experience the joys
          of childhood. Our approach blends structured, research-backed
          techniques with naturalistic teaching strategies, ensuring that
          learning happens in an engaging and supportive environment. We focus
          not just on skills development, but on building confidence, fostering
          connections, and empowering children to navigate the world with
          greater ease.
          <br />
          <br />
          At Sunbeam ABA Therapy, we view parents as essential partners in their
          child's therapy journey. We collaborate closely with families to
          ensure that ABA principles are integrated seamlessly into daily
          routines, promoting consistent progress across home, school, and
          social settings. Through education, training, and ongoing support, we
          equip parents with the tools and knowledge they need to reinforce
          learning and help their child thrive. Our mission is to provide
          compassionate, high-quality ABA therapy that illuminates each child’s
          potential—helping them shine in their own unique way.
        </p>

        {/* ✅ Service Request Button */}
        <div>
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScNsTP3D2bhuYmfaRBGCiQLndZyiMqTibaL41EExBQJ6w0ooA/viewform?usp=dialog"
          >
            <Button>ABA Service Request</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
