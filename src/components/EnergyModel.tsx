'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    number: '1',
    title: 'Identify Abundance',
    description: 'Find locations with <$0.02/kWh renewable energy potential',
    icon: '🔍'
  },
  {
    number: '2',
    title: 'Build Infrastructure',
    description: 'Power plants first, creating immediate revenue stream',
    icon: '⚡'
  },
  {
    number: '3',
    title: 'Attract Industry',
    description: 'Data centers, aluminum smelting, hydrogen production',
    icon: '🏭'
  },
  {
    number: '4',
    title: 'Grow the City',
    description: 'Revenue funds housing, services, and quality of life',
    icon: '🏙️'
  },
  {
    number: '5',
    title: 'Export Innovation',
    description: 'Become model for sustainable development globally',
    icon: '🌍'
  }
]

export default function EnergyModel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="model" className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            The Energy Arbitrage Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build where energy is essentially free. Use profits to fund the city. 
            Each city becomes self-sustaining within 5 years.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-ocean-blue via-energy-green to-solar-yellow hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 text-center relative z-10">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-12 h-12 bg-gradient-energy rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Proven Examples</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3">Iceland's Success</h4>
              <p className="text-gray-600 mb-4">
                Alcoa moved aluminum smelting to Iceland for cheap geothermal power. 
                Now employs thousands and generates billions in revenue.
              </p>
              <div className="text-3xl font-bold gradient-text">10x ROI</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3">Quebec's Model</h4>
              <p className="text-gray-600 mb-4">
                Cheap hydro attracts data centers and crypto mining. 
                Google, Microsoft, and others built massive facilities.
              </p>
              <div className="text-3xl font-bold gradient-text">$2B/year</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3">Dubai's Transformation</h4>
              <p className="text-gray-600 mb-4">
                Solar abundance enables water desalination at scale. 
                Turned desert into thriving metropolis.
              </p>
              <div className="text-3xl font-bold gradient-text">5M population</div>
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 bg-gradient-energy text-white rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">The Key Insight</h3>
          <p className="text-xl max-w-3xl mx-auto">
            When energy costs approach zero, everything becomes possible. 
            Manufacturing, computing, transportation, food production - all transform. 
            The cities pay for themselves through the industries they enable.
          </p>
        </motion.div>
      </div>
    </section>
  )
}