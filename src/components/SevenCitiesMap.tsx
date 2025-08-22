'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { citiesData } from '@/data/cities'

interface Props {
  onCitySelect: (cityId: string) => void
}

export default function SevenCitiesMap({ onCitySelect }: Props) {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const filteredCities = citiesData.filter(city => 
    filter === 'all' || city.energyType === filter
  )

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {['all', 'geothermal', 'solar', 'hydro', 'mixed'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === type 
                ? 'bg-gradient-energy text-white' 
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Cities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCities.map((city, index) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onMouseEnter={() => setHoveredCity(city.id)}
            onMouseLeave={() => setHoveredCity(null)}
            onClick={() => onCitySelect(city.id)}
            className="relative cursor-pointer group"
          >
            <div className="glass-effect rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
              {/* City Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{city.icon}</span>
                </div>
                {/* Energy Type Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
                  ${city.energyType === 'geothermal' ? 'bg-thermal-orange' : ''}
                  ${city.energyType === 'solar' ? 'bg-solar-yellow' : ''}
                  ${city.energyType === 'hydro' ? 'bg-hydro-cyan' : ''}
                  ${city.energyType === 'mixed' ? 'bg-gradient-energy' : ''}
                  text-white`}>
                  {city.energyType}
                </div>
              </div>

              {/* City Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{city.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{city.country}</p>
                
                {/* Key Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Energy Capacity</span>
                    <span className="text-energy-green font-bold">{city.capacity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Population</span>
                    <span className="text-white font-bold">{city.population}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Cost</span>
                    <span className="text-ocean-blue font-bold">{city.cost}</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Timeline</span>
                    <span className="text-white">{city.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              {hoveredCity === city.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-energy/20 flex items-center justify-center"
                >
                  <p className="text-white font-bold text-lg">View Details →</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-effect rounded-lg p-6 text-center">
          <p className="text-3xl font-bold gradient-text">7</p>
          <p className="text-sm text-gray-300 mt-1">Cities</p>
        </div>
        <div className="glass-effect rounded-lg p-6 text-center">
          <p className="text-3xl font-bold gradient-text">10.5 GW</p>
          <p className="text-sm text-gray-300 mt-1">Total Energy</p>
        </div>
        <div className="glass-effect rounded-lg p-6 text-center">
          <p className="text-3xl font-bold gradient-text">5.25M</p>
          <p className="text-sm text-gray-300 mt-1">Population</p>
        </div>
        <div className="glass-effect rounded-lg p-6 text-center">
          <p className="text-3xl font-bold gradient-text">$145B</p>
          <p className="text-sm text-gray-300 mt-1">Investment</p>
        </div>
      </div>
    </div>
  )
}