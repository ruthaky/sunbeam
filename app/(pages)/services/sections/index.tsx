"use client";
import Image from "next/image";
import oneonone from "@/public/asset/oneonone.jpg";
import speechtherapy from "@/public/asset/speechtherapy.jpg";
import occupationaltherapy from "@/public/asset/occupationaltherapy.png";
import familytraining from "@/public/asset/familytraining.png";
import grouptherapy from "@/public/asset/speechtherapy.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroImage from "@/public/asset/shapesnew.webp";
import { Fredoka } from "next/font/google";
import { motion } from "framer-motion";
import Requestsection from "../../home/sections/requestsection";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ProductSection() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative flex flex-col lg:flex-row h-screen w-full pt-[30px] pb-[100px] lg:pt-[90px] lg:py-0 px-6 lg:px-28 items-center bg-white justify-center lg:justify-between">
        {/* Hero Image for Mobile */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-0 absolute top-0 left-0 opacity-5 flex lg:hidden items-center justify-center w-full lg:w-1/3 h-full"
        >
          <Image
            src={heroImage}
            alt="logo"
            className="w-[350px] h-[600px] object-fill opacity-15"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-0 flex flex-col gap-5 lg:gap-6 w-full lg:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${merriweather.variable} font-merriweather text-[35px] lg:text-[60px] font-semibold leading-none text-black lg:text-[#FF9358]`}
          >
            Tailored ABA Therapy for Every Child’s Unique Journey
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[18px] lg:text-[20px] text-[#545454]"
          >
            From early intervention to social skills training, we provide
            personalized support tailored to each individual’s needs.
          </motion.p>
        </motion.div>

        {/* Hero Image for Larger Screens */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex items-center justify-center w-full lg:w-1/3 h-full"
        >
          <Image
            src={heroImage}
            alt="logo"
            className="w-[350px] h-[600px] object-fill"
          />
        </motion.div>
      </div>

      <div className="w-full h-auto p-12 px-4 lg:px-28 flex flex-col gap-10">
        <section
          id="one-on-one"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-10"
        >
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={oneonone}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-6 h-full w-3/4 bg-[#F6ECE3] text-black  px-4 pt-8 lg:pt-24 lg:p-24">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] text-[#312f30] font-semibold leading-none`}
            >
              ABA one-on-one direct therapy
            </div>
            <div className="text-[16px] lg:text-[20px] text-[#545454]">
              We have trained and compassionate ABA therapists to enhance
              communication, social skills, adaptive behaviors, and overall
              independence, while reducing undesirable behaviors or limiting
              repetitive patterns. This therapeutic approach is widely
              recognized for its success in supporting individuals with autism
              spectrum disorder (ASD). 
            </div>
          </div>
        </section>
        <section
          id="family"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-14"
        >
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EFF8EF] text-black  px-4 pt-8 lg:pt-24 lg:p-24">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] text-[#312f30] font-semibold leading-none`}
            >
              Family Caregiver/Training
            </div>
            <div className="text-[16px] lg:text-[20px] text-[#545454]">
              We offer parent training: caregivers of children receiving Applied
              Behavior Analysis (ABA) therapy are educated on how to implement
              behavioral strategies at home, effectively supporting their
              child's development by reinforcing skills learned during therapy
              sessions.
            </div>
          </div>
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={occupationaltherapy}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section
          id="occupational"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-14"
        >
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={grouptherapy}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#e2fbff] text-black  px-4 pt-8 lg:pt-24 lg:p-24">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] text-[#312f30] font-semibold leading-none`}
            >
              Occupational Therapy
            </div>
            <div className="text-[16px] lg:text-[20px] text-[#545454]">
              The primary goal of Occupational Therapy for ASD is to promote the
              development of essential skills and functional independence across
              various domains. OT practitioners work collaboratively with
              individuals with ASD and their families to identify specific areas
              of concern and design personalized treatment plans tailored to
              meet their unique needs and abilities.
            </div>
          </div>
        </section>
        <section
          id="group"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-14"
        >
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#fffadb] text-black  px-4 pt-8 lg:pt-24 lg:p-24">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] text-[#312f30] font-semibold leading-none`}
            >
              Group Session
            </div>
            <div className="text-[16px] lg:text-[20px] text-[#545454]">
              We offer structured therapy sessions where multiple children
              participate together, guided by a therapist, to practice and
              develop social skills, communication abilities, and cooperative
              play with their peers, offering a valuable opportunity for
              interaction and learning from one another; essentially, a setting
              where children can work on skills like turn-taking, sharing, and
              conversation in a group environment. 
            </div>
          </div>
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={familytraining}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section
          id="speech"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-14"
        >
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={speechtherapy}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black px-4 pt-8 lg:pt-24 lg:p-24">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] text-[#312f30] font-semibold leading-none`}
            >
              Speech Therapy
            </div>
            <div className="text-[16px] lg:text-[20px] text-[#545454]">
              Coming soon! Please send inquiries to{" "}
              <a
                href="mailto:admin@sunbeamcenter.com"
                className="text-blue-600 hover:underline"
              >
                admin@sunbeamcenter.com
              </a>{" "}
              for more information on speech therapy.
            </div>
          </div>
        </section>
      </div>
      <Requestsection />
    </div>
  );
}
