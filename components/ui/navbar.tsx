"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/asset/surgelogo.png";
import { Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export const MobileNavbar = () => {
  return <div>MobileNavbar</div>;
};

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    // Get the current path segments
    const segments = pathname.split('/');
    // Replace the language code (first segment after empty string)
    segments[1] = locale;
    // Reconstruct the path
    const newPath = segments.join('/');
    // Navigate to the new path
    router.push(newPath);
  };

  return (
    <div className="flex flex-row bg-white fixed left-0 top-0 w-full border justify-between py-1 px-12 z-10">
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
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Language</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="flex cursor-pointer items-center gap-2">
                <span>🇺🇸</span>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('zh')} className="flex cursor-pointer items-center gap-2">
                <span>🇨🇳</span>
                中文
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('fr')} className="flex cursor-pointer items-center gap-2">
                <span>🇫🇷</span>
                Français
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('ar')} className="flex cursor-pointer items-center gap-2">
                <span>🇦🇪</span>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
