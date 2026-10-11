'use client';
import { Search, Phone, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const SEARCH_PLACEHOLDERS = [
  "Search 'Split AC'...",
  "Search 'Window AC'...",
  "Search 'AC Repair Service'...",
  "Search 'Installation'..."
];

export default function TopBar({ cartCount = 0, phone = '9876543210' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % SEARCH_PLACEHOLDERS.length);
        setFadeAnim(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      router.push(`/products?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <header className="app-header shadow-sm bg-white" style={{ zIndex: 1030 }}>
      <div className="container-fluid d-flex align-items-center justify-content-between px-3 px-lg-4 py-2 gap-3" style={{ height: '70px', maxWidth: '1280px' }}>
        
        {/* Left Side: Animated Search Box */}
        <form onSubmit={handleSearch} className="d-flex align-items-center bg-light border rounded-pill px-3 flex-grow-1 shadow-sm search-container" style={{ maxWidth: '450px', height: '42px' }}>
          <input 
            type="text" 
            placeholder={SEARCH_PLACEHOLDERS[placeholderIndex]} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`form-control border-0 shadow-none bg-transparent p-0 text-dark search-input ${fadeAnim ? 'fade-in' : 'fade-out'}`}
            style={{ fontSize: '13px' }}
          />
          <button type="submit" className="btn p-0 text-muted border-0 bg-transparent ms-2 d-flex align-items-center justify-content-center" aria-label="Search" style={{ width: '24px', height: '24px' }}>
            <Search size={16} />
          </button>
        </form>

        {/* Right Actions: Uniform Size Buttons */}
        <div className="d-flex align-items-center gap-2 flex-shrink-0">
          
          {/* Call Button */}
          <a 
            href={`tel:${phone}`} 
            className="btn rounded-pill px-3 d-flex align-items-center gap-2 text-white fw-bold text-decoration-none shadow-sm call-badge"
            style={{ height: '42px', fontSize: '13px', background: 'linear-gradient(135deg, #0b2545 0%, #134074 100%)' }}
          >
            <Phone size={16} />
            <span className="d-none d-md-inline">{phone}</span>
          </a>

          {/* Cart Icon */}
          <Link 
            href="/cart" 
            className="btn rounded-circle d-flex align-items-center justify-content-center position-relative text-white shadow-sm cart-btn"
            style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #087cf0 0%, #0056b3 100%)' }}
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
            className="btn rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm profile-btn"
            style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
            aria-label="Account"
          >
            <User size={18} />
          </Link>

        </div>

      </div>

      <style jsx>{`
        .app-header {
          border-bottom: 1px solid #e2e8f0;
        }
        .call-badge, .cart-btn, .profile-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .call-badge:hover, .cart-btn:hover, .profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .search-container {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .search-container:focus-within {
          border-color: #087cf0 !important;
          box-shadow: 0 0 0 0.25rem rgba(8, 124, 240, 0.15) !important;
        }
        .search-input {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-out {
          opacity: 0;
          transform: translateY(-6px);
        }
      `}</style>
    </header>
  );
}