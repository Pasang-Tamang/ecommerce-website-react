import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navmenu = ({ logout }) => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "75px" }}>
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#">PRODUCTS</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            {/* <input type="text" placeholder="Search" className="searchbox" /> */}
            {/* <Nav.Link href="#">LOGOUT</Nav.Link> */}
            <button className="text-white bg-dark" onClick={logout}>
              LOGOUT
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navmenu;
