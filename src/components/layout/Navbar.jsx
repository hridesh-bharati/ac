'use client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) router.push(`/products?q=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm" style={{ top: '64px', zIndex: 1020 }}>
      <div className="container-fluid px-3 px-lg-4 py-2" style={{ maxWidth: '1280px' }}>
        
        {/* Mobile Toggler */}
        <button 
          className="navbar-toggler border-0 shadow-none ms-auto" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-between align-items-center py-2 py-lg-0" id="navbarNav">
          
          <ul className="navbar-nav gap-lg-3 mb-3 mb-lg-0 fw-semibold small text-uppercase">
            {LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href} className="nav-item">
                  <Link 
                    href={href} 
                    className={`nav-link px-2 py-1 text-decoration-none ${active ? 'text-primary fw-bold border-bottom border-primary border-2' : 'text-secondary'}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <form onSubmit={handleSearch} className="d-flex align-items-center bg-light border rounded-pill px-3 py-1.5 w-100 shadow-sm" style={{ maxWidth: '320px' }}>
            <input 
              type="text" 
              placeholder="Search product or service..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control border-0 shadow-none bg-transparent p-0 text-dark"
              style={{ fontSize: '13px' }}
            />
            <button type="submit" className="btn p-0 text-muted border-0 bg-transparent ms-2">
              <Search size={16} />
            </button>
          </form>

        </div>

      </div>
    </nav>
  );
}