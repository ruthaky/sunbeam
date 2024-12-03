import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  return (
    <div className="flex flex-col gap-10 w-full px-12 h-screen bg-white">
      <div className="text-[60px] font-semibold tracking-tight  leading-none text-center">
        Our Products
      </div>
      <div>chevrons</div>
      <div className="flex  w-full h-[350px] justify-around gap-10">
        <div className="bg-primary w-1/4 h-full"></div>
        <div className="bg-primary w-1/4 h-full"></div>
        <div className="bg-primary w-1/4 h-full"></div>
        <div className="bg-primary w-1/4 h-full"></div>
      </div>
      <div className="flex justify-end">
        <Button>See More</Button>
      </div>
    </div>
  );
}
