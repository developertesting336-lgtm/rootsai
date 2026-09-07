# Vercel Deployment Guide

This document provides instructions for deploying the ROOTS-AI™ application to Vercel.

## Prerequisites

- Vercel account (create at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18+ installed locally

## Deployment Methods

### Method 1: Deploy via Vercel CLI (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
vercel
```

On first deployment, the CLI will:
- Ask for project name
- Detect Next.js framework
- Configure build settings automatically
- Deploy to production

#### Step 3: Configure Environment Variables
```bash
vercel env add NEXT_PUBLIC_APP_URL https://your-domain.vercel.app
```

### Method 2: Deploy via GitHub Integration

#### Step 1: Push Code to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/roots-ai.git
git push -u origin main
```

#### Step 2: Connect Vercel to GitHub
1. Go to https://vercel.com/new
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Select your repository
5. Configure project settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `.next`
6. Click "Deploy"

#### Step 3: Set Environment Variables
1. Go to your project settings on Vercel
2. Navigate to Settings → Environment Variables
3. Add any required environment variables

### Method 3: Deploy via Vercel Dashboard

1. Visit https://vercel.com/new
2. Click "Create Git Repository"
3. Choose your Git provider
4. Authorize and select repository
5. Follow the configuration wizard
6. Deploy!

## Environment Variables

Set these in Vercel dashboard (Settings → Environment Variables):

```
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_NAME=ROOTS-AI™
NEXT_PUBLIC_ENVIRONMENT=production
```

Reference `.env.example` for all available variables.

## Post-Deployment

### 1. Verify Deployment
```bash
vercel logs
```

### 2. Check Build Time
Visit your project dashboard → Deployments → Latest deployment

### 3. Set Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records (follow Vercel's instructions)

### 4. Enable Auto-deployments
- Automatic deployments on `main` branch push
- Configure in Settings → Git Integration

## Build Configuration

The project uses:
- **Framework**: Next.js 16.3.4 with Turbopack
- **Node Version**: 18.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

All configured in `vercel.json` and `next.config.ts`

## Troubleshooting

### Build Failures

**Check logs:**
```bash
vercel logs --follow
```

**Common issues:**
- Missing environment variables → Add in Vercel dashboard
- TypeScript errors → Check `next.config.ts` ignoreErrors setting
- Module not found → Verify import paths use `@/` alias

### Slow Deployments

1. Check if large dependencies in `node_modules`
2. Verify `.vercelignore` excludes unnecessary files
3. Consider upgrading Vercel plan for faster builds

### Environment Variables Not Working

1. Verify variable names in Vercel dashboard
2. Check if `NEXT_PUBLIC_` prefix for client-side variables
3. Redeploy after adding new variables

## Monitoring

### Real-time Monitoring
- Visit https://vercel.com/dashboard
- Check "Deployments" tab for status
- View "Analytics" for usage metrics

### Error Tracking
Enable error tracking:
1. Settings → Monitoring
2. Connect to Sentry or similar service

## Rollback

To rollback to a previous deployment:
1. Go to Deployments tab
2. Click the deployment you want to restore
3. Click "Promote to Production"

## Performance Optimization

### For Vercel:
1. Vercel automatically optimizes images
2. Enable ISR (Incremental Static Regeneration) in `next.config.ts` if needed
3. Use dynamic imports for large components

### Monitor:
- Web Vitals dashboard in Vercel
- Core Web Vitals metrics
- Response times per region

## Scaling

- **Free Plan**: 100GB bandwidth/month, 1 concurrent function
- **Pro Plan**: 1TB bandwidth/month, unlimited concurrent functions
- **Enterprise**: Custom scaling

## CI/CD Integration

The project automatically integrates with:
- GitHub Actions (via Vercel)
- Automatic preview deployments on pull requests
- Production deployments on main branch

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Community: https://github.com/vercel/next.js/discussions

---

**Last Updated**: 2026-09-07  
**Next.js Version**: 16.3.4  
**Node Version**: 18+
