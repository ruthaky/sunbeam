import { Button } from "@/components/ui/button";
import React from "react";
import HeroSection from "./sections/hero-section";
import ServicesSection from "./sections/services-section";
import MapSection from "./sections/map-section";
import AboutSection from "./sections/about-section";
import ProductsSection from "./sections/products-section";
import ContactSection from "./sections/contact-section";
// import Form from './sections/form'

export default function Home({
  heroTexts,
  aboutTexts,
  productTexts,
  serviceTexts,
  contactTexts
}: {
  heroTexts: any;
  aboutTexts: any;
  productTexts: any;
  contactTexts:any;
}) {
  return (
    <div className="relatve overflow-x-hidden">
      {/* <h1 className="text-4xl font-bold text-white ">Surge</h1>
      <Button>Click me</Button> */}

      <HeroSection heroTexts={heroTexts} />
      {/* <MapSection /> */}
      <AboutSection aboutTexts={aboutTexts} />
      <ProductsSection productTexts={productTexts} />
      <ServicesSection serviceTexts={serviceTexts} />
      {/* <Form /> */}
      <ContactSection contactTexts={contactTexts} />
    </div>
  );
}
