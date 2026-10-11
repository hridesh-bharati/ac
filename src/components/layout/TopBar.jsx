'use client';
import { Phone, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TopBar({ cartCount = 0, phone = '9876543210' }) {
  return (
    <header className="sticky-top app-header shadow-sm">
      <div className="container-fluid d-flex align-items-center justify-content-between px-3 py-2" style={{ height: '64px', maxWidth: '1280px' }}>
        
        {/* Logo with smooth glow wrapper */}
        <Link href="/" className="d-flex align-items-center text-decoration-none logo-wrapper">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={36}
            className="object-fit-contain"
            priority
          />
        </Link>

        {/* Right Actions with vibrant colored buttons */}
        <div className="d-flex align-items-center gap-2">
          
          {/* Call Button - Vibrant Gradient */}
          <a 
            href={`tel:${phone}`} 
            className="btn rounded-pill px-3 py-1.5 d-flex align-items-center gap-2 text-white fw-bold text-decoration-none shadow-sm call-badge"
            style={{ fontSize: '13px', background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)' }}
          >
            <Phone size={15} className="animate-pulse" />
            <span className="d-none d-md-inline">{phone}</span>
          </a>

          {/* Cart Icon - Gradient Pill */}
          <Link 
            href="/cart" 
            className="btn rounded-circle p-2 d-flex align-items-center justify-content-center position-relative text-white shadow-sm cart-btn"
            style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)' }}
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-white fw-bold" style={{ fontSize: '10px' }}>
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>

          {/* Profile Icon */}
          <Link 
            href="/contact" 
            className="btn rounded-circle p-2 d-flex align-items-center justify-content-center text-white shadow-sm profile-btn"
            style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
            aria-label="Account"
          >
            <User size={18} />
          </Link>

        </div>

      </div>

      <style jsx>{`
        .app-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 2px solid #f1f5f9;
        }
        .call-badge, .cart-btn, .profile-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .call-badge:hover, .cart-btn:hover, .profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </header>
  );
}