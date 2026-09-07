'use client';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: "'Inter', Arial, sans-serif" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
        .hero { background: #F3F5F8; color: #1A2A4A; padding: clamp(32px, 8vw, 64px) 16px; text-align: left; min-height: clamp(200px, 30vh, 300px); display: flex; flex-direction: column; justify-content: center; gap: clamp(12px, 3vw, 24px); }
        .hero h1 { font-size: clamp(28px, 8vw, 48px); font-weight: 700; line-height: 1.2; color: #1A2A4A; text-align: left; }
        .hero p { font-size: clamp(14px, 3.5vw, 16px); max-width: 600px; color: #1A1A1A; font-weight: 400; text-align: left; }
        .main { padding: clamp(32px, 8vw, 64px) 16px; max-width: 100%; margin: 0; }
        @media (min-width: 768px) {
          .hero { padding-left: 24px; padding-right: 24px; }
          .main { padding-left: 24px; padding-right: 24px; }
        }
        @media (min-width: 1024px) {
          .hero { padding-left: 40px; padding-right: 40px; }
          .main { padding-left: 40px; padding-right: 40px; }
        }
        @media (min-width: 1440px) {
          .hero { padding-left: 120px; padding-right: 120px; }
          .main { padding-left: 120px; padding-right: 120px; }
        }
        .section { margin-bottom: clamp(32px, 6vw, 48px); }
        .section h2 { font-size: clamp(20px, 5vw, 32px); color: #1A2A4A; margin-bottom: clamp(16px, 4vw, 24px); font-weight: 700; }
        .section.architecture { background: #EEF2F6; padding: clamp(32px, 6vw, 48px) 16px; margin: 0 calc(-50vw + 50%); }
        @media (min-width: 768px) {
          .section.architecture { padding-left: 24px; padding-right: 24px; }
        }
        @media (min-width: 1024px) {
          .section.architecture { padding-left: 40px; padding-right: 40px; }
        }
        @media (min-width: 1440px) {
          .section.architecture { padding-left: 120px; padding-right: 120px; }
        }
        .section.architecture h2 { color: #1A2A4A; }
        .section.architecture p { color: #1A1A1A; }
        .section.available-now .grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .section.available-now .grid { grid-template-columns: repeat(2, 1fr); } }
        .grid { display: grid; gap: clamp(16px, 3vw, 24px); grid-template-columns: 1fr; }
        @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
        .card { background: #FFF; border: 1px solid #D8DEE8; border-radius: clamp(8px, 2vw, 12px); padding: clamp(16px, 3vw, 24px); }
        .card h3 { font-size: clamp(16px, 3vw, 18px); color: #1A2A4A; margin-bottom: clamp(8px, 2vw, 12px); font-weight: 700; }
        .card p { font-size: clamp(13px, 2.5vw, 14px); color: #1A1A1A; line-height: 1.6; }
        .card.muted-bg { background: #FBFCFD; }
        .badge { display: inline-block; background: transparent; color: #5F6B7A; padding: clamp(4px, 1vw, 8px) clamp(10px, 2vw, 14px); border-radius: 16px; font-size: clamp(10px, 2vw, 12px); font-weight: 700; letter-spacing: 0.6px; }
        .badge.available { background: transparent; color: #245D42; }
        .eyebrow { font-size: clamp(11px, 2.5vw, 13px); font-weight: 700; color: #2A4060; text-transform: uppercase; letter-spacing: 1.3px; margin-bottom: clamp(12px, 2vw, 16px); }
        .cta-section { background: #FAFAF8; padding: clamp(32px, 6vw, 48px); text-align: center; margin-bottom: clamp(32px, 6vw, 48px); display: flex; flex-direction: column; align-items: center; }
        .cta-section h2 { margin-bottom: clamp(16px, 3vw, 24px); color: #1A2A4A; text-align: center; }
        .cta-button { background: #1A2A4A; color: #FFF; padding: clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px); border-radius: 8px; font-weight: 600; font-size: clamp(14px, 3vw, 16px); cursor: pointer; border: none; }
      `}</style>

      <section className="hero">
        <div className="eyebrow">PLATFORM</div>
        <h1>One Foundation. Deeper Layers Over Time.</h1>
        <p>Phase 1 delivers the assessment and governed report engine. Future layers will expand biological context only after separate validation, governance and implementation.</p>
        <Link href="/assessment" className="header-cta" style={{ width: 'fit-content', marginTop: 'clamp(12px, 2vw, 16px)' }}>Explore the Assessment</Link>
      </section>

      <main className="main">
        <div className="section available-now">
          <h2>Available now</h2>
          <div style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', color: '#5F6B7A', marginBottom: 'clamp(12px, 2vw, 16px)', fontWeight: 500 }}>Phase 1</div>
          <div className="grid">
            <div className="card">
              <h3>Assessment</h3>
              <div style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <span className="badge available">Available</span>
              </div>
              <p>Structured assessment experience.</p>
            </div>
            <div className="card">
              <h3>AI Engine</h3>
              <div style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <span className="badge available">Available</span>
              </div>
              <p>Governed report engine.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Coming soon</h2>
          <div className="grid">
            <div className="card muted-bg">
              <h3>Labs</h3>
              <div style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <span className="badge">Coming Soon</span>
              </div>
              <p>Coming Soon: Laboratory data integration.</p>
            </div>
            <div className="card muted-bg">
              <h3>DNA</h3>
              <div style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <span className="badge">Coming Soon</span>
              </div>
              <p>Coming Soon: DNA and epigenetic insights.</p>
            </div>
            <div className="card muted-bg">
              <h3>Microbiome</h3>
              <div style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <span className="badge">Coming Soon</span>
              </div>
              <p>Coming Soon: Microbiome analysis.</p>
            </div>
            <div className="card muted-bg">
              <h3>Wearables</h3>
              <div style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <span className="badge">Coming Soon</span>
              </div>
              <p>Coming Soon: Wearable integrations.</p>
            </div>
            <div className="card muted-bg">
              <h3>Biological Twin</h3>
              <div style={{ marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                <span className="badge">Coming Soon</span>
              </div>
              <p>Coming Soon: ROOTS Biological Twin™.</p>
            </div>
          </div>
        </div>

        <div className="section architecture">
          <h2>Architecture principle</h2>
          <p>Future layers will expand biological context only after separate validation, governance and implementation.</p>
          <p style={{ marginTop: 'clamp(12px, 3vw, 16px)', color: '#5F6B7A' }}>Connected system overview — future modules remain clearly separated from Phase 1 availability.</p>
        </div>

        <div className="cta-section">
          <h2>Start with the Phase 1 assessment</h2>
          <Link href="/assessment" style={{ textDecoration: 'none' }}>
            <button className="cta-button">Explore the Assessment</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
