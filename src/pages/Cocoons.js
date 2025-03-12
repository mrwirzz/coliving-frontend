import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BookButton from "../features/bookingbutton.js";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Cocoonback1.jpg";
const Cocoons = () => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/#rooms");
    setTimeout(() => {
      const roomsSection = document.getElementById("rooms");
      if (roomsSection) {
        roomsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="py-5 text-center bg-light"
              className="text-center text-white p-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
      <Container>
        <h2 className="fw-bold mb-4 fs-1">Cocoons</h2>
        <p className="text-muted mb-5 fs-4">
          We offer a diverse range of property types, from residences to boutique retreats.
        </p>

        <Row className="g-4">
          {/* Cocoon Place */}
          <Col md={6}>
            <Card className="border-0 shadow-lg">
              <Card.Img
                variant="top"
                src="/assets/cocoon-place.jpg"
                className="rounded-top"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <Card.Body>
                <h3 className="fw-bold">Welcome to Cocoon Place by Cocoon</h3>
                <p className="text-muted">
                  where the city hums not just outside, but also inside, everything is designed to make you breathe.
                  Harmony-driven structure, enough comfort, and peaceful green — all wrapped up in one elegant Cocoon.
                  A place where the rhythm of work and play is the same, and the only thing you need to focus on is feeling at home.
                </p>
                <p className="fw-bold">📍 Poland – Pruszkow</p>
                <BookButton onClick={handleBookClick} />
              </Card.Body>
            </Card>
          </Col>

          {/* Cocoon City */}
          <Col md={6}>
            <Card className="border-0 shadow-lg">
              <Card.Img
                variant="top"
                src="/assets/cocoon-city.jpg"
                className="rounded-top"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <Card.Body>
                <h3 className="fw-bold">Welcome to Cocoon City by Cocoon</h3>
                <p className="text-muted">
                  where your stay is as reliable as your favorite coffee and as friendly as a local beer garden.
                  We're all about keeping it practical but with a twist—so you can kick back, stay productive, and soak in all the city perks.
                  Located in the heart of the action, we make sure you're connected, comfy, and ready to roll.
                </p>
                <p className="fw-bold">
                  📍 Poland – Warsaw <br />
                  📍 Portugal – Porto <br />
                  📍 United Kingdom – Scotland – Edinburgh <br />
                  📍 United Arab Emirates – Dubai
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cocoons;