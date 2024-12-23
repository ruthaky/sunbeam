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
  const [opened, { toggle }] = useDisclosure(false);

  const handleLanguageChange = (locale: string) => {
    // Get the current path segments
    const segments = pathname.split("/");
    // Replace the language code (first segment after empty string)
    segments[1] = locale;
    // Reconstruct the path
    const newPath = segments.join("/");
    // Navigate to the new path
    router.push(newPath);
  };

  return (
    <div className="flex md:hidden h-[50px] w-full bg-white fixed left-0 top-0 z-10">
      <Link href="/" className="h-full w-[70px]">
        <Image src={logo} alt="logo" className="" />
      </Link>

      <Flex className="h-full justify-between items-center">
        <Flex
          className="items-center cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        ></Flex>

        <Burger
          opened={opened}
          onClick={toggle}
          // hiddenFrom="md"
          size="45px"
          color="#bea632"
          className="invisible xl:visible  3xl:h-[60px] 3xl:w-[60px] fixed top-4 right-[10px]  xl:right-[115px] 3xl:right-[155px]"
        //style={}
        />
        <Burger
          opened={opened}
          onClick={toggle}
          // hiddenFrom="md"
          size="35px"
          color="#bea632"
          className="fixed xl:hidden top-2 right-[10px] lg:right-[20px] "
        //style={}
        />
      </Flex>
      <Collapse in={opened} className="relative">
        <div className="flex w-full  h-1 justify-end">
          {" "}
          <Flex
            onClick={toggle}
            className="fixed ml-0 -z-10 top-0 right-0 flex flex-col items-center justify-center bg-white gap-4 3xl:gap-6 pt-4 border h-screen w-full lg:w-[300px] 3xl:w-[400px]"
          >
            <Link href={`/${pathname.split('/')[1]}`}>Home</Link>
            <Link href={`/${pathname.split('/')[1]}/about`}>About</Link>
            <Link href={`/${pathname.split('/')[1]}/products`}>Products</Link>
            <Link href={`/${pathname.split('/')[1]}/contact`}>Contact</Link>
          </Flex>
        </div>
      </Collapse>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            <span className="font-semibold">Lang</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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
    </div>
  );
};

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    // Get the current path segments
    const segments = pathname.split("/");
    // Replace the language code (first segment after empty string)
    segments[1] = locale;
    // Reconstruct the path
    const newPath = segments.join("/");
    // Navigate to the new path
    router.push(newPath);
  };

  return (
    <div className=" hidden md:flex flex-row bg-white fixed left-0 top-0 w-full border justify-between py-1 px-28 z-10">
      <Link href="/" className="h-full w-[110px]">
        <Image src={logo} alt="logo" className="" />
      </Link>
      <div className="flex flex-row gap-14">
        <div className="flex flex-row items-center gap-10 font-semibold ">
          <Link href={`/${pathname.split('/')[1]}`}>Home</Link>
          <Link href={`/${pathname.split('/')[1]}/about`}>About</Link>
          <Link href={`/${pathname.split('/')[1]}/products`}>Products</Link>
          <Link href={`/${pathname.split('/')[1]}/contact`}>Contact</Link>
        </div>
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="font-semibold">Language</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
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
    </div>
  );
};
