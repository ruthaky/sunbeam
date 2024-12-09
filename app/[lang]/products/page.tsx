import Image from "next/image";
import heroImage from "@/public/asset/heroimage.png";
import coffee from "@/public/asset/coffee.jpg";
import sesame from "@/public/asset/sesame.jpg";
import soybean from "@/public/asset/soybean.jpg";
import kidneybeans from "@/public/asset/kidneybeans.jpg";
import castor from "@/public/asset/castor.jpg";
import Contact from "../contact/page";
import ContactSection from "../home/sections/contact-section";
import { Button } from "@/components/ui/button";

export default function Products() {
  return (
    <div>
      {" "}
      <div className="w-full flex relative text-white h-screen text-9xl py-100 bg-cover bg-[url('/asset/coffee.jpg')]">
        <div className="absolute flex flex-col px-12 gap-5 bg-secondary bg-opacity-80 top-0 left-0 h-full w-full justify-center">
          <div className="text-[50px] font-bold text-primary text-left w-[700px]">
            Connecting Africa's finest crops to the world
          </div>
          <div className="text-[30px] w-[700px] text-[#eeeeeed6]">
            Whether it's working with rice farmers in Africa, growing cotton in
            Australia, or developing innovative ingredients in{" "}
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-12 flex flex-col gap-10">
        <div className="w-full h-[400px] flex flex-row gap-10">
          <div className="h-full w-2/6 ">
            <Image
              src={coffee}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-8">
            <div className="flex flex-col gap-2 text-[50px] font-semibold tracking-tight leading-none ">
              Coffee
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[25px] text-[#696969]">
              Whether it's working with rice farmers in Africa, growing cotton
              in Australia, or developing innovative ingredients in Asia, we
              help our customers meet increasing. Whether it's working with rice
              farmers in Africa,
            </div>
            <div className="absolute bottom-8">
              <Button>Contact Now</Button>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] flex flex-row gap-10">
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-8">
            <div className="flex flex-col gap-2 text-[50px] font-semibold tracking-tight leading-none ">
              Sesame Seeds
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[25px] text-[#696969]">
              Whether it's working with rice farmers in Africa, growing cotton
              in Australia, or developing innovative ingredients in Asia, we
              help our customers meet increasing. Whether it's working with rice
              farmers in Africa,
            </div>
            <div className="absolute bottom-8">
              <Button>Contact Now</Button>
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
        </div>
        <div className="w-full h-[400px] flex flex-row gap-10">
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={soybean}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-8">
            <div className="flex flex-col gap-2 text-[50px] font-semibold tracking-tight leading-none ">
              Soybeans
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[25px] text-[#696969]">
              Whether it's working with rice farmers in Africa, growing cotton
              in Australia, or developing innovative ingredients in Asia, we
              help our customers meet increasing. Whether it's working with rice
              farmers in Africa,
            </div>
            <div className="absolute bottom-8">
              <Button>Contact Now</Button>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] flex flex-row gap-10">
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-8">
            <div className="flex flex-col gap-2 text-[50px] font-semibold tracking-tight leading-none ">
              Kidney beans
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[25px] text-[#696969]">
              Whether it's working with rice farmers in Africa, growing cotton
              in Australia, or developing innovative ingredients in Asia, we
              help our customers meet increasing. Whether it's working with rice
              farmers in Africa,
            </div>
            <div className="absolute bottom-8">
              <Button>Contact Now</Button>
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
        </div>
        <div className="w-full h-[400px] flex flex-row gap-10">
          <div className="h-full w-2/6 ">
            {" "}
            <Image
              src={castor}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col relative gap-4 h-full w-3/4 bg-[#EBEBEB] text-black p-8">
            <div className="flex flex-col gap-2 text-[50px] font-semibold tracking-tight leading-none ">
              Castor
              {/* <div className="h-[4px] w-[220px] bg-primary "></div> */}
            </div>
            <div className="text-[25px] text-[#696969]">
              Whether it's working with rice farmers in Africa, growing cotton
              in Australia, or developing innovative ingredients in Asia, we
              help our customers meet increasing. Whether it's working with rice
              farmers in Africa,
            </div>
            <div className="absolute bottom-8">
              <Button>Contact Now</Button>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
