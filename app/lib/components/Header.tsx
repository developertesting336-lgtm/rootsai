'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: '#1A2A4A',
        color: 'white',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '64px',
        boxSizing: 'border-box',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: 700,
          color: 'white',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          position: 'absolute',
          left: '24px',
        }}>
          ROOTS-AI™
        </Link>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center',
        }} className="desktop-nav">
          <Link href="/how-it-works" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 500 }}>
            How It Works
          </Link>
          <Link href="/platform" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 500 }}>
            Platform
          </Link>
          <Link href="/example-report" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 500 }}>
            Example Report
          </Link>
          <Link href="/research" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 500 }}>
            Research
          </Link>
          <Link href="/about" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 500 }}>
            About
          </Link>
          <div style={{
            position: 'relative',
            cursor: 'pointer',
            color: 'white',
            fontSize: '14px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }} onMouseEnter={() => setMoreMenuOpen(true)} onMouseLeave={() => setMoreMenuOpen(false)}>
            More ▾
            {moreMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: '#0D1B2F',
                borderRadius: '8px',
                minWidth: '200px',
                marginTop: '8px',
                padding: '8px 0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              }}>
                <Link href="/healthcare-professionals" style={{ display: 'block', color: 'white', padding: '10px 16px', textDecoration: 'none', fontSize: '14px' }}>
                  Healthcare Professionals
                </Link>
                <Link href="/pilot" style={{ display: 'block', color: 'white', padding: '10px 16px', textDecoration: 'none', fontSize: '14px' }}>
                  Pilot Program
                </Link>
                <Link href="/blog" style={{ display: 'block', color: 'white', padding: '10px 16px', textDecoration: 'none', fontSize: '14px' }}>
                  Blog
                </Link>
                <Link href="/contact" style={{ display: 'block', color: 'white', padding: '10px 16px', textDecoration: 'none', fontSize: '14px' }}>
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Button */}
        <button style={{
          display: 'none',
          background: 'white',
          color: '#1A2A4A',
          padding: '12px 28px',
          borderRadius: '8px',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          whiteSpace: 'nowrap',
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
        }} className="desktop-btn" disabled>
          Start Your Assessment
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          position: 'absolute',
          right: '24px',
        }} className="mobile-menu-btn">
          <span style={{ width: '24px', height: '3px', background: 'white', borderRadius: '1.5px', display: 'block' }} />
          <span style={{ width: '24px', height: '3px', background: 'white', borderRadius: '1.5px', display: 'block' }} />
          <span style={{ width: '24px', height: '3px', background: 'white', borderRadius: '1.5px', display: 'block' }} />
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(26, 42, 74, 0.95)',
          zIndex: 50,
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
        }}>
          <button onClick={() => setMobileMenuOpen(false)} style={{
            alignSelf: 'flex-end',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '28px',
            cursor: 'pointer',
            padding: 0,
            marginBottom: '32px',
          }}>
            ✕
          </button>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}>
              How It Works
            </Link>
            <Link href="/platform" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}>
              Platform
            </Link>
            <Link href="/example-report" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}>
              Example Report
            </Link>
            <Link href="/research" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}>
              Research
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}>
              About
            </Link>
            <Link href="/healthcare-professionals" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}>
              Healthcare Professionals
            </Link>
            <Link href="/pilot" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}>
              Pilot Program
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: 'white', fontSize: '18px', padding: '12px 0', textDecoration: 'none' }}>
              Blog
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-btn {
            display: inline-block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
