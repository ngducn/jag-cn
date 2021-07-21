import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import "./style.css";

const SearchBox = ({ handleQuery }) => {
  const [inputForm, setInputForm] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    setInputForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleQuery(inputForm);
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Row className="search_box justify-content-between">
          <Col xs={12} md={6} lg={6}>
            <Navbar.Brand href="#home">CoderNews</Navbar.Brand>
          </Col>
          <Col xs={8} md={6} lg={6}>
            <InputGroup>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Search headlines"
                value={inputForm}
                onChange={handleInput}
              />
              <Button
                variant="outline-success"
                id="button-addon1"
                onClick={handleSubmit}
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default SearchBox;
