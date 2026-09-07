'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="global-header">
        <Link href="/" className="header-logo">ROOTS-AI™</Link>

        <nav className="header-nav">
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/example-report">Example Report</Link>
          <Link href="/research">Research</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="header-actions">
          <button className="header-cta" style={{opacity:0.5,cursor:'not-allowed'}} disabled onClick={(e)=>e.preventDefault()}>Start Assessment</button>
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="mobile-menu">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="/platform" onClick={() => setMenuOpen(false)}>Platform</Link>
          <Link href="/example-report" onClick={() => setMenuOpen(false)}>Example Report</Link>
          <Link href="/research" onClick={() => setMenuOpen(false)}>Research</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/privacy" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link href="/terms" onClick={() => setMenuOpen(false)}>Terms</Link>
          <Link href="/cookies" onClick={() => setMenuOpen(false)}>Cookies</Link>
          <Link href="/medical-disclaimer" onClick={() => setMenuOpen(false)}>Medical Disclaimer</Link>
          <Link href="/ai-disclaimer" onClick={() => setMenuOpen(false)}>AI Disclaimer</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button style={{opacity:0.5,cursor:'not-allowed',background:'none',border:'none',color:'inherit',padding:'8px 0',textAlign:'left',width:'100%'}} disabled onClick={(e)=>{e.preventDefault();setMenuOpen(false)}}>Start Assessment</button>
        </nav>
      )}
    </>
  );
}
