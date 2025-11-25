import { IconType } from "react-icons";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";

export type SocialLink = {
  name: string;
  href: string;
  Icon: IconType;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/sunbeam-aba-center/?viewAsMember=true",
    Icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sunbeamabacenter/",
    Icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Sunbeam-ABA-Center-61581080121943/",
    Icon: FaFacebookF,
  },
  {
    name: "Glassdoor",
    href: "https://www.glassdoor.com/Overview/Working-at-Sunbeam-ABA-Center-EI_IE10795972.11,29.htm",
    Icon: SiGlassdoor,
  },
];
