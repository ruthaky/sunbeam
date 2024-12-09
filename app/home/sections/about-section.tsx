import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/asset/heroimage.png";

export default function AboutSection() {
  return (
    <div className="flex h-screen w-full px-12 items-center bg-white">
      <div className="flex items-center justify-center w-1/2 h-full p-20">
        <Image src={heroImage} alt="logo" className="" />
      </div>
      <div className="flex flex-col gap-6 w-1/2">
        <div className=" flex flex-col gap-2 text-[60px] font-semibold tracking-tight leading-none">
          Our Mission
          <div className="h-[5px] w-[300px] bg-primary"></div>
        </div>
        <p className="text-[25px] tracking-tight">
          Our mission is to deliver the highest-quality beans to the global
          market while building lasting relationships with our partners.
          <br />
          <br />
          Whether it's working with rice farmers in Africa, growing cotton in
          Australia, or developing innovative ingredients in Asia, we help our
          customers meet increasing
        </p>
        <div>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
}
