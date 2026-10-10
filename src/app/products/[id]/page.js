export const dynamic = 'force-dynamic';

import { productsData } from '@/data/products';
import { ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.id) || productsData[0];

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <div className="bg-white border p-5 rounded-4 text-center fs-1 display-1 shadow-sm">
            {product.image}
          </div>
        </div>
        <div className="col-md-6">
          <span className="badge bg-primary bg-opacity-10 text-primary fw-bold px-3 py-1 rounded-pill mb-2">{product.brand}</span>
          <h1 className="fw-bold display-6 mb-3">{product.name}</h1>
          <h3 className="text-primary fw-bold mb-3">₹{product.price.toLocaleString()}</h3>
          <p className="text-muted mb-4">{product.description}</p>
          
          <div className="d-flex gap-3 mb-4">
            <button onClick={() => alert("Added to cart successfully!")} className="btn btn-primary px-4 py-3 rounded-pill fw-bold shadow-sm flex-grow-1">
              Add To Cart 🛒
            </button>
          </div>

          <div className="border-top pt-4 text-muted small">
            <p className="d-flex align-items-center gap-2 mb-2"><Truck size={16} className="text-primary" /> Free Doorstep Delivery & Standard Installation</p>
            <p className="d-flex align-items-center gap-2 mb-2"><ShieldCheck size={16} className="text-success" /> 1 Year Comprehensive & 5 Years Compressor Warranty</p>
            <p className="d-flex align-items-center gap-2"><RefreshCw size={16} className="text-warning" /> 7 Days Replacement Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
