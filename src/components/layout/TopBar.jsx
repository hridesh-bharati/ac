'use client';
import { Phone, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TopBar() {
  return (
    <div className="app-topbar bg-white border-bottom sticky-top">
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        
        {/* Logo */}
        <Link href="/" className="d-flex align-items-center text-decoration-none">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={110} 
            height={32} 
            className="object-fit-contain" 
            priority
          />
        </Link>

        {/* Right Icons */}
        <div className="d-flex align-items-center gap-2">
          <a href="tel:9876543210" className="icon-btn" title="Call Us">
            <Phone size={18} />
          </a>
          <Link href="/cart" className="icon-btn position-relative" title="Cart">
            <ShoppingCart size={18} />
            <span className="badge-dot">0</span>
          </Link>
          <Link href="/contact" className="icon-btn" title="Account">
            <User size={18} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .app-topbar {
          z-index: 1030;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95) !important;
        }
        .icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          background: #f4f4f5;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }
        .icon-btn:hover {
          background: #e4e4e7;
        }
        .icon-btn:active {
          transform: scale(0.92);
        }
        .badge-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          background: #000;
          color: #fff;
          font-size: 9px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}