import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

function MentionsLegales() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-5 display-4 fw-bold text-dark position-relative">
            Mentions légales
            <div className="position-absolute start-50 translate-middle-x bg-primary" 
            style={{
                height: '4px',
                width: '500px',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)'
            }}></div>
            </h1>     

        <Accordion defaultActiveKey="0" flush>
          {/* Éditeur du site */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body className="bg-white">
              <strong>Ventura Mattéo</strong><br />
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              Tél : 06 20 30 40 50<br />
              Email : matteo.ventura@example.com
            </Accordion.Body>
          </Accordion.Item>

          {/* Hébergeur */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body className="bg-white">
              <strong>alwaysdata</strong><br />
              91 Rue du Faubourg Saint-Honoré, 75008 Paris<br />
              <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                www.alwaysdata.com
              </a>
            </Accordion.Body>
          </Accordion.Item>

          {/* Crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body className="bg-white">
              Ce site a été réalisé par Ventura Mattéo, développeur web en formation avec le 
              <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer"> Centre Européen de Formation</a> <br /><br />
              
              Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site 
              <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer"> Pixabay</a> <br /><br />
              
              La favicon de ce site a été fournie par 
              <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer"> Flaticon</a> 
              (icônes créées par <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer"> Freepik</a>).
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default MentionsLegales;