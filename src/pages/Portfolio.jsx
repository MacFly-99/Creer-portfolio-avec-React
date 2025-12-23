import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Portfolio() {
  return (
    <div id="portfolio" style={{ paddingTop: '80px' }}>
      {/* Bannière en haut */}
      <div 
        style={{ 
          backgroundImage: 'url(/images/banner.jpg)',  // Même image de fond que pour la page Services
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

      {/* Titre + cartes sur fond blanc */}
      <div className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">
              Portfolio
            </h2>
            <p className="lead text-muted mb-4">
              Voici quelques-unes de mes réalisations
            </p>
            <div style={{
              width: '500px',
              height: '4px',
              backgroundColor: '#0d6efd',
              margin: '0 auto'
            }}></div>
          </div>

          <Row className="g-4">
            {/* Projet 1 */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-lg text-center">
                <Card.Img 
                  variant="top" 
                  src="/images/portfolio/fresh-food.jpg" // Image accessible dans dossier public puis dans dossier images puis dans dossier portfolio
                  alt="Fresh Food"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <Card.Title className="h5 fw-bold mb-3">Fresh Food</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Site de vente de produits frais en ligne.
                  </Card.Text>
                  <Button 
                    variant="primary"
                    className="px-5 py-2 rounded mb-3"
                    style={{ backgroundColor: '#0d6efd', border: 'none' }}
                  >
                    Voir le site
                  </Button>
                  <small className="text-muted d-block">
                    Site réalisé avec PHP et MySQL
                  </small>
                </Card.Body>
              </Card>
            </Col>

            {/* Projet 2 */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-lg text-center">
                <Card.Img 
                  variant="top" 
                  src="/images/portfolio/restaurant-japonais.jpg" // Pareil que pour l'image 1
                  alt="Restaurant Akira"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <Card.Title className="h5 fw-bold mb-3">Restaurant Akira</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Site vitrine pour un restaurant japonais.
                  </Card.Text>
                  <Button 
                    variant="primary"
                    className="px-5 py-2 rounded mb-3"
                    style={{ backgroundColor: '#0d6efd', border: 'none' }}
                  >
                    Voir le site
                  </Button>
                  <small className="text-muted d-block">
                    Site réalisé avec WordPress
                  </small>
                </Card.Body>
              </Card>
            </Col>

            {/* Projet 3 */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-lg text-center">
                <Card.Img 
                  variant="top" 
                  src="/images/portfolio/espace-bien-etre.jpg" // Pareil que pour l'image 1
                  alt="Espace bien-être"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <Card.Title className="h5 fw-bold mb-3">Espace bien-être</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Site pour un centre de bien-être.
                  </Card.Text>
                  <Button 
                    variant="primary"
                    className="px-5 py-2 rounded mb-3"
                    style={{ backgroundColor: '#0d6efd', border: 'none' }}
                  >
                    Voir le site
                  </Button>
                  <small className="text-muted d-block">
                    Site réalisé avec Laravel
                  </small>
                </Card.Body>
              </Card>
            </Col>

            {/* Projet 4 */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-lg text-center">
                <Card.Img 
                  variant="top" 
                  src="/images/portfolio/seo.jpg" // Pareil que pour l'image 1
                  alt="SEO"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <Card.Title className="h5 fw-bold mb-3">SEO</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Optimisation référencement naturel.
                  </Card.Text>
                  <Button 
                    variant="primary"
                    className="px-5 py-2 rounded mb-3"
                    style={{ backgroundColor: '#0d6efd', border: 'none' }}
                  >
                    Voir le site
                  </Button>
                  <small className="text-muted d-block">
                    Référencement avec tools SEO
                  </small>
                </Card.Body>
              </Card>
            </Col>

            {/* Projet 5 */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-lg text-center">
                <Card.Img 
                  variant="top" 
                  src="/images/portfolio/coder.jpg" // Pareil que pour l'image 1
                  alt="Création d'une API"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <Card.Title className="h5 fw-bold mb-3">Création d'une API</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Développement d'une API REST.
                  </Card.Text>
                  <Button 
                    variant="primary"
                    className="px-5 py-2 rounded mb-3"
                    style={{ backgroundColor: '#0d6efd', border: 'none' }}
                  >
                    Voir le site
                  </Button>
                  <small className="text-muted d-block">
                    API avec Node.js et Express
                  </small>
                </Card.Body>
              </Card>
            </Col>

            {/* Projet 6 */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-lg text-center">
                <Card.Img 
                  variant="top" 
                  src="/images/portfolio/screens.jpg" // Pareil que pour l'image 1
                  alt="Maquette d'un site web"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <Card.Title className="h5 fw-bold mb-3">Maquette d'un site web</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Conception de maquette Figma.
                  </Card.Text>
                  <Button 
                    variant="primary"
                    className="px-5 py-2 rounded mb-3"
                    style={{ backgroundColor: '#0d6efd', border: 'none' }}
                  >
                    Voir le site
                  </Button>
                  <small className="text-muted d-block">
                    Maquette avec Figma
                  </small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Portfolio;