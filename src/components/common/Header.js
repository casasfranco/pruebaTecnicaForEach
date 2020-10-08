import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <Navbar bg="light border-0" expand="lg" variant="light">
      <Navbar.Brand href="/" className="pl-3">
        <Image
          src="https://www.foreach.cl/static/media/forEach-gif.157867e4.gif"
          className="logo"
        />
        <blockquote className="blockquote text-center lead title">Banco</blockquote>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container justify-content-end">
          {/* <NavLink exact={true} to="/" className="nav-link">
            <h5 className="lead mx-5">Inicio</h5>
          </NavLink> */}
          <NavLink exact={true} to="/" className="nav-link">
            <h5 className="lead mx-5">Viajes registrados</h5>
          </NavLink>
          <NavLink exact={true} to="/travels/new" className="nav-link">
            <h5 className="lead mx-5">Agregar viaje</h5>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
