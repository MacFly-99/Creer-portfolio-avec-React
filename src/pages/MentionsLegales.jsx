import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

function MentionsLegales() {
  return (
    <>
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark">Mentions légales</h1>
            <div
              style={{
                width: '500px',
                height: '6px',
                backgroundColor: '#0d6efd',
                margin: '20px auto 0'
              }}
            />
          </div>

          <Accordion defaultActiveKey="0" flush>
            {/* Éditeur du site */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Éditeur du site</Accordion.Header>
              <Accordion.Body className="bg-white">
                <strong>Ventura Mattéo</strong><br />

                <i className="bi bi-house-door me-2"></i>
                40 rue Laure Diebold<br />

                <i className="bi bi-geo-alt me-2"></i>
                69009 Lyon, France<br />

                <i className="bi bi-telephone me-2"></i>
                Tél : 06 20 30 40 50<br />

                <i className="bi bi-envelope me-2"></i>
                Email : matteo.ventura@example.com
              </Accordion.Body>
            </Accordion.Item>

            {/* Hébergeur */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Hébergeur</Accordion.Header>
              <Accordion.Body className="bg-white">
                <strong>alwaysdata</strong><br />
                91 Rue du Faubourg Saint-Honoré<br />
                75008 Paris<br />
                <i className="bi bi-globe me-2"></i>
                <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                  www.alwaysdata.com
                </a>
              </Accordion.Body>
            </Accordion.Item>

            {/* Crédits */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Crédits</Accordion.Header>
              <Accordion.Body className="bg-white">
                Ce site a été réalisé par <strong>Ventura Mattéo</strong>, développeur web en formation avec le 
                <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener no referrer"> Centre Européen de Formation</a><br /><br />

                Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site 
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer"> Pixabay</a>.<br /><br />

                La favicon de ce site a été fournie par 
                <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer"> Flaticon</a> 
                (icônes créées par <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer"> Freepik</a>).
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
}

export default MentionsLegales;