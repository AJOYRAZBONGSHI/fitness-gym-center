import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{" "}
            <span className=" fw-bold fs-4">Fitness Gym Center</span>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink
              className="text-decoration-none text-white mx-3 fs-5"
              to="home"
            >
              Home
            </NavLink>
            <NavLink
              className="text-decoration-none text-white mx-3 fs-5"
              to="services"
            >
              Service
            </NavLink>
            <NavLink
              className="text-decoration-none text-white mx-3 fs-5"
              to="about"
            >
              About us
            </NavLink>
            <NavLink
              className="text-decoration-none text-white mx-3 fs-5"
              to="contract"
            >
              Contract us
            </NavLink>
            <NavLink
              className="text-decoration-none text-white mx-3 fs-5"
              to="login"
            >
              Login
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
