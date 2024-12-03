import type { Metadata } from "next";
import { Merriweather } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";


const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

// const ttNorms = TTNorms({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-tt-norms",
// });

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
        className={`${merriweather.variable} antialiased font-merriweather min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
