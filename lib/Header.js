'use client';
import Link from 'next/link';
import { useState } from 'react';
import MobileDrawer from './MobileDrawer';
export default function Header({ activeRoute }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (<>
      {/* Skip to Content Link */}
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky-header bg-roots-navy-900 text-white h-header-mobile md:h-header border-b border-roots-navy-800" role="banner">
        <div className="max-w-container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-lg leading-none hover:text-roots-light transition-colors" aria-label="ROOTS-AI Home">
            <svg className="w-28 md:w-32 h-auto" viewBox="0 0 126 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g transform="translate(0 5)" fill="currentColor">
                <path d="M0 20V0h10c3 0 6 2 6 6 0 3-2 5-5 6l5 8h-4l-4-7H4v7H0Zm4-16v6h5c2 0 3-1 3-3s-1-3-3-3H4Z"/>
                <path d="M20 10c0-6 2-10 7-10s7 4 7 10-2 10-7 10-7-4-7-10Zm4 0c0 4 1 7 3 7s3-3 3-7-1-7-3-7-3 3-3 7Z"/>
                <path d="M38 10c0-6 2-10 7-10s7 4 7 10-2 10-7 10-7-4-7-10Zm4 0c0 4 1 7 3 7s3-3 3-7-1-7-3-7-3 3-3 7Z"/>
                <path d="M56 0v4h3v16h4V4h3V0H56Z"/>
                <path d="M75 0h-6v4h4v3l-4 1v7c0 3 1 5 4 5h4v-4h-4v-3l4-1V5c0-3-1-5-4-5h2Z"/>
                <path d="M80 9h6v2h-6Z"/>
                <path d="M90 20 94 0h5l4 20h-4l-2-7h-3l-2 7h-2Zm5-16v6h1l-1-6Z"/>
                <path d="M105 0h4v20h-4Z"/>
              </g>
              <g transform="translate(113 6) scale(.55)" fill="#D8DEE8">
                <path d="M0 0H7V1.6H4.3V8H2.7V1.6H0Z"/>
                <path d="M8.5 0H10.5L12.7 4.8L14.9 0H16.9V8H15.3V2.7L13.4 6.7H12L10.1 2.7V8H8.5Z"/>
              </g>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <NavLink href="/how-it-works" active={activeRoute === '/how-it-works'}>
              How It Works
            </NavLink>
            <NavLink href="/platform" active={activeRoute === '/platform'}>
              Platform
            </NavLink>
            <NavLink href="/example-report" active={activeRoute === '/example-report'}>
              Example Report
            </NavLink>
            <NavLink href="/research" active={activeRoute === '/research'}>
              Research
            </NavLink>
            <NavLink href="/about" active={activeRoute === '/about'}>
              About
            </NavLink>
          </nav>

          {/* CTA Button */}
          <Link href="/assessment" className="hidden md:inline-flex btn btn-primary text-sm md:text-base">
            Start Assessment
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setDrawerOpen(true)} className="lg:hidden p-2 hover:bg-roots-navy-800 rounded-lg transition-colors touch-target" aria-label="Open navigation menu" aria-expanded={drawerOpen} aria-controls="mobile-drawer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}/>
    </>);
}
function NavLink({ href, active, children }) {
    return (<Link href={href} className={`text-sm font-medium transition-colors ${active
            ? 'text-white border-b-2 border-white pb-1'
            : 'text-roots-light hover:text-white'}`} aria-current={active ? 'page' : undefined}>
      {children}
    </Link>);
}
//# sourceMappingURL=Header.js.map