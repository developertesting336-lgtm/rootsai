'use client';

import React from 'react';
import Link from 'next/link';
import './terms.css';

export default function TermsPage() {
  const sections = [
    { id: 'agreement-eligibility', title: '1. Agreement and eligibility', content: 'By accessing ROOTS-AI™, you agree to these Terms and the Privacy Notice. You must be at least 18 years old for the production launch unless a separately approved minor workflow applies. Do not use the service if you cannot lawfully agree.' },
    { id: 'educational-service', title: '2. Educational service', content: 'ROOTS-AI™ provides educational wellness information from self-reported answers. It is not a medical device, healthcare provider, diagnostic service, clinical assessment, prognosis or emergency service.' },
    { id: 'no-medical-reliance', title: '3. No medical reliance', content: 'Do not use ROOTS-AI™ to diagnose, treat or prevent disease, make medication decisions, delay professional care or respond to an emergency. Seek qualified professional advice for medical concerns.' },
    { id: 'your-information', title: '4. Your information', content: 'Provide information you are authorized to submit and that reasonably reflects your experience. You are responsible for reviewing your submitted answers and protecting access to your email and Magic Link.' },
    { id: 'reports-scores', title: '5. Reports and scores', content: 'Scores are proprietary questionnaire indicators. They are not clinically validated probabilities of disease, future outcomes or treatment response. Reports may contain AI-assisted wording governed by deterministic outputs and fixed safety rules.' },
    { id: 'acceptable-use', title: '6. Acceptable use', content: 'Do not bypass security, access another person\'s data, scrape the service, introduce malware, reverse engineer confidential scoring logic, misuse reports for employment or insurance decisions, or represent output as a diagnosis.' },
    { id: 'intellectual-property', title: '7. Intellectual property', content: 'ROOTS-AI™ software, content, scoring methods, prompts, designs and trademarks belong to ROOTS AI HEALTH SYSTEMS, Inc. or its licensors. Personal use of your own report is permitted; no other licence is granted.' },
    { id: 'availability-beta', title: '8. Availability and beta', content: 'The service may change, pause or contain beta limitations. We may correct errors, suspend unsafe activity and preserve historical report versions. Future capabilities marked Coming Soon are not part of the current service.' },
    { id: 'disclaimers', title: '9. Disclaimers', content: 'To the extent permitted by law, the service is provided without a guarantee of uninterrupted availability, fitness for a clinical purpose or a particular health or weight outcome. Nothing excludes rights that cannot lawfully be excluded.' },
    { id: 'limitation', title: '10. Limitation', content: 'To the extent permitted by law, ROOTS-AI™ is not liable for decisions made by treating educational output as medical advice, indirect loss or loss caused by unauthorized account access outside our reasonable control. Applicable consumer rights remain unaffected.' },
    { id: 'suspension-termination', title: '11. Suspension and termination', content: 'You may stop using the service. We may suspend access for security, unlawful use or material breach. Data handling after termination follows the Privacy Notice and retention schedule.' },
    { id: 'governing-framework', title: '12. Governing framework', content: 'These Terms are governed by applicable law determined by the service arrangement and user location. Mandatory consumer and data-protection rights continue to apply.' },
    { id: 'contact-changes', title: '13. Contact and changes', content: 'Questions may be submitted through the Contact page. The current version and effective date appear on this page. Continued use after a notified change constitutes acceptance where permitted by law.' },
  ];

  return (
    <div className="terms-page">

      {/* HEADER SECTION */}
      <div className="header-section">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-sub">Effective date: 21 July 2026 • Version: 1.0</p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="main-container">
        {/* SIDEBAR (Desktop only) */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Contents</h2>
          {sections.map(section => (
            <a key={section.id} href={`#${section.id}`} className="sidebar-link">
              {section.title}
            </a>
          ))}
        </aside>

        {/* BODY CONTENT */}
        <section className="body-section">
          {sections.map(section => (
            <div key={section.id}>
              <h2 id={section.id} className="legal-section-title">{section.title}</h2>
              <p className="legal-body">{section.content}</p>
            </div>
          ))}

          <p className="legal-note">
            Effective date: 21 July 2026 • Version: 1.0. This document is designed with reference to jurisdictional consumer protection and contract law frameworks. It does not represent certification of compliance.
          </p>

          {/* CONTACT CTA */}
          <div className="contact-cta">
            <h3 className="contact-cta-title">Questions about these Terms?</h3>
            <p className="contact-cta-desc">Use the secure Contact page to submit questions or concerns.</p>
            <Link href="/contact" className="contact-cta-btn">
              Contact Us
            </Link>
          </div>
        </section>
      </div>

    </div>
  );
}
