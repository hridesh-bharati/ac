'use client';

import Link from 'next/link';
import {
  Wind,
  Wrench,
  Settings,
  WashingMachine,
  ArrowRight,
} from 'lucide-react';

const SERVICES_LIST = [
  {
    title: 'AC Installation',
    price: '₹1,500',
    desc: 'Professional installation of split and window air conditioners with care.',
    icon: Wind,
  },
  {
    title: 'AC Repair & Service',
    price: '₹600',
    desc: 'Expert diagnosis and repair of AC issues with reliable service.',
    icon: Wrench,
  },
  {
    title: 'Gas Refilling',
    price: '₹2,500',
    desc: 'AC gas pressure checks and refilling to restore cooling performance.',
    icon: Settings,
  },
  {
    title: 'Washing Machine Repair',
    price: '₹400',
    desc: 'Repair service for common washing machine problems and faults.',
    icon: WashingMachine,
  },
];

export default function ServiceSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container py-2">
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark display-6 mb-2">Our Services</h2>
          <p className="text-muted small mx-auto" style={{ maxWidth: '450px' }}>
            Comprehensive solutions for all your cooling and appliance needs
          </p>
        </div>

        {/* Services Grid (DRY with map) */}
        <div className="row g-4">
          {SERVICES_LIST.map(({ title, price, desc, icon: Icon }) => (
            <div className="col-12 col-sm-6 col-lg-3" key={title}>
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden service-card bg-white d-flex flex-column">
                
                {/* Top Icon Header */}
                <div className="py-4 text-center text-white" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' }}>
                  <div className="d-inline-flex align-items-center justify-content-center bg-white text-info rounded-circle shadow-sm" style={{ width: '50px', height: '50px' }}>
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h6 fw-bold text-dark mb-1">{title}</h3>
                  
                  <div className="mb-2">
                    <span className="fw-bold fs-5 text-info">{price}</span>
                    <small className="text-muted ms-1" style={{ fontSize: '11px' }}>and up</small>
                  </div>

                  <p className="text-muted small mb-4 flex-grow-1" style={{ fontSize: '12.5px', lineHeight: '1.6' }}>
                    {desc}
                  </p>

                  {/* Yellow Book Service Button (Bootstrap Utility + Minimal Style) */}
                  <div className="mt-auto">
                    <Link
                      href="/services"
                      className="btn w-100 fw-bold rounded-pill py-2 text-dark shadow-sm book-btn"
                      style={{ background: '#ffbc00', fontSize: '12.5px', border: 'none' }}
                    >
                      Book Service
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button (Red Gradient Glassmorphism using Bootstrap + minimal inline) */}
        <div className="text-center mt-5">
          <Link
            href="/services"
            className="btn rounded-pill px-4 py-3 fw-bold text-white text-uppercase d-inline-flex align-items-center gap-2 shadow-lg view-all-red-btn"
            style={{
              fontSize: '13px',
              letterSpacing: '0.5px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <span>View All Services</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* Minimal Custom CSS for Hover Transitions Only */}
      <style jsx>{`
        .service-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.75rem 1.5rem rgba(14, 165, 233, 0.15) !important;
        }
        .book-btn {
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .book-btn:hover {
          background-color: #f59e0b !important;
          transform: scale(1.02);
        }
        .view-all-red-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .view-all-red-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 1rem 2rem rgba(239, 68, 68, 0.4) !important;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%) !important;
          color: #fff;
        }
      `}</style>
    </section>
  );
}