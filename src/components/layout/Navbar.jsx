'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
];

function NavContent() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <div className="container-fluid px-3 px-lg-4 py-2 d-flex align-items-center justify-content-between" style={{ maxWidth: '1280px' }}>
      
      {/* Left Side: Logo */}
      <Link href="/" className="d-flex align-items-center text-decoration-none logo-wrapper flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={130}
          height={40}
          className="object-fit-contain"
          priority
        />
      </Link>

      {/* Mobile Toggler */}
      <button 
        className="navbar-toggler border-0 shadow-none p-2 d-lg-none" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Links */}
      <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
        <ul className="navbar-nav gap-lg-4 mb-0 fw-semibold text-uppercase align-lg-items-center">
          {LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href} className="nav-item">
                <Link 
                  href={href} 
                  className={`nav-link px-3 px-lg-2 py-3 py-lg-1 text-decoration-none mobile-nav-link ${active ? 'text-primary fw-bold border-bottom border-primary border-2 bg-light bg-lg-transparent' : 'text-secondary'}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 991.98px) {
          .mobile-nav-link {
            border-bottom: 1px solid #f1f5f9;
            font-size: 15px !important;
            letter-spacing: 0.5px;
            transition: background-color 0.2s ease;
          }
          .mobile-nav-link:hover {
            background-color: #f8fafc;
          }
        }
      `}</style>

    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm" style={{ top: '0', zIndex: 1020 }}>
      <Suspense fallback={null}>
        <NavContent />
      </Suspense>
    </nav>
  );
}