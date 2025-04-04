"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/asset/hero-kid 1.webp";
import { Fredoka } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import heroIcon from "@/public/asset/2.svg";
import heroIcon2 from "@/public/asset/heroicon2.svg";

const merriweather = Fredoka({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
export default function HeroSection() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  const { scrollY } = useScroll(); // Detect scroll position
  const rotate = useTransform(scrollY, [0, 1300], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, 360]);
  return (
    <div className="relative flex flex-col lg:flex-row h-screen lg:h-screen w-full  lg:py-0 px-6 lg:px-28 items-center bg-[#FF9358] justify-center">
      <motion.div
        style={{ rotate }}
        className="absolute -top-[50px] -right-[100px] lg:top-[-300px] lg:right-[-300px]  w-[300px] h-[300px] lg:w-[800px] lg:h-[800px] z-10"
      >
        <Image
          src={heroIcon}
          alt="Gallery Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ rotate }}
        className="absolute bottom-[-80px] left-[-100px] w-[250px] h-[250px] -z-1"
      >
        <Image
          src={heroIcon2}
          alt="Gallery Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 lg:gap-6 w-full lg:w-1/2"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${merriweather.variable} font-merriweather font-semibold text-[60px] lg:text-[75px] tracking-tight leading-none text-white `}
        >
          Helping Every Child Shine Brighter
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[18px] lg:text-[20px]"
        >
          At SunBeam ABA Therapy, we help children grow, learn, and thrive with
          compassionate, personalized care. Together, we light the path to a
          brighter future, one step, one smile at a time.
        </motion.p>
        

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={`/${pathname.split("/")[1]}/contact`}
            onClick={() => handleLinkClick("/contact")}
          >
            <Button>hhh</Button>
          </Link>
        </motion.div> */}
      </motion.div>
    
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex items-end justify-end w-full lg:w-1/2 h-screen z-9"
      >
        <Image src={heroImage} alt="logo" className="h-[90%] w-4/5 " />
      </motion.div>
    </div>
  );
}
