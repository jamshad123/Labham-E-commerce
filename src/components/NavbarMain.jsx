import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo.png";
import { Form, InputGroup } from "react-bootstrap";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function NavbarMain() {
  return (
    <>
      <Navbar>
        <Container className="align-items-center py-2">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="" />
          </Navbar.Brand>
          <Nav className="m-auto">
            <InputGroup className="">
              <InputGroup.Text id="basic-addon1" className="bg-white">
                <AiOutlineSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search essentials,  and more..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{ width: "600px" }}
              />
            </InputGroup>
          </Nav>
          <Nav className="m-auto goto-nav">
            <Nav.Link href="#home">
              <p className="p-0 m-0 me-4">
                <span className="me-1">
                  <AiOutlineUser />
                </span>
                SignUp/SignIn
              </p>
            </Nav.Link>
            <Nav.Link href="#home">
              <p className="p-0 m-0">
                <span className="me-1">
                  <AiOutlineShoppingCart />
                </span>
                Cart
              </p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="m-0 p-0">
        <Container>
          <Nav className="m-auto nav-main">
            <Nav.Link className="mx-4" href="/">Home</Nav.Link>
            <Nav.Link className="mx-4" href="/products">Products</Nav.Link>
            <Nav.Link className="mx-4" href="#link">About</Nav.Link>
            <Nav.Link className="mx-4" href="#link">Blog</Nav.Link>
            <Nav.Link className="mx-4" href="#link">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMain;
