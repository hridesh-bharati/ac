'use client';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="container py-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <h1 className="fw-bold display-6 mb-2">Your Shopping Cart</h1>
        <p className="text-muted">Review your selected AC units or service bookings before checkout.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8 text-center bg-white p-5 rounded-4 shadow-sm border">
          <div className="text-primary mb-3"><ShoppingBag size={48} /></div>
          <h3 className="fw-bold h5 mb-2">Your cart is currently empty</h3>
          <p className="text-muted small mb-4">Explore our inventory of high-performance ACs or book a repair service.</p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/products" className="btn btn-primary px-4 py-2 rounded-pill fw-bold text-decoration-none">
              Browse ACs
            </Link>
            <Link href="/services" className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold text-decoration-none">
              Book Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}