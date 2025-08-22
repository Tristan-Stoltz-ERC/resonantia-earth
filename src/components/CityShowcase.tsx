'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { citiesData } from '@/data/cities'

interface Props {
  cityId: string
  onClose: () => void
}

export default function CityShowcase({ cityId, onClose }: Props) {
  const city = citiesData.find(c => c.id === cityId)
  
  if (!city) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl">{city.icon}</span>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h2 className="text-4xl font-display text-white mb-2">{city.name}</h2>
              <p className="text-xl text-gray-200">{city.country}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Vision */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">The Vision</h3>
              <p className="text-lg text-gray-700">{city.vision}</p>
            </div>

            {/* Key Stats Grid */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-energy text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">{city.capacity}</p>
                <p className="text-sm opacity-90">Energy Capacity</p>
              </div>
              <div className="bg-gradient-thermal text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">{city.population}</p>
                <p className="text-sm opacity-90">Population</p>
              </div>
              <div className="bg-gradient-ocean text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">{city.cost}</p>
                <p className="text-sm opacity-90">Investment</p>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">{city.timeline}</p>
                <p className="text-sm opacity-90">Timeline</p>
              </div>
            </div>

            {/* Unique Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Unique Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {city.uniqueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-energy-green mt-1">✓</span>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Industries */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Economic Drivers</h3>
              <div className="flex flex-wrap gap-2">
                {city.keyIndustries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Districts */}
            <div>
              <h3 className="text-2xl font-bold mb-4">City Districts</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {city.districts.map((district, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2">{district.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{district.purpose}</p>
                    <ul className="space-y-1">
                      {district.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Want to be part of {city.name}?</p>
              <button className="btn-primary">
                Get Involved
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}