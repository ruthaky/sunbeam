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
    icon: '/asset/surgelogo.png',
  },
  title: "Surge",
  description: "Surge",
  openGraph: {
    title: "Surge Crops",
    description: "Delivering premium crops and coffee from Africa to global destinations, with quality and trust at the heart of every shipment.",
    url: "https://surgecrops.com",
    siteName: "Surge",
    images: [
      {
        url: '/asset/surge-thumbnail.png', // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "Surge - Delivering premium crops and coffee from Africa to global destinations, with quality and trust at the heart of every shipment.", // Optional alt text
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: '/asset/surge-thumbnail.png', // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "Surge - Delivering premium crops and coffee from Africa to global destinations, with quality and trust at the heart of every shipment.", // Optional alt text
      },
    ],
    creator: "@surgecrops",
    site: "surgecrops.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:image" content="/asset/surge-thumbnail.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Surge - Delivering premium crops and coffee from Africa to global destinations, with quality and trust at the heart of every shipment." />
      <meta property="og:image:url" content="https://surgecrops.com" />
      <meta property="og:image:secure_url" content="https://surgecrops.com" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Surge - Delivering premium crops and coffee from Africa to global destinations, with quality and trust at the heart of every shipment." />
      <meta property="og:image:url" content="https://surgecrops.com" />
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
