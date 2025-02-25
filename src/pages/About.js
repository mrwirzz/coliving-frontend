import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="container py-5">
      {/* Cocoon Introduction */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Cocoon Who We Are</h2>
        <p className="text-muted">
          Cocoon redefines urban living with curated spaces that balance privacy, connection, and chillaxing.
        </p>
      </div>

      {/* Founder Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold">Paulina Shaw</h3>
          <p className="fw-bold">Founder, trainspotter with ginger head flair.</p>
          <p>
            Paulina Shaw’s extensive background in hospitality and finance shaped Cocoon’s vision. Having worked with industry leaders like Accor, Four Seasons, advised Prince Al Waleed, and collaborated with Dubai and Abu Dhabi governments on strategic alliances, she brings a unique, knowledge-driven approach to addressing housing and hospitality needs. As a Financier, Asset Manager, and Hotelier, her passion influences every design and decision.
          </p>
          <p>
            <a href="https://www.linkedin.com/in/paulina-shaw?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn btn-link" target="_blank" rel="noopener noreferrer">LinkedIn Link</a>
          </p>
        </div>
      </div>

      {/* Cocoon Vision */}
      <div className="text-center mb-5">
        <p>
          Cocoon is relentlessly focused on creating exceptional living. Rooted in hospitality, architecture, facility management and finance, we uncover opportunities at the intersection of real estate, technology, and design, delivering spaces that set a new standard for modern coliving.
        </p>
        <h4>Destination – Discovered.</h4>
      </div>

      {/* Our Inspiration */}
      <div className="text-center mb-5">
        <h3 className="fw-bold">Our Inspiration</h3>
        <p>
          Cocoon is born to sustainably house small communities.
        </p>
      </div>

      {/* Our Name & Identity */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h4 className="fw-bold">Our Name</h4>
          <p>
            Cocoon represents transformation that inspires progress, slow living, and authenticity.
          </p>
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">Our Identity</h4>
          <p>
            Our soft pink, inspired by flamingos, symbolizes life’s fleeting beauty, harmony, and friends for life — reminding us to find grace in life’s dance.
          </p>
        </div>
      </div>

      {/* Our Purpose */}
      <div className="text-center">
        <h3 className="fw-bold">Our Purpose: 3 I’s</h3>
        <ul className="list-unstyled">
          <li><strong>Inspire</strong> - As a Cocooner, I trigger ideas.</li>
          <li><strong>Inclusive</strong> - As a Cocooner, I value empowerment.</li>
          <li><strong>Innovation</strong> - As a Cocooner, I embrace transformation.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
