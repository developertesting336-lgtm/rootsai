import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookies Policy | ROOTS-AI',
  description:
    'ROOTS-AI Cookies Policy - Information about cookies and tracking technologies used on our platform.',
  openGraph: {
    title: 'Cookies Policy | ROOTS-AI',
  },
};

export default function CookiesPage() {
  return (
    <>
      <section className="bg-roots-light py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-roots-navy-900 mb-4">
            Cookies Policy
          </h1>
          <p className="text-roots-muted">Effective date: July 21, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">What Are Cookies?</h2>
              <p className="text-base leading-body text-roots-charcoal">
                Cookies are small text files that are stored on your device when you visit our
                website. They help us provide you with a better experience and maintain your
                session security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-roots-navy-900 mb-2">Essential Cookies</h3>
                  <p className="text-base leading-body text-roots-charcoal">
                    Required for authentication, security, and core platform functionality. These
                    cannot be disabled as they are necessary for the platform to work.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-roots-navy-900 mb-2">
                    Optional Analytics Cookies
                  </h3>
                  <p className="text-base leading-body text-roots-charcoal">
                    Used only on public pages where you have consented. These help us understand
                    how visitors use our site to improve our service.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-roots-navy-900 mb-2">What We Do NOT Use</h3>
                  <ul className="space-y-2 text-base leading-body text-roots-charcoal ml-6 list-disc">
                    <li>Advertising or tracking pixels</li>
                    <li>Session replay or behavioral tracking</li>
                    <li>Third-party advertising networks</li>
                    <li>Personal data tracking across sites</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">Your Choices</h2>
              <p className="text-base leading-body text-roots-charcoal mb-4">
                You can control cookies through your browser settings. Most browsers allow you to
                refuse cookies or alert you when a cookie is being sent. However, essential
                cookies are necessary for the platform to function properly.
              </p>
            </div>

            <div className="bg-roots-light rounded-lg p-6 border border-roots-border">
              <p className="text-base text-roots-charcoal">
                <strong>Our Policy:</strong> We use cookies only as necessary for security and
                functionality, and for optional analytics where you consent. Assessment and report
                pages do not use advertising or behavioral tracking.
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
