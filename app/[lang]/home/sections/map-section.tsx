import Image from "next/image";
import mapImage from "@/public/asset/uae-map-AR0YYN.jpg";


export default function MapSection() {
  return (
    <div className="sticky top-0 -z-10 h-screen w-full items-center">
      {" "}
      <Image src={mapImage} alt="logo" className="h-full w-full" />
    </div>
  );
}
