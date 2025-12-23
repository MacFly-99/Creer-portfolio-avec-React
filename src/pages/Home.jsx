import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Image, Spinner } from 'react-bootstrap';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(false);

  const githubUsername = 'MacFly-99';

  useEffect(() => {
    if (showModal && !githubData) {
      setLoading(true);
      fetch(`https://api.github.com/users/${githubUsername}`)
        .then(res => res.json())
        .then(data => {
          setGithubData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [showModal, githubData]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      {/* Hero section */}
      <section 
        id="home"
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(/images/hero-bg.jpg)`,
          backgroundImage: 'url(/images/hero-bg.jpg)',  // Image accessible dans le dossier public
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }} />

        <Container className="position-relative">
          <h1 style={{ fontSize: '5rem', fontWeight: '600' }}>
            Bonjour, je suis Ventura Mattéo
          </h1>
          <h2 style={{ fontSize: '3rem', fontWeight: '400' }}>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '600' }}>
            Bonjour, je suis Ventura Mattéo
          </h1>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '400' }}>
            Développeur Web en formation CEF
          </h2>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={handleShow}
            className="mt-5 px-5 py-3"
            style={{ fontSize: '1.2rem', fontWeight: '600' }}
          >
            En savoir plus
          </Button>
        </Container>
      </section>

      {/* Modale GitHub */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {loading && <Spinner animation="border" variant="primary" />}
          {githubData && !loading && (
            <>
              <Image 
                src={githubData.avatar_url} 
                roundedCircle 
                width="150" 
                height="150" 
                className="mb-4"
              />
              <h3>{githubData.name || githubData.login}</h3>
              <p className="lead">{githubData.bio || 'En formation chez CEF, passionné par le dev web !'}</p>
              <p>
                <strong>Repos publics :</strong> {githubData.public_repos}<br />
                <strong>Followers :</strong> {githubData.followers}<br />
                <strong>Following :</strong> {githubData.following}
              </p>
              <Button variant="primary" href={githubData.html_url} target="_blank">
                Voir mon GitHub
              </Button>
            </>
          )}
          {!loading && !githubData && <p>Erreur de chargement du profil GitHub.</p>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;