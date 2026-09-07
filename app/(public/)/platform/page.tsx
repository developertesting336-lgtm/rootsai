import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform | ROOTS-AI',
  description: 'ROOTS-AI Platform - Features and capabilities of our educational biological assessment system.',
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-5xl font-bold mb-6">Platform Features</h1>
          <p className="text-xl text-roots-light">
            Explore our comprehensive biological assessment platform
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '73-Question Assessment', desc: 'Comprehensive questionnaire designed by experts' },
              { title: '7-Domain Scoring', desc: 'Assessment across interconnected biological domains' },
              { title: 'Personalized Reports', desc: '19-section detailed report with insights' },
              { title: 'Secure Storage', desc: 'Your data encrypted and protected' },
              { title: 'Multi-Format Export', desc: 'Web, PDF, and downloadable formats' },
              { title: 'Progress Tracking', desc: 'Save and resume assessments anytime' },
            ].map((feature, i) => (
              <div key={i} className="border border-roots-border rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-roots-navy-900 mb-3">{feature.title}</h3>
                <p className="text-roots-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-roots-navy-900 mb-8">Ready to explore?</h2>
          <Link href="/assessment" className="btn btn-primary">
            Start Your Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
