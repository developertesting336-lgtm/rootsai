'use client';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: "'Inter', Arial, sans-serif" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }

        .hero { background: #F3F5F8; padding: 60px 16px 80px 16px; text-align: left; }
        .hero h1 { font-size: 34px; font-weight: 750; color: #1A2A4A; margin-bottom: 24px; line-height: 1.2; }
        .hero p { font-size: 16px; color: #1A1A1A; line-height: 1.6; margin-bottom: 24px; }
        .hero-cta { background: #1A2A4A; color: #FFF; padding: 12px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; }

        .section { padding: 60px 16px 80px 16px; }
        .eyebrow { font-size: 12px; color: #2A4060; font-weight: 700; letter-spacing: 1.1px; margin-bottom: 16px; text-transform: uppercase; }
        .section h2 { font-size: 25px; color: #1A2A4A; font-weight: 700; margin-bottom: 24px; line-height: 1.3; }
        .section p { font-size: 16px; color: #1A1A1A; line-height: 1.6; margin-bottom: 24px; }

        .empty-box { background: #EEF2F6; border: 1px dashed #D8DEE8; border-radius: 18px; padding: 60px 24px; text-align: center; margin: 40px auto; max-width: 720px; }
        .empty-box h3 { font-size: 24px; color: #1A2A4A; margin-bottom: 16px; }
        .empty-box p { font-size: 16px; color: #1A1A1A; }

        .plus-icon { width: 68px; height: 68px; border: 3px solid #1A2A4A; border-radius: 50%; margin: 0 auto 24px; position: relative; }
        .plus-icon::before { content: ''; position: absolute; top: 50%; left: 50%; width: 26px; height: 3px; background: #1A2A4A; transform: translate(-50%, -50%); }
        .plus-icon::after { content: ''; position: absolute; top: 50%; left: 50%; width: 3px; height: 26px; background: #1A2A4A; transform: translate(-50%, -50%); }

        @media (min-width: 768px) {
          .section h2 { font-size: 30px; }
          .hero h1 { font-size: 46px; }
          .hero { padding: 80px 24px; }
          .section { padding: 80px 24px; }
        }
        @media (min-width: 1024px) {
          .hero { padding: 80px 40px; }
          .section { padding: 80px 40px; }
        }
        @media (min-width: 1440px) {
          .hero { padding: 80px 120px; }
          .section { padding: 80px 120px; }
        }
      `}</style>

      <section className="hero">
        <div className="eyebrow">INSIGHTS</div>
        <h1>Medicine Before Symptoms™ — Insights</h1>
        <p>Our first evidence-informed insights are being prepared. Please return soon.</p>
        <button className="hero-cta">Explore Insights</button>
      </section>

      <section className="section" style={{ background: '#FAFAF8' }}>
        <div className="empty-box">
          <div className="plus-icon"></div>
          <div className="eyebrow">INSIGHTS IN PREPARATION</div>
          <h3>Our first evidence-informed insights are being prepared. Please return soon.</h3>
          <p>Every article displays author, review date, sources and educational disclaimer.</p>
          <p style={{ fontSize: '14px', marginTop: '16px' }}>No article is personalized medical advice.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#F3F5F8' }}>
        <div className="eyebrow">EDITORIAL BOUNDARY</div>
        <h2>Educational by design</h2>
        <p>No article is personalized medical advice.</p>
      </section>
    </div>
  );
}
