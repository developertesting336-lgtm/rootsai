'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer style={{
      backgroundColor: '#1A2A4A',
      color: 'white',
      padding: '60px 40px',
      marginTop: '80px',
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <div style={{
          marginBottom: '48px',
        }}>
          <Link href="/" style={{
            fontSize: '20px',
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none',
          }}>
            ROOTS-AI™
          </Link>
        </div>

        {/* Footer Links - Multi Column */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Product */}
          <div>
            <h3 style={{
              fontSize: '15px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'white',
            }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/how-it-works" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  How It Works
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/platform" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Platform
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/example-report" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Example Report
                </Link>
              </li>
              <li>
                <Link href="/assessment" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Start Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 style={{
              fontSize: '15px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'white',
            }}>Research</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/research" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Research
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/pilot" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Pilot Program
                </Link>
              </li>
              <li>
                <Link href="/healthcare-professionals" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Healthcare Professionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{
              fontSize: '15px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'white',
            }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/about" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  About
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{
              fontSize: '15px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'white',
            }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/privacy" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: pathname === '/privacy' ? 700 : 400,
                  textDecoration: pathname === '/privacy' ? 'underline' : 'none',
                }}>
                  Privacy
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/terms" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: pathname === '/terms' ? 700 : 400,
                  textDecoration: pathname === '/terms' ? 'underline' : 'none',
                }}>
                  Terms
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/cookies" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: pathname === '/cookies' ? 700 : 400,
                  textDecoration: pathname === '/cookies' ? 'underline' : 'none',
                }}>
                  Cookies
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/medical-disclaimer" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/ai-disclaimer" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  AI Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '13px',
            color: 'white',
            margin: '0 0 12px 0',
            opacity: 0.9,
          }}>
            © 2026 ROOTS AI HEALTH SYSTEMS, Inc. All rights reserved.
          </p>
          <p style={{
            fontSize: '13px',
            color: 'white',
            margin: '0 0 12px 0',
            opacity: 0.9,
          }}>
            ROOTS-AI™ provides educational wellness information and does not diagnose or treat medical conditions.
          </p>
          <p style={{
            fontSize: '12px',
            color: 'white',
            margin: 0,
            opacity: 0.8,
          }}>
            Build: v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}
