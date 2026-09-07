import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ROOTS-AI | Educational Biological Assessment Platform',
  description:
    'Discover your biological wellness profile through educational assessment. ROOTS-AI provides personalized reports based on your self-reported answers using a 7-domain biological intelligence system.',
  openGraph: {
    title: 'ROOTS-AI | Educational Biological Assessment',
    description:
      'Educational biological assessment platform with personalized wellness reports',
    type: 'website',
    url: 'https://roots-ai.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24 md:py-32">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Understand Your Biological Wellness
            </h1>
            <p className="text-xl text-roots-light mb-8 leading-relaxed">
              ROOTS-AI™ provides an educational biological assessment and personalized report
              based on your answers. Gain insights into your wellness across seven biological
              domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment" className="btn btn-primary">
                Start Assessment
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-roots-navy-900">
            What You'll Discover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-roots-border rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-roots-navy-900 mb-3">
                Comprehensive Assessment
              </h3>
              <p className="text-roots-muted leading-relaxed">
                Answer 73 scientifically-designed questions that assess your biological wellness
                across seven distinct domains.
              </p>
            </div>

            <div className="border border-roots-border rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-roots-navy-900 mb-3">
                Personalized Scores
              </h3>
              <p className="text-roots-muted leading-relaxed">
                Receive detailed scores across seven biological domains with clear explanations of
                what each score means for your wellness.
              </p>
            </div>

            <div className="border border-roots-border rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-roots-navy-900 mb-3">
                Full Report
              </h3>
              <p className="text-roots-muted leading-relaxed">
                Get a comprehensive 19-section report with insights and educational information
                about your biological wellness profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seven Domains Section */}
      <section className="bg-roots-light py-24 md:py-32">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-roots-navy-900">
            Seven Biological Domains
          </h2>
          <p className="text-center text-roots-muted text-lg mb-16 max-w-2xl mx-auto">
            ROOTS-AI assesses your wellness across seven interconnected biological domains to give
            you a complete picture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Domain 1', color: 'bg-status-optimized/10' },
              { name: 'Domain 2', color: 'bg-status-compensating/10' },
              { name: 'Domain 3', color: 'bg-status-strained/10' },
              { name: 'Domain 4', color: 'bg-status-dysregulated/10' },
              { name: 'Domain 5', color: 'bg-status-optimized/10' },
              { name: 'Domain 6', color: 'bg-status-compensating/10' },
              { name: 'Domain 7', color: 'bg-status-strained/10' },
            ].map((domain, index) => (
              <div key={index} className={`${domain.color} rounded-lg p-6 text-center`}>
                <p className="font-semibold text-roots-navy-900">{domain.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-roots-navy-900">
            Simple, Transparent Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Take Assessment', desc: 'Answer 73 questions about your wellness' },
              { step: 2, title: 'Validate Responses', desc: 'Your answers are normalized and validated' },
              { step: 3, title: 'Calculate Scores', desc: 'Deterministic rules calculate your scores' },
              { step: 4, title: 'Receive Report', desc: 'Get your comprehensive personalized report' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-roots-navy-900 text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-roots-navy-900 mb-2">{item.title}</h3>
                <p className="text-roots-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-roots-navy-900 text-white py-24 md:py-32">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-roots-light mb-8 max-w-2xl mx-auto">
            Take the first step toward understanding your biological wellness. The assessment takes
            about 15-20 minutes to complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="btn btn-primary">
              Start Your Assessment
            </Link>
            <Link href="/example-report" className="btn bg-roots-light text-roots-navy-900 hover:bg-white">
              View Example Report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
