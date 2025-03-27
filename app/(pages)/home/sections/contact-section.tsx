"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { Fredoka } from "next/font/google";
import Link from "next/link";
import image from "@/public/asset/IMG_9376.png";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ContactSection() {
  const initialFormData = {
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const router = useRouter();
  const params = useParams();
  const lang = params.lang;

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

      if (response.ok) {
        const result = await response.json();
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phonenumber: "", message: "" });
        console.log("Form data:", formData, "Response:", result);
      } else {
        const error = await response.text();
        setStatus(`Error: ${error}`);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen  w-full bg-white">
      <div
        className="flex flex-col relative  w-full lg:w-[600px] h-auto lg:h-full bg-cover "
        style={{ backgroundImage: `url(${image.src})` }}
      >
        <div className="lg:absolute top-0 left-0 flex flex-col gap-6 lg:gap-8 w-full h-full bg-[#ffeb89] bg-opacity-80 px-4 lg:pl-28 lg:pr-12 py-10 lg:py-28 text-black">
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
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-row gap-4 text-[18px] lg:text-[20px] items-center ">
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
                <p>admin@sunbeamcenter.com</p>
                {/* <p>sales@surgecrops.com</p>
                <p>marketing@surgecrops.com</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-2/3 h-auto lg:h-full px-5 lg:px-[60px] lg:pr-28 py-10 lg:py-28 bg-[#fbf5d7] bg-opacity-30">
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
  );
}
