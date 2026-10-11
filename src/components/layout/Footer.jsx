'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-white text-dark pt-4 pb-3 mt-auto border-top">
      <div className="container">

        {/* ===== TOP NEWSLETTER BAR ===== */}
        <div className="newsletter-bar d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 py-3 px-3 px-md-4 mb-5">
          <div className="d-flex align-items-center gap-3">
            <div className="newsletter-icon d-flex align-items-center justify-content-center">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <h6 className="fw-bold mb-0 text-uppercase" style={{ fontSize: '13px', letterSpacing: '0.5px' }}>
                Subscribe to Our Newsletter
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: '11px' }}>
                Don't miss the Super Attractive Promotion
              </p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="d-flex gap-2 newsletter-form">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="form-control shadow-none newsletter-input"
            />
            <button type="submit" className="btn btn-dark fw-bold px-4 text-uppercase newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>

        {/* ===== MAIN FOOTER LINKS ===== */}
        <div className="row g-4 mb-5">

          {/* Column 1: Logo */}
          <div className="col-lg-3 col-md-6">
            <Link href="/" className="d-inline-block">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={110}
                height={34}
                className="object-fit-contain"
              />
            </Link>
          </div>

          {/* Column 2: Products & Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Products & Services</h6>
            <ul className="footer-list">
              <li><Link href="/products">Residential Air Conditioners</Link></li>
              <li><Link href="/products">Commercial Air Conditioner</Link></li>
              <li><Link href="/services">Service Package</Link></li>
              <li><Link href="/services">Warranty Service</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Customer Support</h6>
            <ul className="footer-list">
              <li>Customer Care Hotline: <strong>1900 0000</strong></li>
              <li>Customer Care Email: support@coolairpro.com</li>
              <li><Link href="/contact">Ordering Guide</Link></li>
              <li><Link href="/contact">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Policy + Payment */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Policy</h6>
            <ul className="footer-list mb-4">
              <li><Link href="/contact">Return Policy</Link></li>
              <li><Link href="/contact">Installment</Link></li>
              <li><Link href="/contact">Transportation and Installation</Link></li>
            </ul>

            <h6 className="footer-heading">Payment Methods</h6>
            <div className="d-flex flex-wrap gap-2">
              <span className="payment-badge">VISA</span>
              <span className="payment-badge">Mastercard</span>
              <span className="payment-badge">JCB</span>
              <span className="payment-badge">COD</span>
            </div>
          </div>

        </div>

        <hr className="my-4 opacity-25" />

        {/* ===== BOTTOM COPYRIGHT BAR ===== */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 small text-muted">
          <div style={{ fontSize: '11px', lineHeight: '1.7' }}>
            <p className="mb-1">
              <span className="fw-semibold text-dark">LICENSE NUMBER:</span> EXXX-19215076
            </p>
            <p className="mb-0">
              <span className="fw-semibold text-dark">Address:</span> Sector 18, Noida, Uttar Pradesh, India
            </p>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-1 text-dark" style={{ fontSize: '11px' }}>
              <ShieldCheck size={14} />
              <span className="fw-bold text-uppercase" style={{ letterSpacing: '0.5px' }}>
                Verified
              </span>
            </div>
            <p className="mb-0" style={{ fontSize: '11px' }}>
              Copyright © CoolAir Pro {currentYear}.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ===== NEWSLETTER BAR ===== */
        .newsletter-bar {
          background: #f8f8f8;
          border-radius: 12px;
          border: 1px solid #eee;
        }
        .newsletter-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #000;
          flex-shrink: 0;
        }
        .newsletter-form {
          flex: 1;
          max-width: 480px;
        }
        .newsletter-input {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 13px;
          background: #fff;
        }
        .newsletter-input:focus {
          border-color: #000;
          box-shadow: none;
        }
        .newsletter-btn {
          border-radius: 8px;
          font-size: 11px;
          letter-spacing: 0.5px;
          padding: 10px 24px;
        }

        /* ===== FOOTER HEADINGS ===== */
        .footer-heading {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #000;
          margin-bottom: 16px;
        }

        /* ===== FOOTER LIST ===== */
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-list li {
          font-size: 12px;
          color: #666;
          margin-bottom: 10px;
          line-height: 1.5;
        }
        .footer-list li a {
          color: #666;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-list li a:hover {
          color: #000;
        }

        /* ===== PAYMENT BADGES ===== */
        .payment-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          padding: 5px 12px;
          font-size: 10px;
          font-weight: 700;
          color: #333;
          letter-spacing: 0.3px;
        }
      `}</style>
    </footer>
  );
}