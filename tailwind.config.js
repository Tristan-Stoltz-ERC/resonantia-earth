/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'energy-green': '#00ff88',
        'thermal-orange': '#ff6b35',
        'ocean-blue': '#00a8ff',
        'volcanic-black': '#0a0a0a',
        'glacier-white': '#f8f9fa',
        'solar-yellow': '#ffd700',
        'hydro-cyan': '#00d4ff',
        'wind-purple': '#7c3aed'
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-energy': 'linear-gradient(135deg, #00a8ff 0%, #00ff88 100%)',
        'gradient-thermal': 'linear-gradient(135deg, #ff6b35 0%, #ffd700 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
      }
    },
  },
  plugins: [],
}