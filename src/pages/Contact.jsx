import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light" style={{ paddingTop: '80px' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">
            Contact
          </h2>
          <p className="lead text-muted mb-4">
            Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
          </p>
          <div style={{
            width: '500px',
            height: '4px',
            backgroundColor: '#0d6efd',
            margin: '0 auto'
          }}></div>
        </div>

        <Row className="g-5">
          {/* Formulaire à gauche */}
          <Col lg={6}>
            <h4 className="mb-4 fw-bold position-relative d-inline-block">
              Formulaire de contact
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                width: '550px',
                height: '4px',
                backgroundColor: '#0d6efd'
              }}></span>
            </h4>

            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Votre nom" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Votre adresse email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Control type="tel" placeholder="Votre numéro de téléphone" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Control type="text" placeholder="Sujet de votre message" required />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Control as="textarea" rows={10} placeholder="Votre message..." required />
              </Form.Group>

              {/* Bouton envoyer */}
              <div className="text-center">
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="px-5 py-2 rounded"
                  style={{ backgroundColor: '#0d6efd', border: 'none' }}
                >
                  Envoyer
                </Button>
              </div>
            </Form>
          </Col>

          {/* Coordonnées + Map à droite */}
          <Col lg={6}>
            <h4 className="mb-4 fw-bold position-relative d-inline-block">
              Mes coordonnées
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                width: '500px',
                height: '4px',
                backgroundColor: '#0d6efd'
              }}></span>
            </h4>

            <p className="mb-4">
              <strong>Ventura Mattéo</strong><br />
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              Tél : 06 19 43 50 07<br />
              Email : matteo.ventura1999@gmail.com
            </p>

            {/* Google Map iframe */}
            <div className="ratio ratio-16x9 rounded shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.687252391582!2d4.801822315533!3d45.77722297910594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb9a3b8b0a5d%3A0x9f8a8e9f9e9f9e9f!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Ventura Mattéo"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;