import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/asset/heroimage.png";

export default function HeroSection() {
  return (
    <div className="flex h-screen w-full px-12 items-center">
      <div className="flex flex-col gap-6 w-1/2">
        <div className="text-[60px] font-semibold tracking-tight  leading-none">
          Global Trade Powered by Africa's Finest Beans
        </div>
        <p className="text-[25px] tracking-tight">
          We bridges the gap between Africa's farms and global markets,
          delivering top-quality beans that fuel industries worldwide.
        </p>
        <div>
          <Button>Connect with our Team</Button>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 h-full p-20">
        <Image src={heroImage} alt="logo" className="" />
      </div>
    </div>
  );
}
