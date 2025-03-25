"use client";
import { useState } from "react";
import { Collapse } from "@mantine/core";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Fredoka } from "next/font/google";

const merriweather = Fredoka({
  weight: ["400", "400"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of services including ABA therapy, educational programs, and specialized support for children with developmental challenges.",
  },
  {
    question: "How can I request ABA services?",
    answer:
      "You can request ABA services through our online ABA Service Request form or by contacting our support team.",
  },
  {
    question: "What is the process for enrolling in your programs?",
    answer:
      "The enrollment process includes an initial assessment, consultation with our team, and a personalized program plan for your child.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of services including ABA therapy, educational programs, and specialized support for children with developmental challenges.",
  },
  {
    question: "How can I request ABA services?",
    answer:
      "You can request ABA services through our online ABA Service Request form or by contacting our support team.",
  },
  {
    question: "What is the process for enrolling in your programs?",
    answer:
      "The enrollment process includes an initial assessment, consultation with our team, and a personalized program plan for your child.",
  },
];

const FAQSection = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenedIndex(openedIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto  px-5 lg:px-[200px] py-20 flex flex-col gap-10">
      <div
        className={` ${merriweather.variable} font-merriweather text-[#312f30] flex flex-col lg:gap-2 text-[35px] lg:text-[42px]  font-semibold leading-none `}
      >
        Frequently asked questions
        {/* <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
        <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" /> */}
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#f3f9f3] border border-gray-200 p-4 cursor-pointer rounded-[10px]"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center text-lg font-medium">
              <span>{faq.question}</span>
              <div
                className={`w-8 h-8 flex items-center justify-center transition-all rounded-full duration-300 ${openedIndex === index ? "bg-[#CECFCD]" : "bg-[#C3F498]"}`}
              >
                {openedIndex === index ? (
                  <ChevronUp className="text-white" size={20} />
                ) : (
                  <ChevronDown className="text-white" size={20} />
                )}
              </div>
            </div>
            <Collapse in={openedIndex === index}>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
