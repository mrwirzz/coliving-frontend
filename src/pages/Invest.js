import React from 'react';
import backgroundImage from "../assets/invest-bg.jpg";
import PopupContact from '../components/PopupContact.js';

const Invest = () => {
  const [showContact, setShowContact] = React.useState(false);

  return (
    <>
      <PopupContact show={showContact} onHide={() => setShowContact(false)} />
      
      {/* Основная секция с фоном */}
      <section
        className="d-flex align-items-center justify-content-center text-center py-5 flex-column"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
          color: "white",
        }}
      >
        {/* Текстовый блок */}
        <div
          className="p-4 rounded mb-4"
          style={{
            backgroundColor: "rgba(255, 192, 203, 0.6)",
            backdropFilter: "blur(10px)",
            maxWidth: "700px",
          }}
        >
          <h2 className="fw-bold">For Investors</h2>
          <p>
            Partner in the future of housing with a turn-key expert, turning lands, flats, and houses into modern homes.
            We're transforming housing with a focus on community, sustainability, and ethics.
          </p>
          <p>
            Handling everything from site selection to design, construction, and management. Join us in shaping the future— 
            let's make an impact together.
          </p>
        </div>

        {/* Секция преимуществ */}
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Cocoon</h2>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="p-3 rounded" style={{ backgroundColor: "rgba(255, 192, 203, 0.6)", backdropFilter: "blur(10px)" }}>
                <h5 className="fw-bold">Gap to Fill</h5>
                <p>Low number of short-term housing for subject matter experts.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 rounded" style={{ backgroundColor: "rgba(255, 192, 203, 0.6)", backdropFilter: "blur(10px)" }}>
                <h5 className="fw-bold">Strong Returns</h5>
                <p>Warsaw rental yields at 6-7% (2024).</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 rounded" style={{ backgroundColor: "rgba(255, 192, 203, 0.6)", backdropFilter: "blur(10px)" }}>
                <h5 className="fw-bold">Easy, Cost-effective Living</h5>
                <p>One-click, all-in-one services.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 rounded" style={{ backgroundColor: "rgba(255, 192, 203, 0.6)", backdropFilter: "blur(10px)" }}>
                <h5 className="fw-bold">Built for Connection</h5>
                <p>Combating loneliness with community-driven spaces.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка для контакта */}
        <button className="btn btn-dark mt-4" onClick={() => setShowContact(true)}>Contact us</button>
      </section>
            {/* Вызов компонента PopUpContact */}
            <PopupContact show={showContact} handleClose={() => setShowContact(false)} />
    </>
    
  );
};

export default Invest;
