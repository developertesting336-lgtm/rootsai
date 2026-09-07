'use client';

import React from 'react';
import Link from 'next/link';
import './cookies.css';

export default function CookiesPage() {
  const categories = [
    { title: 'Strictly necessary', purpose: 'Authentication, secure sessions, CSRF protection, load balancing and preference storage', control: 'Always active where necessary for service delivery and security.' },
    { title: 'Public-site analytics', purpose: 'Aggregate page and conversion measurement on public pages only', control: 'Disabled until required consent; withdraw through cookie controls.' },
    { title: 'Advertising', purpose: 'No behavioural advertising or retargeting in Phase 1', control: 'Not used.' },
    { title: 'Session replay', purpose: 'Prohibited on assessment, report, authentication and admin routes', control: 'Not used on protected routes.' },
    { title: 'Health data', purpose: 'Never placed in analytics, advertising or replay payloads', control: 'Mandatory technical control.' },
  ];

  return (
    <div className="cookies-page">

      {/* TITLE SECTION */}
      <div className="title-section">
        <h1>Cookie Notice</h1>
        <p>Effective date: 21 July 2026 • Version: 1.0</p>
      </div>

      {/* BODY SECTION WITH EXTRA MARGINS */}
      <div className="body-section">
        <p className="intro-text">
          ROOTS-AI™ uses cookies and similar storage technologies on the public website. This notice explains what we use, why, and your choices.
        </p>

        {/* PREFERENCES SECTION */}
        <div className="preferences-section">
          <h2 className="preferences-title">Cookie preferences</h2>
          <button className="manage-btn">Manage Cookie Preferences</button>
        </div>

        {/* COOKIE CATEGORIES TABLE */}
        <h2 className="categories-title">Cookie categories and usage</h2>
        <div className="table-wrapper">
          <table className="cookies-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Purpose</th>
                <th>Consent / Control</th>
                <th>Provider</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, idx) => (
                <tr key={idx}>
                  <td className="category-name" data-label="Category">{cat.title}</td>
                  <td className="category-purpose" data-label="Purpose">{cat.purpose}</td>
                  <td className="category-control" data-label="Consent/Control">{cat.control}</td>
                  <td className="category-provider" data-label="Provider">In-house</td>
                  <td className="category-duration" data-label="Duration">Session / 12 months</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: '40px', fontSize: '14px', color: '#6B7280', fontStyle: 'italic' }}>
          Effective date: 21 July 2026 • Version: 1.0. This notice explains our cookie use in plain language and your rights. It is not a comprehensive legal analysis.
        </p>
      </div>

    </div>
  );
}
