import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pilot Program | ROOTS-AI',
  description:
    'Learn about the ROOTS-AI pilot program, early access, and how to participate in advancing biological wellness assessment.',
};

export default function PilotPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-5xl font-bold mb-6">Pilot Program</h1>
          <p className="text-xl text-roots-light">
            Join our community of early adopters exploring biological wellness assessment
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">What We're Building</h2>
              <p className="text-base leading-relaxed text-roots-charcoal">
                ROOTS-AI™ is in active development. Our pilot phase brings together early users who want to explore
                how biological assessment can inform personal wellness strategies. Your feedback helps us refine the
                platform, improve guidance, and ensure the tool meets real-world needs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Pilot Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-roots-border rounded-lg p-6">
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Early Access</h3>
                  <p className="text-sm text-roots-charcoal">
                    Be among the first to explore ROOTS-AI™ assessment and 19-section reports
                  </p>
                </div>
                <div className="border border-roots-border rounded-lg p-6">
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Shape Development</h3>
                  <p className="text-sm text-roots-charcoal">
                    Your feedback directly influences feature prioritization and user experience design
                  </p>
                </div>
                <div className="border border-roots-border rounded-lg p-6">
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Community</h3>
                  <p className="text-sm text-roots-charcoal">
                    Connect with other early adopters exploring biological wellness patterns
                  </p>
                </div>
                <div className="border border-roots-border rounded-lg p-6">
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Learning</h3>
                  <p className="text-sm text-roots-charcoal">
                    Gain insights into your own biological patterns through educational guidance
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">What to Expect</h2>
              <ul className="space-y-3 text-base text-roots-charcoal ml-6 list-disc">
                <li>Complete a 73-question assessment across seven biological domains</li>
                <li>Receive a comprehensive 19-section report with personalized insights</li>
                <li>Access a 90-day roadmap with actionable wellness strategies</li>
                <li>Share feedback through dedicated pilot channels</li>
                <li>See your input shape future platform development</li>
              </ul>
            </div>

            <div className="bg-roots-light rounded-lg p-6 border border-roots-border">
              <h3 className="font-semibold text-roots-navy-900 mb-2">Educational Tool</h3>
              <p className="text-sm text-roots-charcoal">
                ROOTS-AI™ provides educational wellness insights based on self-reported patterns. It is not a medical
                device, diagnostic service, or substitute for professional medical evaluation. Results are questionnaire
                indicators, not clinical probabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-roots-navy-900 mb-8">Ready to join?</h2>
          <Link href="/assessment" className="btn btn-primary">
            Start the Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
