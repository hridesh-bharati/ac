'use client';
import { Phone, ShoppingCart, BarChart2, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TopBar() {
  return (
    <div className="bg-white border-bottom py-2 px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Aapka Custom Logo */}
        <Link href="/" className="d-flex align-items-center text-decoration-none">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={150} 
            height={45} 
            className="object-fit-contain" 
            priority
          />
        </Link>

        {/* Right Side Utility Icons & Links */}
        <div className="d-flex align-items-center gap-3 text-secondary small">
          <a href="tel:9876543210" className="text-dark text-decoration-none d-flex align-items-center" title="Call Us">
            <Phone size={18} />
          </a>
          
          <a href="#" className="text-dark text-decoration-none fw-bold" title="Facebook">f</a>
          <a href="#" className="text-dark text-decoration-none fw-bold" title="YouTube">yt</a>

          <div className="vr mx-1"></div>

          <Link href="/cart" className="text-dark text-decoration-none d-flex align-items-center gap-1">
            <ShoppingCart size={16} /> Shopping Cart (0)
          </Link>

          <Link href="#" className="text-dark text-decoration-none d-flex align-items-center gap-1">
            <BarChart2 size={16} /> Compare (0)
          </Link>

          <Link href="/contact" className="text-dark text-decoration-none d-flex align-items-center gap-1">
            <User size={16} /> Account
          </Link>
        </div>

      </div>
    </div>
  );
}