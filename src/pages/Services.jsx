import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  return (
    <div id="services" style={{ paddingTop: '80px' }}>
      {/* Bannière seule en haut (image de fond pleine largeur) */}
      <div 
        style={{ 
          backgroundImage: 'url(/images/banner.jpg)',  // Image de bannière accessible dans dossier public 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          position: 'relative'
        }}
      >

        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }} />
      </div>

      {/* Titre + sous-titre + cards sur fond blanc en dessous */}
      <div className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">
              Mon offre de services
            </h2>
            <p className="lead text-muted mb-4">
              Voici les prestations sur lesquelles je peux intervenir
            </p>
            <div style={{
              width: '500px',
              height: '6px',
              backgroundColor: '#0d6efd',
              margin: '0 auto'
            }}></div>
          </div>

          <Row className="g-5">
            {/* Carte 1 : UX Design */}
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-lg service-card">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <i className="bi bi-pen-fill display-1 mb-4 text-primary"></i>
                  <Card.Title className="h4 fw-bold">UX Design</Card.Title>
                  <Card.Text>
                    L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Carte 2 : Développement web */}
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-lg service-card">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <i className="bi bi-code-slash display-1 mb-4 text-primary"></i>
                  <Card.Title className="h4 fw-bold">Développement web</Card.Title>
                  <Card.Text>
                    Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Carte 3 : Référencement */}
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-lg service-card">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <i className="bi bi-search display-1 mb-4 text-primary"></i>
                  <Card.Title className="h4 fw-bold">Référencement</Card.Title>
                  <Card.Text>
                    Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le rendre visible dans les résultats des moteurs de recherche (Google, Bing, etc.) sans payer pour des publicités.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Services;