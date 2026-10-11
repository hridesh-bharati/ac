// src\app\cart\page.js
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(saved);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQty = (id, delta) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
      .filter((item) => item.qty > 0);
    updateCart(updated);
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (!mounted) return null;

  return (
    <div className="cart-page">
      <div className="container-fluid px-3 px-md-4 py-4">
        <h1 className="cart-title">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={60} strokeWidth={1.2} />
            <h3>Your cart is empty</h3>
            <p>Add some products to get started</p>
            <Link href="/products" className="shop-btn">
              Continue Shopping <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <Link href={`/products/${item.id}`} className="cart-img">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-fit-contain"
                    />
                  </Link>

                  <div className="cart-details">
                    <Link href={`/products/${item.id}`} className="cart-name">
                      {item.name}
                    </Link>
                    <span className="cart-brand">{item.brand}</span>
                    {item.hp && (
                      <span className="cart-variant">Variant: {item.hp}</span>
                    )}
                    <span className="cart-price">
                      ₹{item.price.toLocaleString()}
                    </span>

                    <div className="cart-actions">
                      <div className="qty-wrap">
                        <button onClick={() => updateQty(item.id, -1)} className="qty-btn">
                          <Minus size={12} />
                        </button>
                        <span className="qty-value">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="qty-btn">
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-btn"
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-subtotal">
                    ₹{(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3 className="summary-title">Order Summary</h3>
              <div className="summary-row">
                <span>Items ({totalItems})</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span className="free">FREE</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout <ArrowRight size={14} />
              </button>
              <Link href="/products" className="continue-link">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .cart-page {
          background: #f5f5f5;
          min-height: 100vh;
          padding: 20px 0 60px;
        }
        .cart-title {
          font-size: 22px;
          font-weight: 800;
          color: #111;
          margin: 0 0 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Empty */
        .empty-cart {
          text-align: center;
          padding: 80px 20px;
          color: #666;
        }
        .empty-cart h3 {
          font-size: 18px;
          margin: 16px 0 6px;
          color: #111;
        }
        .empty-cart p {
          font-size: 13px;
          margin: 0 0 20px;
        }
        .shop-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #000;
          color: #fff;
          padding: 12px 24px;
          border-radius: 24px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        /* Layout */
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 20px;
          align-items: start;
        }

        /* Items */
        .cart-items {
          background: #fff;
          border-radius: 12px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto;
          gap: 16px;
          padding: 16px;
          border-bottom: 1px solid #f0f0f0;
          align-items: center;
        }
        .cart-item:last-child {
          border-bottom: none;
        }

        .cart-img {
          position: relative;
          width: 100px;
          height: 100px;
          background: #fafafa;
          border-radius: 10px;
          padding: 8px;
        }

        .cart-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }
        .cart-name {
          font-size: 13.5px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .cart-name:hover {
          color: #c7511f;
        }
        .cart-brand {
          font-size: 11px;
          color: #888;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        .cart-variant {
          font-size: 11.5px;
          color: #555;
        }
        .cart-price {
          font-size: 15px;
          font-weight: 800;
          color: #111;
          margin-top: 4px;
        }

        .cart-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 10px;
        }
        .qty-wrap {
          display: inline-flex;
          align-items: center;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
        }
        .qty-btn {
          background: #f5f5f5;
          border: none;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .qty-btn:active {
          background: #e5e5e5;
        }
        .qty-value {
          min-width: 32px;
          text-align: center;
          font-size: 12.5px;
          font-weight: 700;
        }
        .remove-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: #cc0c39;
          font-size: 11.5px;
          font-weight: 700;
          cursor: pointer;
        }
        .remove-btn:hover {
          text-decoration: underline;
        }

        .cart-subtotal {
          font-size: 16px;
          font-weight: 800;
          color: #111;
          white-space: nowrap;
        }

        /* Summary */
        .cart-summary {
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          position: sticky;
          top: 90px;
        }
        .summary-title {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #111;
          margin: 0 0 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f0f0f0;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
          color: #555;
          padding: 6px 0;
        }
        .summary-row .free {
          color: #0a7d4a;
          font-weight: 700;
        }
        .summary-divider {
          height: 1px;
          background: #f0f0f0;
          margin: 12px 0;
        }
        .summary-row.total {
          font-size: 15px;
          font-weight: 800;
          color: #111;
          padding: 8px 0 16px;
        }

        .checkout-btn {
          width: 100%;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 24px;
          padding: 13px;
          font-size: 12.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .checkout-btn:hover {
          background: #222;
        }
        .checkout-btn:active {
          transform: scale(0.98);
        }

        .continue-link {
          display: block;
          text-align: center;
          font-size: 12px;
          color: #666;
          text-decoration: none;
          margin-top: 12px;
          font-weight: 600;
        }
        .continue-link:hover {
          color: #000;
        }

        /* Responsive */
        @media (max-width: 991.98px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
          .cart-summary {
            position: static;
          }
        }
        @media (max-width: 576px) {
          .cart-item {
            grid-template-columns: 80px 1fr;
            gap: 12px;
            padding: 12px;
          }
          .cart-img {
            width: 80px;
            height: 80px;
          }
          .cart-subtotal {
            grid-column: 2;
            text-align: right;
            font-size: 14px;
          }
          .cart-title {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}