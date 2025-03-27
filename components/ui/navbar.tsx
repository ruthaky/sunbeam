"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/asset/sunbeamlogo.png";
import { useRouter, usePathname } from "next/navigation";
import { Burger, Flex, Collapse } from "@mantine/core";
import { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";

export const MobileNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleLinkClick = (path: string) => {
    close();
    router.push(path);
  };

  return (
    <div>
      <Flex className="flex justify-between items-center md:hidden h-[60px] w-full bg-white fixed left-0 top-0 z-10 px-4">
        <Link
          className="h-full w-[60px] lg:w-[80px]"
          href="/"
          onClick={() => handleLinkClick("/")}
        >
          <Image src={logo} alt="logo" />
        </Link>

        <Burger opened={opened} onClick={toggle} size="30px" color="#000" />
      </Flex>
      <Collapse
        in={opened}
        className="absolute  top-[60px] left-0 w-full bg-white z-20"
      >
        <Flex
          direction="column"
          align="center"
          className="gap-4 py-4 border-t fixed bg-white w-full"
          onClick={toggle}
        >
          <Link href="/" onClick={() => handleLinkClick("/")}>
            Home
          </Link>
          <Link href="/about" onClick={() => handleLinkClick("/about")}>
            About
          </Link>
          <Link href="/services" onClick={() => handleLinkClick("/services")}>
            Services
          </Link>
          <Link
            href="/abarequest"
            onClick={() => handleLinkClick("/abarequest")}
          >
            ABA Service Request
          </Link>
          <Link href="/career" onClick={() => handleLinkClick("/career")}>
            Career
          </Link>
          <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
            Contact
          </Link>
          <Link
            href="/graduatestudents"
            onClick={() => handleLinkClick("/graduatestudents")}
          >
            Graduate Students
          </Link>
        </Flex>
      </Collapse>
    </div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:flex flex-row fixed left-0 top-0 w-full justify-between py-1 px-28 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/0"
      }`}
    >
      <Link className="h-full w-[80px]" href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <div className="flex flex-row gap-14 items-center">
        <div className="flex flex-row gap-10 font-semibold">
          <Link className="underline-hover" href="/">
            Home
          </Link>
          <Link className="underline-hover" href="/about">
            About
          </Link>
          <Link className="underline-hover" href="/services">
            Services
          </Link>
          <Link className="underline-hover" href="/contact">
            Contact
          </Link>
          <Link className="underline-hover" href="/career">
            Career
          </Link>
          <Link className="underline-hover" href="/abarequest">
            ABA Service Request
          </Link>
          <Link className="underline-hover" href="/graduatestudents">
            Graduate Students
          </Link>
        </div>
      </div>
    </div>
  );
};
