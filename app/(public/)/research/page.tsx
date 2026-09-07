import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research & Science | ROOTS-AI',
  description:
    'Explore the scientific basis and research behind ROOTS-AI assessment methodology and biological domain framework.',
  openGraph: {
    title: 'Research & Science | ROOTS-AI',
  },
};

export default function ResearchPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-5xl font-bold mb-6">Research & Scientific Basis</h1>
          <p className="text-xl text-roots-light">
            Understanding the framework behind ROOTS-AI biological assessment
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Seven Biological Domains</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                ROOTS-AI™ assessment is built on a framework of seven interconnected biological domains that
                represent key systems in maintaining wellness:
              </p>
              <ul className="space-y-3 text-base text-roots-charcoal ml-6 list-disc">
                <li>
                  <strong>Metabolic Resistance:</strong> How your body processes energy and regulates blood sugar
                </li>
                <li>
                  <strong>Hormonal Status:</strong> Balance and regulation of endocrine system signaling
                </li>
                <li>
                  <strong>Sleep Recovery:</strong> Quality and restorative capacity of sleep patterns
                </li>
                <li>
                  <strong>Cellular Health:</strong> Oxidative stress and cellular protection mechanisms
                </li>
                <li>
                  <strong>Stress Load:</strong> Accumulated stress burden and nervous system regulation
                </li>
                <li>
                  <strong>Immune Balance:</strong> Immune system readiness and inflammatory regulation
                </li>
                <li>
                  <strong>Biological State:</strong> Overall synthesis of interconnected domain patterns
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Assessment Methodology</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                The ROOTS-AI™ assessment uses a 73-question questionnaire designed to evaluate self-reported
                patterns across these seven domains. Questions are organized by domain and use validated question
                types to capture key indicators.
              </p>
              <p className="text-base leading-relaxed text-roots-charcoal">
                Scoring is deterministic and rule-based, meaning the same answers always produce the same scores.
                Scores are proprietary questionnaire indicators and are not clinically validated probabilities of
                disease or future outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Score Interpretation</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                Each domain receives a score from 0-100 reflecting the pattern in answers:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-roots-light rounded-lg border border-roots-border">
                  <p className="font-semibold text-roots-navy-900 mb-2">70-100: Optimized</p>
                  <p className="text-sm text-roots-charcoal">Pattern suggests good balance in this domain</p>
                </div>
                <div className="p-4 bg-roots-light rounded-lg border border-roots-border">
                  <p className="font-semibold text-roots-navy-900 mb-2">50-69: Compensating</p>
                  <p className="text-sm text-roots-charcoal">Pattern shows adaptation with room for support</p>
                </div>
                <div className="p-4 bg-roots-light rounded-lg border border-roots-border">
                  <p className="font-semibold text-roots-navy-900 mb-2">30-49: Strained</p>
                  <p className="text-sm text-roots-charcoal">Pattern suggests challenge in this domain</p>
                </div>
                <div className="p-4 bg-roots-light rounded-lg border border-roots-border">
                  <p className="font-semibold text-roots-navy-900 mb-2">0-29: Dysregulated</p>
                  <p className="text-sm text-roots-charcoal">Pattern indicates significant challenge</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Key Frameworks</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                <strong>ROOTS Biological State™:</strong> A synthesis score reflecting overall pattern across domains
              </p>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                <strong>ROOTS Opportunity Score™:</strong> A proprietary indicator of modifiable capacity based on the
                current pattern
              </p>
              <p className="text-base leading-relaxed text-roots-charcoal">
                <strong>ROOTS Confidence™:</strong> A measure of assessment completeness and internal consistency
              </p>
            </div>

            <div className="bg-status-info/10 border border-status-info/30 rounded-lg p-6">
              <p className="text-base text-roots-charcoal">
                <strong>Important:</strong> ROOTS-AI™ is an educational tool providing questionnaire-based insights, not a
                medical assessment. Scores are not diagnostic probabilities and do not replace professional medical
                evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-roots-navy-900 mb-8">Explore your own patterns</h2>
          <Link href="/assessment" className="btn btn-primary">
            Take the Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
