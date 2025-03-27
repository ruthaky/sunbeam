"use client";
import Image from "next/image";
import heroImage from "@/public/asset/embrace.svg";
import vision from "@/public/asset/vision.svg";
import mission from "@/public/asset/mission.svg";
import values from "@/public/asset/values.svg";
import team1 from "@/public/asset/portraitman.jpg";
import team2 from "@/public/asset/portraitwoman.jpg";
import { useRouter, usePathname } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { Fredoka } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Carousel from "./carousel";
import MobileVillas from "./carousel";
import { Button } from "@/components/ui/button";
import heroIcon from "@/public/asset/yellowsun.svg";
import heroIcon2 from "@/public/asset/heroicon22.svg";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
export default function AboutSection() {
  const { scrollY } = useScroll(); // Detect scroll position
  const rotate = useTransform(scrollY, [0, 1300], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, 360]);
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  return (
    <div className="overflow-x-hidden">
      <div className="relative justify-center">
        <div className=" flex flex-col lg:flex-row h-auto lg:h-screen w-full py-[100px] px-6 lg:p-4 lg:px-28 borbder border-b-[10px] blg:order-b-[20px] border-b-orange-400  bg-[#fff] justify-center">
          {/* <motion.div
            style={{ rotate }}
            className="absolute top-[-300px] right-[-300px] w-[800px] h-[800px] -z-1 shadow-[10px]"
          >
            <Image
              src={heroIcon}
              alt="Gallery Image"
              className="w-full h-full object-cover opacity-30 "
            />
          </motion.div> */}
          {/* <motion.div
            style={{ rotate }}
            className="absolute bottom-[-80px] left-[-100px] w-[250px] h-[250px] -z-1"
          >
            <Image
              src={heroIcon2}
              alt="Gallery Image"
              className="w-full h-full object-cover"
            />
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:gap-6 w-full justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${merriweather.variable} flex lg:absolute lg:top-[30%] font-merriweather text-[35px] lg:text-[60px] font-semibold leading-none text-center ]`}
            >
              Compassionate Care, Life-Changing Growth
            </motion.div>
            <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex lg:hidden items-center justify-center w-full z-10"
        >
          <Image
            src={heroImage}
            alt="logo"
            className=" w-full rounded-[20px]"
          />
        </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:absolute lg:bottom-[-15%] hidden lg:flex items-center px-28 justify-center w-full z-10"
        >
          <Image
            src={heroImage}
            alt="logo"
            className="h-[480px] rounded-[20px]"
          />
        </motion.div>
      </div>
      <div className="w-full h-auto lg:h-screen flex flex-col gap-10 px-5 lg:px-28 pb-10 pt-[18%] justify-center">
        <div
          className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] text-[#312f30] font-semibold leading-none `}
        >
          Our Story
          {/* <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
          <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" /> */}
        </div>
        <div className="text-[#545454]">
          <div>
            <p className="text-[20px] tracking-tight">
              At SunBeam ABA Therapy, our journey began with a simple yet
              powerful belief: every child deserves the opportunity to shine. We
              saw a need for compassionate, individualized care for children
              with autism, and we set out to create a place where they could
              learn, grow, and thrive.
              <br />
              <br />
              SunBeam was founded with the mission of providing high-quality
              Applied Behavior Analysis (ABA) therapy that empowers children and
              supports families. We understand that no two children are the
              same, and our approach reflects that—we tailor our programs to fit
              each child’s unique strengths, challenges, and goals.
              <br />
              <br />
              More than just a therapy center, SunBeam is a community. We
              believe in working hand-in-hand with parents, caregivers, and
              educators to build a strong foundation for lifelong success. Our
              dedicated team of professionals is passionate about making
              meaningful progress, celebrating every milestone, and ensuring
              that every child in our care feels valued and capable.
              <br />
              <br />
              At SunBeam, we see the potential in every child. Our goal is to
              nurture that potential, providing the support and guidance they
              need to shine their brightest.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex h-auto lg:h-screen w-full px-5 lg:px-28 items-center bg-[#EBEBEB] py-10">
        <div className="hidden lg:flex items-center justify-center lg:w-1/2 h-full lg:p-20">
          <Image src={heroImage} alt="logo" className="" />
        </div>
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div
            className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[35px] lg:text-[50px] font-semibold tracking-wide leading-none `}
          >
            www
            <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
            <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" />
          </div>
          <p className="text-[20px] tracking-tight">
            errrr
            <br />
            <br />
            rrrr
            <div className="flex flex-col gap-3 py-3">
              <div className="flex flex-row gap-3">
                <FaCheckCircle /> <p className="text-[15px]">rrr</p>{" "}
              </div>
              <div className="flex flex-row gap-3">
                {" "}
                <FaCheckCircle />
                <p className="text-[15px]">rrr</p>
              </div>{" "}
              <div className="flex flex-row gap-3">
                <FaCheckCircle /> <p className="text-[15px]">rrr</p>
              </div>{" "}
              <div className="flex flex-row gap-3">
                <FaCheckCircle />
                <p className="text-[15px]">r</p>
              </div>
            </div>{" "}
          </p>
        </div>
      </div> */}

      <div className="w-full px-5 lg:px-28 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission Card */}
          <div className="relative bg-[#D4F9FF] shadow-lg  h-[300px] pt-[70px] p-6 rounded-[15px]">
            <Image
              src={vision}
              alt="Gallery Image"
              className="absolute -bottom-10 right-0 w-[150px] h-[150px] object-fit z-0"
            />
            <h3
              className={`${merriweather.variable} font-merriweather font-bold text-center mb-5 text-[30px] lg:text-[42px]  text-[#619BA4] leading-none`}
            >
              Vision
            </h3>
            <p className="text-gray-600 text-center">
              Our mission is to provide exceptional services that foster growth
              and innovation for individuals and businesses alike.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative bg-[#FFE76B] shadow-lg h-[300px] pt-[70px]  p-6 rounded-[15px]">
            <Image
              src={mission}
              alt="Gallery Image"
              className="absolute -bottom-10 right-0 w-[150px] h-[150px] object-fit z-0"
            />

            <h3
              className={`${merriweather.variable} font-merriweather font-bold text-center mb-5 text-[30px] lg:text-[42px]  text-[#A78C00] leading-none`}
            >
              Mission
            </h3>
            <p className="text-gray-600 text-center">
              We envision a future where creativity and technology merge to
              create impactful solutions for the world.
            </p>
          </div>

          {/* Values Card */}
          <div className="relative bg-[#D4FFAE] shadow-lg h-[300px] pt-[70px] p-6 rounded-[15px]">
            <Image
              src={values}
              alt="Gallery Image"
              className="absolute -bottom-10 right-0 w-[150px] h-[150px] object-fit z-0"
            />
            <h3
              className={`${merriweather.variable} font-merriweather font-bold text-center mb-5 text-[30px] lg:text-[42px]  text-[#729652] leading-none`}
            >
              Values
            </h3>

            <p className="text-gray-600 text-center">
              Integrity, innovation, and excellence guide everything we do to
              ensure meaningful and lasting contributions.
            </p>
          </div>
        </div>
      </div>

      <MobileVillas />

      <div className="hidden w-full h-auto flex-col">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full px-28 flex items-start">
            {" "}
            <div
              className={` ${merriweather.variable} font-merriweather flex flex-col gap-2 text-[30px] lg:text-[42px]  font-semibold tracking-tight leading-none px-4 lg:px-10 pt-20`}
            >
              Our Team
              {/* <div className="h-[10px] w-[80px] mt-2 lg:hidden bg-primary" />
          <div className="h-[10px] w-[120px] mt-2 hidden lg:block bg-primary" /> */}
            </div>
          </div>
          <div className="flex-col lg:flex-row  lg:h-[400px] w-full gap-4 lg:gap-10 px-4 my-10 lg:px-28 flex ">
            <div
              className="h-[250px] lg:h-[400px] lg:w-1/4 bg-cover bg-center group relative"
              style={{ backgroundImage: `url(${team1.src})` }}
            >
              <div className="flex h-full">
                {/* Description overlay - initially hidden, shows on hover */}
                <div className="hidden lg:flex absolute inset-0 bg-[#C3F498]/80 flex-col items-start py-10 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div className="text-[25px] font-bold">Title Here</div>
                  <div className="text-[17px] mt-2 text-left">
                    Description goes here...
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[250px] lg:h-[400px] lg:w-1/4 bg-cover bg-center group relative"
              style={{ backgroundImage: `url(${team2.src})` }}
            >
              <div className="flex h-full">
                {/* Description overlay - initially hidden, shows on hover */}
                <div className="hidden lg:flex absolute inset-0 bg-[#FF9358]/80 flex-col items-start py-10 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div className="text-[25px] font-bold">Title Here</div>
                  <div className="text-[17px] mt-2 text-left">
                    Description goes here...
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[250px] lg:h-[400px] lg:w-1/4 bg-cover bg-center group relative"
              style={{ backgroundImage: `url(${team1.src})` }}
            >
              <div className="flex h-full">
                {/* Description overlay - initially hidden, shows on hover */}
                <div className="hidden lg:flex absolute inset-0 bg-[#97EAFD]/80 flex-col items-start py-10 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div className="text-[25px] font-bold">Title Here</div>
                  <div className="text-[17px] mt-2 text-left">
                    Description goes here...
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[250px] lg:h-[400px] lg:w-1/4 bg-cover bg-center group relative"
              style={{ backgroundImage: `url(${team1.src})` }}
            >
              <div className="flex h-full">
                {/* Description overlay - initially hidden, shows on hover */}
                <div className="hidden lg:flex absolute inset-0 bg-[#97EAFD]/80 flex-col items-start py-10 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div className="text-[25px] font-bold">Title Here</div>
                  <div className="text-[17px] mt-2 text-left">
                    Description goes here...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
