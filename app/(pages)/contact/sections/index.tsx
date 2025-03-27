"use client";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/asset/abouthero.svg";
import Image from "next/image";
import { useState } from "react";
import image from "@/public/asset/IMG_9376.png";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { Fredoka } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import heroIcon from "@/public/asset/yellowsun.svg";
import heroIcon2 from "@/public/asset/heroicon22.svg";

import Link from "next/link";
const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ContactSection() {
  const { scrollY } = useScroll(); // Detect scroll position
  const rotate = useTransform(scrollY, [0, 1300], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, 360]);
  const initialFormData = {
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });

      // Parse the JSON response
      const result = await response.json();

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phonenumber: "", message: "" });
        console.log("Form data:", formData);
      } else {
        setStatus(`Error: ${result.error || "Failed to submit the form."}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row h-auto py-[100px] lg:h-screen w-full pt-[90px] lg:py-0 px-4 lg:px-28 items-center bg-[#fff] justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 lg:gap-6 w-full lg:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${merriweather.variable} font-merriweather text-[35px] lg:text-[59px] font-semibold leading-none`}
          >
            Sunbeam is here for you
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[20px] tracking-tight "
          >
            We are hiring- come be a part of an exciting, safe space work
            environment. We offer supervision for RBT’s, BCABa’s in their
            graduate program.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          ></motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex items-center justify-end w-full lg:w-1/3 h-full z-10"
        >
          <Image src={heroImage} alt="logo" className="" />
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:h-screen  w-full bg-white z-0">
        <div
          className="flex flex-col relative  w-full lg:w-[600px] h-full bg-cover "
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="lg:absolute top-0 left-0 flex flex-col gap-6 lg:gap-8 w-full h-full bg-[#C3F498] bg-opacity-80 px-4 lg:pl-28 lg:pr-12 py-10 lg:py-28 text-black">
            <div
              className={` ${merriweather.variable} font-merriweather text-[#312f30] flex flex-col lg:gap-2 text-[36px] lg:text-[42px]  font-semibold leading-none `}
            >
              Contact Info
              {/* <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
        <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" /> */}
            </div>
            {/* <div className="text-[25px]  tracking-tight leading-none">
          Whether it's working with rice farmers in
        </div> */}
            <div className="flex flex-col gap-5 lg:gap-8">
              <div className="flex flex-row gap-4 text-[20px] items-center ">
                <div className="w-[25px] lg:w-[30px] flex items-start justify-start">
                  <FiMapPin className="flex w-full h-full" />
                </div>
                <Link href="https://maps.google.com/?q=25.272150,55.338219">
                  <p className="text-wrap lg:text-nowrap">huhihi</p>
                </Link>
              </div>
              <div className="flex flex-row gap-4 text-[20px] items-center">
                <div className="w-[25px] lg:w-[30px] flex items-start justify-start">
                  <BsTelephone className="flex w-full h-full" />
                </div>

                <p>+971 55 181 9398</p>
              </div>
              <div className="flex flex-row gap-4 text-[20px] items-start">
                <IoMailOpenOutline size={35} />
                <div className="flex flex-col gap-2">
                  <p>info@surgecrops.com</p>
                  {/* <p>sales@surgecrops.com</p>
                <p>marketing@surgecrops.com</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-2/3 h-full px-5 lg:px-[60px] lg:pr-28 py-10 lg:py-28 bg-[#efffeaa4]">
          <div
            className={` ${merriweather.variable} font-merriweather text-[#312f30] flex flex-col lg:gap-2 text-[36px] lg:text-[42px]  font-semibold leading-none `}
          >
            More questions?
            {/* <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
        <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" /> */}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full lg:w-[700px]"
          >
            <div>
              <label
                htmlFor="name"
                className="text-[18px] lg:text-[20px] block mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-b border-white bg-[#b7b5aa31] p-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[18px] lg:text-[20px] block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b border-white bg-[#b7b5aa31] p-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="text-[18px] lg:text-[20px] block mb-2"
              >
                Phonenumber
              </label>
              <input
                type="text"
                id="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                className="w-full border-b border-white bg-[#b7b5aa31] p-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-[18px] lg:text-[20px] block mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border-b border-white bg-[#b7b5aa31] p-2 lg:h-[80px] focus:outline-none focus:border-b-2 focus:border-white"
                required
              />
            </div>
            <div className="w-full flex h-auto justify-end">
              <Button type="submit">
             Send
              </Button>
            </div>
          </form>
          {status && <p className=" mt-4">{status}</p>}
        </div>
      </div>
    </div>
  );
}
