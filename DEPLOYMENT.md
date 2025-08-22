# 🚀 Deployment Guide for Resonantia Earth

## Quick Deployment to Vercel (Recommended)

Vercel is the easiest deployment option and handles Next.js apps perfectly.

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Deploy

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? **Select your account**
- Link to existing project? **No** (create new)
- Project name? **resonantia-earth**
- Directory? **./** (current directory)
- Build settings? **Accept defaults**

Your site will be deployed to: `https://resonantia-earth.vercel.app`

### Step 3: Custom Domain (Optional)

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add `resonantia.earth` or your custom domain
5. Update DNS records as instructed

## Alternative: Deploy via GitHub

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Resonantia Earth website"
git remote add origin https://github.com/YOUR_USERNAME/resonantia-earth.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Deploy automatically

## Alternative: Deploy to Netlify

### Step 1: Build the Site

```bash
npm run build
```

### Step 2: Deploy to Netlify

#### Option A: Drag & Drop
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the `.next` folder to the deployment area

#### Option B: Netlify CLI
```bash
npm i -g netlify-cli
netlify deploy
netlify deploy --prod
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
# Test production build at http://localhost:3000
```

## Environment Variables

No environment variables are required for basic deployment.

For advanced features, create `.env.local`:

```env
# Optional - Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional - API endpoints
NEXT_PUBLIC_API_URL=https://your-api.com
```

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear cache:
```bash
rm -rf .next node_modules
npm install
npm run build
```

2. Check Node version:
```bash
node --version  # Should be 18.x or higher
```

3. Try development mode first:
```bash
npm run dev
```

### Deployment Issues

- **Vercel**: Check build logs in Vercel dashboard
- **Netlify**: Check deploy logs in Netlify dashboard
- **GitHub Pages**: Not recommended for Next.js apps with SSR

## Performance Optimization

The site is already optimized with:
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Tailwind CSS purging
- ✅ Static generation where possible

## Support

For issues or questions:
- Create an issue on GitHub
- Contact: tristan.stoltz@gmail.com

---

## 🎉 Congratulations!

Your Resonantia Earth website is ready for deployment. The vision of 7 cities where energy is free is now online!

**Remember**: The website focuses on the practical economics and physics of energy abundance - no mystical elements, just real solutions for humanity's future.