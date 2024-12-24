import { Button } from "@/components/ui/button";
import ServiceCard from "../components/service-card";
import { IconAward } from "@tabler/icons-react";
import Image from "next/image";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { Merriweather } from "next/font/google";
import diversity from "@/public/asset/diversity.svg";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ServicesSection({
  serviceTexts,
}: {
  serviceTexts: any;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 h-auto lg:h-auto w-full bg-white p-5 py-[8%] lg:py-0 lg:px-28">
      <div className="flex flex-col gap-6 lg:w-2/5 h-full justify-start py-10 lg:py-20">
        <div className="flex flex-col gap-2 text-[35px] lg:text-[60px] text-black font-semibold tracking-tight leading-none ">
          {serviceTexts.heading}
          <div className="h-[5px] w-[150px] lg:w-[300px] bg-primary "></div>
        </div>
        <p className="text-[20px] tracking-tight">{serviceTexts.subheading}</p>
        <div>
          <Button>{serviceTexts.button}</Button>
        </div>
      </div>
      <div className="w-full lg:w-3/5 h-auto flex flex-col lg:flex-row gap-4 lg:gap-10 lg:py-20">
        <div className="flex flex-col gap-4 lg-flex-row w-full h-auto lg:h-1/2 lg:gap-10 ">
          <div className="w-full h-full mb-4 lg:mb-0 p-4 lg:p-10 flex flex-col gap-2 bg-primary justify-center">
            <IconAward width={50} height={50} />
            <p className="font-bold text-[20px]">{serviceTexts.qualitytitle}</p>
            <p>{serviceTexts.qualitydesc}</p>
          </div>
          <div className="w-full h-full p-4 lg:p-10 flex flex-col gap-2 bg-muted justify-center">
            <FaRegHandshake className="h-[50px] w-[50px]" />
            <p className="font-bold text-[20px]">{serviceTexts.trusttitle}</p>
            <p>{serviceTexts.trustdesc}</p>
          </div>
        </div>
        <div className="flex flex-col lg-flex-row w-full h-auto lg:h-1/2 gap-4 lg:gap-10 ">
          <div className="w-full h-full mb-4 lg:mb-0 p-4 lg:p-10 flex flex-col gap-2 bg-muted justify-center">
            <FaHandHoldingUsd className="h-[50px] w-[50px]" />
            <p className="font-bold text-[20px]">{serviceTexts.affordtitle}</p>
            <p>{serviceTexts.afforddesc}</p>
          </div>
          <div className="w-full h-full mb-4 lg:mb-0 p-4 lg:p-10 flex flex-col gap-2 bg-muted justify-center">
            <Image
              src={diversity.src}
              alt="diversity"
              width={50}
              height={50}
              className="h-[50px] w-[50px]"
            />
            <p className="font-bold text-[20px]">{serviceTexts.diversetitle}</p>
            <p>{serviceTexts.diversedesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
