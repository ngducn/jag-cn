import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./style.css";

const SideMenu = ({ setCategory }) => {
  const handleCategory = (eventKey, event) => {
    setCategory(eventKey);
  };
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container
          className="side-menu"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Nav
            style={{ display: "flex", flexDirection: "column" }}
            className="me-auto"
          >
            <Nav.Link eventKey="business" onSelect={handleCategory}>
              Business
            </Nav.Link>
            <Nav.Link eventKey="entertainment" onSelect={handleCategory}>
              Entertainment
            </Nav.Link>
            <Nav.Link eventKey="technology" onSelect={handleCategory}>
              Technology
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default SideMenu;
