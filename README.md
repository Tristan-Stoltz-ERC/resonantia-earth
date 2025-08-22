# 🌍 Resonantia Earth Website

> Cities Where Energy is Free - Building humanity's next chapter in 7 locations where renewable energy is essentially unlimited.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Tristan-Stoltz-ERC/resonantia-earth)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/luminous-dynamics/resonantia-earth.git
cd resonantia-earth/website-nextjs

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📦 Building for Production

```bash
# Build the static site
npm run build

# Test the production build locally
npm run start

# Export static files for deployment
npm run export
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Push to GitHub repository
2. Enable GitHub Pages in Settings
3. Deploy from `gh-pages` branch:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "next build && next export && gh-pages -d out"

# Deploy
npm run deploy
```

### Option 2: Vercel (Easiest)

1. Connect GitHub repo to Vercel
2. Auto-deploys on push to main
3. Zero configuration needed

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Netlify

1. Build command: `npm run build && npm run export`
2. Publish directory: `out`
3. Drag and drop `out` folder or connect GitHub

### Option 4: Self-Hosted

```bash
# Build static files
npm run build
npm run export

# Serve the 'out' directory with any web server
# nginx, Apache, or simple Python server:
cd out
python3 -m http.server 8000
```

## 🏗️ Project Structure

```
website-nextjs/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── SevenCitiesMap.tsx
│   │   ├── CityShowcase.tsx
│   │   ├── InvestmentCalculator.tsx
│   │   └── ...
│   └── data/            # City data and content
│       └── cities.ts    # Complete city information
├── public/              # Static assets
├── package.json         # Dependencies
└── next.config.js       # Next.js configuration
```

## 🎨 Key Features

- **Responsive Design**: Works on all devices
- **Interactive City Map**: Explore the 7 cities
- **Investment Calculator**: Real-time ROI calculations
- **Energy Model Explanation**: 5-step process visualization
- **City Deep Dives**: Detailed information for each location
- **Call to Action**: Role-based engagement (Investor/Government/Company/Individual)

## 📊 The 7 Cities

1. **Reykjanes Nova, Iceland** - Geothermal paradise (Years 1-3)
2. **Solar Atacama, Chile** - Solar manufacturing hub (Years 2-5)
3. **Taupo Tech Valley, New Zealand** - Innovation sanctuary (Years 3-6)
4. **Churchill Aurora, Canada** - Arctic gateway (Years 4-7)
5. **Kerinci Spaceport, Indonesia** - Equatorial powerhouse (Years 5-8)
6. **Rift Valley Technopolis, Kenya** - Africa's energy capital (Years 6-9)
7. **Fjord Futuria, Norway** - Sovereign wealth experiment (Years 7-10)

## 🔧 Environment Variables

Create `.env.local` for local development:

```env
# Optional - for analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional - for contact form backend
NEXT_PUBLIC_API_URL=https://your-api.com
```

## 🎯 Performance Optimization

The site is optimized for performance:
- Static generation for all pages
- Image optimization with Next.js Image
- Lazy loading for components
- CSS optimization with Tailwind
- Minimal JavaScript bundle

## 📝 Content Management

All city data is in `src/data/cities.ts`. To update:

1. Edit the city objects in the array
2. Rebuild the site
3. Deploy

For dynamic content, consider adding:
- Contentful/Sanity CMS integration
- Markdown files for blog posts
- API for real-time data

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### Deployment Issues
- Ensure `next.config.js` has correct `basePath` for subdirectory hosting
- Check that all images are in `public/images/`
- Verify environment variables are set in deployment platform

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - See LICENSE file

## 🌟 Vision

This website presents a practical vision for humanity's next chapter: 7 cities built in locations where renewable energy is essentially unlimited. No mystical elements, just physics and economics aligned.

**The Model:**
1. Identify energy abundance (<$0.02/kWh)
2. Build infrastructure (immediate revenue)
3. Attract industry (data centers, manufacturing)
4. Grow the city (self-funding)
5. Export innovation (global model)

**Total Impact:**
- 5.25 million people
- 10.5 GW renewable energy
- $145B investment over 10 years
- $40B annual revenue by year 10

---

Built with 💚 by Luminous Dynamics  
*Cities Where Energy is Free*