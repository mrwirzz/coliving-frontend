import React from 'react';

const Invest = () => {
  return (
    <section className="container py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Invest with Us</h2>
      </div>

      {/* Key Benefits Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h4 className="fw-bold">Gap to Fill</h4>
          <p>Low number of short-term housing for subject matter experts.</p>
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">Strong Returns</h4>
          <p>Warsaw rental yields at 6-7% (2024).</p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <h4 className="fw-bold">Easy, Cost-effective Living</h4>
          <p>One-click, all-in-one services.</p>
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">Built for Connection</h4>
          <p>Combating loneliness with community-driven spaces.</p>
        </div>
      </div>

      {/* Partner with Experts */}
      <div className="text-center mb-5">
        <h3 className="fw-bold">Partner with Turn-Key Experts</h3>
        <p>
          Transforming properties into modern, ethical, and sustainable homes. From site selection to management, we handle it all—shaping the future of housing with community at its heart.
        </p>
        <p><strong>Just connect.</strong></p>
      </div>
    </section>
  );
};

export default Invest;
