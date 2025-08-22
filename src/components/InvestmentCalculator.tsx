'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function InvestmentCalculator() {
  const [capacity, setCapacity] = useState(500)
  const [energyPrice, setEnergyPrice] = useState(0.02)
  const [investmentAmount, setInvestmentAmount] = useState(10)
  
  const [annualRevenue, setAnnualRevenue] = useState(0)
  const [twentyYearValue, setTwentyYearValue] = useState(0)
  const [roi, setRoi] = useState(0)
  const [paybackPeriod, setPaybackPeriod] = useState(0)

  useEffect(() => {
    // Calculate annual revenue
    // MW * 1000 (to kW) * 24 hours * 365 days * capacity factor (0.85) * price
    const revenue = capacity * 1000 * 24 * 365 * 0.85 * energyPrice
    setAnnualRevenue(revenue)
    
    // 20-year value (simple, not discounted)
    const lifetime = revenue * 20
    setTwentyYearValue(lifetime)
    
    // ROI calculation
    const investmentInDollars = investmentAmount * 1_000_000_000 // Convert billions to dollars
    const annualROI = ((revenue / investmentInDollars) * 100)
    setRoi(annualROI)
    
    // Payback period
    const payback = investmentInDollars / revenue
    setPaybackPeriod(payback)
  }, [capacity, energyPrice, investmentAmount])

  const formatCurrency = (value: number) => {
    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}B`
    } else if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(1)}M`
    } else {
      return `$${value.toFixed(0)}`
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        {/* Input Controls */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Energy Capacity (MW)
            </label>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-2xl font-bold text-ocean-blue mt-2">{capacity} MW</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Energy Price ($/kWh)
            </label>
            <input
              type="range"
              min="0.01"
              max="0.10"
              step="0.005"
              value={energyPrice}
              onChange={(e) => setEnergyPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-2xl font-bold text-energy-green mt-2">${energyPrice.toFixed(3)}</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investment ($B)
            </label>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-2xl font-bold text-thermal-orange mt-2">${investmentAmount}B</div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-energy text-white p-6 rounded-xl"
          >
            <p className="text-sm opacity-90 mb-1">Annual Revenue</p>
            <p className="text-3xl font-bold">{formatCurrency(annualRevenue)}</p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-gradient-thermal text-white p-6 rounded-xl"
          >
            <p className="text-sm opacity-90 mb-1">20-Year Value</p>
            <p className="text-3xl font-bold">{formatCurrency(twentyYearValue)}</p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-gradient-ocean text-white p-6 rounded-xl"
          >
            <p className="text-sm opacity-90 mb-1">Annual ROI</p>
            <p className="text-3xl font-bold">{roi.toFixed(1)}%</p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-gray-800 text-white p-6 rounded-xl"
          >
            <p className="text-sm opacity-90 mb-1">Payback Period</p>
            <p className="text-3xl font-bold">{paybackPeriod.toFixed(1)} years</p>
          </motion.div>
        </div>

        {/* Comparison */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-bold mb-4">How This Compares</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">S&P 500 Average</span>
              <span className="font-bold">10.5% annual</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Real Estate</span>
              <span className="font-bold">8-12% annual</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Energy Cities</span>
              <span className="font-bold text-energy-green">{roi.toFixed(1)}% annual</span>
            </div>
          </div>
        </div>

        {/* Assumptions */}
        <div className="mt-8 text-xs text-gray-500">
          <p className="font-semibold mb-1">Assumptions:</p>
          <ul className="space-y-1">
            <li>• 85% capacity factor (conservative for renewable energy)</li>
            <li>• No escalation in energy prices (conservative)</li>
            <li>• Doesn't include additional revenue from industries attracted</li>
            <li>• Doesn't include land value appreciation</li>
          </ul>
        </div>
      </div>

      {/* Indonesia Special Case */}
      <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">🚀 Indonesia Spaceport Example</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-3">Geothermal Only</h4>
            <ul className="space-y-2 text-sm">
              <li>• 300 MW capacity</li>
              <li>• $3.4B investment</li>
              <li>• $150M annual revenue</li>
              <li className="text-energy-green font-bold">• 10.2% IRR (profitable alone)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">With Spaceport</h4>
            <ul className="space-y-2 text-sm">
              <li>• Same geothermal base</li>
              <li>• $38B total investment</li>
              <li>• $2B+ annual revenue at maturity</li>
              <li className="text-energy-green font-bold">• 18.5% IRR (energy funds space)</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center">
          <a href="#indonesia" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            See Full Indonesia Analysis →
          </a>
        </p>
      </div>
    </div>
  )
}