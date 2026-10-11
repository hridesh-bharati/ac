// src/app/products/[id]/page.js
'use client';

import { productsData } from '@/data/products';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import {
  ShieldCheck, Truck, Star, Minus, Plus,
  ShoppingCart, ChevronLeft, Check, MapPin, RefreshCw, Zap, Shield, Headphones
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function ProductDetailContent() {
  const params = useParams();
  const router = useRouter();
  
  const productId = params?.id || '1';
  const product = productsData.find((p) => p.id === productId) || productsData[0];

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);

  useEffect(() => {
    if (product?.image) setActiveImage(product.image);
  }, [product]);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existing = cart.findIndex((item) => item.id === product.id);
      if (existing >= 0) cart[existing].qty += qty;
      else cart.push({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image, qty });
      localStorage.setItem('cart', JSON.stringify(cart));
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (e) { console.error(e); }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => router.push('/cart'), 400);
  };

  return (
    <div className="bg-white min-vh-100 pb-5">
      {/* Section 1: Breadcrumb Header Bar */}
      <div className="bg-light border-bottom py-2.5 mb-4">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="d-flex align-items-center justify-content-between">
            <button 
              onClick={() => router.back()} 
              className="btn btn-link text-dark text-decoration-none p-0 d-inline-flex align-items-center gap-1 fw-bold small"
            >
              <ChevronLeft size={16} /> Back to Products
            </button>
            
            <nav className="text-muted small mb-0 d-none d-md-block">
              <Link href="/" className="text-decoration-none text-muted">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/products" className="text-decoration-none text-muted">Catalog</Link>
              <span className="mx-2">›</span>
              <span className="text-dark fw-semibold">{product.name}</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="row g-4 g-lg-5 align-items-start">

          {/* Section 2: Product Image Gallery */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              <div className="position-relative bg-light rounded-4 overflow-hidden border w-100 shadow-sm" style={{ height: '420px' }}>
                <Image src={activeImage} alt={product.name} fill className="object-fit-contain p-3" priority />
                <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '60px', background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)' }}></div>
              </div>
              
              <div className="d-flex gap-2">
                {[product.image, product.image, product.image, product.image].map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(img)} 
                    className={`position-relative rounded-3 border p-1 bg-white thumbnail-btn ${activeImage === img ? 'border-primary border-2 shadow-sm' : 'border-light'}`} 
                    style={{ width: '70px', height: '70px' }}
                  >
                    <Image src={img} alt="" fill className="object-fit-contain rounded-2" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Product Info & Details */}
          <div className="col-lg-4">
            <span className="badge bg-primary bg-opacity-10 text-primary fw-bold px-3 py-1.5 rounded-pill mb-3 text-uppercase" style={{ fontSize: '11px', letterSpacing: '0.8px' }}>
              {product.brand}
            </span>
            
            <h1 className="fw-bold fs-3 text-dark mb-3" style={{ lineHeight: '1.3', color: '#0b2545' }}>{product.name}</h1>

            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="d-flex gap-1 text-warning">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill={i < 4 ? '#f59e0b' : '#e4e4e7'} stroke="none" />)}
              </div>
              <span className="fw-bold small text-dark">4.8</span>
              <span className="text-muted small">(312 verified reviews)</span>
            </div>

            <hr className="text-muted opacity-25 my-3" />

            <div className="d-flex align-items-baseline gap-3 flex-wrap mb-2">
              {discount > 0 && <span className="badge bg-danger px-2 py-1 fs-6 rounded-2 fw-bold">-{discount}% OFF</span>}
              <span className="fs-2 fw-bold text-dark" style={{ color: '#0b2545' }}>₹{product.price.toLocaleString()}</span>
              {product.oldPrice && <span className="text-muted text-decoration-line-through small">M.R.P.: ₹{product.oldPrice.toLocaleString()}</span>}
            </div>
            <p className="text-muted small mb-4">Inclusive of all taxes & professional standard doorstep installation</p>

            {/* Section 4: Offers & Discounts Card */}
            <div className="bg-light p-3 rounded-4 mb-4 border">
              <h6 className="fw-bold text-uppercase text-dark mb-2 d-flex align-items-center gap-1.5" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                <Zap size={14} className="text-warning" /> Available Bank Offers & EMI
              </h6>
              <div className="d-flex flex-column gap-2.5 small text-muted">
                <div className="d-flex gap-2 align-items-start">
                  <span className="badge bg-white text-dark border px-2 py-1 shadow-sm fw-bold" style={{ fontSize: '10px' }}>Bank Offer</span>
                  <span>10% instant discount on select credit & debit cards</span>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <span className="badge bg-white text-dark border px-2 py-1 shadow-sm fw-bold" style={{ fontSize: '10px' }}>No Cost EMI</span>
                  <span>Available on orders above ₹10,000 with zero interest plans</span>
                </div>
              </div>
            </div>

            {/* Section 5: Technical Specifications */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase text-dark mb-2" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Key Specifications</h6>
              <div className="row g-2 small bg-white border p-3 rounded-4">
                <div className="col-6 text-muted">Capacity: <span className="text-dark fw-semibold">1.5 Ton / Inverter</span></div>
                <div className="col-6 text-muted">Star Rating: <span className="text-dark fw-semibold">5 Star Efficient</span></div>
                <div className="col-6 text-muted">Refrigerant: <span className="text-dark fw-semibold">Eco-friendly R-32</span></div>
                <div className="col-6 text-muted">Warranty: <span className="text-dark fw-semibold">1 Year Comprehensive</span></div>
              </div>
            </div>

            {/* Section 6: Key Highlights */}
            <div>
              <h6 className="fw-bold text-uppercase text-dark mb-2" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>Product Highlights</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
                <li className="d-flex align-items-center gap-2"><Check size={16} className="text-success flex-shrink-0" /> Copper condenser coil for better cooling and low maintenance</li>
                <li className="d-flex align-items-center gap-2"><Check size={16} className="text-success flex-shrink-0" /> Stabilizer-free operation across voltage fluctuations</li>
              </ul>
            </div>
          </div>

          {/* Section 7: Action Box / Buy Box */}
          <div className="col-lg-3">
            <div className="border rounded-4 p-4 shadow-sm bg-white">
              <div className="fs-3 fw-bold text-dark mb-3" style={{ color: '#0b2545' }}>₹{product.price.toLocaleString()}</div>

              <div className="d-flex align-items-center gap-2 text-muted small mb-3">
                <MapPin size={16} className="text-primary" />
                <span>Standard delivery within 24-48 hours</span>
              </div>

              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></span>
                <span className="text-success fw-bold small">In Stock & Ready to Install</span>
              </div>

              <div className="mb-4">
                <label className="fw-bold small text-dark d-block mb-2">Quantity</label>
                <div className="d-inline-flex align-items-center border rounded-pill overflow-hidden bg-light">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="btn btn-sm border-0 px-3 py-1 shadow-none"><Minus size={14} /></button>
                  <span className="px-3 fw-bold small text-dark">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="btn btn-sm border-0 px-3 py-1 shadow-none"><Plus size={14} /></button>
                </div>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button onClick={handleAddToCart} className="btn btn-outline-dark py-2.5 rounded-pill fw-bold small shadow-sm d-flex align-items-center justify-content-center gap-2">
                  <ShoppingCart size={16} /> {added ? 'Added to Cart ✓' : 'Add to Cart'}
                </button>
                <button onClick={handleBuyNow} className="btn text-white py-2.5 rounded-pill fw-bold small shadow-sm" style={{ background: 'linear-gradient(135deg, #087cf0 0%, #0056b3 100%)' }}>
                  Buy Now
                </button>
              </div>

              <div className="border-top pt-3 mt-3 d-flex flex-column gap-2 text-muted" style={{ fontSize: '11px' }}>
                <div className="d-flex align-items-center gap-2"><Truck size={15} className="text-primary" /> Free Doorstep Delivery</div>
                <div className="d-flex align-items-center gap-2"><ShieldCheck size={15} className="text-success" /> 1 Year Comprehensive Warranty</div>
                <div className="d-flex align-items-center gap-2"><RefreshCw size={15} className="text-warning" /> 7 Days Replacement Policy</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .thumbnail-btn {
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .thumbnail-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="text-center py-5">Loading product details...</div>}>
      <ProductDetailContent />
    </Suspense>
  );
}