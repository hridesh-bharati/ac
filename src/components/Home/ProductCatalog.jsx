'use client';
import { useState } from 'react';
import { SlidersHorizontal, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('residential');
  const [selectedHp, setSelectedHp] = useState({ 1: '1HP', 2: '1.5HP', 3: '1HP', 4: '2HP', 5: '3HP' });
  const [filterBrand, setFilterBrand] = useState('All');
  const [maxPrice, setMaxPrice] = useState(60000);

  // Products Data with real images and brands
  const products = [
    {
      id: 1,
      category: 'residential',
      brand: 'Daikin',
      name: 'FTXZ Series',
      model: 'Model: FTXZ25NVMV',
      price: 15000,
      oldPrice: 18000,
      badge: '30% DISCOUNT',
      badgeClass: 'bg-warning text-dark',
      hpOptions: ['1HP', '1.5HP', '2HP', '2.5HP'],
      image: '/images/ac-1.jpg'
    },
    {
      id: 2,
      category: 'residential',
      brand: 'LG',
      name: 'FTXZ Series',
      model: 'Model: FTXZ35NVMV',
      price: 16000,
      oldPrice: null,
      badge: 'HOT',
      badgeClass: 'bg-danger text-white',
      hpOptions: ['1HP', '1.5HP', '2HP', '2.5HP'],
      image: '/images/ac-2.jpg'
    },
    {
      id: 3,
      category: 'residential',
      brand: 'Samsung',
      name: 'FTXZ Series',
      model: 'Model: FTXZ50NVMV',
      price: 17000,
      oldPrice: null,
      badge: 'NEW',
      badgeClass: 'bg-primary text-white',
      hpOptions: ['1HP', '1.5HP', '2HP', '2.5HP'],
      image: '/images/ac-3.jpg'
    },
    {
      id: 4,
      category: 'commercial',
      brand: 'Voltas',
      name: 'Commercial Cassette AC',
      model: 'Model: FCQ50AV',
      price: 35000,
      oldPrice: 42000,
      badge: 'PROMO',
      badgeClass: 'bg-success text-white',
      hpOptions: ['2HP', '3HP', '4HP'],
      image: '/images/ac-4.jpg'
    },
    {
      id: 5,
      category: 'commercial',
      brand: 'Daikin',
      name: 'Duct Connected Inverter',
      model: 'Model: FBQ100BV',
      price: 48000,
      oldPrice: null,
      badge: 'BESTSELLER',
      badgeClass: 'bg-dark text-white',
      hpOptions: ['3HP', '4HP', '5HP'],
      image: '/images/ac-6.jpg'
    }
  ];

  // Active Filtering Logic (Tab + Brand + Max Price)
  const filteredProducts = products.filter(p => {
    const matchesTab = p.category === activeTab;
    const matchesBrand = filterBrand === 'All' || p.brand === filterBrand;
    const matchesPrice = p.price <= maxPrice;
    return matchesTab && matchesBrand && matchesPrice;
  });

  const handleHpSelect = (productId, hp) => {
    setSelectedHp(prev => ({ ...prev, [productId]: hp }));
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Tabs Header (RESIDENTIAL / COMMERCIAL) */}
        <div className="text-center mb-4">
          <div className="d-inline-flex gap-5 border-bottom pb-2">
            <button 
              onClick={() => setActiveTab('residential')}
              className={`border-0 bg-transparent fw-bold fs-5 pb-2 position-relative ${activeTab === 'residential' ? 'text-dark' : 'text-muted'}`}
            >
              RESIDENTIAL
              {activeTab === 'residential' && <span className="position-absolute bottom-0 start-0 w-100 bg-dark" style={{ height: '3px' }}></span>}
            </button>
            <button 
              onClick={() => setActiveTab('commercial')}
              className={`border-0 bg-transparent fw-bold fs-5 pb-2 position-relative ${activeTab === 'commercial' ? 'text-dark' : 'text-muted'}`}
            >
              COMMERCIAL
              {activeTab === 'commercial' && <span className="position-absolute bottom-0 start-0 w-100 bg-dark" style={{ height: '3px' }}></span>}
            </button>
          </div>
        </div>

        {/* Filter & Mobile Trigger Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="text-muted small mb-0">Showing {filteredProducts.length} items</p>

          {/* Flipkart Style Bottom Offcanvas Trigger Button */}
          <button 
            className="btn btn-dark d-flex align-items-center gap-2 rounded-pill px-4 py-2 small fw-bold shadow-sm"
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#filterBottomOffcanvas"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white position-relative">

                  {/* Top Badges */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className={`badge ${product.badgeClass} fw-bold px-2.5 py-1 rounded-pill`} style={{ fontSize: '10px' }}>
                      {product.badge}
                    </span>
                    <button className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1" style={{ fontSize: '11px' }}>
                      COMPARE
                    </button>
                  </div>

                  {/* Real Product Image Container - Full Size Fill */}
                  <div className="rounded-3 text-center position-relative mb-3 overflow-hidden shadow-sm border" style={{ height: '170px' }}>
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-fit-cover" 
                    />
                  </div>

                  {/* Product Info */}
                  <div className="text-center mb-3">
                    <span className="text-muted small fw-semibold" style={{ fontSize: '11px' }}>{product.brand}</span>
                    <h5 className="fw-bold text-dark mb-1">{product.name}</h5>
                    <p className="text-muted small mb-2" style={{ fontSize: '12px' }}>{product.model}</p>

                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <span className="fw-bold fs-5 text-dark">₹{product.price.toLocaleString()}</span>
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through small">₹{product.oldPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>

                  {/* HP / Capacity Selection Pills */}
                  <div className="d-flex justify-content-center gap-2 mt-auto pt-3 border-top">
                    {product.hpOptions.map((hp, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleHpSelect(product.id, hp)}
                        className={`btn btn-sm px-2.5 py-1 rounded fw-semibold ${selectedHp[product.id] === hp ? 'bg-dark text-white' : 'bg-light text-dark border'}`}
                        style={{ fontSize: '11px' }}
                      >
                        {hp}
                      </button>
                    ))}
                  </div>

                  <div className="mt-3 text-center">
                    <Link href={`/products/${product.id}`} className="btn btn-primary w-100 rounded-pill py-2 small fw-bold text-decoration-none">
                      View Details
                    </Link>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No products found matching your filter criteria.</p>
            </div>
          )}
        </div>

      </div>

      {/* Flipkart Style Bottom Offcanvas Filter */}
      <div 
        className="offcanvas offcanvas-bottom rounded-top-4 shadow-lg" 
        tabIndex="-1" 
        id="filterBottomOffcanvas" 
        aria-labelledby="filterLabel"
        style={{ height: '70vh' }}
      >
        <div className="offcanvas-header border-bottom px-4 py-3">
          <h5 className="offcanvas-title fw-bold" id="filterLabel">Filters</h5>
          <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body px-4 py-4">

          {/* Brand Filter */}
          <div className="mb-4">
            <h6 className="fw-bold mb-3">Select Brand</h6>
            <div className="d-flex flex-wrap gap-2">
              {['All', 'Daikin', 'LG', 'Samsung', 'Voltas'].map((brand, i) => (
                <button 
                  key={i} 
                  onClick={() => setFilterBrand(brand)}
                  className={`btn btn-sm px-3 py-2 rounded-pill ${filterBrand === brand ? 'btn-dark' : 'btn-outline-secondary'}`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h6 className="fw-bold mb-2">Max Price: ₹{maxPrice.toLocaleString()}</h6>
            <input 
              type="range" 
              className="form-range" 
              min="10000" 
              max="60000" 
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          {/* Apply Filter Button */}
          <div className="d-grid gap-2 mt-5">
            <button 
              type="button" 
              className="btn btn-dark py-3 rounded-pill fw-bold"
              data-bs-dismiss="offcanvas"
            >
              Apply Filters
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}