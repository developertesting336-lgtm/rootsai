'use client';

import React from 'react';
import Link from 'next/link';
import '../ai-disclaimer.css';

export default function AiDisclaimerPage() {
  return (
    <div className="ai-disclaimer-page">

      {/* TITLE SECTION */}
      <div className="title-section">
        <h1>AI Disclaimer</h1>
        <p>Effective date: 21 July 2026 • C-04 Version: 1.0.0</p>
      </div>

      {/* BODY SECTION */}
      <div className="body-section">
        {/* SUMMARY BOX */}
        <div className="summary-box">
          <h2>AI does not calculate or change scores</h2>
          <p>
            The model is not permitted to calculate or change scores, diagnose disease, prescribe treatment,
            interpret laboratory results or invent participant facts.
          </p>
        </div>

        {/* AI DISCLAIMER SECTION */}
        <div className="disclaimer-section">
          <h2>AI Disclaimer</h2>

          <p className="disclaimer-paragraph">
            ROOTS-AI™ uses deterministic rules to calculate questionnaire scores, classifications, drivers, data-quality
            indicators and eligible content.
          </p>

          <p className="disclaimer-paragraph">
            An AI language model may assist in expressing approved information clearly.
          </p>

          <p className="disclaimer-paragraph">
            The model is not permitted to calculate or change scores, diagnose disease, prescribe treatment, interpret laboratory results or invent participant facts.
          </p>

          <p className="disclaimer-paragraph">
            AI-assisted text can be incomplete or imperfect; fixed validation, logging and fallback rules are applied.
          </p>

          <p className="disclaimer-paragraph">
            Review the underlying answers and limitations, and consult a qualified professional for medical decisions.
          </p>
        </div>

        {/* VERSIONING SECTION */}
        <div className="versioning-box">
          <h2>Versioning</h2>
          <p>Source: C-04 Website Content & Legal Copy Pack</p>
          <p>Version: 1.0.0 • Effective date: 21 July 2026</p>
        </div>

        {/* RELATED SECTION */}
        <div className="related-section">
          <h2>Related</h2>
          <div className="related-buttons">
            <Link href="/medical-disclaimer" className="related-button">Medical Disclaimer</Link>
            <Link href="/privacy" className="related-button">Privacy</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
