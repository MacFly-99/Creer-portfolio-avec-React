import React from 'react';
import { Navbar as NavbarBS, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <NavbarBS bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <NavbarBS.Brand as={NavLink} to="/">
          Ventura Mattéo
        </NavbarBS.Brand>

        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link as={NavLink} to="/" end>
              Accueil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/a-propos">
              À propos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/mentions-legales">
              Mentions légales
            </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}

export default Navbar;