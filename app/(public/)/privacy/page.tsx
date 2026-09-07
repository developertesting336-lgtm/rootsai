import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Notice | ROOTS-AI',
  description:
    'ROOTS-AI Privacy Notice - Learn how we collect, use, and protect your personal data. Effective date: July 21, 2026.',
  openGraph: {
    title: 'Privacy Notice | ROOTS-AI',
    description: 'ROOTS-AI Privacy Notice for Phase 1 platform users',
    type: 'website',
    url: 'https://roots-ai.com/privacy',
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      id: 'who-we-are',
      title: '1. Who we are',
      content:
        'ROOTS AI HEALTH SYSTEMS, Inc. ("ROOTS-AI™", "we", "us") provides an educational biological assessment and reporting service. This notice explains how we handle personal data when you use the Phase 1 web platform.',
    },
    {
      id: 'data-we-collect',
      title: '2. Data we collect',
      content:
        'Account and contact information; assessment answers; physical measurements you provide; consent records; generated scores and reports; device, security and audit information; support enquiries; and limited public-site analytics where consent is required. We do not intentionally collect emergency information through the assessment.',
    },
    {
      id: 'why-we-use-it',
      title: '3. Why we use it',
      content:
        'To provide, secure and improve the service; save and resume assessments; generate and deliver reports; respond to enquiries; meet legal and security obligations; and conduct separately consented research or pilot analysis.',
    },
    {
      id: 'sensitive-data',
      title: '4. Sensitive data',
      content:
        'Assessment answers and identifiable wellness information may be sensitive personal data. We process them only for stated purposes and with appropriate consent or other lawful authority required by applicable law.',
    },
    {
      id: 'research',
      title: '5. Research',
      content:
        'Research participation is optional and requires separate explicit consent. Service access is not conditioned on research consent. Approved research exports are minimized and pseudonymized or de-identified; direct identifiers, authentication data and report narratives are excluded.',
    },
    {
      id: 'providers-transfers',
      title: '6. Providers and transfers',
      content:
        'We may use approved hosting, authentication, email, AI-language and security providers under written safeguards. Identifiable assessment data is not sent to an AI provider unless the approved configuration, agreements and minimization controls permit it. Cross-border transfers are reviewed and protected as required by applicable law.',
    },
    {
      id: 'ai-use',
      title: '7. AI use',
      content:
        'Deterministic rules calculate scores and classifications. AI may assist with approved explanatory wording using minimized structured inputs. AI does not diagnose, prescribe or change scores.',
    },
    {
      id: 'retention',
      title: '8. Retention',
      content:
        'Assessment, report, consent, audit and security records are retained according to the approved retention schedule and legal needs. Data is deleted or de-identified when no longer required, subject to security backups and legal obligations.',
    },
    {
      id: 'security',
      title: '9. Security',
      content:
        'We use access controls, MFA for privileged roles, encryption in transit and at rest where supported, private report storage, audit logging, backups and security testing. No system can guarantee absolute security.',
    },
    {
      id: 'choices-rights',
      title: '10. Your choices and rights',
      content:
        'Depending on applicable law, you may request access, correction, deletion, restriction, withdrawal of consent, information about processing or a copy of relevant data. Withdrawal does not affect earlier lawful processing and may limit service functions that require the data.',
    },
    {
      id: 'cookies-analytics',
      title: '11. Cookies and analytics',
      content:
        'Essential technologies support authentication and security. Optional public-site analytics are used only where permitted and consented. Assessment, report, authentication and admin routes do not use advertising pixels, session replay or behavioural advertising.',
    },
    {
      id: 'children',
      title: '12. Children',
      content:
        'Production launch is intended for adults aged 18 or older. Participation below 18 is not enabled unless ROOTS-AI™ approves and implements a jurisdiction-specific consent and guardian workflow.',
    },
    {
      id: 'contact',
      title: '13. Contact',
      content:
        'Submit privacy questions or rights requests through the secure Contact page and choose "Privacy". We may verify identity before fulfilling a request.',
    },
    {
      id: 'updates',
      title: '14. Updates',
      content:
        'We may update this notice when the service or law changes. The page displays the effective date and version; material changes are communicated where required.',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-roots-light py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-roots-navy-900 mb-4">
            Privacy Notice
          </h1>
          <p className="text-roots-muted">
            Effective date: July 21, 2026 • Version: 1.0
          </p>
        </div>
      </section>

      {/* Contents */}
      <section className="bg-white py-12 border-b border-roots-border">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-roots-navy-900 mb-6">Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-roots-navy-900 hover:underline text-sm leading-relaxed"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="text-2xl font-bold text-roots-navy-900 mb-4">{section.title}</h2>
                <p className="text-base leading-body text-roots-charcoal">{section.content}</p>
              </div>
            ))}

            {/* Footer Note */}
            <div className="bg-roots-light rounded-lg p-6 border border-roots-border">
              <p className="text-sm text-roots-charcoal italic">
                Effective date: July 21, 2026 • Version: 1.0. This notice is designed with
                reference to Malaysia's Personal Data Protection Act 2010 and current official
                guidance. It does not represent certification of compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-roots-light py-12">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="border border-roots-border rounded-lg p-8 bg-white">
            <h3 className="text-2xl font-bold text-roots-navy-900 mb-2">
              Privacy or data-rights request
            </h3>
            <p className="text-roots-muted mb-6">
              Use the secure Contact page and choose "Privacy".
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Privacy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
