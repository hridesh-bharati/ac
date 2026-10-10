'use client';
import { Snowflake, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4">
            <h4 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
              <Snowflake className="text-primary" size={24} /> CoolAir Pro
            </h4>
            <p className="text-white-50 small">Your ultimate destination for buying brand new AC units and professional maintenance services.</p>
          </div>
          <div className="col-lg-2 col-md-4">
            <h6 className="fw-bold text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2"><Link href="/products" className="text-decoration-none text-white-50">Buy ACs</Link></li>
              <li className="mb-2"><Link href="/services" className="text-decoration-none text-white-50">Book Service</Link></li>
              <li className="mb-2"><Link href="/about" className="text-decoration-none text-white-50">About Us</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold text-white mb-3">Contact Info</h6>
            <p className="text-white-50 small mb-2"><Phone size={14} className="text-primary me-2" /> +91 98765 43210</p>
            <p className="text-white-50 small mb-2"><Mail size={14} className="text-primary me-2" /> support@coolairpro.com</p>
            <p className="text-white-50 small"><MapPin size={14} className="text-primary me-2" /> Sector 18, Noida, India</p>
          </div>
        </div>
        <hr className="border-secondary opacity-25" />
        <div className="text-center text-white-50 small">
          © {currentYear} CoolAir Pro. Built with Next.js & Bootstrap 5 (Frontend Only).
        </div>
      </div>
    </footer>
  );
}