'use client';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <span className="badge bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-pill mb-2">Get In Touch</span>
        <h1 className="fw-bold display-5 mb-3">Book Service or Contact Us</h1>
        <p className="text-muted">Fill out the form below or reach out to us directly through phone or email.</p>
      </div>

      <div className="row g-5">
        <div className="col-lg-4">
          <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
            <h3 className="fw-bold h5 mb-4">Contact Information</h3>
            
            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3"><Phone size={20} /></div>
              <div>
                <h6 className="fw-bold mb-1">Call Us</h6>
                <p className="text-muted small mb-0">+91 98765 43210</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3"><Mail size={20} /></div>
              <div>
                <h6 className="fw-bold mb-1">Email Us</h6>
                <p className="text-muted small mb-0">support@coolairpro.com</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3">
              <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3"><MapPin size={20} /></div>
              <div>
                <h6 className="fw-bold mb-1">Location</h6>
                <p className="text-muted small mb-0">Sector 18, Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="bg-white p-5 rounded-4 shadow-sm border">
            <h3 className="fw-bold h5 mb-4">Service Booking Form</h3>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Booking request submitted successfully! We will contact you soon."); }}>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Your Name</label>
                  <input type="text" required placeholder="John Doe" className="form-control py-2.5 rounded-3 bg-light border-0" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Phone Number</label>
                  <input type="tel" required placeholder="9876543210" className="form-control py-2.5 rounded-3 bg-light border-0" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Select Service</label>
                <select className="form-select py-2.5 rounded-3 bg-light border-0">
                  <option>AC Repair & Troubleshooting (₹499)</option>
                  <option>Deep Jet Wet Servicing (₹599)</option>
                  <option>Gas Filling & Leakage Repair (₹1,499)</option>
                  <option>AC Installation / Uninstallation (₹999)</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold">Complete Address</label>
                <textarea rows="4" required placeholder="House No, Street, Landmark..." className="form-control py-2.5 rounded-3 bg-light border-0"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow">
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}