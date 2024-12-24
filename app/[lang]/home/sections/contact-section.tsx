"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";

export default function ContactSection({
  contactTexts,
}: {
  contactTexts: any;
}) {
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
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen  w-full bg-secondary">
      <div className="flex flex-col gap-6 w-full lg:w-[600px] h-full bg-primary px-4 lg:pl-28 lg:pr-12 py-10 lg:py-28">
        <div className="flex flex-col gap-2 text-[30px] lg:text-[50px] font-semibold lg:font-normal tracking-tight leading-none ">
          {contactTexts.contactdetail}
        </div>
        {/* <div className="text-[25px]  tracking-tight leading-none">
          Whether it's working with rice farmers in
        </div> */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-4 text-[20px] items-center">
            <div className="w-[25px] lg:w-[35px] flex items-start justify-start">
              <FiMapPin className="flex w-full h-full" />
            </div>
            <p className="text-nowrap">{contactTexts.location}</p>
          </div>
          <div className="flex flex-row gap-4 text-[20px] items-center">
            <div className="w-[25px] lg:w-[35px] flex items-start justify-start">
              <BsTelephone className="flex w-full h-full" />
            </div>

            <p>+1 (234) 56789, +1 987 654 3210</p>
          </div>
          <div className="flex flex-row gap-4 text-[20px] items-center">
            <div className="w-[25px] lg:w-[35px] flex items-start justify-start">
              {" "}
              <IoMailOpenOutline className="flex w-full h-full" />
            </div>

            <p>support@surge.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-2/3 h-full px-5 lg:px-12 lg:pr-28 py-10 lg:py-28">
        <div className="flex flex-col gap-2 text-[30px] lg:text-[50px] text-white font-semibold lg:font-normal tracking-tight leading-none ">
          {contactTexts.getintouch}
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
              {contactTexts.name}
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
              {contactTexts.email}
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
              {contactTexts.phonenumber}
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
              {contactTexts.message}
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
              {contactTexts.button}
            </Button>
          </div>
        </form>
        {status && <p className="text-white mt-4">{status}</p>}
      </div>
    </div>
  );
}
