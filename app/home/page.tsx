import { Button } from '@/components/ui/button'
import React from 'react'
import HeroSection from './sections/hero-section'
import ServicesSection from './sections/services-section'

export default function Home() {
  return (
    <div className="bg-secondary ">
      <h1 className="text-4xl font-bold text-white ">Surge</h1>
      <Button>Click me</Button>

      <HeroSection />
      <ServicesSection />
    </div>
  )
}
