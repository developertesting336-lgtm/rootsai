'use client';

import Link from 'next/link';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Product</h3>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/example-report">Example Report</Link>
          <button style={{opacity:0.5,cursor:'not-allowed',background:'none',border:'none',color:'inherit',padding:'0',textAlign:'left'}} disabled onClick={(e)=>e.preventDefault()}>Start Assessment</button>
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
  );
}
