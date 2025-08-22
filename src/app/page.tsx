'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import RealitySection from '@/components/RealitySection'
import SevenCitiesMap from '@/components/SevenCitiesMap'
import CityShowcase from '@/components/CityShowcase'
import EnergyModel from '@/components/EnergyModel'
import InvestmentCalculator from '@/components/InvestmentCalculator'
import CallToAction from '@/components/CallToAction'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* The Reality: Energy Abundance Exists */}
      <RealitySection />
      
      {/* The 7 Cities Interactive Map */}
      <section id="cities" className="section-padding bg-volcanic-black text-glacier-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-6xl font-display text-center mb-8">
            The First Seven Cities
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto opacity-90">
            Strategic locations where renewable energy is essentially unlimited, 
            politics are stable, and economics make sense.
          </p>
          <SevenCitiesMap onCitySelect={setSelectedCity} />
        </div>
      </section>
      
      {/* Selected City Showcase */}
      {selectedCity && (
        <CityShowcase cityId={selectedCity} onClose={() => setSelectedCity(null)} />
      )}
      
      {/* The Energy Arbitrage Model */}
      <EnergyModel />
      
      {/* Investment Calculator */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16">
            Calculate the Opportunity
          </h2>
          <InvestmentCalculator />
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}