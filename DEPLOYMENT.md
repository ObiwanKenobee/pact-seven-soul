# Deployment Guide

## Vercel Deployment

This project is configured for seamless deployment on Vercel with automatic reloading and proper routing support.

### Configuration Files

- `vercel.json` - Handles SPA routing and caching headers
- `.vercelignore` - Optimizes deployment by excluding unnecessary files
- `vite.config.ts` - Configured for production builds with chunking

### Features

✅ **Client-side routing support** - All routes work properly on refresh
✅ **Hot Module Replacement (HMR)** - Automatic reloading in development
✅ **Optimized builds** - Code splitting and vendor chunks
✅ **SEO-friendly** - Proper meta tags and structured data
✅ **Progressive loading** - Efficient asset loading

### Automatic Deployment

1. Connect your repository to Vercel
2. Vercel will automatically detect the framework (Vite)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Install command: `npm install`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Set these in your Vercel dashboard if needed:
- `NODE_ENV=production`

### Routing

All routes are properly configured:
- `/` - Homepage
- `/about` - About page
- `/developer` - Developer page
- `/contributing` - Contributing page
- `/code-of-conduct` - Code of Conduct
- `/impact` - Impact page
- `/pricing` - Pricing page
- `/engineers` - Engineers page
- `/partnerships` - Partnerships page
- `/open-source` - Open Source page
- `/access` - Universal Access page
- `/dashboard` - Dashboard page
- `/tech-stack` - Tech Stack page
- `/*` - 404 page for unknown routes

### Performance Optimizations

- Vendor chunks separated for better caching
- Router code split into separate chunk
- Images properly optimized
- Cache headers configured for static assets
