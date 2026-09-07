'use client';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A2A4A', color: 'white', padding: '2rem 1rem', marginTop: '4rem' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/platform" style={{ color: 'white', textDecoration: 'none' }}>Platform</a></li>
              <li><a href="/how-it-works" style={{ color: 'white', textDecoration: 'none' }}>How It Works</a></li>
              <li><a href="/example-report" style={{ color: 'white', textDecoration: 'none' }}>Example Report</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
              <li><a href="/research" style={{ color: 'white', textDecoration: 'none' }}>Research</a></li>
              <li><a href="/healthcare-professionals" style={{ color: 'white', textDecoration: 'none' }}>Healthcare Professionals</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy</a></li>
              <li><a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms</a></li>
              <li><a href="/cookies" style={{ color: 'white', textDecoration: 'none' }}>Cookies</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Support</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
              <li><a href="/medical-disclaimer" style={{ color: 'white', textDecoration: 'none' }}>Medical Disclaimer</a></li>
              <li><a href="/ai-disclaimer" style={{ color: 'white', textDecoration: 'none' }}>AI Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', opacity: 0.8 }}>
          <p>&copy; 2026 ROOTS AI HEALTH SYSTEMS, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
