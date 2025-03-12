import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/Whoweare2.jpg";
import founderImage from "../assets/founder.jpg";
import inspirationImage from "../assets/inspiration.jpg"; // Заменить на реальный путь
import purposeImage from "../assets/purpose-bg.jpg"; // Заменить на реальный путь

const About = () => {
  return (
    <>
      {/* Первая секция: О нас */}
      <section 
        className="container-fluid py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img 
                src={founderImage} 
                alt="Paulina Shaw" 
                className="img-fluid rounded shadow-lg" 
                style={{ maxWidth: "100%", height: "auto" }} 
              />
            </div>

            <div className="col-md-6">
              <div 
                className="p-4 rounded"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)", 
                  backdropFilter: "blur(10px)"
                }}
              >
                <h3 className="fw-bold">Cocoon Who We Are</h3>
                <p>
                Paulina Shaw
                Founder, trainspotter with ginger head flair.
                </p>
                <p>
                Paulina Shaw's extensive background in hospitality and finance shaped Cocoon's vision. Having worked with industry leaders like Accor, Four Seasons, advised Prince Al Waleed, and collaborated with Dubai and Abu Dhabi governments on strategic alliances, she brings a unique, knowledge-driven approach to addressing housing and hospitality needs. As a Financier, Asset Manager, and Hotelier, her passion influences every design and decision.
                <a href="https://www.linkedin.com/in/paulina-shaw?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
   className="block" 
   target="_blank" 
   rel="noopener noreferrer">
  <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8 mx-auto" style={{ maxWidth: "15px", maxHeight: "15px" }} />
</a>
                </p>
                <p>
                  <strong>We focus relentlessly on creating exceptional living.</strong> By leveraging a global network 
                  and deep expertise in hospitality, architecture, facility management, and finance, we uncover 
                  opportunities at the intersection of real estate, technology, and design.
                </p>
                <p><strong>Desitination – discovered.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Вторая секция: Вдохновение */}
      <section 
        className="py-5 position-relative"
        style={{
          backgroundImage: `url(${inspirationImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "120vh",
          paddingTop: "0"
        }}
      >
        <div 
          className="container p-4 rounded"
          style={{ 
            backgroundColor: "rgba(255, 255, 255, 0.5)", 
            backdropFilter: "blur(10px)",
            position: "sticky",
            top: "80px"
          }}
        >
          <h3 className="fw-bold">Our Inspiration</h3>
          <p>Cocoon is born to sustainably house small communities.</p>
          <div className="row">
            <div className="col-md-6">
              <h4 className="fw-bold">Our Name</h4>
              <p>
              Cocoon represents transformation that inspires progress, slow living, and authenticity.
              </p>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Our Identity</h4>
              <p>
              Our soft pink, inspired by flamingos, symbolizes life's fleeting beauty, harmony, and friends for life — reminding us to find grace in life's dance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Третья секция: 3 I's */}
      <section 
        className="py-5 position-relative"
        style={{
          backgroundImage: `url(${purposeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "180vh",
          paddingTop: "0"
        }}
      >
        <div 
          className="container p-4 rounded"
          style={{ 
            backgroundColor: "rgba(255, 255, 255, 0.7)", 
            backdropFilter: "blur(10px)",
            position: "sticky",
            top: "80px"
          }}
        >
          <h3 className="fw-bold">Our Purpose: 3 I's 🌐</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="p-3 shadow-sm rounded bg-light">
                <h5 className="fw-bold">Inspire</h5>
                <p>As a Cocooner, I trigger ideas.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 shadow-sm rounded bg-light">
                <h5 className="fw-bold">Inclusive</h5>
                <p>As a Cocooner, I value empowerment.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 shadow-sm rounded bg-light">
                <h5 className="fw-bold">Innovation</h5>
                <p>As a Cocooner, I embrace transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
