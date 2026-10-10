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
    <nav className="bg-black text-white py-2 px-3 sticky-top">
      <div className="container-fluid d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
        
        {/* Navigation Links */}
        <ul className="nav align-items-center gap-4 mb-0 fw-bold small text-uppercase">
          <li className="nav-item">
            <Link href="/" className="nav-link text-white p-0">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link text-white p-0">About Us</Link>
          </li>
          <li className="nav-item">
            <Link href="/products" className="nav-link text-white p-0">Residential</Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link text-white p-0">Commercial</Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link text-white p-0">Services</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="d-flex align-items-center bg-white rounded px-3 py-1" style={{ width: '320px' }}>
          <input 
            type="text" 
            placeholder="Enter the product or service you are looking for" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control border-0 shadow-none bg-transparent p-0 text-dark"
            style={{ fontSize: '11px' }}
          />
          <button type="submit" className="btn p-0 text-muted border-0 bg-transparent">
            <Search size={16} />
          </button>
        </form>

      </div>
    </nav>
  );
}