'use client';
import Link from 'next/link';

export default function ResearchPage() {
  const principles = [
    { title: 'Privacy', description: 'Research export excludes direct identifiers and report narratives.' },
    { title: 'Ethics', description: 'Pilot findings will be reported with limitations; questionnaire scores are not clinical endpoints unless separately validated.' },
    { title: 'Consent', description: 'Service consent and research consent are separate.' },
    { title: 'Transparency', description: 'Pseudonymized data is not described as anonymous unless the methodology supports that claim.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: "'Inter', Arial, sans-serif" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }

        .hero { background: #F3F5F8; padding: 60px 16px 80px 16px; text-align: left; }
        .hero h1 { font-size: 34px; font-weight: 750; color: #1A2A4A; margin-bottom: 24px; line-height: 1.2; }
        .hero p { font-size: 16px; color: #1A1A1A; line-height: 1.6; margin-bottom: 24px; }
        .hero-cta { background: #1A2A4A; color: #FFF; padding: 12px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; border: none; }

        .section { padding: 60px 16px 80px 16px; }
        .eyebrow { font-size: 12px; color: #2A4060; font-weight: 700; letter-spacing: 1.1px; margin-bottom: 16px; text-transform: uppercase; }
        .section h2 { font-size: 25px; color: #1A2A4A; font-weight: 700; margin-bottom: 24px; line-height: 1.3; }
        .section p { font-size: 16px; color: #1A1A1A; line-height: 1.6; margin-bottom: 24px; }

        .section-cta { background: #1A2A4A; color: #FFF; padding: 12px 30px; border-radius: 8px; font-weight: 700; font-size: 15px; border: none; }
        .section-cta.outline { background: #fff; color: #1A2A4A; border: 2px solid #1A2A4A; }

        .principles { background: #FAFAF8; }
        .principles-grid { display: grid; gap: 24px; grid-template-columns: 1fr; }
        .principle-card { background: #fff; border: 1px solid #D8DEE8; border-radius: 14px; padding: clamp(16px, 3vw, 24px); }
        .principle-card h3 { font-size: 18px; color: #1A2A4A; font-weight: 700; margin-bottom: 12px; }
        .principle-card p { font-size: 16px; color: #1A1A1A; line-height: 1.6; }

        .pilot-info { background: #EEF2F6; }
        .boundary { background: #fff; }
        .boundary-card { background: #F7F8FA; border: 1px solid #D8DEE8; border-radius: 16px; padding: 24px; }
        .boundary-card h3 { font-size: 18px; color: #1A2A4A; font-weight: 700; margin-bottom: 12px; }

        @media (min-width: 768px) {
          .section h2 { font-size: 30px; }
          .hero h1 { font-size: 48px; }
          .principles-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
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
        <h1>Building Biological Intelligence Responsibly</h1>
        <p>ROOTS-AI™ is designed to support ethical pilot studies and de-identified research under separate consent, data minimization and documented governance.</p>
        <Link href="/contact"><button className="hero-cta">Research Enquiries</button></Link>
      </section>

      <section className="section principles">
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="eyebrow">Research Principles</div>
          <h2>Privacy, ethics, consent and transparency</h2>
          <div className="principles-grid">
            {principles.map((p, idx) => (
              <div key={idx} className="principle-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pilot-info">
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="eyebrow">Pilot Information</div>
          <h2>Scope and participant protections</h2>
          <p>Research participation is optional and requires separate explicit consent. Service access is not conditioned on research consent. Approved research exports are minimized and pseudonymized or de-identified; direct identifiers, authentication data and report narratives are excluded.</p>
          <Link href="/pilot"><button className="section-cta outline">View Pilot</button></Link>
        </div>
      </section>

      <section className="section" style={{ background: '#FAFAF8' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="eyebrow">Collaboration</div>
          <h2>Academic and industry research enquiries</h2>
          <Link href="/contact"><button className="section-cta">Research Enquiries</button></Link>
        </div>
      </section>

      <section className="section boundary">
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="boundary-card">
            <div className="eyebrow">Research Boundary</div>
            <h3>No cohort dashboard or data access</h3>
            <p>Research export excludes direct identifiers and report narratives.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
