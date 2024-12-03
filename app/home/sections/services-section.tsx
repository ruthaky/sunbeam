import { Button } from "@/components/ui/button";
import ServiceCard from "../components/service-card";
import Image from "next/image";
import logo from "@/public/asset/surgelogo.png";

export default function ServicesSection() {
  return (
    <div className="flex gap-20 h-screen w-full bg-white px-12">
      {/* This is the ServicesSection
      <ServiceCard /> */}
      <div className="flex flex-col gap-6 w-2/5 h-full justify-start py-20">
        <div className="text-[60px] font-semibold tracking-tight  leading-none">
          Our Services
        </div>
        <p className="text-[25px] tracking-tight">
          We offer tailored services to our partners around the globe. From
          sourcing the finest beans to fast deliveries.
        </p>
        <div>
          <Button>Request a Quote</Button>
        </div>
      </div>
      <div className="w-3/5 h-full flex flex-col gap-10 py-20">
        <div className="flex flex-row w-full h-1/2 gap-10 ">
          <div className="w-1/2 h-full p-10 flex flex-col gap-2 bg-primary">
            <Image src={logo} alt="logo" width={150} className="" />
            <p>Quality</p>
            <p>Unwavering attention to detail in every shipment.</p>
          </div>
          <div className="w-1/2 h-full p-10 flex flex-col gap-2 bg-muted">
            <Image src={logo} alt="logo" width={150} className="" />
            <p>Quality</p>
            <p>Unwavering attention to detail in every shipment.</p>
          </div>
        </div>
        <div className="flex flex-row w-full h-1/2 gap-10 ">
          <div className="w-1/2 h-full p-10 flex flex-col gap-2 bg-muted">
            <Image src={logo} alt="logo" width={150} className="" />
            <p>Quality</p>
            <p>Unwavering attention to detail in every shipment.</p>
          </div>
          <div className="w-1/2 h-full p-10 flex flex-col gap-2 bg-muted">
            <Image src={logo} alt="logo" width={150} className="" />
            <p>Quality</p>
            <p>Unwavering attention to detail in every shipment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
