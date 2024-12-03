import type { Metadata } from "next";
// import { Merriweather } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Open_Sans } from 'next/font/google'


// const merriweather = Merriweather({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-merriweather",
// });

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
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
        className={`${openSans.variable} font-openSans antialiased  min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
