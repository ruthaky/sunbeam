"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactSection() {
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

      const result = await ();
      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phonenumber: "", message: "" });
        console.log();
        console.log("formye", formData);
      } else {
        setStatus(`Error: ${result.error || "Failed to submit the form."}`);
      }
    } catch (error) {
      console.error(error);
      console.log("formye", formData);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex-col lg-flex-row h-auto lg:h-screen w-full bg-secondary">
      <div className="flex flex-col gap-6 w-full lg:w-1/3 h-full bg-primary px-5 lg:pl-28 lg:pr-12 py-10 lg:py-20">
        <div className="flex flex-col gap-2 text-[30px] lg:text-[50px] text-white font-normal tracking-tight leading-none ">
          Contact Details
        </div>
        <div className="text-[25px] text-white tracking-tight leading-none">
          Whether it's working with rice farmers in
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-2/3 h-full px-5 lg:px-12 lg:pr-28 py-10 lg:py-20">
        <div className="flex flex-col gap-2 text-[30px] lg:text-[50px] text-white font-normal tracking-tight leading-none ">
          Get in touch
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="text-[20px] font-light block text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border-b border-white bg-transparent text-white py-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-[20px] font-light block text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-b border-white bg-transparent text-white py-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phonenumber"
              className="text-[20px] font-light block text-white mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              value={formData.phonenumber}
              onChange={handleInputChange}
              className="w-full border-b border-white bg-transparent text-white py-2 h-[30px] lg:h-[40px] focus:outline-none focus:border-b-2 focus:border-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-[20px] font-light block text-white mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-b border-white bg-transparent text-white py-2 lg:h-[100px] focus:outline-none focus:border-b-2 focus:border-white"
              required
            />
          </div>
          <div className="w-full flex h-auto justify-end">
            <Button type="submit">Send</Button>
          </div>
        </form>
        {status && <p className="text-white mt-4">{status}</p>}
      </div>
    </div>
  );
}
