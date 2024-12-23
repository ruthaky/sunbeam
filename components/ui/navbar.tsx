"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/asset/surgelogo.png";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Burger, Flex, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const MobileNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };

  return (
    <div className="flex justify-between items-center md:hidden h-[50px] w-full bg-white fixed left-0 top-0 z-10 px-4">
      <Link href="/" className="h-full w-[80px]">
        <Image src={logo} alt="logo" />
      </Link>

      <div className="flex flex-row gap-1">
        <div className="flex items-center gap-4 ">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span className="font-semibold">Lang</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem
                onClick={() => handleLanguageChange("en")}
                className="flex cursor-pointer items-center gap-1"
              >
                <span>🇺🇸</span>
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("zh")}
                className="flex cursor-pointer items-center gap-1"
              >
                <span>🇨🇳</span>
                中文
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("fr")}
                className="flex cursor-pointer items-center gap-1"
              >
                <span>🇫🇷</span>
                Français
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("ar")}
                className="flex cursor-pointer items-center gap-1"
              >
                <span>🇦🇪</span>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Flex className="h-full items-center w-full">
          <Burger
            opened={opened}
            onClick={toggle}
            size="30px"
            color="#000"
            className=""
          />
        </Flex>
      </div>
      <Collapse
        in={opened}
        className="absolute top-[50px] left-0 w-full bg-white z-20"
      >
        <Flex
          direction="column"
          align="center"
          className="gap-4 py-4 border-t"
          onClick={toggle} // Ensure clicking links closes the menu
        >
          <Link
            href={`/${pathname.split("/")[1]}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            href={`/${pathname.split("/")[1]}/about`}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>
          <Link
            href={`/${pathname.split("/")[1]}/products`}
            onClick={() => handleLinkClick("/products")}
          >
            Products
          </Link>
          <Link
            href={`/${pathname.split("/")[1]}/contact`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </Flex>
      </Collapse>
    </div>
  );
};

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="hidden md:flex flex-row bg-white fixed left-0 top-0 w-full border justify-between py-1 px-28 z-10">
      <Link href="/" className="h-full w-[110px]">
        <Image src={logo} alt="logo" />
      </Link>
      <div className="flex flex-row gap-14 items-center">
        <div className="flex flex-row gap-10 font-semibold">
          <Link href={`/${pathname.split("/")[1]}`}>Home</Link>
          <Link href={`/${pathname.split("/")[1]}/about`}>About</Link>
          <Link href={`/${pathname.split("/")[1]}/products`}>Products</Link>
          <Link href={`/${pathname.split("/")[1]}/contact`}>Contact</Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="font-semibold">Language</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem
              onClick={() => handleLanguageChange("en")}
              className="flex cursor-pointer items-center gap-2"
            >
              <span>🇺🇸</span>
              English
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleLanguageChange("zh")}
              className="flex cursor-pointer items-center gap-2"
            >
              <span>🇨🇳</span>
              中文
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleLanguageChange("fr")}
              className="flex cursor-pointer items-center gap-2"
            >
              <span>🇫🇷</span>
              Français
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleLanguageChange("ar")}
              className="flex cursor-pointer items-center gap-2"
            >
              <span>🇦🇪</span>
              العربية
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
