'use client';

import React from 'react';
import Link from 'next/link';
import './privacy.css';

export default function PrivacyPage() {

  const sections = [
    { id: 's1', title: '1. Who we are', content: 'ROOTS AI HEALTH SYSTEMS, Inc. ("ROOTS-AI™", "we", "us") provides an educational biological assessment and reporting service. This notice explains how we handle personal data when you use the Phase 1 web platform.' },
    { id: 's2', title: '2. Data we collect', content: 'Account and contact information; assessment answers; physical measurements you provide; consent records; generated scores and reports; device, security and audit information; support enquiries; and limited public-site analytics where consent is required. We do not intentionally collect emergency information through the assessment.' },
    { id: 's3', title: '3. Why we use it', content: 'To provide, secure and improve the service; save and resume assessments; generate and deliver reports; respond to enquiries; meet legal and security obligations; and conduct separately consented research or pilot analysis.' },
    { id: 's4', title: '4. Sensitive data', content: 'Assessment answers and identifiable wellness information may be sensitive personal data. We process them only for stated purposes and with appropriate consent or other lawful authority required by applicable law.' },
    { id: 's5', title: '5. Research', content: 'Research participation is optional and requires separate explicit consent. Service access is not conditioned on research consent. Approved research exports are minimized and pseudonymized or de-identified; direct identifiers, authentication data and report narratives are excluded.' },
    { id: 's6', title: '6. Providers and transfers', content: 'We may use approved hosting, authentication, email, AI-language and security providers under written safeguards. Identifiable assessment data is not sent to an AI provider unless the approved configuration, agreements and minimization controls permit it. Cross-border transfers are reviewed and protected as required by applicable law.' },
    { id: 's7', title: '7. AI use', content: 'Deterministic rules calculate scores and classifications. AI may assist with approved explanatory wording using minimized structured inputs. AI does not diagnose, prescribe or change scores.' },
    { id: 's8', title: '8. Retention', content: 'Assessment, report, consent, audit and security records are retained according to the approved retention schedule and legal needs. Data is deleted or de-identified when no longer required, subject to security backups and legal obligations.' },
    { id: 's9', title: '9. Security', content: 'We use access controls, MFA for privileged roles, encryption in transit and at rest where supported, private report storage, audit logging, backups and security testing. No system can guarantee absolute security.' },
    { id: 's10', title: '10. Your choices and rights', content: 'Depending on applicable law, you may request access, correction, deletion, restriction, withdrawal of consent, information about processing or a copy of relevant data. Withdrawal does not affect earlier lawful processing and may limit service functions that require the data.' },
    { id: 's11', title: '11. Cookies and analytics', content: 'Essential technologies support authentication and security. Optional public-site analytics are used only where permitted and consented. Assessment, report, authentication and admin routes do not use advertising pixels, session replay or behavioural advertising.' },
    { id: 's12', title: '12. Children', content: 'Production launch is intended for adults aged 18 or older. Participation below 18 is not enabled unless ROOTS-AI™ approves and implements a jurisdiction-specific consent and guardian workflow.' },
    { id: 's13', title: '13. Contact', content: 'Submit privacy questions or rights requests through the secure Contact page and choose "Privacy". We may verify identity before fulfilling a request.' },
    { id: 's14', title: '14. Updates', content: 'We may update this notice when the service or law changes. The page displays the effective date and version; material changes are communicated where required.' },
  ];

  return (
    <div className="privacy-page">

      {/* HEADER SECTION */}
      <div className="header-section">
        <h1 className="legal-title">Privacy Notice</h1>
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
            Effective date: 21 July 2026 • Version: 1.0. This notice is designed with reference to Malaysia's Personal Data Protection Act 2010 and current official guidance. It does not represent certification of compliance.
          </p>

          {/* RIGHTS CTA */}
          <div className="rights-cta">
            <h3 className="rights-cta-title">Privacy or data-rights request</h3>
            <p className="rights-cta-desc">Use the secure Contact page and choose "Privacy".</p>
            <Link href="/contact" className="rights-cta-btn" style={{ display: 'inline-block' }}>
              Contact Privacy
            </Link>
          </div>
        </section>
      </div>

    </div>
  );
}
