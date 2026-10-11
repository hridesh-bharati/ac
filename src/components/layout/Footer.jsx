'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="position-relative pt-5 bg-light overflow-hidden" style={{ marginTop: '80px' }}>
      
      <div className="container" style={{ maxWidth: '1280px' }}>
        
        {/* Floating Newsletter Card */}
        <div 
          className="rounded-4 p-4 p-md-5 text-white position-relative shadow-lg newsletter-banner"
          style={{ 
            background: 'linear-gradient(135deg, #0b2545 0%, #087cf0 100%)',
            zIndex: 2,
            marginBottom: '-60px'
          }}
        >
          <div className="row align-items-center g-4">
            
            {/* Left: Icon Space */}
            <div className="col-lg-5 text-center text-lg-start">
              <div className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle p-4 shadow-sm" style={{ width: '100px', height: '100px' }}>
                <Mail size={48} className="text-white" />
              </div>
            </div>

            {/* Right: Newsletter Text & Form */}
            <div className="col-lg-7">
              <h3 className="fw-bold fs-3 mb-2 text-white">Subscribe to our newsletter to get updates to our latest collections</h3>
              <p className="text-white-50 small mb-4">Get 20% off on your first order just by subscribing to our newsletter.</p>
              
              <form onSubmit={handleSubscribe} className="bg-white p-2 rounded-pill shadow-sm d-flex align-items-center mb-2" style={{ maxWidth: '480px' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control border-0 shadow-none bg-transparent px-3 text-dark"
                  style={{ fontSize: '13px' }}
                />
                <button 
                  type="submit" 
                  className="btn rounded-pill px-4 py-2 fw-bold text-dark flex-shrink-0"
                  style={{ background: '#ffbc00', fontSize: '13px' }}
                >
                  {subscribed ? 'Subscribed ✓' : 'Subscribe'}
                </button>
              </form>

              <div className="text-white-50" style={{ fontSize: '11px' }}>
                {subscribed ? (
                  <span className="text-warning fw-bold">Thank you for subscribing! Check your inbox for the coupon.</span>
                ) : (
                  <span>You will be able to unsubscribe at any time. Read our <Link href="/privacy" className="text-white text-decoration-underline">privacy policy</Link></span>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Main Footer Links Section */}
        <div className="bg-white rounded-4 pt-5 pb-4 px-4 px-md-5 border shadow-sm main-footer-box">
          
          <div className="row g-4 pt-5">
            
            {/* Column 1: Logo & About */}
            <div className="col-lg-4 col-md-6">
              <Link href="/" className="d-flex align-items-center text-decoration-none mb-3">
                <Image src="/images/logo.png" alt="Logo" width={130} height={40} className="object-fit-contain" />
              </Link>
              <p className="text-secondary small mb-4" style={{ fontSize: '12.5px', lineHeight: '1.7', maxWidth: '300px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
              </p>
              <div className="d-flex align-items-center gap-3 text-dark">
                {/* Facebook SVG */}
                <a href="#" className="social-icon-btn" aria-label="Facebook">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                {/* Twitter SVG */}
                <a href="#" className="social-icon-btn" aria-label="Twitter">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                {/* Instagram SVG */}
                <a href="#" className="social-icon-btn" aria-label="Instagram">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                {/* LinkedIn SVG */}
                <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="social-icon-btn" aria-label="Website"><Globe size={16} /></a>
              </div>
            </div>

            {/* Column 2: Company */}
            <div className="col-lg-2 col-md-3 col-6">
              <h5 className="fw-bold fs-6 text-dark mb-3">Company</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 small" style={{ fontSize: '13px' }}>
                <li><Link href="/about" className="text-secondary text-decoration-none footer-link">About Us</Link></li>
                <li><Link href="/services" className="text-secondary text-decoration-none footer-link">Services</Link></li>
                <li><Link href="/community" className="text-secondary text-decoration-none footer-link">Community</Link></li>
                <li><Link href="/testimonials" className="text-secondary text-decoration-none footer-link">Testimonial</Link></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="col-lg-2 col-md-3 col-6">
              <h5 className="fw-bold fs-6 text-dark mb-3">Support</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 small" style={{ fontSize: '13px' }}>
                <li><Link href="/help" className="text-secondary text-decoration-none footer-link">Help Center</Link></li>
                <li><Link href="/tweet" className="text-secondary text-decoration-none footer-link">Tweet @ Us</Link></li>
                <li><Link href="/webians" className="text-secondary text-decoration-none footer-link">Webians</Link></li>
                <li><Link href="/feedback" className="text-secondary text-decoration-none footer-link">Feedback</Link></li>
              </ul>
            </div>

            {/* Column 4: Links */}
            <div className="col-lg-2 col-md-3 col-6">
              <h5 className="fw-bold fs-6 text-dark mb-3">Links</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 small" style={{ fontSize: '13px' }}>
                <li><Link href="/courses" className="text-secondary text-decoration-none footer-link">Courses</Link></li>
                <li><Link href="/teacher" className="text-secondary text-decoration-none footer-link">Become Teacher</Link></li>
                <li><Link href="/services" className="text-secondary text-decoration-none footer-link">Service</Link></li>
                <li><Link href="/all-in-one" className="text-secondary text-decoration-none footer-link">All in One</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="col-lg-2 col-md-3 col-6">
              <h5 className="fw-bold fs-6 text-dark mb-3">Contact Us</h5>
              <ul className="list-unstyled d-flex flex-column gap-3 small" style={{ fontSize: '13px' }}>
                <li className="d-flex align-items-center gap-2 text-secondary">
                  <Phone size={15} className="text-primary flex-shrink-0" />
                  <span>(91) 98765 4321 54</span>
                </li>
                <li className="d-flex align-items-center gap-2 text-secondary">
                  <Mail size={15} className="text-primary flex-shrink-0" />
                  <span>support@mail.com</span>
                </li>
              </ul>
            </div>

          </div>

          <hr className="text-muted opacity-25 my-4" />

          {/* Bottom Copyright & Legal Links */}
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 py-2 text-secondary" style={{ fontSize: '12px' }}>
            <div>
              <span>© Copyright by CodeUI. All rights reserved.</span>
            </div>
            <div className="d-flex gap-4">
              <Link href="/privacy" className="text-secondary text-decoration-none footer-link">Privacy Policy</Link>
              <Link href="/terms" className="text-secondary text-decoration-none footer-link">Terms of Use</Link>
              <Link href="/legal" className="text-secondary text-decoration-none footer-link">Legal</Link>
              <Link href="/sitemap" className="text-secondary text-decoration-none footer-link">Site Map</Link>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        .main-footer-box {
          padding-top: 80px !important;
        }
        .footer-link {
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #087cf0 !important;
        }
        .social-icon-btn {
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #f1f5f9;
          color: #334155;
          transition: all 0.2s ease;
        }
        .social-icon-btn:hover {
          background: #087cf0;
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}