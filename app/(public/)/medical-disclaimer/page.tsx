import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | ROOTS-AI',
  description:
    'ROOTS-AI Medical Disclaimer - Important information about the educational nature of our platform and not a medical device.',
  openGraph: {
    title: 'Medical Disclaimer | ROOTS-AI',
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <section className="bg-roots-light py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-roots-navy-900 mb-4">
            Medical Disclaimer
          </h1>
          <p className="text-roots-muted">Effective date: July 21, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">Educational Use Only</h2>
              <p className="text-base leading-body text-roots-charcoal mb-4">
                ROOTS-AI™ is an educational tool designed to provide general wellness information
                based on self-reported answers. It is not a medical device, diagnostic tool,
                clinical assessment, or substitute for professional medical advice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">Not Medical Advice</h2>
              <p className="text-base leading-body text-roots-charcoal mb-4">
                The information provided by ROOTS-AI™ is for educational purposes only. It should
                not be construed as medical advice, diagnosis, or treatment for any medical
                condition. Always consult with a qualified healthcare professional before making
                any health-related decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">No Warranty</h2>
              <p className="text-base leading-body text-roots-charcoal mb-4">
                ROOTS-AI™ provides information "as is" without any warranties of any kind, either
                express or implied. We do not warrant that the information will be accurate,
                complete, or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">Emergency Services</h2>
              <p className="text-base leading-body text-roots-charcoal mb-4">
                If you believe you are experiencing a medical emergency, please call emergency
                services or visit your nearest emergency room immediately. Do not rely on ROOTS-AI™
                for emergency medical assistance.
              </p>
            </div>

            <div className="bg-status-error/10 border border-status-error/30 rounded-lg p-6">
              <p className="text-base text-roots-charcoal">
                <strong>ROOTS-AI™ provides educational wellness information and does not diagnose
                  or treat medical conditions.</strong> Always seek professional medical advice from a
                qualified healthcare provider for any medical concerns.
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
              <Link href="/ai-disclaimer" className="btn bg-roots-light text-roots-navy-900 hover:bg-gray-200">
                AI Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
