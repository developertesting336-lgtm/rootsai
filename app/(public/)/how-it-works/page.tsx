import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works | ROOTS-AI',
  description:
    'Learn how ROOTS-AI follows a controlled sequence from assessment answers to biological intelligence through deterministic scoring and AI-assisted explanations.',
  openGraph: {
    title: 'How It Works | ROOTS-AI',
    description:
      'The ROOTS-AI process: Answer 73 questions, validate responses, calculate 7-domain scores, and receive personalized reports.',
    type: 'website',
    url: 'https://roots-ai.com/how-it-works',
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: 'Complete the 73-question assessment.',
      description: 'Validation normalizes approved responses and preserves N/A.',
    },
    {
      number: 2,
      title: 'Deterministic rules calculate seven domains and derived indicators.',
      description: 'Rules select drivers, confidence and eligible content.',
    },
    {
      number: 3,
      title: 'Governed AI turns approved explanation objects into clear language.',
      description: '',
    },
    {
      number: 4,
      title: 'The web and PDF reports render from the same immutable report record.',
      description: '',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            From Answers to Biological Intelligence
          </h1>
          <p className="text-lg text-roots-light max-w-2xl mx-auto">
            ROOTS-AI™ follows a controlled sequence so that interpretation never replaces the
            underlying data.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-roots-navy-900">
            The Process
          </h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border border-roots-border rounded-xl p-8 bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-roots-navy-900 text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-roots-navy-900 mb-2">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-roots-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* What AI Does */}
            <div className="bg-roots-light rounded-xl p-8 border border-roots-border">
              <p className="text-center text-roots-navy-900 font-semibold">
                ✓ AI assists with language generation only.
              </p>
            </div>

            {/* What AI Does Not */}
            <div className="bg-roots-light rounded-xl p-8 border border-roots-border">
              <p className="text-center text-roots-navy-900">
                AI does not diagnose, prescribe, change scores, or invent participant facts.
              </p>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="border border-roots-border rounded-xl p-8 bg-white text-center">
            <p className="text-roots-navy-900 font-semibold">
              🔒 Secure access and data controls
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-roots-light">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-roots-navy-900 mb-8">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn btn-primary">
              Start Your Assessment
            </Link>
            <Link href="/example-report" className="btn btn-secondary">
              View Example Report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
