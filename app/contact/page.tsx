"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    enquiryType: "",
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [charCount, setCharCount] = useState(0);

  const enquiryTypes = [
    { value: "product", label: "Product Support" },
    { value: "privacy", label: "Privacy" },
    { value: "research", label: "Research" },
    { value: "business", label: "Business" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
      if (name === "message") {
        setCharCount(value.length);
      }
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, enquiryType: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <style>{`
        .contact-page { background-color: #FAFAF8; font-family: "Inter", Arial, sans-serif; margin: 0; padding: 0; }
        .contact-intro { background-color: #F3F5F8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .contact-intro { padding: 80px 24px; } }
        @media (min-width: 1024px) { .contact-intro { padding: 80px 40px; } }
        @media (min-width: 1440px) { .contact-intro { padding: 80px 120px; } }
        .contact-eyebrow { color: #2A4060; font-size: 12px; font-weight: 700; letter-spacing: 1.1px; margin-bottom: 16px; text-transform: uppercase; }
        .contact-intro h1 { color: #1A2A4A; font-size: 34px; font-weight: 750; line-height: 1.2; margin: 0 0 24px 0; }
        @media (min-width: 768px) { .contact-intro h1 { font-size: 48px; } }
        .contact-intro p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0; }
        .contact-enquiry { background-color: #FAFAF8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .contact-enquiry { padding: 80px 24px; } }
        @media (min-width: 1024px) { .contact-enquiry { padding: 80px 40px; } }
        @media (min-width: 1440px) { .contact-enquiry { padding: 80px 120px; } }
        .contact-enquiry h2 { color: #1A2A4A; font-size: 25px; font-weight: 700; line-height: 1.2; margin: 0 0 32px 0; }
        @media (min-width: 768px) { .contact-enquiry h2 { font-size: 30px; } }
        .contact-enquiry-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 768px) { .contact-enquiry-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; } }
        .contact-radio-option { display: flex; align-items: center; gap: 16px; padding: 12px 16px; background-color: #fff; border: 2px solid #D8DEE8; border-radius: 10px; cursor: pointer; }
        .contact-radio-option:hover { border-color: #1A2A4A; }
        .contact-radio-option.active { border-color: #1A2A4A; background-color: #F3F5F8; }
        .contact-radio-button { width: 20px; height: 20px; border: 2px solid #2A4060; border-radius: 50%; flex-shrink: 0; }
        .contact-radio-option.active .contact-radio-button { background-color: #1A2A4A; border-color: #1A2A4A; box-shadow: inset 0 0 0 4px #1A2A4A, inset 0 0 0 6px #fff; }
        .contact-radio-label { color: #1A1A1A; font-size: 16px; font-weight: 500; }
        .contact-form-section { background-color: #EEF2F6; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .contact-form-section { padding: 80px 24px; } }
        @media (min-width: 1024px) { .contact-form-section { padding: 80px 40px; } }
        @media (min-width: 1440px) { .contact-form-section { padding: 80px 120px; } }
        .contact-form-section h2 { color: #1A2A4A; font-size: 25px; font-weight: 700; margin: 0 0 32px 0; }
        @media (min-width: 768px) { .contact-form-section h2 { font-size: 30px; } }
        .contact-form { display: flex; flex-direction: column; gap: 24px; }
        .contact-form-row { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 768px) { .contact-form-row { grid-template-columns: repeat(2, 1fr); } }
        .contact-form-group { display: flex; flex-direction: column; gap: 8px; }
        .contact-form-label { color: #1A2A4A; font-size: 14px; font-weight: 700; }
        .contact-form-input, .contact-form-textarea { padding: 12px 16px; border: 1px solid #D8DEE8; border-radius: 9px; font-size: 16px; color: #1A1A1A; font-family: "Inter", Arial, sans-serif; }
        .contact-form-input { height: 52px; }
        .contact-form-textarea { min-height: 170px; resize: vertical; }
        .contact-form-textarea:focus, .contact-form-input:focus { outline: none; border-color: #1A2A4A; box-shadow: 0 0 0 3px rgba(26, 42, 74, 0.1); }
        .contact-char-count { text-align: right; color: #2A4060; font-size: 14px; margin-top: 8px; }
        .contact-consent-group { display: flex; align-items: flex-start; gap: 12px; margin-top: 16px; }
        .contact-consent-checkbox { width: 24px; height: 24px; border: 1px solid #2A4060; border-radius: 4px; cursor: pointer; flex-shrink: 0; margin-top: 2px; }
        .contact-consent-text { color: #1A1A1A; font-size: 16px; line-height: 1.6; }
        .contact-consent-link { color: #1A2A4A; font-size: 14px; font-weight: 700; text-decoration: underline; margin-top: 8px; display: inline-block; }
        .contact-consent-link:hover { opacity: 0.8; }
        .contact-safety { background-color: #F7F5F0; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .contact-safety { padding: 80px 24px; } }
        @media (min-width: 1024px) { .contact-safety { padding: 80px 40px; } }
        @media (min-width: 1440px) { .contact-safety { padding: 80px 120px; } }
        .contact-safety h2 { color: #1A2A4A; font-size: 25px; font-weight: 700; margin: 0 0 32px 0; }
        @media (min-width: 768px) { .contact-safety h2 { font-size: 30px; } }
        .contact-safety p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0; }
        .contact-submit { background-color: #FAFAF8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .contact-submit { padding: 80px 24px; } }
        @media (min-width: 1024px) { .contact-submit { padding: 80px 40px; } }
        @media (min-width: 1440px) { .contact-submit { padding: 80px 120px; } }
        .contact-submit-button { background-color: #1A2A4A; color: #fff; padding: 12px 32px; border: none; border-radius: 10px; font-size: 14px; font-weight: 700; cursor: pointer; width: 160px; height: 48px; }
        .contact-submit-button:hover { opacity: 0.9; }
        .contact-submit-helper { color: #2A4060; font-size: 14px; margin-top: 16px; }
        .contact-alternative { background-color: #F3F5F8; padding: 60px 16px 80px 16px; }
        @media (min-width: 768px) { .contact-alternative { padding: 80px 24px; } }
        @media (min-width: 1024px) { .contact-alternative { padding: 80px 40px; } }
        @media (min-width: 1440px) { .contact-alternative { padding: 80px 120px; } }
        .contact-alternative h2 { color: #1A2A4A; font-size: 25px; font-weight: 700; margin: 0 0 32px 0; }
        @media (min-width: 768px) { .contact-alternative h2 { font-size: 30px; } }
        .contact-alternative p { color: #1A1A1A; font-size: 16px; line-height: 1.6; margin: 0; }
      `}</style>

      <section className="contact-intro">
        <div className="contact-eyebrow">CONTACT</div>
        <h1>Start the Right Conversation</h1>
        <p>Use the secure form for product support, privacy requests, research collaboration or business enquiries. Do not send urgent medical information.</p>
      </section>

      <section className="contact-enquiry">
        <div className="contact-eyebrow">ENQUIRY TYPE</div>
        <h2>Choose the enquiry type</h2>
        <div className="contact-enquiry-grid">
          {enquiryTypes.map((type) => (
            <div key={type.value} className={`contact-radio-option ${formData.enquiryType === type.value ? "active" : ""}`} onClick={() => handleRadioChange(type.value)}>
              <div className="contact-radio-button"></div>
              <span className="contact-radio-label">{type.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-eyebrow">SECURE FORM</div>
        <h2>Your enquiry</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label className="contact-form-label">Name *</label>
              <input type="text" name="name" className="contact-form-input" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label">Email *</label>
              <input type="email" name="email" className="contact-form-input" value={formData.email} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label">Subject</label>
            <input type="text" name="subject" className="contact-form-input" value={formData.subject} onChange={handleInputChange} />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label">Message *</label>
            <textarea name="message" className="contact-form-textarea" value={formData.message} onChange={handleInputChange} maxLength={2000} required></textarea>
            <div className="contact-char-count">{charCount} / 2,000 characters</div>
          </div>
          <div className="contact-consent-group">
            <input type="checkbox" name="consent" id="consent" className="contact-consent-checkbox" checked={formData.consent} onChange={handleInputChange} required />
            <div>
              <label htmlFor="consent" className="contact-consent-text">Consent / Privacy acknowledgement</label>
              <a href="/privacy" className="contact-consent-link">Privacy Notice</a>
            </div>
          </div>
        </form>
      </section>

      <section className="contact-safety">
        <div className="contact-eyebrow">SAFETY</div>
        <h2>Do not send urgent medical information.</h2>
        <p>This form is not monitored for emergencies. Contact local emergency services if you may be in immediate danger.</p>
      </section>

      <section className="contact-submit">
        <button className="contact-submit-button">Send Enquiry</button>
        <div className="contact-submit-helper">Protected, rate-limited action</div>
      </section>

      <section className="contact-alternative">
        <div className="contact-eyebrow">ALTERNATIVE</div>
        <h2>Alternative contact</h2>
        <p>Approved business contact if provided.</p>
      </section>
    </div>
  );
}
