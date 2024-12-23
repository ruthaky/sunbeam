import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../globals.css";
import { Navbar, MobileNavbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Footerr from "../shared/footer/footer";
import { Open_Sans } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
// import "@mantine/carousel/styles.css";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/asset/favicon.ico",
      },
    ],
  },
  title: "Surge",
  description: "Surge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} font-openSans antialiased  min-h-screen flex flex-col overflow-x-hidden`}
      >
        {" "}
        <MantineProvider>
          <div className="block lg:hidden">
            <MobileNavbar />
          </div>

          <div className="hidden lg:block">
            <Navbar />
          </div>
          {children}
          <Footerr />
        </MantineProvider>
      </body>
    </html>
  );
}
