#!/bin/bash

echo "🌍 Resonantia Earth Deployment Script"
echo "====================================="
echo ""
echo "This script will help you deploy the Resonantia Earth website."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

echo "📋 Deployment Options:"
echo ""
echo "1. Deploy to Vercel (Recommended)"
echo "2. Build for self-hosting"
echo "3. Test locally"
echo ""
read -p "Choose an option (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Deploying to Vercel..."
        echo ""
        echo "You'll need to:"
        echo "1. Create a free Vercel account at https://vercel.com/signup"
        echo "2. Run: vercel login"
        echo "3. Run: vercel --prod"
        echo ""
        echo "Or connect via GitHub:"
        echo "1. Go to https://vercel.com/new"
        echo "2. Import from: https://github.com/Tristan-Stoltz-ERC/resonantia-earth"
        echo "3. Deploy automatically!"
        echo ""
        read -p "Press Enter to open Vercel in your browser..." 
        xdg-open "https://vercel.com/new/clone?repository-url=https://github.com/Tristan-Stoltz-ERC/resonantia-earth" 2>/dev/null || \
        open "https://vercel.com/new/clone?repository-url=https://github.com/Tristan-Stoltz-ERC/resonantia-earth" 2>/dev/null || \
        echo "Please visit: https://vercel.com/new/clone?repository-url=https://github.com/Tristan-Stoltz-ERC/resonantia-earth"
        ;;
    2)
        echo ""
        echo "🔨 Building for self-hosting..."
        npm run build
        echo ""
        echo "✅ Build complete! Files are in .next/"
        echo "You can serve this with any Node.js hosting provider."
        echo "Run 'npm start' to test the production build."
        ;;
    3)
        echo ""
        echo "🖥️  Starting local development server..."
        npm run dev
        ;;
    *)
        echo "Invalid option. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Thank you for building cities where energy is free!"