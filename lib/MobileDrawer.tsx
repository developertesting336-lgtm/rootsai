'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);

  // Handle keyboard navigation and Escape key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close drawer on Escape
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Tab trap: keep focus within drawer
      if (e.key === 'Tab') {
        const focusableElements = drawerRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const first = focusableElements[0] as HTMLElement;
        const last = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus first element in drawer
    firstFocusableRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-drawer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 left-0 w-full max-w-sm bg-roots-navy-900 text-white z-drawer overflow-y-auto"
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-roots-navy-800">
          <h2 className="font-bold text-lg">ROOTS-AI</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-roots-navy-800 rounded-lg transition-colors touch-target"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Content */}
        <nav className="p-4 space-y-2">
          {/* Public Links */}
          <DrawerLink href="/" ref={firstFocusableRef}>
            Home
          </DrawerLink>
          <DrawerLink href="/how-it-works">How It Works</DrawerLink>
          <DrawerLink href="/platform">Platform</DrawerLink>
          <DrawerLink href="/example-report">Example Report</DrawerLink>
          <DrawerLink href="/research">Research</DrawerLink>
          <DrawerLink href="/about">About</DrawerLink>

          {/* Divider */}
          <div className="my-4 border-t border-roots-navy-800" />

          {/* Research & Professional Links */}
          <DrawerLink href="/healthcare-professionals">Healthcare Professionals</DrawerLink>
          <DrawerLink href="/pilot">Pilot Program</DrawerLink>
          <DrawerLink href="/contact">Contact</DrawerLink>
          <DrawerLink href="/blog">Blog</DrawerLink>

          {/* Divider */}
          <div className="my-4 border-t border-roots-navy-800" />

          {/* Legal Links */}
          <DrawerLink href="/privacy">Privacy</DrawerLink>
          <DrawerLink href="/terms">Terms</DrawerLink>
          <DrawerLink href="/cookies">Cookies</DrawerLink>
          <DrawerLink href="/medical-disclaimer">Medical Disclaimer</DrawerLink>
          <DrawerLink href="/ai-disclaimer" ref={lastFocusableRef}>
            AI Disclaimer
          </DrawerLink>
        </nav>

        {/* Bottom CTA */}
        <div className="sticky bottom-0 p-4 border-t border-roots-navy-800 bg-roots-navy-900">
          <Link
            href="/assessment"
            className="btn btn-primary w-full text-center"
            onClick={onClose}
          >
            Start Your Assessment
          </Link>
        </div>
      </div>
    </>
  );
}

const DrawerLink = Link as any;
