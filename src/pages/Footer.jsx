import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          {/* Colonne 1 : Coordonnées + Réseaux */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Ventura Mattéo</h5>
            <p className="mb-1">
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              Tél : 06 20 30 40 50<br />
              Email : matteo.ventura@example.com
            </p>
            <div className="mt-3">
              <a href="https://github.com/MacFly-99" target="_blank" rel="noopener noreferrer" className="social-icon me-3 fs-4">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://twitter.com/ton-twitter" target="_blank" rel="noopener noreferrer" className="social-icon me-3 fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/Matteo Ventura" target="_blank" rel="noopener noreferrer" className="social-icon fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>

          {/* Colonne 2 : Liens utiles */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none footer-link">Accueil</a></li>
              <li><a href="#about" className="text-white text-decoration-none footer-link">À propos</a></li>
              <li><a href="#services" className="text-white text-decoration-none footer-link">Services</a></li>
              <li><a href="#portfolio" className="text-white text-decoration-none footer-link">Portfolio</a></li>
              <li><a href="#contact" className="text-white text-decoration-none footer-link">Contact</a></li>
              <li><a href="#mentions" className="text-white text-decoration-none footer-link">Mentions légales</a></li>
            </ul>
          </Col>

          {/* Colonne 3 : Dernières réalisations */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none footer-link">Fresh Food</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">Restaurant Akira</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">Espace bien-être</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">SEO</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">Création d'une API</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">Maquette d'un site web</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        <div className="text-center">
          <p className="mb-0">&copy; 2025 Ventura Mattéo - Tous droits réservés</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;