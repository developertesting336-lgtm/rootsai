'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          ROOTS-AI™
        </Link>

        <nav className={styles.nav}>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/example-report">Example Report</Link>
          <Link href="/research">Research</Link>
          <Link href="/about">About</Link>
        </nav>

        <button className={styles.button} disabled>
          Start Your Assessment
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.closeBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
          <nav className={styles.mobileNav}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="/platform" onClick={() => setMobileMenuOpen(false)}>
              Platform
            </Link>
            <Link href="/example-report" onClick={() => setMobileMenuOpen(false)}>
              Example Report
            </Link>
            <Link href="/research" onClick={() => setMobileMenuOpen(false)}>
              Research
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}