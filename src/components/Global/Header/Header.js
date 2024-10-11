import React, { useState } from "react";
import "./Header.css";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.svg";

const Header = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${e.target.querySelector("input").value}`);
    setValue("");
  };
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 movie-menu"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
          <Form
            className="d-flex position-relative search"
            onSubmit={handleSearch}
          >
            <input
              onChange={(e) => setValue(e.currentTarget.value)}
              value={value}
              type="text"
              className="me-2 search-form"
              placeholder="Search something..."
            />
            <div className="icon-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
