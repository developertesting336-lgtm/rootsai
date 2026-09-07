'use client';

export default function HealthcareProfessionalsPage() {
  return (
    <div className="healthcare-professionals-page">
      <style>{`
        .healthcare-professionals-page { background-color: #FAFAF8; font-family: 'Inter', Arial, sans-serif; }
        .hp-hero { background-color: #F3F5F8; padding: 60px 16px 80px 16px; display: flex; flex-direction: column; justify-content: center; min-height: 350px; }
        @media (min-width: 768px) { .hp-hero { padding: 80px 24px; } }
        @media (min-width: 1024px) { .hp-hero { padding: 80px 40px; } }
        @media (min-width: 1440px) { .hp-hero { padding: 80px 120px; } }
        .hp-hero h1 { color: #1A2A4A; font-size: 34px; font-weight: 750; line-height: 1.2; margin-bottom: 24px; max-width: 600px; }
        @media (min-width: 768px) { .hp-hero h1 { font-size: 48px; } }
        .hp-hero p { color: #1A1A1A; font-size: 16px; line-height: 1.6; max-width: 700px; margin-bottom: 32px; }
        .hp-hero-cta { width: fit-content; }
        .hp-hero-cta a { display: inline-block; background-color: #1A2A4A; color: #fff; padding: 12px 32px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; transition: opacity 0.3s; }
        .hp-hero-cta a:hover { opacity: 0.9; }
        .hp-use-cases { background-color: #FAFAF8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .hp-use-cases { padding: 80px 24px; } }
        @media (min-width: 1024px) { .hp-use-cases { padding: 80px 40px; } }
        @media (min-width: 1440px) { .hp-use-cases { padding: 80px 120px; } }
        .hp-use-cases-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin-bottom: 16px; }
        .hp-use-cases h2 { color: #1A2A4A; font-size: 25px; font-weight: 700; line-height: 1.2; margin-bottom: 40px; max-width: 900px; }
        @media (min-width: 768px) { .hp-use-cases h2 { font-size: 30px; } }
        .hp-use-cases-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 768px) { .hp-use-cases-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; } }
        .hp-card { background-color: #fff; border: 1px solid #D8DEE8; border-radius: 14px; padding: 24px; display: flex; flex-direction: column; justify-content: flex-start; min-height: 120px; }
        .hp-card h3 { color: #1A2A4A; font-size: 18px; font-weight: 700; margin-bottom: 12px; }
        .hp-card p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0; }
        .hp-evidence-boundary { background-color: #F7F5F0; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .hp-evidence-boundary { padding: 80px 24px; display: flex; justify-content: center; } }
        @media (min-width: 1024px) { .hp-evidence-boundary { padding: 80px 40px; } }
        @media (min-width: 1440px) { .hp-evidence-boundary { padding: 80px 120px; } }
        .hp-boundary-card { background-color: #fff; border: 1px solid #D8DEE8; border-radius: 16px; padding: 24px; max-width: 1200px; }
        .hp-boundary-card-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin-bottom: 16px; }
        .hp-boundary-card h3 { color: #1A2A4A; font-size: 18px; font-weight: 700; margin-bottom: 12px; }
        .hp-boundary-card p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0; }
        .hp-report-overview { background-color: #EEF2F6; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .hp-report-overview { padding: 80px 24px; } }
        @media (min-width: 1024px) { .hp-report-overview { padding: 80px 40px; } }
        @media (min-width: 1440px) { .hp-report-overview { padding: 80px 120px; } }
        .hp-report-overview-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin-bottom: 16px; }
        .hp-report-overview h2 { color: #1A2A4A; font-size: 25px; font-weight: 700; line-height: 1.2; margin-bottom: 40px; max-width: 900px; }
        @media (min-width: 768px) { .hp-report-overview h2 { font-size: 30px; } }
        .hp-bullets { display: grid; grid-template-columns: 1fr; gap: 32px; margin-bottom: 32px; }
        @media (min-width: 768px) { .hp-bullets { grid-template-columns: repeat(2, 1fr); gap: 40px; } }
        .hp-bullet { display: flex; gap: 16px; align-items: flex-start; }
        .hp-bullet-dot { width: 8px; height: 8px; background-color: #2A4060; border-radius: 50%; flex-shrink: 0; margin-top: 8px; }
        .hp-bullet p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0; }
        .hp-overview-cta { width: fit-content; }
        .hp-overview-cta a { display: inline-block; background-color: #fff; color: #1A2A4A; border: 2px solid #1A2A4A; padding: 10px 28px; border-radius: 10px; font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
        .hp-overview-cta a:hover { background-color: #1A2A4A; color: #fff; }
        .hp-cta-section { background-color: #FAFAF8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .hp-cta-section { padding: 80px 24px; } }
        @media (min-width: 1024px) { .hp-cta-section { padding: 80px 40px; } }
        @media (min-width: 1440px) { .hp-cta-section { padding: 80px 120px; } }
        .hp-cta-content { max-width: 1200px; margin: 0 auto; }
        .hp-cta-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin-bottom: 16px; }
        .hp-cta-section h2 { color: #1A2A4A; font-size: 25px; font-weight: 700; line-height: 1.2; margin-bottom: 32px; }
        @media (min-width: 768px) { .hp-cta-section h2 { font-size: 30px; } }
        .hp-cta-buttons { display: flex; flex-direction: column; gap: 16px; }
        @media (min-width: 768px) { .hp-cta-buttons { flex-direction: row; gap: 24px; } }
        .hp-btn-primary { display: inline-block; background-color: #1A2A4A; color: #fff; padding: 12px 32px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; text-align: center; transition: opacity 0.3s; border: none; cursor: pointer; }
        .hp-btn-primary:hover { opacity: 0.9; }
        .hp-btn-outline { display: inline-block; background-color: #fff; color: #1A2A4A; border: 2px solid #1A2A4A; padding: 10px 28px; border-radius: 10px; font-size: 14px; font-weight: 700; text-decoration: none; text-align: center; transition: all 0.3s; cursor: pointer; }
        .hp-btn-outline:hover { background-color: #1A2A4A; color: #fff; }
      `}</style>

      {/* Hero Section */}
      <section className="hp-hero" id="hero">
        <h1>A Transparent Educational Report for Better Conversations</h1>
        <p>ROOTS-AI™ helps participants organize self-reported patterns before discussing persistent concerns with a qualified professional. It does not replace clinical history, examination, diagnosis or care.</p>
        <div className="hp-hero-cta">
          <a href="/example-report">View Example Report</a>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="hp-use-cases" id="use-cases">
        <div className="hp-use-cases-eyebrow">USE CASES</div>
        <h2>Conversation support • Structured self-report • Education</h2>
        <div className="hp-use-cases-grid">
          <div className="hp-card">
            <h3>Structured self-report</h3>
            <p>See the exact answers behind each score.</p>
          </div>
          <div className="hp-card">
            <h3>Review context</h3>
            <p>Review data completeness and confidence.</p>
          </div>
          <div className="hp-card">
            <h3>Transparent calculation</h3>
            <p>Distinguish deterministic calculation from AI-assisted wording.</p>
          </div>
          <div className="hp-card">
            <h3>Laboratory discussion</h3>
            <p>Use suggested laboratory discussions only as optional conversation prompts.</p>
          </div>
        </div>
      </section>

      {/* Evidence Boundary Section */}
      <section className="hp-evidence-boundary" id="evidence-boundary">
        <div className="hp-boundary-card">
          <div className="hp-boundary-card-eyebrow">EVIDENCE BOUNDARY</div>
          <h3>Educational, not diagnostic</h3>
          <p>It does not replace clinical history, examination, diagnosis or care.</p>
        </div>
      </section>

      {/* Report Overview Section */}
      <section className="hp-report-overview" id="report-overview">
        <div className="hp-report-overview-eyebrow">REPORT OVERVIEW</div>
        <h2>What professionals may see when a participant shares the report</h2>
        <div className="hp-bullets">
          <div className="hp-bullet">
            <div className="hp-bullet-dot"></div>
            <p>See the exact answers behind each score.</p>
          </div>
          <div className="hp-bullet">
            <div className="hp-bullet-dot"></div>
            <p>Review data completeness and confidence.</p>
          </div>
          <div className="hp-bullet">
            <div className="hp-bullet-dot"></div>
            <p>Distinguish deterministic calculation from AI-assisted wording.</p>
          </div>
          <div className="hp-bullet">
            <div className="hp-bullet-dot"></div>
            <p>Use suggested laboratory discussions only as optional conversation prompts.</p>
          </div>
        </div>
        <div className="hp-overview-cta">
          <a href="/example-report">View Example Report</a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hp-cta-section" id="cta">
        <div className="hp-cta-content">
          <div className="hp-cta-eyebrow">CONTACT / RESEARCH COLLABORATION</div>
          <h2>Research Enquiries</h2>
          <div className="hp-cta-buttons">
            <a href="/contact" className="hp-btn-primary">Research Enquiries</a>
            <a href="/research" className="hp-btn-outline">Research</a>
          </div>
        </div>
      </section>
    </div>
  );
}
