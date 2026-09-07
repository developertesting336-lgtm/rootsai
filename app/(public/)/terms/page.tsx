import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | ROOTS-AI',
  description:
    'ROOTS-AI Terms of Service - Review the legal terms governing your use of our educational biological assessment platform.',
  openGraph: {
    title: 'Terms of Service | ROOTS-AI',
    description: 'ROOTS-AI Terms of Service - Effective July 21, 2026',
    type: 'website',
    url: 'https://roots-ai.com/terms',
  },
};

export default function TermsPage() {
  const sections = [
    {
      id: 'agreement-eligibility',
      title: '1. Agreement and eligibility',
      content:
        'By accessing ROOTS-AI™, you agree to these Terms and the Privacy Notice. You must be at least 18 years old for the production launch unless a separately approved minor workflow applies. Do not use the service if you cannot lawfully agree.',
    },
    {
      id: 'educational-service',
      title: '2. Educational service',
      content:
        'ROOTS-AI™ provides educational wellness information from self-reported answers. It is not a medical device, healthcare provider, diagnostic service, clinical assessment, prognosis or emergency service.',
    },
    {
      id: 'no-medical-reliance',
      title: '3. No medical reliance',
      content:
        'Do not use ROOTS-AI™ to diagnose, treat or prevent disease, make medication decisions, delay professional care or respond to an emergency. Seek qualified professional advice for medical concerns.',
    },
    {
      id: 'your-information',
      title: '4. Your information',
      content:
        'Provide information you are authorized to submit and that reasonably reflects your experience. You are responsible for reviewing your submitted answers and protecting access to your email and Magic Link.',
    },
    {
      id: 'reports-scores',
      title: '5. Reports and scores',
      content:
        'Scores are proprietary questionnaire indicators. They are not clinically validated probabilities of disease, future outcomes or treatment response. Reports may contain AI-assisted wording governed by deterministic outputs and fixed safety rules.',
    },
    {
      id: 'acceptable-use',
      title: '6. Acceptable use',
      content:
        'Do not bypass security, access another person\'s data, scrape the service, introduce malware, reverse engineer confidential scoring logic, misuse reports for employment or insurance decisions, or represent output as a diagnosis.',
    },
    {
      id: 'intellectual-property',
      title: '7. Intellectual property',
      content:
        'ROOTS-AI™ software, content, scoring methods, prompts, designs and trademarks belong to ROOTS AI HEALTH SYSTEMS, Inc. or its licensors. Personal use of your own report is permitted; no other licence is granted.',
    },
    {
      id: 'availability-beta',
      title: '8. Availability and beta',
      content:
        'The service may change, pause or contain beta limitations. We may correct errors, suspend unsafe activity and preserve historical report versions. Future capabilities marked Coming Soon are not part of the current service.',
    },
    {
      id: 'disclaimers',
      title: '9. Disclaimers',
      content:
        'To the extent permitted by law, the service is provided without a guarantee of uninterrupted availability, fitness for a clinical purpose or a particular health or weight outcome. Nothing excludes rights that cannot lawfully be excluded.',
    },
    {
      id: 'limitation',
      title: '10. Limitation',
      content:
        'To the extent permitted by law, ROOTS-AI™ is not liable for decisions made by treating educational output as medical advice, indirect loss or loss caused by unauthorized account access outside our reasonable control. Applicable consumer rights remain unaffected.',
    },
    {
      id: 'suspension-termination',
      title: '11. Suspension and termination',
      content:
        'You may stop using the service. We may suspend access for security, unlawful use or material breach. Data handling after termination follows the Privacy Notice and retention schedule.',
    },
    {
      id: 'governing-framework',
      title: '12. Governing framework',
      content:
        'These Terms are governed by applicable law determined by the service arrangement and user location. Mandatory consumer and data-protection rights continue to apply.',
    },
    {
      id: 'contact-changes',
      title: '13. Contact and changes',
      content:
        'Questions may be submitted through the Contact page. The current version and effective date appear on this page. Continued use after a notified change constitutes acceptance where permitted by law.',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-roots-light py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-roots-navy-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-roots-muted">
            Effective date: July 21, 2026 • Version: 1.0
          </p>
        </div>
      </section>

      {/* Contents */}
      <section className="bg-white py-12 border-b border-roots-border">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-roots-navy-900 mb-6">Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-roots-navy-900 hover:underline text-sm leading-relaxed"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">{section.title}</h2>
                <p className="text-base leading-body text-roots-charcoal">{section.content}</p>
              </div>
            ))}

            {/* Footer Note */}
            <div className="bg-roots-light rounded-lg p-6 border border-roots-border">
              <p className="text-sm text-roots-charcoal italic">
                Effective date: July 21, 2026 • Version: 1.0. Final production deployment should
                receive legal review for the launch jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-roots-light py-12">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="border border-roots-border rounded-lg p-8 bg-white">
            <h3 className="text-2xl font-bold text-roots-navy-900 mb-6">Related</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/privacy" className="btn bg-roots-light text-roots-navy-900 hover:bg-gray-200">
                Privacy
              </Link>
              <Link href="/medical-disclaimer" className="btn bg-roots-light text-roots-navy-900 hover:bg-gray-200">
                Medical Disclaimer
              </Link>
              <Link href="/ai-disclaimer" className="btn bg-roots-light text-roots-navy-900 hover:bg-gray-200">
                AI Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
