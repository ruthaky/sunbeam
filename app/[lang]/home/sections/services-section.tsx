import { Button } from "@/components/ui/button";
import ServiceCard from "../components/service-card";
import { IconAward } from "@tabler/icons-react";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ServicesSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 h-auto lg:h-auto w-full bg-white p-5 lg:px-28">
      <div className="flex flex-col gap-6 lg:w-2/5 h-full justify-start py-20">
        <div className="flex flex-col gap-2 text-[35px] lg:text-[60px] text-black font-semibold tracking-tight leading-none ">
          Our Services
          <div className="h-[5px] w-[150px] lg:w-[300px] bg-primary "></div>
        </div>
        <p className="text-[20px] tracking-tight">
          We offer tailored services to our partners around the globe. From
          sourcing the finest beans to fast deliveries.
        </p>
        <div>
          <Button>Request a Quote</Button>
        </div>
      </div>
      <div className="w-full lg:w-3/5 h-auto flex flex-col lg:flex-row gap-4 lg:gap-10 lg:py-20">
        <div className="flex flex-col gap-4 lg-flex-row w-full h-auto lg:h-1/2 lg:gap-10 ">
          <div className="w-full h-full mb-4 lg:mb-0 p-4 lg:p-10 flex flex-col gap-2 bg-primary justify-center">
            <IconAward width={50} height={50} />
            <p className="font-bold text-[20px]">Quality</p>
            <p>Unwavering attention to detail in every shipment.</p>
          </div>
          <div className="w-full h-full p-4 lg:p-10 flex flex-col gap-2 bg-muted justify-center">
            <IconAward width={50} height={50} />
            <p className="font-bold text-[20px]">Quality</p>
            <p>Unwavering attention to detail in every shipment.</p>
          </div>
        </div>
        <div className="flex flex-col lg-flex-row w-full h-auto lg:h-1/2 gap-4 lg:gap-10 ">
          <div className="w-full h-full mb-4 lg:mb-0 p-4 lg:p-10 flex flex-col gap-2 bg-muted justify-center">
            <FaHandHoldingUsd className="h-[50px] w-[50px]" />
            <p className="font-bold text-[20px]">Affordability</p>
            <p>Fair pricing to maximize your investment.</p>
          </div>
          <div className="w-full h-full p-4 lg:p-10 flex flex-col gap-2 bg-muted justify-center">
            <FaRegHandshake className="h-[50px] w-[50px]" />
            <p className="font-bold text-[20px]">Diverse Products</p>
            <p>An extensive range of products for global markets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
