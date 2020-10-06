import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="info" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Banco forEach</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact={true} to="/" className="nav-link">
            Inicio
          </NavLink>
          <NavLink exact={true} to="/travels" className="nav-link">
            Viajes registrados
          </NavLink>
          <NavLink exact={true} to="/productos/nuevo" className="nav-link">
            Agregar viaje
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
