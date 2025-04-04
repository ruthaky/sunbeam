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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://surgecrops.com",
    siteName: "Sunbeam ABA cENTER",
    images: [
      {
        url: "/asset/sunbeam-thumbnail.png", // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "Sunbeam - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", // Optional alt text
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
      <meta
        property="og:image"
        content="https://i.postimg.cc/xjHtX95b/sunbeam-thumbnail.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Surge - Delivering premium crops and coffee from Africa to global destinations, with quality and trust at the heart of every shipment."
      />
      <meta
        property="og:image:url"
        content="https://i.postimg.cc/xjHtX95b/sunbeam-thumbnail.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://i.postimg.cc/xjHtX95b/sunbeam-thumbnail.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Surge - Delivering premium crops and coffee from Africa to global destinations, with quality and trust at the heart of every shipment."
      />
      <meta
        property="og:image:url"
        content="https://i.postimg.cc/xjHtX95b/sunbeam-thumbnail.png"
      />
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "po18vi2fr8");
  `}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJDYF9BQS6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZJDYF9BQS6');
</script> `}
      </Script>

      <body
        className={`${openSans.variable} font-openSans antialiased bg-white  min-h-screen flex flex-col overflow-x-hidden`}
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
