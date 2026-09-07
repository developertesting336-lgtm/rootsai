import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Healthcare Professionals | ROOTS-AI',
  description:
    'Information for healthcare professionals about ROOTS-AI assessment tool, integration with wellness practices, and professional partnership opportunities.',
};

export default function HealthcareProfessionalsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-5xl font-bold mb-6">For Healthcare Professionals</h1>
          <p className="text-xl text-roots-light">
            Integrate ROOTS-AI assessment into your wellness practice and patient care approach
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">How ROOTS-AI Supports Your Practice</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                ROOTS-AI™ is an educational tool designed to complement—not replace—your professional assessment and
                clinical judgment. It helps patients explore their own patterns and come prepared to conversations with
                their care team.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Key Features for Practitioners</h2>
              <div className="space-y-4">
                <div className="border border-roots-border rounded-lg p-6">
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Patient-Centered Insights</h3>
                  <p className="text-sm text-roots-charcoal">
                    Patients receive detailed reports across seven biological domains, helping them understand their own
                    patterns and come prepared to appointments
                  </p>
                </div>
                <div className="border border-roots-border rounded-lg p-6">
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Structured Framework</h3>
                  <p className="text-sm text-roots-charcoal">
                    Consistent domain structure makes it easier to discuss patterns and integrate findings with your own
                    clinical assessment
                  </p>
                </div>
                <div className="border border-roots-border rounded-lg p-6">
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Practical Roadmaps</h3>
                  <p className="text-sm text-roots-charcoal">
                    Reports include actionable 90-day roadmaps that align with wellness and behavioral change principles
                  </p>
                </div>
                <div className="border border-roots-border rounded-lg p-6">
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Transparent Methodology</h3>
                  <p className="text-sm text-roots-charcoal">
                    Clear documentation of how scores are derived helps you understand the tool and explain it to patients
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Important Boundaries</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                Please note that ROOTS-AI™:
              </p>
              <ul className="space-y-2 text-base text-roots-charcoal ml-6 list-disc">
                <li>Does not diagnose medical conditions or disease</li>
                <li>Is not a substitute for clinical evaluation or professional medical judgment</li>
                <li>Provides educational questionnaire indicators, not clinical probabilities</li>
                <li>Should not be used to make medication or treatment recommendations alone</li>
                <li>Requires professional context and interpretation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Integration with Your Practice</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                Many practitioners suggest ROOTS-AI™ to patients as a pre-appointment tool to identify patterns and
                priorities for discussion. Patients arrive with a structured overview, allowing you to spend more time on
                clinical assessment and personalized recommendations.
              </p>
            </div>

            <div className="bg-status-info/10 border border-status-info/30 rounded-lg p-6">
              <p className="text-base text-roots-charcoal">
                <strong>Professional Inquiry:</strong> Healthcare professionals interested in integration, research
                collaboration, or partnership inquiries can reach out through the{' '}
                <Link href="/contact" className="text-roots-navy-900 hover:underline font-semibold">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-roots-navy-900 mb-8">Explore ROOTS-AI yourself</h2>
          <Link href="/assessment" className="btn btn-primary">
            Take the Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
