import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import coffee from "@/public/asset/coffee.jpg";
import sesame from "@/public/asset/sesame.jpg";
import soybean from "@/public/asset/soybean.jpg";
import kidneybeans from "@/public/asset/kidneybeans.jpg";
import { Merriweather } from "next/font/google";

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
    },
    {
      image: sesame,
      title: productTexts.sesametitle,
      description: productTexts.sesamedesc,
    },
    {
      image: soybean,
      title: productTexts.soybeanstitle,
      description: productTexts.soybeansdesc,
    },
    {
      image: kidneybeans,
      title: productTexts.kidneybeanstitle,
      description: productTexts.kidneybeansdesc,
    },
  ];

  return (
    <div className="flex flex-col gap-6 lg:gap-10 w-full p-5 lg:px-28 h-auto lg:h-screen bg-secondary justify-center ">
      <div className="flex flex-col lg:gap-2 text-[35px] lg:text-[60px] text-white font-semibold tracking-tight leading-none ">
        {productTexts.heading}
        <div className="h-[5px] w-[150px] lg:w-[300px] bg-primary "></div>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-auto justify-around gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative cursor-pointer w-full lg:w-1/4 h-full group"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="w-full  h-[350px] lg:h-[380px] object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white/90 flex flex-col items-start py-10 px-4 opacity-75 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-[25px] font-bold">{product.title}</div>
              <div className="text-[17px] mt-2 text-left">
                {product.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Link href="/products">
          <Button variant="contact">{productTexts.button}</Button>
        </Link>
      </div>
    </div>
  );
}
