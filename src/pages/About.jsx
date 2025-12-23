import React from 'react';
import { Container, Row, Col, ProgressBar, Image } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5 bg-light" style={{ paddingTop: '80px' }}>
      <Container>

        <Row className="mb-5">
          <Col lg={6}>
            <h2 className="position-relative d-inline-block">
              À propos
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                width: '520px',
                height: '5px',
                backgroundColor: '#0d6efd'
              }}></span>
            </h2>
          </Col>
          <Col lg={6} className="text-lg-end">
            <h2 className="position-relative d-inline-block">
              Mes compétences
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                right: 0,
                width: '520px',
                height: '5px',
                backgroundColor: '#0d6efd'
              }}></span>
            </h2>
          </Col>
        </Row>

        <Row className="align-items-start">
          <Col lg={6}>
            <Image
              src="/images/john-doe-about.jpg"
              rounded
              fluid
              alt="Ventura Mattéo"
              className="mb-4 shadow-lg"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />

            <p className="lead">
              Bonjour ! Je m'appelle Ventura Mattéo et je suis actuellement en formation Développeur Web et Web Mobile au Centre Européen de Formation (CEF).
            </p>
            <p>
              Passionné par le développement web, j'apprends chaque jour de nouvelles technologies comme React, Bootstrap, JavaScript et bien plus.
            </p>
            <p>
              Ce portfolio est réalisé dans le cadre de ma formation pour mettre en pratique mes compétences en front-end. N'hésitez pas à explorer mes projets et à me contacter !
            </p>
          </Col>

          <Col lg={6} className="pt-lg-0 pt-4">
            <div className="mb-3">
              <strong>HTML</strong>
              <ProgressBar now={90} label="90%" variant="primary" animated striped />
            </div>
            <div className="mb-3">
              <strong>CSS</strong>
              <ProgressBar now={80} label="80%" variant="info" animated striped />
            </div>
            <div className="mb-3">
              <strong>GitHub</strong>
              <ProgressBar now={70} label="70%" variant="success" animated striped />
            </div>
            <div className="mb-3">
              <strong>JavaScript</strong>
              <ProgressBar now={60} label="60%" variant="warning" animated striped />
            </div>
            <div className="mb-3">
              <strong>React</strong>
              <ProgressBar now={40} label="40%" variant="danger" animated striped />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;