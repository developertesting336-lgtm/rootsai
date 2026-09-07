'use client';

import React from 'react';
import Link from 'next/link';
import '../medical-disclaimer.css';

export default function MedicalDisclaimerPage() {
  return (
    <div className="medical-disclaimer-page">

      {/* TITLE SECTION */}
      <div className="title-section">
        <h1>Medical Disclaimer</h1>
        <p>Effective date: 21 July 2026 • C-04 Version: 1.0.0</p>
      </div>

      {/* BODY SECTION */}
      <div className="body-section">
        {/* CALLOUT BOX */}
        <div className="callout-box">
          <p>
            ROOTS-AI™ provides educational wellness information based primarily on
            self-reported answers. It is not a medical device, doctor, healthcare provider,
            diagnostic test, clinical risk assessment, prognosis or treatment service.
          </p>
        </div>

        {/* DISCLAIMER PARAGRAPHS */}
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1A2A4A', marginBottom: '28px' }}>Medical Disclaimer</h2>

        <p className="disclaimer-paragraph">
          ROOTS-AI™ provides educational wellness information based primarily on
          self-reported answers. It is not a medical device, doctor, healthcare provider,
          diagnostic test, clinical risk assessment, prognosis or treatment service.
        </p>

        <p className="disclaimer-paragraph">
          It does not establish a clinician-patient relationship and does not replace medical
          history, examination, laboratory testing or professional judgment.
        </p>

        <p className="disclaimer-paragraph">
          Do not start, stop or change medication, supplements, diet, exercise or treatment
          because of a ROOTS-AI™ report without appropriate professional advice.
        </p>

        <p className="disclaimer-paragraph">
          Questionnaire scores are proprietary indicators and are not validated
          probabilities of disease or future outcomes.
        </p>

        <p className="disclaimer-paragraph">
          Persistent, severe, sudden or worsening symptoms require appropriate professional
          evaluation.
        </p>

        <p className="disclaimer-paragraph">
          If you believe you may be in immediate danger, contact local emergency services.
        </p>

        {/* EMERGENCY BOX */}
        <div className="emergency-box">
          <h2>Emergency direction</h2>
          <p>
            If you believe you may be in immediate danger, contact local emergency
            services.
          </p>
        </div>

        {/* RELATED SECTION */}
        <div className="related-section">
          <h2>Related</h2>
          <div className="related-buttons">
            <Link href="/terms" className="related-button">Terms</Link>
            <Link href="/ai-disclaimer" className="related-button">AI Disclaimer</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
