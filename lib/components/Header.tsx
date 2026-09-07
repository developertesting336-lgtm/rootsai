'use client';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#1A2A4A', color: 'white', padding: '1rem' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ROOTS-AI™</div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="/how-it-works" style={{ color: 'white', textDecoration: 'none' }}>How It Works</a>
          <a href="/platform" style={{ color: 'white', textDecoration: 'none' }}>Platform</a>
        </nav>
      </div>
    </header>
  );
}
