'use client';

import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: "'Inter', Arial, sans-serif" }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        a { text-decoration: none; color: inherit; }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #1A2A4A 0%, #2A4060 100%);
          color: #FFF;
          padding: clamp(32px, 8vw, 64px) 16px;
          text-align: center;
          min-height: clamp(200px, 30vh, 300px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(12px, 3vw, 24px);
        }

        .hero h1 {
          font-size: clamp(28px, 8vw, 48px);
          font-weight: 700;
          line-height: 1.2;
        }

        .hero p {
          font-size: clamp(14px, 3.5vw, 16px);
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.95;
        }

        /* Process Section */
        .process-section {
          padding: clamp(32px, 8vw, 64px) 16px;
          max-width: 1440px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .hero { padding-left: 24px; padding-right: 24px; }
          .process-section { padding-left: 24px; padding-right: 24px; }
        }

        @media (min-width: 1024px) {
          .hero { padding-left: 40px; padding-right: 40px; }
          .process-section { padding-left: 40px; padding-right: 40px; }
        }

        @media (min-width: 1440px) {
          .hero { padding-left: 120px; padding-right: 120px; }
          .process-section { padding-left: 120px; padding-right: 120px; }
        }

        .process-section h2 {
          font-size: clamp(24px, 6vw, 36px);
          text-align: center;
          margin-bottom: clamp(24px, 5vw, 48px);
          color: #1A2A4A;
        }

        .steps {
          display: grid;
          gap: clamp(16px, 4vw, 24px);
          margin-bottom: clamp(32px, 6vw, 48px);
        }

        @media (min-width: 768px) {
          .steps { grid-template-columns: 1fr 1fr; }
        }

        @media (min-width: 1024px) {
          .steps { grid-template-columns: repeat(4, 1fr); }
        }

        .step-card {
          background: #FFF;
          border: 1px solid #D8DEE8;
          border-radius: clamp(8px, 2vw, 12px);
          padding: clamp(16px, 4vw, 24px);
          display: flex;
          gap: clamp(12px, 3vw, 16px);
        }

        .step-number {
          font-size: clamp(18px, 5vw, 28px);
          font-weight: 700;
          color: #1A2A4A;
          min-width: clamp(32px, 8vw, 44px);
        }

        .step-content {
          flex: 1;
        }

        .step-title {
          font-size: clamp(14px, 3vw, 16px);
          font-weight: 600;
          color: #1A2A4A;
          margin-bottom: clamp(8px, 2vw, 12px);
        }

        .step-desc {
          font-size: clamp(12px, 2.5vw, 14px);
          color: #6B7280;
          line-height: 1.5;
        }

        /* AI Info Boxes */
        .ai-info {
          display: grid;
          gap: clamp(16px, 4vw, 24px);
          margin-bottom: clamp(32px, 6vw, 48px);
        }

        @media (min-width: 1024px) {
          .ai-info { grid-template-columns: 1fr 1fr; }
        }

        .info-box {
          background: #F3F4F6;
          border-radius: clamp(8px, 2vw, 12px);
          padding: clamp(16px, 4vw, 24px);
          text-align: center;
        }

        .info-box p {
          font-size: clamp(14px, 3vw, 16px);
          color: #1A2A4A;
          font-weight: 500;
        }

        /* Privacy Block */
        .privacy-block {
          background: #FFF;
          border: 1px solid #D8DEE8;
          border-radius: clamp(8px, 2vw, 12px);
          padding: clamp(16px, 4vw, 24px);
          text-align: center;
          margin-bottom: clamp(32px, 6vw, 48px);
        }

        .privacy-block p {
          font-size: clamp(14px, 3vw, 16px);
          color: #1A2A4A;
          font-weight: 600;
        }

        /* CTA Buttons */
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 3vw, 16px);
          max-width: 500px;
          margin: 0 auto clamp(32px, 6vw, 64px);
        }

        @media (min-width: 768px) {
          .cta-buttons { flex-direction: row; justify-content: center; }
        }

        .btn-primary, .btn-secondary {
          padding: clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px);
          border-radius: 8px;
          font-size: clamp(14px, 3vw, 16px);
          font-weight: 600;
          cursor: pointer;
          border: 2px solid #1A2A4A;
          transition: all 0.3s ease;
          text-align: center;
          display: inline-block;
        }

        .btn-primary {
          background: #1A2A4A;
          color: #FFF;
        }

        .btn-primary:hover { opacity: 0.9; }

        .btn-secondary {
          background: transparent;
          color: #1A2A4A;
        }

        .btn-secondary:hover { background: #F3F4F6; }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <h1>From Answers to Biological Intelligence</h1>
        <p>ROOTS-AI™ follows a controlled sequence so that interpretation never replaces the underlying data.</p>
      </section>

      {/* Main Content */}
      <main className="process-section">
        <h2>The Process</h2>

        {/* 4-Step Process */}
        <div className="steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <div className="step-title">Complete the 73-question assessment.</div>
              <div className="step-desc">Validation normalizes approved responses and preserves N/A.</div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <div className="step-title">Deterministic rules calculate seven domains and derived indicators.</div>
              <div className="step-desc">Rules select drivers, confidence and eligible content.</div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <div className="step-title">Governed AI turns approved explanation objects into clear language.</div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-content">
              <div className="step-title">The web and PDF reports render from the same immutable report record.</div>
            </div>
          </div>
        </div>

        {/* AI Info Boxes */}
        <div className="ai-info">
          <div className="info-box">
            <p>✓ AI assists with language generation only.</p>
          </div>
          <div className="info-box">
            <p>AI does not diagnose, prescribe, change scores, or invent participant facts.</p>
          </div>
        </div>

        {/* Privacy Block */}
        <div className="privacy-block">
          <p>🔒 Secure access and data controls</p>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <Link href="/assessment" className="btn-primary">Start Your Assessment</Link>
          <Link href="/example-report" className="btn-secondary">View Example Report</Link>
        </div>
      </main>
    </div>
  );
}
