'use client';
import { productsData } from '@/data/products';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-pill mb-2">Our Inventory</span>
        <h1 className="fw-bold display-5">Explore High-Performance ACs</h1>
        <p className="text-muted">Choose from split, window, and inverter air conditioners from top brands.</p>
      </div>

      <div className="row g-4">
        {productsData.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100 border-0 shadow-sm p-3 rounded-4">
              <div className="bg-light rounded-3 text-center py-5 fs-1 mb-3">{product.image}</div>
              <span className="badge bg-secondary bg-opacity-10 text-secondary w-fit mb-2">{product.category}</span>
              <h3 className="h6 fw-bold mb-2">{product.name}</h3>
              <p className="text-muted small mb-3">{product.description}</p>
              <div className="mt-auto d-flex align-items-center justify-content-between pt-2 border-top">
                <span className="text-primary fw-bold">₹{product.price.toLocaleString()}</span>
                <Link href={`/products/${product.id}`} className="btn btn-sm btn-primary rounded-pill px-3">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}