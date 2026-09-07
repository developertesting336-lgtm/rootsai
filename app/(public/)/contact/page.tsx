import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | ROOTS-AI',
  description: 'Get in touch with ROOTS-AI for questions, feedback, partnership inquiries, or support.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-roots-navy-900 to-roots-navy-800 text-white py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-roots-light">
            Questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-roots-navy-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-roots-navy-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-roots-border rounded-lg focus:outline-none focus:ring-2 focus:ring-roots-navy-900"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-roots-navy-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-roots-border rounded-lg focus:outline-none focus:ring-2 focus:ring-roots-navy-900"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-roots-navy-900 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-roots-border rounded-lg focus:outline-none focus:ring-2 focus:ring-roots-navy-900"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="research">Research Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-roots-navy-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-roots-border rounded-lg focus:outline-none focus:ring-2 focus:ring-roots-navy-900 resize-none"
                    placeholder="Your message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-roots-navy-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-roots-navy-900 mb-6">Other ways to reach us</h2>
              </div>

              <div className="bg-roots-light border border-roots-border rounded-lg p-6">
                <h3 className="font-semibold text-roots-navy-900 mb-2">General Inquiries</h3>
                <p className="text-sm text-roots-charcoal">
                  Questions about ROOTS-AI, account support, or general feedback
                </p>
                <p className="text-sm font-semibold text-roots-navy-900 mt-3">
                  <a href="mailto:hello@roots-ai.com" className="hover:underline">
                    hello@roots-ai.com
                  </a>
                </p>
              </div>

              <div className="bg-roots-light border border-roots-border rounded-lg p-6">
                <h3 className="font-semibold text-roots-navy-900 mb-2">Privacy Concerns</h3>
                <p className="text-sm text-roots-charcoal">
                  Questions about data privacy, GDPR, or your personal information
                </p>
                <p className="text-sm font-semibold text-roots-navy-900 mt-3">
                  <a href="mailto:privacy@roots-ai.com" className="hover:underline">
                    privacy@roots-ai.com
                  </a>
                </p>
              </div>

              <div className="bg-roots-light border border-roots-border rounded-lg p-6">
                <h3 className="font-semibold text-roots-navy-900 mb-2">Healthcare Professionals</h3>
                <p className="text-sm text-roots-charcoal">
                  Partnership inquiries, research collaboration, professional integration
                </p>
                <p className="text-sm font-semibold text-roots-navy-900 mt-3">
                  <a href="mailto:professionals@roots-ai.com" className="hover:underline">
                    professionals@roots-ai.com
                  </a>
                </p>
              </div>

              <div className="bg-status-info/10 border border-status-info/30 rounded-lg p-6">
                <h3 className="font-semibold text-roots-navy-900 mb-2">Response Time</h3>
                <p className="text-sm text-roots-charcoal">
                  We typically respond to all inquiries within 2-3 business days. For urgent matters, please specify in
                  your message.
                </p>
              </div>

              <div className="bg-white border border-roots-border rounded-lg p-6">
                <h3 className="font-semibold text-roots-navy-900 mb-3">Legal Inquiries</h3>
                <p className="text-sm text-roots-charcoal mb-3">
                  Regulatory, legal compliance, or formal inquiries should include relevant documentation.
                </p>
                <p className="text-sm font-semibold text-roots-navy-900">
                  <a href="mailto:legal@roots-ai.com" className="hover:underline">
                    legal@roots-ai.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-roots-light py-16 border-t border-roots-border">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-roots-muted">
            ROOTS AI HEALTH SYSTEMS, Inc. • All inquiries handled with care and confidentiality
          </p>
        </div>
      </section>
    </>
  );
}
