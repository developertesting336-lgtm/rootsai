import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ROOTS-AI | ROOTS-AI',
  description:
    'Learn about ROOTS-AI mission, vision, and the team behind biological wellness assessment and educational intelligence.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-5xl font-bold mb-6">About ROOTS-AI</h1>
          <p className="text-xl text-roots-light">
            Advancing biological intelligence for personal wellness education
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Our Mission</h2>
              <p className="text-base leading-relaxed text-roots-charcoal">
                To empower individuals with educational insights into their biological wellness patterns, helping them
                make informed decisions in partnership with their healthcare providers. We believe that understanding
                your own patterns is the foundation of meaningful, sustainable wellness.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Our Approach</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                ROOTS-AI™ assessment is built on a framework of seven interconnected biological domains: Metabolic
                Resistance, Hormonal Status, Sleep Recovery, Cellular Health, Stress Load, Immune Balance, and
                Biological State.
              </p>
              <p className="text-base leading-relaxed text-roots-charcoal">
                Rather than making diagnoses or predictions, we provide a structured questionnaire tool that helps
                individuals explore their own patterns and come prepared to conversations with their healthcare team.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Core Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Transparency</h3>
                  <p className="text-sm text-roots-charcoal">
                    Clear, honest communication about what ROOTS-AI is, what it is not, and how it works
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Education Over Diagnosis</h3>
                  <p className="text-sm text-roots-charcoal">
                    Providing insights and frameworks, never diagnostic claims or medical advice
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Privacy First</h3>
                  <p className="text-sm text-roots-charcoal">
                    Protecting user data with robust security and minimal collection practices
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-roots-navy-900 mb-2">User Empowerment</h3>
                  <p className="text-sm text-roots-charcoal">
                    Helping individuals understand themselves and make informed wellness choices
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">What We Build</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                ROOTS-AI™ platform includes:
              </p>
              <ul className="space-y-2 text-base text-roots-charcoal ml-6 list-disc">
                <li>73-question assessment across seven biological domains</li>
                <li>19-section personalized report with proprietary frameworks</li>
                <li>90-day actionable roadmap for wellness support</li>
                <li>Educational content and resources</li>
                <li>Secure data handling and privacy controls</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-roots-navy-900 mb-4">Our Commitment</h2>
              <p className="text-base leading-relaxed text-roots-charcoal mb-4">
                We are committed to building a tool that serves individuals' genuine needs while maintaining the highest
                standards of integrity, privacy, and transparency.
              </p>
              <p className="text-base leading-relaxed text-roots-charcoal">
                ROOTS-AI™ is an educational tool and is not a medical device. We do not diagnose, treat, or prescribe.
                We work within clearly defined boundaries, always directing users to healthcare professionals for medical
                concerns.
              </p>
            </div>

            <div className="bg-roots-light rounded-lg p-6 border border-roots-border">
              <h3 className="font-semibold text-roots-navy-900 mb-3">Get in Touch</h3>
              <p className="text-sm text-roots-charcoal mb-4">
                Questions about ROOTS-AI, partnership inquiries, or feedback? We'd love to hear from you.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-roots-navy-900 mb-8">Explore your biological patterns</h2>
          <Link href="/assessment" className="btn btn-primary">
            Start the Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
