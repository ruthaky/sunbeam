import { Button } from "@/components/ui/button";
import Image from "next/image";
import coffee from "@/public/asset/coffee.jpg";
import sesame from "@/public/asset/sesame.jpg";
import soybean from "@/public/asset/soybean.jpg";
import kidneybeans from "@/public/asset/kidneybeans.jpg";

const products = [
  {
    image: coffee,
    title: "Coffee",
    description:
      "Premium quality coffee beans.Whether it's working with rice farmers in Africa, growing cotton in Australia, or developing innovative ingredients in Asia, ",
  },
  {
    image: sesame,
    title: "Sesame",
    description:
      "High-quality sesame seeds.Whether it's working with rice farmers in Africa, growing cotton in Australia, or developing innovative ingredients in Asia, ",
  },
  {
    image: soybean,
    title: "Soybean",
    description:
      "Organic soybeans for various uses.Whether it's working with rice farmers in Africa, growing cotton in Australia, or developing innovative ingredients in Asia, ",
  },
  {
    image: kidneybeans,
    title: "Kidney Beans",
    description:
      "Nutritious and rich kidney beans.Whether it's working with rice farmers in Africa, growing cotton in Australia, or developing innovative ingredients in Asia, ",
  },
];

export default function ProductsSection() {
  return (
    <div className="flex flex-col gap-10 w-full px-12 h-screen bg-secondary  justify-center ">
      <div className="flex flex-col gap-2 text-[60px] text-white font-semibold tracking-tight leading-none ">
        Our Products
        <div className="h-[5px] w-[300px] bg-primary "></div>
      </div>
      <div className="flex w-full h-[350px] justify-around gap-10">
        {products.map((product, index) => (
          <div key={index} className="relative cursor-pointer w-1/4 h-full group">
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white/90 flex flex-col items-start py-10 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-[25px] font-bold">{product.title}</div>
              <div className="text-[20px] mt-2 text-left">
                {product.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button variant="contact">See More</Button>
      </div>
    </div>
  );
}
