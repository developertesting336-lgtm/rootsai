'use client';

import React, { useState } from 'react';

export default function PilotPage() {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <div className="pilot-page">
      <style>{`
        * { box-sizing: border-box; }
        .pilot-page { background-color: #FAFAF8; font-family: 'Inter', Arial, sans-serif; margin: 0; padding: 0; }
        .pilot-hero { background-color: #F3F5F8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .pilot-hero { padding: 80px 24px; } }
        @media (min-width: 1024px) { .pilot-hero { padding: 80px 40px; } }
        @media (min-width: 1440px) { .pilot-hero { padding: 80px 120px; } }
        .pilot-hero h1 { color: #1A2A4A; font-size: 34px; font-weight: 750; line-height: 1.2; margin: 0 0 24px 0; }
        @media (min-width: 768px) { .pilot-hero h1 { font-size: 48px; } }
        .pilot-hero p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0; max-width: 800px; }
        .pilot-hero a { display: inline-block; background-color: #1A2A4A; color: #fff; padding: 12px 32px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; }
        .pilot-eligibility { background-color: #FAFAF8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .pilot-eligibility { padding: 80px 24px; } }
        @media (min-width: 1024px) { .pilot-eligibility { padding: 80px 40px; } }
        @media (min-width: 1440px) { .pilot-eligibility { padding: 80px 120px; } }
        .pilot-eligibility-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin: 0 0 26px 0; }
        .pilot-eligibility h2 { color: #1A2A4A; font-size: 25px; font-weight: 700; line-height: 1.2; margin: 0 0 30px 0; }
        @media (min-width: 768px) { .pilot-eligibility h2 { font-size: 30px; } }
        .pilot-eligibility p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0; }
        .pilot-benefits { background-color: #EEF2F6; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .pilot-benefits { padding: 80px 24px; } }
        @media (min-width: 1024px) { .pilot-benefits { padding: 80px 40px; } }
        @media (min-width: 1440px) { .pilot-benefits { padding: 80px 120px; } }
        .pilot-benefits-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin: 0 0 32px 0; }
        .pilot-benefits-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 1024px) { .pilot-benefits-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
        .pilot-benefit-card { background-color: #fff; border: 1px solid #D8DEE8; border-radius: 14px; padding: 20px; }
        @media (max-width: 767px) { .pilot-benefit-card:nth-child(1) { min-height: 150px; } .pilot-benefit-card:nth-child(2), .pilot-benefit-card:nth-child(3) { min-height: 105px; } }
        @media (min-width: 1024px) { .pilot-benefit-card { height: 210px; } }
        .pilot-benefit-card h3 { color: #1A2A4A; font-size: 18px; font-weight: 700; margin: 0 0 12px 0; }
        .pilot-benefit-card p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0; }
        .pilot-timeline { background-color: #FAFAF8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .pilot-timeline { padding: 80px 24px; } }
        @media (min-width: 1024px) { .pilot-timeline { padding: 80px 40px; } }
        @media (min-width: 1440px) { .pilot-timeline { padding: 80px 120px; } }
        .pilot-timeline-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin: 0 0 32px 0; }
        .pilot-timeline-grid { display: flex; flex-direction: column; gap: 14px; }
        @media (min-width: 1024px) { .pilot-timeline-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; } .pilot-timeline-grid .pilot-timeline-card:nth-child(5) { grid-column: 1; } }
        .pilot-timeline-card { background-color: #fff; border: 1px solid #D8DEE8; border-radius: 14px; padding: 16px; display: flex; align-items: center; gap: 16px; min-height: 82px; }
        @media (min-width: 1024px) { .pilot-timeline-card { min-height: 94px; padding: 20px; } }
        .pilot-timeline-circle { width: 40px; height: 40px; background-color: #1A2A4A; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 13px; font-weight: 700; color: #fff; }
        .pilot-timeline-label { color: #1A2A4A; font-size: 18px; font-weight: 700; margin: 0; line-height: 1.2; }
        .pilot-privacy { background-color: #F7F5F0; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .pilot-privacy { padding: 80px 24px; } }
        @media (min-width: 1024px) { .pilot-privacy { padding: 80px 40px; } }
        @media (min-width: 1440px) { .pilot-privacy { padding: 80px 120px; } }
        .pilot-privacy-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin: 0 0 24px 0; }
        .pilot-privacy p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0; }
        .pilot-privacy-links { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 32px; }
        .pilot-privacy-links a { color: #1A2A4A; font-size: 15px; font-weight: 700; text-decoration: underline; }
        .pilot-faqs { background-color: #FAFAF8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .pilot-faqs { padding: 80px 24px; } }
        @media (min-width: 1024px) { .pilot-faqs { padding: 80px 40px; } }
        @media (min-width: 1440px) { .pilot-faqs { padding: 80px 120px; } }
        .pilot-faqs-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin: 0 0 32px 0; }
        .pilot-faq-item { background-color: #fff; border: 1px solid #D8DEE8; border-radius: 10px; padding: 20px; margin-bottom: 14px; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; min-height: 64px; }
        .pilot-faq-text { color: #1A1A1A; font-size: 15px; font-weight: 600; line-height: 1.6; flex: 1; text-align: left; }
        .pilot-faq-icon { color: #1A2A4A; font-size: 22px; font-weight: 700; flex-shrink: 0; }
        .pilot-cta { background-color: #EEF2F6; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .pilot-cta { padding: 80px 24px; } }
        @media (min-width: 1024px) { .pilot-cta { padding: 80px 40px; } }
        @media (min-width: 1440px) { .pilot-cta { padding: 80px 120px; } }
        .pilot-cta-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin: 0 0 32px 0; }
        .pilot-cta a { display: inline-block; background-color: #1A2A4A; color: #fff; padding: 12px 32px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; }
      `}</style>

      <section className="pilot-hero" id="hero">
        <h1>Join the ROOTS-AI™ Free Beta</h1>
        <p>The beta explores whether a structured, non-diagnostic assessment can help people understand self-reported patterns involving weight resistance, energy, sleep, stress and appetite.</p>
        <a href="/assessment">Check Eligibility</a>
      </section>

      <section className="pilot-eligibility" id="eligibility">
        <div className="pilot-eligibility-eyebrow">ELIGIBILITY</div>
        <h2>Adults aged 18 or older</h2>
        <p>Eligibility: adults aged 18 or older unless a separately approved local workflow applies.</p>
      </section>

      <section className="pilot-benefits" id="benefits">
        <div className="pilot-benefits-eyebrow">BENEFITS</div>
        <div className="pilot-benefits-grid">
          <div className="pilot-benefit-card">
            <h3>Assessment</h3>
            <p>The beta explores whether a structured, non-diagnostic assessment can help people understand self-reported patterns involving weight resistance, energy, sleep, stress and appetite.</p>
          </div>
          <div className="pilot-benefit-card">
            <h3>Educational report</h3>
            <p>The report is educational and is not medical care.</p>
          </div>
          <div className="pilot-benefit-card">
            <h3>Free beta cohort</h3>
            <p>No payment is required for the approved beta cohort.</p>
          </div>
        </div>
      </section>

      <section className="pilot-timeline" id="timeline">
        <div className="pilot-timeline-eyebrow">WHAT HAPPENS AFTER JOINING</div>
        <div className="pilot-timeline-grid">
          <div className="pilot-timeline-card">
            <div className="pilot-timeline-circle">1</div>
            <h4 className="pilot-timeline-label">Check Eligibility</h4>
          </div>
          <div className="pilot-timeline-card">
            <div className="pilot-timeline-circle">2</div>
            <h4 className="pilot-timeline-label">Consent-aware entry</h4>
          </div>
          <div className="pilot-timeline-card">
            <div className="pilot-timeline-circle">3</div>
            <h4 className="pilot-timeline-label">Complete Assessment</h4>
          </div>
          <div className="pilot-timeline-card">
            <div className="pilot-timeline-circle">4</div>
            <h4 className="pilot-timeline-label">Receive Educational Report</h4>
          </div>
          <div className="pilot-timeline-card">
            <div className="pilot-timeline-circle">5</div>
            <h4 className="pilot-timeline-label">Optional Beta Feedback</h4>
          </div>
        </div>
      </section>

      <section className="pilot-privacy" id="privacy-consent">
        <div className="pilot-privacy-eyebrow">PRIVACY / CONSENT</div>
        <p>Participation is voluntary and may be withdrawn according to the Privacy Notice.</p>
        <p>Beta feedback may be used to improve usability; research use requires separate explicit consent.</p>
        <p>Research participation is optional and requires separate explicit consent. Service access is not conditioned on research consent.</p>
        <div className="pilot-privacy-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/medical-disclaimer">Medical Disclaimer</a>
        </div>
      </section>

      <section className="pilot-faqs" id="faqs">
        <div className="pilot-faqs-eyebrow">FAQS</div>
        {[
          'Eligibility: adults aged 18 or older unless a separately approved local workflow applies.',
          'No payment is required for the approved beta cohort.',
          'The report is educational and is not medical care.',
          'Participation is voluntary and may be withdrawn according to the Privacy Notice.',
          'Beta feedback may be used to improve usability; research use requires separate explicit consent.'
        ].map((item, i) => (
          <div key={i} className="pilot-faq-item" onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}>
            <div className="pilot-faq-text">{item}</div>
            <div className="pilot-faq-icon">{openFAQ === i ? '−' : '+'}</div>
          </div>
        ))}
      </section>

      <section className="pilot-cta" id="cta">
        <div className="pilot-cta-eyebrow">BEGIN ELIGIBILITY / ASSESSMENT</div>
        <a href="/assessment">Check Eligibility</a>
      </section>
    </div>
  );
}
