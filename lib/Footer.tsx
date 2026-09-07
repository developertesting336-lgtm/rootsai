'use client';

import Link from 'next/link';

interface FooterProps {
  activeRoute?: string;
}

export default function Footer({ activeRoute }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-roots-navy-900 text-white" role="contentinfo">
      <div className="max-w-container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Column 1: Product */}
          <div>
            <h3 className="font-bold text-sm mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/how-it-works' ? 'font-bold' : ''
                  }`}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/platform"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/platform' ? 'font-bold' : ''
                  }`}
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/example-report"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/example-report' ? 'font-bold' : ''
                  }`}
                >
                  Example Report
                </Link>
              </li>
              <li>
                <Link
                  href="/assessment"
                  className="hover:text-roots-light transition-colors"
                >
                  Start Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Research */}
          <div>
            <h3 className="font-bold text-sm mb-4">Research</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/research"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/research' ? 'font-bold' : ''
                  }`}
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/pilot"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/pilot' ? 'font-bold' : ''
                  }`}
                >
                  Pilot Program
                </Link>
              </li>
              <li>
                <Link
                  href="/healthcare-professionals"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/healthcare-professionals' ? 'font-bold' : ''
                  }`}
                >
                  Healthcare Professionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/about' ? 'font-bold' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/blog' ? 'font-bold' : ''
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/contact' ? 'font-bold' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="font-bold text-sm mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/privacy' ? 'font-bold' : ''
                  }`}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/terms' ? 'font-bold' : ''
                  }`}
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/cookies' ? 'font-bold' : ''
                  }`}
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-disclaimer"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/medical-disclaimer' ? 'font-bold' : ''
                  }`}
                >
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-disclaimer"
                  className={`hover:text-roots-light transition-colors ${
                    activeRoute === '/ai-disclaimer' ? 'font-bold' : ''
                  }`}
                >
                  AI Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-roots-navy-800" />

        {/* Footer Base */}
        <div className="py-8 text-center text-xs text-roots-light space-y-3">
          {/* Logo */}
          <div className="mb-4">
            <svg
              className="w-32 h-auto mx-auto opacity-60"
              viewBox="0 0 126 30"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g transform="translate(0 5)" fill="currentColor">
                <path d="M0 20V0h10c3 0 6 2 6 6 0 3-2 5-5 6l5 8h-4l-4-7H4v7H0Zm4-16v6h5c2 0 3-1 3-3s-1-3-3-3H4Z" />
                <path d="M20 10c0-6 2-10 7-10s7 4 7 10-2 10-7 10-7-4-7-10Zm4 0c0 4 1 7 3 7s3-3 3-7-1-7-3-7-3 3-3 7Z" />
                <path d="M38 10c0-6 2-10 7-10s7 4 7 10-2 10-7 10-7-4-7-10Zm4 0c0 4 1 7 3 7s3-3 3-7-1-7-3-7-3 3-3 7Z" />
                <path d="M56 0v4h3v16h4V4h3V0H56Z" />
                <path d="M75 0h-6v4h4v3l-4 1v7c0 3 1 5 4 5h4v-4h-4v-3l4-1V5c0-3-1-5-4-5h2Z" />
                <path d="M80 9h6v2h-6Z" />
                <path d="M90 20 94 0h5l4 20h-4l-2-7h-3l-2 7h-2Zm5-16v6h1l-1-6Z" />
                <path d="M105 0h4v20h-4Z" />
              </g>
              <g transform="translate(113 6) scale(.55)" fill="currentColor" opacity="0.6">
                <path d="M0 0H7V1.6H4.3V8H2.7V1.6H0Z" />
                <path d="M8.5 0H10.5L12.7 4.8L14.9 0H16.9V8H15.3V2.7L13.4 6.7H12L10.1 2.7V8H8.5Z" />
              </g>
            </svg>
          </div>

          {/* Copyright */}
          <p>© {currentYear} ROOTS AI HEALTH SYSTEMS, Inc. All rights reserved.</p>

          {/* Disclaimer */}
          <p className="max-w-md mx-auto">
            ROOTS-AI™ provides educational wellness information and does not diagnose or treat
            medical conditions.
          </p>

          {/* Build Version */}
          <p className="text-xs opacity-60">Build: v1.0.0</p>
        </div>
      </div>
    </footer>
  );
}
