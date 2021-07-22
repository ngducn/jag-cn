import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";

import "./style.css";

const SearchBox = ({ setQuery }) => {
  const [searchInput, setSearchInput] = useState("haha");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const confirmSearch = () => {
    setQuery(searchInput);
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
                value={searchInput}
                onChange={handleInput}
              />
              <Button
                onClick={confirmSearch}
                variant="outline-success"
                id="button-addon1"
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
