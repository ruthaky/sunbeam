"use client";
import { Button } from "@/components/ui/button";
import coffee from "@/public/asset/coffee.jpg";
import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ContactSection({ contactText }: { contactText: any }) {
  const initialFormData = {
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");

  // const handleChange = (event: any) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

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
      <div
        className="w-full flex relative text-white h-[700px] text-9xl py-100 lg:py-0 bg-cover"
        style={{ backgroundImage: `url(${coffee.src})` }}
      >
        <div className="absolute flex flex-col px-4 lg:px-28 gap-5 bg-secondary bg-opacity-80 top-0 left-0 h-full w-full justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[30px] md:text-[50px] lg:text-[80px] text-white font-semibold lg:font-normal tracking-tight leading-tight `}
          >
            {contactText.heading}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1 }}
              className="h-[10px] w-[300px] lg:w-[900px] bg-primary"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-[20px] lg:w-[900px] text-[#eeeeeed6] leading-8"
          >
            {contactText.subheading}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen  w-full bg-secondary ">
        <div className="flex flex-col gap-6 w-full lg:w-[600px] h-full pt-[50px] bg-primary px-5 lg:pl-28 lg:pr-12 py-10 lg:py-28">
          <div
            className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[35px] lg:text-[45px] font-semibold tracking-wide leading-none `}
          >
            {contactText.contactdetail}
          </div>
          {/* <div className="text-[25px]  tracking-tight leading-none">
            Whether it's working with rice farmers in
          </div> */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 text-[20px] items-center">
              <div>
                <FiMapPin size={35} />
              </div>
              <p>{contactText.location}</p>
            </div>
            <div className="flex flex-row gap-4 text-[20px] items-center">
              <BsTelephone size={35} />
              <p>+971 55 181 9398</p>
            </div>
            <div className="flex flex-row gap-4 text-[20px] items-start">
              <IoMailOpenOutline size={35} />
              <div className="flex flex-col gap-2">
                <p>info@surgecrops.com</p>
                <p>sales@surgecrops.com</p>
                <p>marketing@surgecrops.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-2/3 h-full px-5 lg:px-12 lg:pr-28 py-10 lg:py-28">
          <div
            className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[30px] lg:text-[45px] text-white font-semibold lg:font-normal tracking-tight leading-none `}
          >
            {contactText.getintouch}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full lg:w-[700px]"
          >
            <div>
              <label
                htmlFor="name"
                className="text-[20px] font-light block text-white mb-2"
              >
                {contactText.name}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-b border-white bg-transparent text-white py-2 h-[30px] lg:h-[30px] focus:outline-none focus:border-b-2 focus:border-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[20px] font-light block text-white mb-2"
              >
                {contactText.email}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b border-white bg-transparent text-white py-2 h-[30px] lg:h-[30px] focus:outline-none focus:border-b-2 focus:border-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="text-[20px] font-light block text-white mb-2"
              >
                {contactText.phonenumber}
              </label>
              <input
                type="text"
                id="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                className="w-full border-b border-white bg-transparent text-white py-2 h-[30px] lg:h-[30px] focus:outline-none focus:border-b-2 focus:border-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-[20px] font-light block text-white mb-2"
              >
                {contactText.message}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border-b border-white bg-transparent text-white py-2 lg:h-[60px] focus:outline-none focus:border-b-2 focus:border-white"
                required
              />
            </div>
            <div className="w-full flex h-auto justify-end">
              <Button type="submit" variant="contact">
                {contactText.button}
              </Button>
            </div>
          </form>
          {status && <p className="text-white mt-4">{status}</p>}
        </div>
      </div>
    </div>
  );
}
