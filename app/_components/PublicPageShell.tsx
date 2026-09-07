// Reusable template for all public pages
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface PublicPageShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  activeRoute: string;
}

export default function PublicPageShell({
  title,
  subtitle,
  children,
  activeRoute,
}: PublicPageShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: "'Inter', Arial, sans-serif" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }

        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #1A2A4A;
          padding: clamp(12px, 3vw, 16px) clamp(16px, 5vw, 32px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: clamp(64px, 12vw, 72px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .logo { font-size: clamp(16px, 4vw, 24px); font-weight: 700; color: #FFF; }

        .nav { display: none; gap: clamp(8px, 3vw, 24px); align-items: center; }
        .nav a { color: #FFF; font-size: clamp(12px, 2.5vw, 14px); font-weight: 500; }
        .nav a[aria-current="page"] { border-bottom: 3px solid #FFF; }

        .header-cta {
          background: #FFF;
          color: #1A2A4A;
          padding: clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px);
          border-radius: 8px;
          font-weight: 600;
          font-size: clamp(12px, 2.5vw, 14px);
          cursor: pointer;
          border: none;
        }

        .hamburger { display: flex; flex-direction: column; gap: 6px; background: none; border: none; cursor: pointer; padding: 8px; }
        .hamburger span { width: 24px; height: 3px; background: #FFF; border-radius: 1.5px; }

        .drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 42, 74, 0.95);
          z-index: 50;
          padding: clamp(24px, 5vw, 32px);
          display: ${menuOpen ? 'flex' : 'none'};
          flex-direction: column;
          gap: clamp(16px, 3vw, 24px);
          overflow-y: auto;
        }

        .drawer a { color: #FFF; font-size: clamp(16px, 4vw, 20px); font-weight: 500; padding: clamp(8px, 2vw, 12px) 0; border-bottom: 1px solid rgba(255,255,255,0.1); }

        .hero {
          background: linear-gradient(135deg, #1A2A4A 0%, #2A4060 100%);
          color: #FFF;
          padding: clamp(32px, 8vw, 64px) clamp(16px, 5vw, 32px);
          text-align: center;
          min-height: clamp(200px, 30vh, 300px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(12px, 3vw, 24px);
        }

        .hero h1 { font-size: clamp(28px, 8vw, 48px); font-weight: 700; line-height: 1.2; }
        .hero p { font-size: clamp(14px, 3.5vw, 16px); max-width: 600px; margin: 0 auto; opacity: 0.95; }

        .main-content { padding: clamp(32px, 8vw, 64px) clamp(16px, 5vw, 32px); max-width: 1440px; margin: 0 auto; }

        .footer {
          background: #1A2A4A;
          color: #FFF;
          padding: clamp(32px, 8vw, 48px) clamp(16px, 5vw, 32px);
        }

        .footer-content {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          gap: clamp(24px, 5vw, 32px);
          margin-bottom: clamp(24px, 5vw, 32px);
        }

        @media (min-width: 768px) {
          .footer-content { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .nav { display: flex !important; }
          .hamburger { display: none !important; }
          .footer-content { grid-template-columns: repeat(4, 1fr); }
        }

        .footer-section h3 { font-size: clamp(14px, 3vw, 16px); font-weight: 600; margin-bottom: clamp(12px, 3vw, 16px); }
        .footer-section a { display: block; font-size: clamp(12px, 2.5vw, 14px); color: #FFF; padding: clamp(6px, 1.5vw, 8px) 0; opacity: 0.9; }
        .footer-section a:hover { opacity: 1; }

        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: clamp(16px, 3vw, 24px); text-align: center; font-size: clamp(12px, 2.5vw, 14px); opacity: 0.8; }
      `}</style>

      {/* Header */}
      <header className="header">
        <Link href="/" className="logo">ROOTS-AI™</Link>
        <nav className="nav">
          <Link href="/how-it-works" aria-current={activeRoute === '/how-it-works' ? 'page' : undefined}>How It Works</Link>
          <Link href="/platform" aria-current={activeRoute === '/platform' ? 'page' : undefined}>Platform</Link>
          <Link href="/example-report" aria-current={activeRoute === '/example-report' ? 'page' : undefined}>Example Report</Link>
          <Link href="/research" aria-current={activeRoute === '/research' ? 'page' : undefined}>Research</Link>
          <Link href="/about" aria-current={activeRoute === '/about' ? 'page' : undefined}>About</Link>
        </nav>
        <Link href="/assessment" className="header-cta">Start Assessment</Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="drawer">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="/platform" onClick={() => setMenuOpen(false)}>Platform</Link>
          <Link href="/example-report" onClick={() => setMenuOpen(false)}>Example Report</Link>
          <Link href="/research" onClick={() => setMenuOpen(false)}>Research</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', margin: '16px 0' }}></div>
          <Link href="/healthcare-professionals" onClick={() => setMenuOpen(false)}>Healthcare Professionals</Link>
          <Link href="/pilot" onClick={() => setMenuOpen(false)}>Pilot Program</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', margin: '16px 0' }}></div>
          <Link href="/privacy" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link href="/terms" onClick={() => setMenuOpen(false)}>Terms</Link>
          <Link href="/cookies" onClick={() => setMenuOpen(false)}>Cookies</Link>
          <Link href="/medical-disclaimer" onClick={() => setMenuOpen(false)}>Medical Disclaimer</Link>
          <Link href="/ai-disclaimer" onClick={() => setMenuOpen(false)}>AI Disclaimer</Link>
          <Link href="/assessment" style={{ background: '#1A2A4A', color: '#FFF', padding: clamp('12px', '3vw', '16px') + ' ' + clamp('24px', '5vw', '32px'), borderRadius: '8px', fontWeight: 600, textAlign: 'center', marginTop: 'auto' }} onClick={() => setMenuOpen(false)}>Start Your Assessment</Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Product</h3>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/platform">Platform</Link>
            <Link href="/example-report">Example Report</Link>
            <Link href="/assessment">Start Assessment</Link>
          </div>

          <div className="footer-section">
            <h3>Research</h3>
            <Link href="/research">Research</Link>
            <Link href="/pilot">Pilot Program</Link>
            <Link href="/healthcare-professionals">Healthcare Professionals</Link>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/medical-disclaimer">Medical Disclaimer</Link>
            <Link href="/ai-disclaimer">AI Disclaimer</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ROOTS AI HEALTH SYSTEMS, Inc. All rights reserved.</p>
          <p>ROOTS-AI™ provides educational wellness information and does not diagnose or treat medical conditions.</p>
          <p>Build: v1.0.0</p>
        </div>
      </footer>
    </div>
  );
}
