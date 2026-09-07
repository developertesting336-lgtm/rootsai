'use client';
import Link from 'next/link';

export default function ExampleReportPage() {
  const sections = [
    { id: 1, title: 'Cover Page', content: 'ROOTS Biological Intelligence Report™\nExample Participant • Fictional sample data\nReport ID: EXAMPLE-001 • Generated: 21 July 2026 • Report version: 1.0.0\nEducational — Not a Diagnosis' },
    { id: 2, title: 'Executive Summary', content: 'Your answers suggest a multi-factor pattern led by Stress Load, Sleep Recovery and Metabolic Resistance. Current strengths include readiness for one small change and a supportive environment. Confidence is High because the assessment was complete and internally consistent.' },
    { id: 3, title: 'ROOTS Biological State™', content: '61/100 — Strained. This is a questionnaire summary, not a medical risk probability.' },
    { id: 4, title: 'ROOTS Opportunity Score™', content: '69.5/100 — a proprietary indicator of modifiable capacity suggested by the current pattern.' },
    { id: 5, title: 'ROOTS Confidence™', content: '84/100 — High; complete answers, high self-confidence and consistent domain responses.' },
    { id: 6, title: 'Key Drivers', content: 'Stress Load 75; Sleep Recovery 68; Metabolic Resistance 62.' },
    { id: 7, title: 'Seven-Domain Score Breakdown', isChart: true, content: 'MR 62; HS 48; SR 68; CH 55; SL 75; IB 58; BS 61.' },
    { id: 8, title: 'Biological Triad™', content: 'Stress Load + Sleep Recovery + consistent meal timing as the top protective factor.' },
    { id: 9, title: 'Future Projection', content: 'If unchanged, stress and sleep signals may continue to influence energy and eating patterns; this is not a prognosis.' },
    { id: 10, title: '90-Day Roadmap', content: 'Month 1: consistent wake time. Month 2: three post-meal walks weekly. Month 3: reinforce the most sustainable routine.' },
    { id: 11, title: 'Nutrition Priorities', content: 'Use regular meals; include protein and fibre in one main meal; keep hydration consistent.' },
    { id: 12, title: 'Action Priorities', content: '1) fixed wake-time window; 2) ten-minute walks; 3) two-minute daily pause; 4) plan one balanced meal.' },
    { id: 13, title: 'What Is Going Well', content: 'High readiness, supportive home environment and some regular meal timing.' },
    { id: 14, title: 'Specific Concerns', content: 'Persistent fatigue, sleep disruption or unusual thirst should be discussed with a qualified professional.' },
    { id: 15, title: 'Suggested Laboratory Discussion', content: 'Ask whether glucose regulation, thyroid or other evaluation is appropriate for your history; ROOTS-AI™ does not order or interpret tests.' },
    { id: 16, title: 'Participant Answers', content: 'Display the immutable 13-module response snapshot.' },
    { id: 17, title: 'Biological Card', content: 'State 61 • Opportunity 69.5 • Recovery 63.0 • Confidence High • Rules v1.0.0.' },
    { id: 18, title: 'Final Word', content: 'Your answers are a starting point, not a verdict. Begin with one realistic action and observe what changes.' },
    { id: 19, title: 'Medical and AI Disclaimer', content: 'ROOTS-AI™ provides educational wellness information based on self-reported answers. It is not a medical device, diagnostic service, clinical assessment, prognosis or substitute for a qualified healthcare professional. It does not provide medical treatment or medication instructions. Scores are proprietary questionnaire indicators and are not validated probabilities of disease or future outcomes. AI may assist with wording, but all scores and classifications are calculated by deterministic rules. If you have severe, sudden or worsening symptoms, or believe you may be in immediate danger, contact local emergency services or a qualified healthcare professional.' },
  ];

  const chartData = [
    { label: 'MR 62/100 — Strained', value: 62, color: '#E67E22' },
    { label: 'HS 48/100 — Compensating', value: 48, color: '#F39C12' },
    { label: 'SR 68/100 — Strained', value: 68, color: '#E67E22' },
    { label: 'CH 55/100 — Strained', value: 55, color: '#E67E22' },
    { label: 'SL 75/100 — Dysregulated', value: 75, color: '#C0392B' },
    { label: 'IB 58/100 — Strained', value: 58, color: '#E67E22' },
    { label: 'BS 61/100 — Strained', value: 61, color: '#E67E22' },
  ];

  const css = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    a { text-decoration: none; color: inherit; }
    .intro { background: #F3F5F8; padding: clamp(32px, 8vw, 64px) 16px; text-align: center; }
    .badge-example { display: inline-block; background: #E8EEF5; color: #2A4060; padding: clamp(6px, 1vw, 10px) clamp(12px, 2vw, 16px); border-radius: 15px; font-size: clamp(11px, 2vw, 12px); font-weight: 700; letter-spacing: 0.8px; margin-bottom: clamp(16px, 3vw, 24px); }
    .intro h1 { font-size: 34px; font-weight: 750; color: #1A2A4A; margin-bottom: 24px; line-height: 1.2; }
    .intro p { font-size: 16px; color: #1A1A1A; max-width: 600px; margin: 0 auto; }
    .layout { display: grid; gap: clamp(24px, 4vw, 32px); grid-template-columns: 1fr; padding: clamp(32px, 8vw, 64px) 16px; max-width: 1440px; margin: 0 auto; }
    .contents { background: #fff; border: 1px solid #D8DEE8; border-radius: clamp(8px, 2vw, 12px); padding: clamp(16px, 3vw, 24px); position: relative; height: auto; max-height: none; overflow-y: visible; }
    .contents h3 { font-size: 18px; color: #1A2A4A; margin-bottom: 16px; font-weight: 700; }
    .contents a { display: block; font-size: 13px; color: #2A4060; padding: 8px 0; line-height: 1.5; }
    .contents a:hover { opacity: 0.8; }
    .report-viewer { display: flex; flex-direction: column; gap: clamp(16px, 3vw, 24px); }
    .section-card { background: #fff; border: 1px solid #D8DEE8; border-radius: clamp(8px, 2vw, 12px); padding: clamp(16px, 3vw, 24px); }
    .section-num { font-size: 12px; color: #6B7280; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px; }
    .section-title { font-size: 19px; color: #1A2A4A; font-weight: 700; margin-bottom: 12px; }
    .section-content { font-size: 16px; color: #1A1A1A; line-height: 1.6; white-space: pre-wrap; }
    .bar-container { margin-top: 16px; }
    .bar-item { margin-bottom: 16px; }
    .bar-label { font-size: 13px; color: #1A1A1A; font-weight: 600; margin-bottom: 8px; }
    .bar-bg { width: 100%; height: 10px; background: #E8EDF2; border-radius: 5px; overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 5px; }
    .cta { background: #EEF2F6; padding: clamp(32px, 8vw, 64px) 16px; text-align: center; }
    .cta h2 { font-size: 26px; color: #1A2A4A; margin-bottom: 24px; font-weight: 700; }
    .cta-btn { background: #1A2A4A; color: #FFF; padding: clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px); border-radius: 10px; font-weight: 700; font-size: clamp(14px, 3vw, 15px); cursor: pointer; border: none; display: inline-block; }
    .footer-disclaimer { background: #fff; padding: clamp(24px, 6vw, 48px) 16px; text-align: center; }
    .disclaimer-text { font-size: 14px; color: #6B7280; line-height: 1.6; max-width: 1200px; margin: 0 auto; }
    @media (min-width: 768px) {
      .intro h1 { font-size: 48px; }
      .cta h2 { font-size: 30px; }
      .section-title { font-size: 21px; }
      .contents a { font-size: 14px; }
      .contents { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .contents h3 { grid-column: 1 / -1; text-align: center; }
      .intro { padding-left: 24px; padding-right: 24px; }
      .layout { padding-left: 24px; padding-right: 24px; }
      .cta { padding-left: 24px; padding-right: 24px; }
      .footer-disclaimer { padding-left: 24px; padding-right: 24px; }
    }
    @media (min-width: 1024px) {
      .layout { grid-template-columns: 210px 1fr; }
      .contents { display: block; position: sticky; top: 80px; height: fit-content; max-height: calc(100vh - 100px); overflow-y: auto; }
      .contents h3 { text-align: left; }
      .contents a { display: block; }
      .intro { padding-left: 40px; padding-right: 40px; }
      .layout { padding-left: 40px; padding-right: 40px; }
      .cta { padding-left: 40px; padding-right: 40px; }
      .footer-disclaimer { padding-left: 40px; padding-right: 40px; }
    }
    @media (min-width: 1440px) {
      .layout { grid-template-columns: 240px 1fr; }
      .intro { padding-left: 120px; padding-right: 120px; }
      .layout { padding-left: 120px; padding-right: 120px; }
      .cta { padding-left: 120px; padding-right: 120px; }
      .footer-disclaimer { padding-left: 120px; padding-right: 120px; }
    }
  `;

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: "'Inter', Arial, sans-serif" }}>
      <style>{css}</style>

      <section className="intro">
        <div className="badge-example">EXAMPLE ONLY</div>
        <h1>See What Your Biological Report Looks Like</h1>
        <p>Explore the full 19-section structure using fictional sample data. The example does not represent a real person or a clinical result.</p>
      </section>

      <div className="layout">
        <div className="contents">
          <h3>Contents</h3>
          {sections.map((section) => (
            <a key={section.id} href={`#section-${section.id}`}>
              {section.id}. {section.title}
            </a>
          ))}
        </div>

        <div className="report-viewer">
          {sections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="section-card">
              <div className="section-num">{String(section.id).padStart(2, '0')}</div>
              <h2 className="section-title">{section.title}</h2>
              {section.isChart && section.id === 7 ? (
                <div>
                  <p className="section-content">{section.content}</p>
                  <div className="bar-container">
                    {chartData.map((item, idx) => (
                      <div key={idx} className="bar-item">
                        <div className="bar-label">{item.label}</div>
                        <div className="bar-bg">
                          <div className="bar-fill" style={{ width: `${item.value}%`, backgroundColor: item.color }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="section-content">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="cta">
        <h2>Ready to start your own assessment?</h2>
        <Link href="/assessment">
          <button className="cta-btn">Start Your Assessment</button>
        </Link>
      </section>

      <section className="footer-disclaimer">
        <p className="disclaimer-text">
          This example uses fictional sample data and is provided for educational illustration only. ROOTS-AI™ provides educational wellness information and does not diagnose or treat medical conditions.
        </p>
      </section>
    </div>
  );
}
