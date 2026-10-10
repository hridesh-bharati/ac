
'use client';
import { Wrench, Settings, Wind } from 'lucide-react';
import Link from 'next/link';

export default function ServiceSection() {
  return (
    <section className="container py-5 my-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <span className="text-primary fw-bold text-uppercase small bg-primary bg-opacity-10 px-3 py-1 rounded-pill">What We Do</span>
        <h2 className="fw-bold mt-2 mb-3 display-6">Our Popular Services</h2>
        <p className="text-muted">Comprehensive maintenance and repair solutions tailored for all window and split AC models.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
            <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
              <Wrench size={30} />
            </div>
            <h3 className="h5 fw-bold mb-2">AC Repair & Diagnostics</h3>
            <p className="text-muted small mb-4">
              Detailed inspection for cooling loss, strange noises, water dripping, or electrical fault fixes.
            </p>
            <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top">
              <span className="text-muted small">Starts from</span>
              <span className="text-primary fw-bold">₹499</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
            <div className="bg-success bg-opacity-10 text-success p-3 rounded-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
              <Settings size={30} />
            </div>
            <h3 className="h5 fw-bold mb-2">Deep Jet Wet Servicing</h3>
            <p className="text-muted small mb-4">
              High-pressure deep cleaning of cooling coils, filters, and drain trays for fresh, germ-free air.
            </p>
            <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top">
              <span className="text-muted small">Starts from</span>
              <span className="text-success fw-bold">₹599</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
            <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
              <Wind size={30} />
            </div>
            <h3 className="h5 fw-bold mb-2">Gas Filling & Leakage Check</h3>
            <p className="text-muted small mb-4">
              Complete pressure testing, pinpoint leakage welding, and pure gas charging for optimal chilling.
            </p>
            <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top">
              <span className="text-muted small">Starts from</span>
              <span className="text-dark fw-bold">₹1,499</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link href="/services" className="btn btn-outline-primary px-5 py-3 rounded-pill fw-bold text-decoration-none">
          Explore All Services
        </Link>
      </div>
    </section>
  );
}