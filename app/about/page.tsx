"use client";

export default function AboutPage() {
  return (
    <div className="about-page">
      <style>{`
        .about-page {
          background-color: #FAFAF8;
          font-family: "Inter", Arial, sans-serif;
        }

        .about-hero {
          background-color: #F3F5F8;
          padding: 60px 16px 80px 16px;
        }

        @media (min-width: 768px) {
          .about-hero {
            padding: 80px 24px;
          }
        }

        @media (min-width: 1024px) {
          .about-hero {
            padding: 80px 40px;
          }
        }

        @media (min-width: 1440px) {
          .about-hero {
            padding: 80px 120px;
          }
        }

        .about-eyebrow {
          color: #2A4060;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.1px;
          margin-bottom: 16px;
        }

        .about-hero h1 {
          color: #1A2A4A;
          font-size: 34px;
          font-weight: 750;
          line-height: 1.2;
          margin: 0 0 24px 0;
        }

        @media (min-width: 768px) {
          .about-hero h1 {
            font-size: 48px;
          }
        }

        .about-hero p {
          color: #1A1A1A;
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 32px 0;
        }

        .about-btn-primary {
          display: inline-block;
          background-color: #1A2A4A;
          color: #fff;
          padding: 12px 32px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .about-btn-primary:hover {
          opacity: 0.9;
        }

        .about-problem {
          background-color: #FAFAF8;
          padding: 60px 16px 80px 16px;
        }

        @media (min-width: 768px) {
          .about-problem {
            padding: 80px 24px;
          }
        }

        @media (min-width: 1024px) {
          .about-problem {
            padding: 80px 40px;
          }
        }

        @media (min-width: 1440px) {
          .about-problem {
            padding: 80px 120px;
          }
        }

        .about-problem h2 {
          color: #1A2A4A;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 32px 0;
        }

        @media (min-width: 768px) {
          .about-problem h2 {
            font-size: 30px;
          }
        }

        .about-problem p {
          color: #1A1A1A;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .about-framework {
          background-color: #EEF2F6;
          padding: 60px 16px 80px 16px;
        }

        @media (min-width: 768px) {
          .about-framework {
            padding: 80px 24px;
          }
        }

        @media (min-width: 1024px) {
          .about-framework {
            padding: 80px 40px;
          }
        }

        @media (min-width: 1440px) {
          .about-framework {
            padding: 80px 120px;
          }
        }

        .about-framework h2 {
          color: #1A2A4A;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 32px 0;
        }

        @media (min-width: 768px) {
          .about-framework h2 {
            font-size: 30px;
          }
        }

        .about-framework > p {
          color: #1A1A1A;
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 40px 0;
        }

        .about-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .about-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (min-width: 1024px) {
          .about-cards {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .about-card {
          background-color: #fff;
          border: 1px solid #D8DEE8;
          border-radius: 12px;
          padding: 20px;
          min-height: 78px;
          display: flex;
          align-items: center;
        }

        .about-card-title {
          color: #1A2A4A;
          font-size: 17px;
          font-weight: 700;
          margin: 0;
        }

        .about-note {
          color: #2A4060;
          font-size: 14px;
          margin: 0;
        }

        .about-company {
          background-color: #FAFAF8;
          padding: 60px 16px 80px 16px;
        }

        @media (min-width: 768px) {
          .about-company {
            padding: 80px 24px;
          }
        }

        @media (min-width: 1024px) {
          .about-company {
            padding: 80px 40px;
          }
        }

        @media (min-width: 1440px) {
          .about-company {
            padding: 80px 120px;
          }
        }

        .about-company h2 {
          color: #1A2A4A;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
        }

        @media (min-width: 768px) {
          .about-company h2 {
            font-size: 30px;
          }
        }

        .about-safety {
          background-color: #F7F5F0;
          padding: 60px 16px 80px 16px;
        }

        @media (min-width: 768px) {
          .about-safety {
            padding: 80px 24px;
          }
        }

        @media (min-width: 1024px) {
          .about-safety {
            padding: 80px 40px;
          }
        }

        @media (min-width: 1440px) {
          .about-safety {
            padding: 80px 120px;
          }
        }

        .about-safety h2 {
          color: #1A2A4A;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 32px 0;
        }

        @media (min-width: 768px) {
          .about-safety h2 {
            font-size: 30px;
          }
        }

        .about-safety p {
          color: #1A1A1A;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .about-cta {
          background-color: #FAFAF8;
          padding: 60px 16px 80px 16px;
        }

        @media (min-width: 768px) {
          .about-cta {
            padding: 80px 24px;
          }
        }

        @media (min-width: 1024px) {
          .about-cta {
            padding: 80px 40px;
          }
        }

        @media (min-width: 1440px) {
          .about-cta {
            padding: 80px 120px;
          }
        }

        .about-cta-eyebrow {
          color: #2A4060;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.1px;
          margin-bottom: 32px;
        }

        .about-cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: fit-content;
        }

        @media (min-width: 768px) {
          .about-cta-buttons {
            flex-direction: row;
            gap: 24px;
          }
        }

        .about-btn-outline {
          display: inline-block;
          background-color: #fff;
          color: #1A2A4A;
          border: 2px solid #1A2A4A;
          padding: 10px 28px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
        }

        .about-btn-outline:hover {
          background-color: #1A2A4A;
          color: #fff;
        }
      `}</style>

      {/* Hero */}
      <section className="about-hero">
        <div className="about-eyebrow">ABOUT ROOTS-AI™</div>
        <h1>Medicine Before Symptoms™</h1>
        <p>ROOTS-AI™ was created around a simple idea: biology often adapts long before a diagnosis is made. Our role is not to label disease, but to help people see patterns earlier, ask better questions and choose realistic next steps.</p>
        <a href="/how-it-works" className="about-btn-primary">How It Works</a>
      </section>

      {/* Problem */}
      <section className="about-problem">
        <div className="about-eyebrow">PROBLEM</div>
        <h2>Medicine Before Symptoms™</h2>
        <p>Mission: make complex biological patterns understandable without turning an educational tool into a diagnosis.</p>
      </section>

      {/* Framework */}
      <section className="about-framework">
        <div className="about-eyebrow">FRAMEWORK</div>
        <h2>Seven biological domains — one connected view.</h2>
        <p>Method: structured data, deterministic rules, governed language and visible limitations.</p>
        <div className="about-cards">
          <div className="about-card">
            <p className="about-card-title">Structured data</p>
          </div>
          <div className="about-card">
            <p className="about-card-title">Deterministic rules</p>
          </div>
          <div className="about-card">
            <p className="about-card-title">Governed language</p>
          </div>
          <div className="about-card">
            <p className="about-card-title">Visible limitations</p>
          </div>
        </div>
        <p className="about-note">Deterministic scores — AI assists with explanation, not calculation.</p>
      </section>

      {/* Company */}
      <section className="about-company">
        <div className="about-eyebrow">COMPANY</div>
        <h2>Company: ROOTS AI HEALTH SYSTEMS, Inc., Delaware, USA.</h2>
      </section>

      {/* Safety */}
      <section className="about-safety">
        <div className="about-eyebrow">SAFETY</div>
        <h2>Educational boundary</h2>
        <p>ROOTS-AI™ provides educational wellness information and does not diagnose or treat medical conditions.</p>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-eyebrow">EXPLORE</div>
        <div className="about-cta-buttons">
          <a href="/platform" className="about-btn-primary">Explore Platform</a>
          <a href="/contact" className="about-btn-outline">Contact</a>
        </div>
      </section>
    </div>
  );
}
