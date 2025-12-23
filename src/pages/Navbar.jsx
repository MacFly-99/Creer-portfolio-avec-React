import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">John DOE</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" active={window.location.hash === '#home' || window.location.hash === ''}>
              Accueil
            </Nav.Link>
            <Nav.Link href="#about" active={window.location.hash === '#about'}>
              À propos
            </Nav.Link>
            <Nav.Link href="#services" active={window.location.hash === '#services'}>
              Services
            </Nav.Link>
            <Nav.Link href="#portfolio" active={window.location.hash === '#portfolio'}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact" active={window.location.hash === '#contact'}>
              Contact
            </Nav.Link>
            <Nav.Link href="#mentions" active={window.location.hash === '#mentions'}>
              Mentions légales
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;