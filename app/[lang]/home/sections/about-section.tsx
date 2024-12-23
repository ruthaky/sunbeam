import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/asset/heroimage.png";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function AboutSection({ aboutTexts }: { aboutTexts: any }) {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full px-4 lg:px-28 items-center justify-center">
      <div className="hidden lg:flex items-center justify-start w-1/2 h-full ">
        <Image src={heroImage} alt="logo" className="" />
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className=" flex flex-col gap-2 text-[35px] lg:text-[60px] font-semibold tracking-tight leading-none">
          {aboutTexts.heading}
          <div className="h-[5px] w-[150px] lg:w-[300px] bg-primary"></div>
        </div>
        <p className="text-[20px] tracking-tight">
          {aboutTexts.subheading}
          <br />
          <br />
          {aboutTexts.subheading2}
        </p>
        <Link href="/about">
          {" "}
          <Button>{aboutTexts.button}</Button>
        </Link>
      </div>
    </div>
  );
}
