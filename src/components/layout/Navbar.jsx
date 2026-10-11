'use client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top py-2 px-3">
      <div className="container-fluid">
        
        {/* Mobile Toggler Button */}
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

        {/* Collapsible Menu Container */}
        <div className="collapse navbar-collapse justify-content-between align-items-center py-2 py-lg-0" id="navbarNav">
          
          {/* Navigation Links */}
          <ul className="navbar-nav gap-lg-4 mb-3 mb-lg-0 fw-bold small text-uppercase">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white p-0 py-1">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-white-50 p-0 py-1">About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link text-white-50 p-0 py-1">Residential</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link text-white-50 p-0 py-1">Commercial</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link text-white-50 p-0 py-1">Services</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="d-flex align-items-center bg-white rounded px-3 py-1.5 w-100" style={{ maxWidth: '320px' }}>
            <input 
              type="text" 
              placeholder="Search product or service..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control border-0 shadow-none bg-transparent p-0 text-dark"
              style={{ fontSize: '12px' }}
            />
            <button type="submit" className="btn p-0 text-muted border-0 bg-transparent">
              <Search size={16} />
            </button>
          </form>

        </div>

      </div>
    </nav>
  );
}