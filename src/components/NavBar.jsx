import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from './CartWidget';


export const Menu = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda Gomita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#home">Sucursales</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Chupetines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gomitas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Caramelos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><CartWidget/></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}









