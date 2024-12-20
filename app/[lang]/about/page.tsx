import Image from "next/image";
import heroImage from "@/public/asset/heroimage.png";
import coffee from "@/public/asset/coffee.jpg";
import sesame from "@/public/asset/sesame.jpg";
import soybean from "@/public/asset/soybean.jpg";
import kidneybeans from "@/public/asset/kidneybeans.jpg";
import castor from "@/public/asset/castor.jpg";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full flex relative text-white h-screen text-9xl py-100 bg-cover bg-[url('/asset/coffee.jpg')]">
        <div className="absolute flex flex-col px-4 lg:px-28 gap-5 bg-secondary bg-opacity-80 top-0 left-0 h-full w-full justify-center">
          <div className="text-[35px] lg:text-[50px] font-bold text-primary text-left lg:w-[700px]">
            Connecting Africa's finest crops to the world
          </div>
          <div className="text-[20px] lg:w-[700px] text-[#eeeeeed6]">
            Whether it's working with rice farmers in Africa, growing cotton in
            Australia, or developing innovative ingredients in{" "}
          </div>
        </div>
      </div>
      <div className="w-full h-auto lg:h-screen flex flex-col gap-10 px-5 lg:px-28 py-10 justify-center">
        <div className=" flex flex-col gap-2 text-[35px] lg:text-[60px] font-semibold tracking-tight leading-none">
          Our Story
          <div className="h-[5px] w-[200px] bg-primary"></div>
        </div>
        <div className="text-[#545454]">
          {" "}
          <p className="text-[20px] tracking-tight">
            Whether it's working with rice farmers in Africa, growing cotton in
            Australia, or developing innovative ingredients in Whether it's
            working with rice farmers in Africa, growing cotton in Australia,
            <br />
            <br />
            developing innovative ingredients in Whether it's working with rice
            farmers in Africa, growing cotton in Australia, or developing
            innovative ingredients in developing innovative ingredients in
            Whether it's working with rice farmers in Africa, growing cotton in
            Australia, or developing innovative ingredients in
            <br />
            <br />
            developing innovative ingredients in Whether it's working with rice
            farmers in Africa, growing cotton in Australia, or developing
            innovative ingredients in developing innovative ingredients in
            Whether it's working with rice farmers in Africa, growing cotton in
            Australia, or developing innovative ingredients in
          </p>
        </div>
      </div>
      <div className="flex h-auto lg:h-screen w-full px-5 lg:px-28 items-center bg-[#EBEBEB] py-10">
        <div className="hidden lg:flex items-center justify-center lg:w-1/2 h-full lg:p-20">
          <Image src={heroImage} alt="logo" className="" />
        </div>
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className=" flex flex-col gap-2 text-[60px] font-semibold tracking-tight leading-none">
            Our Mission
            <div className="h-[5px] w-[300px] bg-primary"></div>
          </div>
          <p className="text-[20px] tracking-tight">
            Our mission is to deliver the highest-quality beans to the global
            market while building lasting relationships with our partners.
            <br />
            <br />
            Whether it's working with rice farmers in Africa, growing cotton in
            Australia, or developing innovative ingredients in Asia, we help our
            customers meet increasing
          </p>
        </div>
      </div>

      <div className="w-full h-auto ">
        <div className=" flex flex-col gap-2 text-[60px] font-semibold tracking-tight leading-none px-10 pt-20">
          Gallery
          <div className="h-[5px] w-[160px] bg-primary"></div>
        </div>
        <div className="h-screen w-full flex px-10 pb-16 pt-10 gap-10">
          <div className="w-1/2 h-full bg-pink-500">
            {" "}
            <Image
              src={coffee}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full  flex flex-col gap-10">
            <div className="w-full h-1/2 bg-red-600">
              {" "}
              <Image
                src={castor}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-1/2 bg-violet-600">
              <Image
                src={coffee}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-full flex  pt-5 pb-10 px-10 gap-10">
          <div className="w-1/2 h-full flex flex-col gap-10">
            <div className="w-full h-1/2 bg-red-600"></div>
            <div className="w-full h-1/2 bg-violet-600"></div>
          </div>
          <div className="w-1/2 h-full bg-pink-500"></div>
        </div>
        <div className="flex-col lg:flex-row  lg:h-[400px] w-full gap-4 lg:gap-10 px-10 flex ">
          <div className="h-[250px] lg:h-[400px] lg:w-1/3 bg-orange-400"></div>
          <div className="h-[250px] lg:h-[400px] lg:w-1/3 bg-orange-400"></div>
          <div className="h-[250px] lg:h-[400px] lg:w-1/3 bg-orange-400"></div>
          <div className="h-[250px] lg:h-[400px] lg:w-1/3 bg-orange-400"></div>
        </div>
      </div>
    </div>
  );
}
