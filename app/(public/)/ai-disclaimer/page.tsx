import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Disclaimer | ROOTS-AI',
  description:
    'ROOTS-AI AI Disclaimer - Learn how AI is used in our platform and what it does not do.',
  openGraph: {
    title: 'AI Disclaimer | ROOTS-AI',
  },
};

export default function AiDisclaimerPage() {
  return (
    <>
      <section className="bg-roots-light py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-roots-navy-900 mb-4">
            AI Disclaimer
          </h1>
          <p className="text-roots-muted">Effective date: July 21, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">How AI is Used</h2>
              <p className="text-base leading-body text-roots-charcoal mb-4">
                ROOTS-AI™ uses artificial intelligence in limited, controlled ways to assist with
                explanatory language generation. Our deterministic scoring algorithm is not
                AI-driven; scores are calculated using fixed rules and do not change based on AI
                model updates or inputs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">What AI Does Not Do</h2>
              <ul className="space-y-4 text-base leading-body text-roots-charcoal">
                <li className="flex gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>AI does not diagnose medical conditions or disease</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>AI does not prescribe treatments or medications</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>AI does not change or influence your assessment scores</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>AI does not invent or fabricate facts about you</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0">❌</span>
                  <span>AI does not make clinical judgments or recommendations</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">
                Governance & Controls
              </h2>
              <p className="text-base leading-body text-roots-charcoal mb-4">
                Any AI-assisted text generation:
              </p>
              <ul className="space-y-2 text-base leading-body text-roots-charcoal ml-6 list-disc">
                <li>Is governed by explicit safety rules and approval workflows</li>
                <li>Uses only minimized, structured input data</li>
                <li>Is reviewed to ensure accuracy and appropriateness</li>
                <li>Cannot alter your assessment scores or data</li>
              </ul>
            </div>

            <div className="bg-status-info/10 border border-status-info/30 rounded-lg p-6">
              <p className="text-base text-roots-charcoal">
                <strong>AI is a tool to improve clarity of communication, not to change your
                results.</strong> Your scores are determined by deterministic rules based on your
                answers, not by AI models.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-12">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="border border-roots-border rounded-lg p-8 bg-white">
            <h3 className="text-2xl font-bold text-roots-navy-900 mb-6">Related Documents</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/privacy" className="btn bg-roots-light text-roots-navy-900 hover:bg-gray-200">
                Privacy Notice
              </Link>
              <Link href="/terms" className="btn bg-roots-light text-roots-navy-900 hover:bg-gray-200">
                Terms of Service
              </Link>
              <Link href="/medical-disclaimer" className="btn bg-roots-light text-roots-navy-900 hover:bg-gray-200">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
