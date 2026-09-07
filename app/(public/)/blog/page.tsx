import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog & Resources | ROOTS-AI',
  description:
    'Explore articles and resources about biological wellness, assessment insights, and practical strategies for supporting your health.',
};

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Understanding Your Biological State Score',
      excerpt:
        'What does your ROOTS Biological State score mean and how can it guide your wellness approach?',
      date: 'July 15, 2026',
    },
    {
      id: 2,
      title: 'The Sleep-Stress Connection',
      excerpt:
        'Exploring how sleep recovery and stress load interact in your assessment results and daily wellbeing.',
      date: 'July 8, 2026',
    },
    {
      id: 3,
      title: 'Metabolic Patterns and Energy',
      excerpt:
        'Understanding metabolic resistance and its role in your biological assessment framework.',
      date: 'June 30, 2026',
    },
    {
      id: 4,
      title: 'Building a 90-Day Roadmap',
      excerpt:
        'How to translate your ROOTS-AI report into practical, sustainable wellness actions.',
      date: 'June 22, 2026',
    },
    {
      id: 5,
      title: 'The Seven Domains Explained',
      excerpt:
        'A comprehensive guide to understanding each biological domain and what your scores reveal.',
      date: 'June 15, 2026',
    },
    {
      id: 6,
      title: 'Starting Your Wellness Journey',
      excerpt:
        'Tips for making meaningful changes based on your ROOTS-AI assessment insights.',
      date: 'June 8, 2026',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl text-roots-light">
            Insights, guides, and strategies for understanding your biological wellness patterns
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="border border-roots-border rounded-lg p-6 bg-white hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-semibold text-roots-muted uppercase tracking-wider mb-2">
                  {article.date}
                </p>
                <h3 className="text-xl font-bold text-roots-navy-900 mb-3">{article.title}</h3>
                <p className="text-sm text-roots-charcoal mb-4">{article.excerpt}</p>
                <Link href="#" className="text-roots-navy-900 hover:underline text-sm font-semibold">
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-roots-navy-900 mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-roots-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-roots-navy-900 mb-4">Assessment Guide</h3>
              <p className="text-sm text-roots-charcoal mb-6">
                Step-by-step guide to completing your ROOTS-AI assessment and understanding each section.
              </p>
              <Link href="#" className="text-roots-navy-900 hover:underline text-sm font-semibold">
                Download PDF →
              </Link>
            </div>

            <div className="bg-white border border-roots-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-roots-navy-900 mb-4">Report Handbook</h3>
              <p className="text-sm text-roots-charcoal mb-6">
                Complete guide to interpreting your 19-section report and all scoring frameworks.
              </p>
              <Link href="#" className="text-roots-navy-900 hover:underline text-sm font-semibold">
                Download PDF →
              </Link>
            </div>

            <div className="bg-white border border-roots-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-roots-navy-900 mb-4">Wellness Workbook</h3>
              <p className="text-sm text-roots-charcoal mb-6">
                Interactive workbook to plan and track your 90-day roadmap and wellness goals.
              </p>
              <Link href="#" className="text-roots-navy-900 hover:underline text-sm font-semibold">
                Download PDF →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-roots-navy-900 mb-8">
            Ready to explore your own patterns?
          </h2>
          <Link href="/assessment" className="btn btn-primary">
            Start the Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
