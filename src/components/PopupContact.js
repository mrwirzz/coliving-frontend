import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PopUpContact = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSend = () => {
    const { firstName, lastName, company, email, message } = formData;

    // Формируем текст сообщения
    const text = `New contact request:\n\n👤 Name: ${firstName} ${lastName}\n🏢 Company: ${company}\n📧 Email: ${email}\n📝 Message: ${message}`;

    // Кодируем текст для URL
    const encodedText = encodeURIComponent(text);

    // Номер, на который будет отправлено сообщение
    const phone = "48734663453"; // без плюса!

    // Открываем WhatsApp
    window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");

    handleClose(); // Закрыть модалку после отправки
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#98BFCA" }}>
        <p className="text-muted">
          Let us know how we can reach you and we’ll get back to you in a flash!
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSend}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUpContact;