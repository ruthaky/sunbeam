import { Button } from '@/components/ui/button'
import React from 'react'
import HeroSection from './sections/hero-section'
import ServicesSection from './sections/services-section'
import MapSection from './sections/map-section'
import AboutSection from './sections/about-section'
import ProductsSection from './sections/products-section'
import ContactSection from './sections/contact-section'

export default function Home({ heroTexts }: { heroTexts: any }) {

  return (
    <div className="relatve ">
      {/* <h1 className="text-4xl font-bold text-white ">Surge</h1>
      <Button>Click me</Button> */}

      <HeroSection heroTexts={heroTexts} />
      <MapSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}
