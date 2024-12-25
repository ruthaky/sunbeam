import Image from "next/image";
import heroImage from "@/public/asset/Group 23.png";
import coffee from "@/public/asset/coffeee.jpg";
import sesame from "@/public/asset/sesame.jpg";
import soybean from "@/public/asset/soybean.jpg";
import kidneybeans from "@/public/asset/kidneybeans.jpg";
import coffee1 from "@/public/asset/coffee1.jpg";
import coffee2 from "@/public/asset/coffee2.jpg";
import coffee3 from "@/public/asset/coffee3.jpg";
import coffee4 from "@/public/asset/coffee4.jpg";
import castor from "@/public/asset/castor.jpg";
import coffeestore from "@/public/asset/coffeestorage.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { getDictionary } from "../../dictionaries";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
export default function AboutSection({
  aboutpageTexts,
}: {
  aboutpageTexts: any;
}) {
  return (
    <div className="overflow-x-hidden">
      <div
        className="w-full flex relative text-white h-[700px] lg:h-screen text-9xl py-100 bg-cover"
        style={{ backgroundImage: `url(${coffee.src})` }}
      >
        <div className="absolute flex flex-col px-4 lg:px-28 gap-5 bg-secondary bg-opacity-80 top-0 left-0 h-full w-full justify-center">
          <div
            className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[30px] lg:text-[60px] text-white font-semibold lg:font-normal tracking-tight leading-none `}
          >
            {aboutpageTexts.introheading}
            <div className="h-[5px] w-[300px] lg:w-[900px] bg-primary"></div>
          </div>
          <div className="text-[20px] lg:w-[900px] text-[#eeeeeed6] leading-6">
            {aboutpageTexts.introsubheading}
          </div>
        </div>
      </div>
      <div className="w-full h-auto lg:h-screen flex flex-col gap-10 px-5 lg:px-28 py-10 justify-center">
        <div
          className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[35px] lg:text-[50px] font-semibold tracking-wide leading-none `}
        >
          {aboutpageTexts.storyheading}
          <div className="h-[5px] w-[200px] bg-primary"></div>
        </div>
        <div className="text-[#545454]">
          {" "}
          <p className="text-[20px] tracking-tight">
            {aboutpageTexts.storysubheading1}
            <br />
            <br />
            {aboutpageTexts.storysubheading2}
            <br />
            <br />
            {aboutpageTexts.storysubheading3}
          </p>
        </div>
      </div>
      <div className="flex h-auto lg:h-screen w-full px-5 lg:px-28 items-center bg-[#EBEBEB] py-10">
        <div className="hidden lg:flex items-center justify-center lg:w-1/2 h-full lg:p-20">
          <Image src={heroImage} alt="logo" className="" />
        </div>
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div
            className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[35px] lg:text-[50px] font-semibold tracking-wide leading-none `}
          >
            {aboutpageTexts.missionheading}
            <div className="h-[5px] w-[300px] bg-primary"></div>
          </div>
          <p className="text-[20px] tracking-tight">
            {aboutpageTexts.missionsubheading}
            <br />
            <br />
            {aboutpageTexts.missioncommitments}
            <div className="flex flex-col gap-3 py-3">
              <div className="flex flex-row gap-3">
                <FaCheckCircle />{" "}
                <p className="text-[15px]">{aboutpageTexts.commitment1}</p>{" "}
              </div>
              <div className="flex flex-row gap-3">
                {" "}
                <FaCheckCircle />
                <p className="text-[15px]">{aboutpageTexts.commitment2}</p>
              </div>{" "}
              <div className="flex flex-row gap-3">
                <FaCheckCircle />{" "}
                <p className="text-[15px]">{aboutpageTexts.commitment3}</p>
              </div>{" "}
              <div className="flex flex-row gap-3">
                <FaCheckCircle />
                <p className="text-[15px]">{aboutpageTexts.commitment4}</p>
              </div>
            </div>{" "}
            {aboutpageTexts.missionstatement}
          </p>
        </div>
      </div>

      <div className="w-full h-auto ">
        <div
          className={` ${merriweather.variable} font-merriweather  flex flex-col gap-2 text-[35px] lg:text-[50px] font-semibold tracking-tight leading-none px-4 lg:px-10 pt-20`}
        >
          {aboutpageTexts.gallerytitle}
          <div className="h-[5px] w-[160px] bg-primary"></div>
        </div>
        <div className="h-screen w-full flex px-4 lg:px-10 pb-4 pt-10 gap-4 lg:gap-10">
          <div className="w-1/2 h-full ">
            {" "}
            <Image
              src={coffeestore}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full  flex flex-col gap-4 lg:gap-0">
            <div className="w-full h-1/2 ">
              {" "}
              <Image
                src={coffee1}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-1/2 ">
              <Image
                src={coffee2}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-full flex  lg:pt-5 pb-4 lg:pb-10 px-4 lg:px-10 gap-4 lg:gap-10">
          <div className="w-1/2 h-full flex flex-col gap-4 lg:gap-0">
            <div className="w-full h-1/2">
              {" "}
              <Image
                src={coffee4}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-1/2">
              {" "}
              <Image
                src={coffee3}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-1/2 h-full ">
            {" "}
            <Image
              src={coffee4}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-col lg:flex-row  lg:h-[400px] w-full gap-4 lg:gap-10 px-4 lg:px-10 flex ">
          <div className="h-[250px] lg:h-[400px] lg:w-1/3 ">
            {" "}
            <Image
              src={coffee4}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[250px] lg:h-[400px] lg:w-1/3 ">
            {" "}
            <Image
              src={coffee3}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[250px] lg:h-[400px] lg:w-1/3 ">
            {" "}
            <Image
              src={coffee1}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[250px] lg:h-[400px] lg:w-1/3 ">
            {" "}
            <Image
              src={castor}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
