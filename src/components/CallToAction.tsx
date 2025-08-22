'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send to your backend
    console.log('Form submitted:', { email, role })
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're assembling the coalition of investors, governments, companies, and individuals 
            who will make these cities reality.
          </p>
        </motion.div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              id: 'investor',
              title: 'Investors',
              description: 'Deploy capital into proven energy abundance models',
              icon: '💰',
              benefits: ['15-20% IRR potential', 'Phased investment options', 'Infrastructure assets']
            },
            {
              id: 'government',
              title: 'Governments',
              description: 'Transform your nation with sustainable development',
              icon: '🏛️',
              benefits: ['Economic growth', 'Energy independence', 'Technology transfer']
            },
            {
              id: 'company',
              title: 'Companies',
              description: 'Access cheap energy and new markets',
              icon: '🏭',
              benefits: ['<$0.02/kWh energy', 'Strategic locations', 'Skilled workforce']
            },
            {
              id: 'individual',
              title: 'Individuals',
              description: 'Live and work in cities of the future',
              icon: '👤',
              benefits: ['Career opportunities', 'Quality of life', 'Be part of history']
            }
          ].map((roleOption, index) => (
            <motion.div
              key={roleOption.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setRole(roleOption.id)}
              className={`glass-effect rounded-xl p-6 cursor-pointer transition-all ${
                role === roleOption.id ? 'ring-2 ring-energy-green' : ''
              }`}
            >
              <div className="text-4xl mb-4">{roleOption.icon}</div>
              <h3 className="text-xl font-bold mb-2">{roleOption.title}</h3>
              <p className="text-sm opacity-80 mb-4">{roleOption.description}</p>
              <ul className="text-xs space-y-1">
                {roleOption.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-energy-green">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-energy-green"
                  placeholder="your@email.com"
                />
              </div>

              {role && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 bg-white/5 rounded-lg"
                >
                  <p className="text-sm">
                    Selected role: <span className="font-bold capitalize">{role}</span>
                  </p>
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full btn-primary text-lg"
                disabled={!email || !role}
              >
                Join the Movement
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">You're In!</h3>
              <p className="opacity-90">
                We'll contact you as the project develops. Together, we'll build cities where energy is free.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Download Resources</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/downloads/executive-summary.pdf" className="glass-effect rounded-lg p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-3xl mb-2">📄</div>
              <p className="font-semibold">Executive Summary</p>
              <p className="text-sm opacity-70 mt-1">2-page overview</p>
            </a>
            <a href="/downloads/investment-deck.pdf" className="glass-effect rounded-lg p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-3xl mb-2">💼</div>
              <p className="font-semibold">Investment Deck</p>
              <p className="text-sm opacity-70 mt-1">Full financial analysis</p>
            </a>
            <a href="/downloads/technical-specs.pdf" className="glass-effect rounded-lg p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-3xl mb-2">⚙️</div>
              <p className="font-semibold">Technical Specs</p>
              <p className="text-sm opacity-70 mt-1">Engineering details</p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}