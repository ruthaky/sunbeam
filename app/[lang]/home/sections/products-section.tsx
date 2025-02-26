"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import coffee from "@/public/asset/coffee.jpg";
import sesame from "@/public/asset/sesame.png";
import soybean from "@/public/asset/soybean2.jpg";
import kidneybeans from "@/public/asset/kidneybeans.jpg";
import { Merriweather } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ProductsSection({
  productTexts,
}: {
  productTexts: any;
}) {
  const products = [
    {
      image: coffee,
      title: productTexts.coffeetitle,
      description: productTexts.coffeedesc,
      link: "#coffee",
    },
    {
      image: sesame,
      title: productTexts.sesametitle,
      description: productTexts.sesamedesc,
      link: "#sesame",
    },
    {
      image: soybean,
      title: productTexts.soybeanstitle,
      description: productTexts.soybeansdesc,
      link: "#soybean",
    },
    {
      image: kidneybeans,
      title: productTexts.kidneybeanstitle,
      description: productTexts.kidneybeansdesc,
      link: "#kidneybean",
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  const language = pathname.split("/")[1];
  return (
    <div className="flex flex-col gap-6 lg:gap-10 w-full p-5 py-[15%] lg:py-0  lg:px-28 h-auto lg:h-screen bg-secondary justify-center ">
      <div
        className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[35px] lg:text-[50px] text-white font-semibold tracking-wide leading-none `}
      >
        {productTexts.heading}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "180px" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-[8px] mt-2 ml-1 bg-primary lg:hidden"
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "250px" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-[8px] ml-2 bg-primary hidden lg:block"
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full h-auto justify-around gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative cursor-pointer w-full lg:w-1/4 group"
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image.src})` }}
            ></div>
            {/* <Link className="flex lg:hidden" href={`/products${product.link}`}></Link> */}
            <Link
              className="flex lg:hidden"
              href={`/${language}/products${product.link}`}
              onClick={() =>
                handleLinkClick(`/${language}/products${product.link}`)
              }
            >
              <div className="flex">
                <div className="relative h-auto lg:h-full w-full inset-0 bg-primary  flex flex-col items-start py-10 px-4 opacity-95 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-[25px] font-bold">{product.title}</div>
                  <div className="text-[17px] mt-2 text-left">
                    {product.description}
                  </div>
                </div>
                <div className="h-[400px] w-1/2 bg-primary"></div>
              </div>
            </Link>

            <div className="hidden lg:flex relative h-auto lg:h-full w-full inset-0 bg-white/90 flex-col items-start py-10 px-4 opacity-75 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div className="text-[25px] font-bold">{product.title}</div>
              <div className="text-[17px] mt-2 text-left">
                {product.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Link
          href={`/${pathname.split("/")[1]}/products`}
          onClick={() => handleLinkClick("/products")}
        >
          <Button variant="contact">{productTexts.button}</Button>
        </Link>
      </div>
    </div>
  );
}
