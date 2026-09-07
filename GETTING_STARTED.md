# 🚀 Getting Started with ROOTS-AI Standalone

## ⚡ Quick Start (5 Minutes)

### Step 1: Navigate to Project
```bash
cd D:\SahilThakur\Drholly\roots-ai-production
```

### Step 2: Create Environment File
Create `.env.local` in the project root with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_key_here
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Navigate to: **http://localhost:3000**

---

## 📖 What You'll See

### Home Page (`/`)
- Black bold headings
- "Seven Connected Domains" section
- Domain cards arranged 4-3 layout
- Disabled "Start Assessment" buttons
- Full responsive design

### Public Pages
- `/about` - About the platform
- `/how-it-works` - How it works
- `/platform` - Platform features
- `/example-report` - Sample report
- And many more...

### Authentication (`/auth`)
- Login page
- Sign up page
- Magic link verification

### Admin Dashboard (`/admin`)
- Analytics
- User management
- Settings
- Reports
- And more...

---

## 🛠️ Common Commands

### Development
```bash
npm run dev          # Start dev server with hot reload
npm run build        # Create production build
npm start            # Run production server
npm run lint         # Check code style
npm run type-check   # Verify TypeScript types
```

### File Structure Reference
```
app/                 → Your pages and routes
components/          → Reusable React components
hooks/               → Custom hooks (useAuth, useAssessment)
lib/                 → Utilities and helpers
public/              → Static files
styles/              → Additional stylesheets
```

---

## 🎨 Styling & Colors

### Available Colors (in components)
```tsx
// Using Tailwind classes:
<div className="bg-roots-navy-900">Navy</div>      // #1A2A4A
<div className="bg-roots-white">Off-white</div>    // #FAFAF8
<div className="text-roots-charcoal">Dark text</div> // #1A1A1A
<div className="bg-roots-light">Light gray</div>   // #F3F4F6
```

### Using CSS Variables
```css
/* In CSS files: */
background-color: var(--color-navy-primary);  /* #1A2A4A */
color: var(--color-charcoal);                 /* #1A1A1A */
```

---

## 📦 What's Installed

Your project comes with everything pre-installed:
- ✅ Next.js 16.3.4
- ✅ React 19.2.8
- ✅ Tailwind CSS v4
- ✅ TypeScript
- ✅ Supabase authentication
- ✅ 364 total packages

No additional `npm install` needed!

---

## 🔑 Environment Variables Explained

```env
# Supabase - Required for authentication
NEXT_PUBLIC_SUPABASE_URL       # Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY  # Public anonymous key
SUPABASE_SERVICE_ROLE_KEY      # Secret admin key (never expose!)

# App Configuration - Optional
NEXT_PUBLIC_APP_NAME          # Your app name (default: ROOTS-AI)
NEXT_PUBLIC_APP_URL           # App URL (default: http://localhost:3000)
```

**Where to get these?**
1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Go to Settings → API
4. Copy the URL and keys
5. Paste into `.env.local`

---

## ✨ Key Features

✅ **87 Pages** - All your application pages  
✅ **Global Header/Footer** - Consistent branding  
✅ **Responsive Design** - Works on all devices (360px - 1440px)  
✅ **Authentication Ready** - Supabase integration  
✅ **Assessment System** - Complete flow (disabled buttons on home)  
✅ **Admin Dashboard** - Full management interface  
✅ **Type Safe** - Full TypeScript support  
✅ **Production Build** - Optimized for deployment  

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
# Then open: http://localhost:3001
```

### Build fails?
```bash
# Clear cache and rebuild
npm run build
```

### Module not found errors?
```bash
# Reinstall dependencies
rm -r node_modules
npm install
npm run build
```

### Environment variables not working?
- Make sure `.env.local` is in the project **root** directory
- Restart the dev server after editing `.env.local`
- Variables starting with `NEXT_PUBLIC_` are safe to expose

---

## 🚀 Ready to Deploy?

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Answer prompts and deploy!
```

### Option 2: Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Netlify auto-detects Next.js
4. Set environment variables in Netlify UI
5. Deploy!

### Option 3: Traditional Hosting
```bash
npm run build
# Upload .next, public, and node_modules to your server
# Set environment variables on server
# Run: npm start
```

---

## 📞 Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs

---

## ✅ Verification Checklist

Before considering your project ready:

- [ ] `npm run dev` starts without errors
- [ ] Home page loads at http://localhost:3000
- [ ] All navigation links work
- [ ] `.env.local` is created with your credentials
- [ ] Responsive design works (test on mobile/tablet)
- [ ] Assessment buttons are disabled (no navigation)
- [ ] Admin pages require authentication
- [ ] `npm run build` completes successfully
- [ ] `npm start` runs production build

---

## 📝 File Locations Reference

| File/Folder | Location | Purpose |
|-------------|----------|---------|
| Home Page | `app/page.tsx` | Main landing page |
| Header | `components/Header.tsx` | Global navigation |
| Footer | `components/Footer.tsx` | Global footer |
| Styles | `app/globals.css` | Global CSS |
| Env Vars | `.env.local` | Configuration (create this) |
| Config | `next.config.ts` | Next.js settings |
| Tailwind | `tailwind.config.ts` | Tailwind customization |

---

## 🎯 Common Tasks

### Adding a New Page
```bash
# Create in app/your-page/page.tsx
export default function YourPage() {
  return <div>Your content here</div>;
}
```

### Adding a Component
```bash
# Create in components/YourComponent.tsx
export default function YourComponent() {
  return <div>Component content</div>;
}
```

### Using Authentication
```tsx
import { useAuth } from '@/hooks/useAuth';

export default function MyPage() {
  const { user } = useAuth();
  return <div>Hello {user?.email}!</div>;
}
```

### Styling with Tailwind
```tsx
<div className="bg-roots-navy-900 text-white p-4 rounded-lg">
  Styled with Tailwind
</div>
```

---

## 🎉 You're All Set!

Your ROOTS-AI standalone project is ready to go. Start with:

```bash
cd D:\SahilThakur\Drholly\roots-ai-production
npm run dev
```

Then open **http://localhost:3000** and enjoy! 🚀

---

**Last Updated**: September 7, 2026  
**Project Status**: ✅ Production Ready
