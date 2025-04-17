import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { Concert_One } from "next/font/google";
import "../globals.css";
import { Navbar, MobileNavbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Footerr from "../shared/footer/footer";
import { Open_Sans } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Script from "next/script";
import Head from "next/head";

const concert_one = Concert_One({
  weight: ["400", "400"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/asset/sunbeamlogo.png",
  },
  title: "Subeam",
  description: "Sunbeam",
  openGraph: {
    title: "Sunbeam ABA Center",
    description:
      "Compassionate ABA therapy in Portland, Oregon. SunBeam ABA Therapy empowers children with autism to learn, grow, and thrive through personalized care and family-centered support.",
    url: "https://surgecrops.com",
    siteName: "Sunbeam ABA cENTER",
    images: [
      {
        url: "/asset/sunbeam-thumbnail.png", // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "Sunbeam - Compassionate ABA therapy in Portland, Oregon. SunBeam ABA Therapy empowers children with autism to learn, grow, and thrive through personalized care and family-centered support.", // Optional alt text
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/asset/sunbeam-thumbnail.png", // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "Sunbeam- Sunbeam ABA Therapy", // Optional alt text
      },
    ],
    creator: "@sunbeam",
    site: "sunbeamaba.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dk4gxgooc/image/upload/v1744266606/sb11_h21hmb.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Sunbeam- Compassionate ABA therapy in Portland, Oregon. SunBeam ABA Therapy empowers children with autism to learn, grow, and thrive through personalized care and family-centered support."
        />
        <meta
          property="og:image:url"
          content="https://res.cloudinary.com/dk4gxgooc/image/upload/v1744266606/sb11_h21hmb.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/dk4gxgooc/image/upload/v1744266606/sb11_h21hmb.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Sunbeam- Compassionate ABA therapy in Portland, Oregon. SunBeam ABA Therapy empowers children with autism to learn, grow, and thrive through personalized care and family-centered support."
        />
        <meta
          property="og:image:url"
          content="https://res.cloudinary.com/dk4gxgooc/image/upload/v1744266606/sb11_h21hmb.png"
        />
        
        <Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r4la1u9ahq");
  `}
</Script>


      </Head>
      <body
        className={`${openSans.variable} font-openSans antialiased bg-white  min-h-screen flex flex-col overflow-x-hidden`}
      >
          <Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r4la1u9ahq");
  `}
</Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RC06JS7XMR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RC06JS7XMR');
          `}
        </Script>{" "}
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
