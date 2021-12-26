import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Contact list
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/add">
            Add contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
