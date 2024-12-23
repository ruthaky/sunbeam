export const dynamic = "force-static";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import HeroSection from "./sections/hero-section";
import ServicesSection from "./sections/services-section";
import MapSection from "./sections/map-section";
import AboutSection from "./sections/about-section";
import ProductsSection from "./sections/products-section";
import ContactSection from "./sections/contact-section";
import CookieBanner from "@/app/shared/cookie-banner";
// import Form from './sections/form'

export default function Home({
  heroTexts,
  aboutTexts,
  productTexts,
  serviceTexts,
  contactTexts,
}: {
  heroTexts: any;
  aboutTexts: any;
  productTexts: any;
  contactTexts: any;
  serviceTexts: any;
}) {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection heroTexts={heroTexts} />
      <AboutSection aboutTexts={aboutTexts} />
      <ProductsSection productTexts={productTexts} />
      <ServicesSection serviceTexts={serviceTexts} />
      <ContactSection contactTexts={contactTexts} />
      <CookieBanner />
    </div>
  );
}
