'use client';
export default function AboutPage() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5 mb-5">
        <div className="col-lg-6">
          <span className="badge bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-pill mb-2">About CoolAir Pro</span>
          <h1 className="fw-bold display-5 mb-3">Your Trusted Partner For All Home Cooling Needs</h1>
          <p className="text-muted mb-4">
            Founded with a vision to make professional home appliance repair hassle-free, transparent, and affordable, CoolAir Pro brings certified technicians straight to your doorstep and offers top branded AC models.
          </p>
          <div className="row g-3">
            <div className="col-6">
              <div className="p-3 bg-white rounded-3 shadow-sm border">
                <h3 className="fw-bold text-primary mb-1">10,000+</h3>
                <p className="text-muted small mb-0">Satisfied Clients</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 bg-white rounded-3 shadow-sm border">
                <h3 className="fw-bold text-primary mb-1">150+</h3>
                <p className="text-muted small mb-0">Expert Technicians</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bg-primary text-white p-5 rounded-4 shadow-lg">
            <h3 className="fw-bold mb-3">Our Core Values</h3>
            <ul className="list-unstyled space-y-3 mb-0">
              <li className="mb-3">✓ <strong>Quality First:</strong> Use of genuine spare parts and advanced diagnostic tools.</li>
              <li className="mb-3">✓ <strong>Absolute Transparency:</strong> No hidden costs or surprise inspection charges.</li>
              <li className="mb-3">✓ <strong>Customer Centricity:</strong> 30-day service warranty and dedicated support desk.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}