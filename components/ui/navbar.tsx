import Link from "next/link";
import Image from "next/image";
import logo from "@/public/asset/surgelogo.png";

export const MobileNavbar = () => {
  return <div>MobileNavbar</div>;
};

export const Navbar = () => {
  return (
    <div className="flex flex-row bg-white fixed left-0 top-0 w-full border justify-between py-1 px-12">
      <Link href="/" className="h-full w-[90px]">
        <Image src={logo} alt="logo" className="" />
      </Link>
      <div className="flex flex-row gap-14">
        <div className="flex flex-row items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex items-center">lang</div>
      </div>
    </div>
  );
};
