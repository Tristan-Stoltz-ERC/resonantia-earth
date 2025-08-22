'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const proofPoints = [
  {
    icon: '⚡',
    title: 'Iceland Proves It',
    stat: '$0.01/kWh',
    description: '100% renewable energy achieved. Aluminum smelters and data centers flock there for cheap, clean power.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '☀️',
    title: 'Chile\'s Solar Paradise',
    stat: '$0.013/kWh',
    description: 'Atacama Desert has the world\'s highest solar radiation. New world record for cheapest solar energy.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: '💧',
    title: 'Congo\'s Hidden Giant',
    stat: '44 GW',
    description: 'Inga Falls could power all of Africa. Single site with more potential than 20 Hoover Dams.',
    color: 'from-blue-600 to-blue-400'
  },
  {
    icon: '🌋',
    title: 'Indonesia\'s Untapped Fire',
    stat: '29,000 MW',
    description: 'World\'s largest geothermal potential, only 8% developed. Each volcano is a power plant waiting.',
    color: 'from-red-500 to-orange-600'
  }
]

export default function RealitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            The Energy Abundance Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't science fiction. These locations exist today, with proven technology 
            and real economics that make sense.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              <div className={`h-2 bg-gradient-to-r ${point.color}`} />
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{point.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{point.title}</h3>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${point.color} bg-clip-text text-transparent mb-3`}>
                      {point.stat}
                    </div>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-energy text-white px-8 py-4 rounded-full">
            <p className="text-lg font-semibold">
              Global Potential: 30-40 locations with energy at &lt;$0.02/kWh
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}