import Image from "next/image";
import heroImage from "@/public/asset/heroimage.png";
import coffee from "@/public/asset/coffee1.jpg";
import sesame from "@/public/asset/sesame.png";
import soybean from "@/public/asset/soybean2.jpg";
import kidneybeans from "@/public/asset/kidneybeans.jpg";
import castor from "@/public/asset/castor.jpg";
import Contact from "../../contact/sections";
import ContactSection from "../../home/sections/contact-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ProductSection({
  productpageTexts,
}: {
  productpageTexts: any;
}) {
  return (
    <div className="overflow-x-hidden">
      {" "}
      <div
        className="w-full flex relative text-white h-screen text-9xl py-100 bg-cover"
        style={{ backgroundImage: `url(${coffee.src})` }}
      >
        <div className="absolute flex flex-col px-4 lg:px-28 gap-5 bg-secondary bg-opacity-80 top-0 left-0 h-full w-full justify-center">
          <div
            className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[30px] lg:text-[60px] text-white font-semibold lg:font-normal tracking-tight leading-none `}
          >
            {productpageTexts.heading}
            <div className="h-[5px] w-[300px] lg:w-[900px] bg-primary"></div>
          </div>
          <div className="text-[20px] lg:w-[900px] text-[#eeeeeed6] leading-6">
            {productpageTexts.subheading}
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-12 px-4 lg:px-28 flex flex-col gap-10">
        <section
          id="coffee"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-10"
        >
          <div className="h-full w-2/6 ">
            <Image
              src={coffee}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-2 lg:gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-4 lg:p-8">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[24px] lg:text-[50px] font-semibold tracking-tight leading-none `}
            >
              {productpageTexts.product1title}
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[12px] lg:text-[20px] text-[#696969]">
              {productpageTexts.product1desc}
            </div>
            <div className="absolute bottom-8">
              <Link href="https://wa.me/971551819398?text=Hello%20I'm%20inquiring%20about%20the%20coffee%you%20offer">
                {" "}
                <Button>{productpageTexts.contactbutton}</Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="sesame"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-10"
        >
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-4 lg:p-8">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[24px] lg:text-[50px] font-semibold tracking-tight leading-none `}
            >
              {productpageTexts.product2title}
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[12px] lg:text-[20px] text-[#696969]">
              {productpageTexts.product2desc}
            </div>
            <div className="absolute bottom-8">
              <Link href="https://wa.me/971551819398?text=Hello%20I'm%20inquiring%20about%20the%20sesame%20seeds%you%20offer">
                {" "}
                <Button>{productpageTexts.contactbutton}</Button>
              </Link>
            </div>
          </div>
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={sesame}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section
          id="soybean"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-10"
        >
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={soybean}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-4 lg:p-8">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[24px] lg:text-[50px] font-semibold tracking-tight leading-none `}
            >
              {productpageTexts.product3title}
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[12px] lg:text-[20px] text-[#696969]">
              {productpageTexts.product3desc}
            </div>
            <div className="absolute bottom-8">
              <Link href="https://wa.me/971551819398?text=Hello%20I'm%20inquiring%20about%20soy%20beans%you%20offer">
                {" "}
                <Button>{productpageTexts.contactbutton}</Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="kidneybean"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-10"
        >
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-4 lg:p-8">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[24px] lg:text-[50px] font-semibold tracking-tight leading-none `}
            >
              {productpageTexts.product4title}
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[12px] lg:text-[20px] text-[#696969]">
              {productpageTexts.product4desc}
            </div>
            <div className="absolute bottom-8">
              <Link href="https://wa.me/971551819398?text=Hello%20I'm%20inquiring%20about%20the%20kidney%20beans%20you%20offer">
                {" "}
                <Button>{productpageTexts.contactbutton}</Button>
              </Link>
            </div>
          </div>
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={kidneybeans}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section
          id="castor"
          className="w-full h-[500px] flex flex-row gap-0 lg:gap-10"
        >
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={castor}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-4 lg:p-8">
            <div
              className={`${merriweather.variable} font-merriweather flex flex-col gap-2 text-[24px] lg:text-[50px] font-semibold tracking-tight leading-none `}
            >
              {productpageTexts.product5title}
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[12px] lg:text-[20px] text-[#696969]">
              {productpageTexts.product5desc}
            </div>
            <div className="absolute bottom-8">
              <Link href="https://wa.me/971551819398?text=Hello%20I'm%20inquiring%20about%20the%20castor%20seed%20you%20offer">
                {" "}
                <Button>{productpageTexts.contactbutton}</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* <ContactSection contactTexts={undefined} /> */}
    </div>
  );
}
