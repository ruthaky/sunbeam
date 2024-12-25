"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/asset/Group 20.svg";
import { Merriweather } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
export default function HeroSection({ heroTexts }: { heroTexts: any }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen w-full pt-[150px] lg:py-0 px-4 lg:px-28 items-center justify-center">
      <div className="flex flex-col gap-5 lg:gap-6 w-full lg:w-1/2">
        <div
          className={`${merriweather.variable} font-merriweather text-[35px] lg:text-[60px] font-semibold tracking-tight  leading-[35px] lg:leading-[55px]`}
        >
          {heroTexts.hero}
        </div>
        <p className="text-[20px] tracking-tight ">{heroTexts.subheading}</p>
        <Link
          href={`/${pathname.split("/")[1]}/contact`}
          onClick={() => handleLinkClick("/contact")}
        >
          <Button>{heroTexts.button}</Button>
        </Link>
      </div>
      <div className="hidden lg:flex items-center justify-end w-full lg:w-1/2 h-full ">
        <Image src={heroImage} alt="logo" className="" />
      </div>
    </div>
  );
}
