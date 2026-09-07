import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Assessment | ROOTS-AI',
  description: 'ROOTS-AI Assessment - Complete your biological wellness questionnaire.',
  robots: {
    index: false, // Assessment flow should not be indexed
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-roots-warm-white">
      {/* Minimal Header */}
      <header className="bg-roots-navy-900 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl hover:opacity-80">
            ROOTS-AI
          </Link>
          <span className="text-xs font-bold text-roots-border uppercase tracking-wider">
            Secure Assessment
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-12">
        {children}
      </main>

      {/* Minimal Footer - Legal Links */}
      <footer className="bg-roots-warm-white border-t border-roots-border py-8 mt-12">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <p className="text-xs font-bold text-roots-charcoal uppercase tracking-wider mb-4">
            Legal & Privacy
          </p>
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-roots-navy-900 hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-roots-navy-900 hover:underline">
              Terms
            </Link>
            <Link href="/medical-disclaimer" className="text-roots-navy-900 hover:underline">
              Medical Disclaimer
            </Link>
            <Link href="/ai-disclaimer" className="text-roots-navy-900 hover:underline">
              AI Disclaimer
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
