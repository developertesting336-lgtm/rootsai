import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Example Report | ROOTS-AI',
  description:
    'View an example ROOTS-AI assessment report with fictional sample data showing all 19 sections including scores, domain breakdowns, roadmap, and recommendations.',
  openGraph: {
    title: 'Example Report | ROOTS-AI',
    description: 'Explore a complete example ROOTS-AI report structure',
  },
};

export default function ExampleReportPage() {
  const sections = [
    {
      id: 1,
      title: 'Cover Page',
      content:
        'ROOTS Biological Intelligence Report™ • Example Participant • Report ID: EXAMPLE-001 • Generated: 21 July 2026 • Educational — Not a Diagnosis',
    },
    {
      id: 2,
      title: 'Executive Summary',
      content:
        'Your answers suggest a multi-factor pattern led by Stress Load, Sleep Recovery and Metabolic Resistance. Current strengths include readiness for one small change and a supportive environment. Confidence is High because the assessment was complete and internally consistent.',
    },
    {
      id: 3,
      title: 'ROOTS Biological State™',
      content: '61/100 — Strained. This is a questionnaire summary, not a medical risk probability.',
    },
    {
      id: 4,
      title: 'ROOTS Opportunity Score™',
      content: '69.5/100 — a proprietary indicator of modifiable capacity suggested by the current pattern.',
    },
    {
      id: 5,
      title: 'ROOTS Confidence™',
      content:
        '84/100 — High; complete answers, high self-confidence and consistent domain responses.',
    },
    {
      id: 6,
      title: 'Key Drivers',
      content: 'Stress Load 75; Sleep Recovery 68; Metabolic Resistance 62.',
    },
    {
      id: 7,
      title: 'Seven-Domain Score Breakdown',
      content:
        'MR 62; HS 48; SR 68; CH 55; SL 75; IB 58; BS 61. (Metabolic Resistance, Hormonal Status, Sleep Recovery, Cellular Health, Stress Load, Immune Balance, Biological State)',
      domains: [
        { label: 'MR (Metabolic Resistance)', score: 62, status: 'Strained', color: 'bg-status-warning' },
        { label: 'HS (Hormonal Status)', score: 48, status: 'Compensating', color: 'bg-status-warning' },
        { label: 'SR (Sleep Recovery)', score: 68, status: 'Strained', color: 'bg-status-warning' },
        { label: 'CH (Cellular Health)', score: 55, status: 'Strained', color: 'bg-status-warning' },
        { label: 'SL (Stress Load)', score: 75, status: 'Dysregulated', color: 'bg-status-error' },
        { label: 'IB (Immune Balance)', score: 58, status: 'Strained', color: 'bg-status-warning' },
        { label: 'BS (Biological State)', score: 61, status: 'Strained', color: 'bg-status-warning' },
      ],
    },
    {
      id: 8,
      title: 'Biological Triad™',
      content:
        'Stress Load + Sleep Recovery + consistent meal timing as the top protective factor.',
    },
    {
      id: 9,
      title: 'Future Projection',
      content:
        'If unchanged, stress and sleep signals may continue to influence energy and eating patterns; this is not a prognosis.',
    },
    {
      id: 10,
      title: '90-Day Roadmap',
      content:
        'Month 1: consistent wake time. Month 2: three post-meal walks weekly. Month 3: reinforce the most sustainable routine.',
    },
    {
      id: 11,
      title: 'Nutrition Priorities',
      content:
        'Use regular meals; include protein and fibre in one main meal; keep hydration consistent.',
    },
    {
      id: 12,
      title: 'Action Priorities',
      content:
        '1) fixed wake-time window; 2) ten-minute walks; 3) two-minute daily pause; 4) plan one balanced meal.',
    },
    {
      id: 13,
      title: 'What Is Going Well',
      content:
        'High readiness, supportive home environment and some regular meal timing.',
    },
    {
      id: 14,
      title: 'Specific Concerns',
      content:
        'Persistent fatigue, sleep disruption or unusual thirst should be discussed with a qualified professional.',
    },
    {
      id: 15,
      title: 'Suggested Laboratory Discussion',
      content:
        'Ask whether glucose regulation, thyroid or other evaluation is appropriate for your history; ROOTS-AI™ does not order or interpret tests.',
    },
    {
      id: 16,
      title: 'Participant Answers',
      content: 'Display the immutable 13-module response snapshot with all answered questions.',
    },
    {
      id: 17,
      title: 'Biological Card',
      content:
        'State 61 • Opportunity 69.5 • Recovery 63.0 • Confidence High • Rules v1.0.0.',
    },
    {
      id: 18,
      title: 'Final Word',
      content:
        'Your answers are a starting point, not a verdict. Begin with one realistic action and observe what changes.',
    },
    {
      id: 19,
      title: 'Medical and AI Disclaimer',
      content:
        'ROOTS-AI™ provides educational wellness information based on self-reported answers. It is not a medical device, diagnostic service, clinical assessment, prognosis or substitute for a qualified healthcare professional. It does not provide medical treatment or medication instructions. Scores are proprietary questionnaire indicators and are not validated probabilities of disease or future outcomes. AI may assist with wording, but all scores and classifications are calculated by deterministic rules. If you have severe, sudden or worsening symptoms, or believe you may be in immediate danger, contact local emergency services or a qualified healthcare professional.',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="inline-block bg-blue-100 text-roots-navy-900 font-bold text-xs px-4 py-2 rounded-full mb-6">
            EXAMPLE ONLY
          </div>
          <h1 className="text-5xl font-bold mb-6">See What Your Biological Report Looks Like</h1>
          <p className="text-xl text-roots-light">
            Explore the full 19-section structure using fictional sample data. The example does not represent a real
            person or a clinical result.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Contents Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white border border-roots-border rounded-xl p-6 sticky top-24 max-h-96 overflow-y-auto">
                <h3 className="text-lg font-bold text-roots-navy-900 mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#section-${section.id}`}
                      className="block text-sm text-roots-navy-900 hover:underline"
                    >
                      {section.id}. {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Report Content */}
            <div className="lg:col-span-3 space-y-6">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  className="bg-white border border-roots-border rounded-xl p-8"
                >
                  <p className="text-xs font-bold text-roots-muted uppercase tracking-wider mb-2">
                    Section {section.id.toString().padStart(2, '0')}
                  </p>
                  <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">{section.title}</h2>

                  {section.domains ? (
                    <div className="space-y-4">
                      <p className="text-base text-roots-charcoal mb-6">{section.content}</p>
                      {section.domains.map((domain, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-roots-navy-900">{domain.label}</span>
                            <span className="text-sm font-bold text-roots-charcoal">
                              {domain.score}/100 — {domain.status}
                            </span>
                          </div>
                          <div className="w-full h-2 bg-roots-light rounded-full overflow-hidden">
                            <div
                              className={`h-full ${domain.color} rounded-full transition-all`}
                              style={{ width: `${domain.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base text-roots-charcoal leading-relaxed">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-roots-navy-900 mb-8">Ready to start your own assessment?</h2>
          <Link href="/assessment" className="btn btn-primary">
            Start Your Assessment
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-roots-border">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-roots-muted">
            This example uses fictional sample data and is provided for educational illustration only. ROOTS-AI™
            provides educational wellness information and does not diagnose or treat medical conditions.
          </p>
        </div>
      </section>
    </>
  );
}
