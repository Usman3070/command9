import { Grid } from "@mui/material";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";

function NavBar(props) {
  return (
    <div>
      <Navbar className='container' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <img src={props.image}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0 nav-center'
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href='#action1'>Home</Nav.Link>
              <Nav.Link href='#action2'>About</Nav.Link>
              <NavDropdown title='Our Services' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Services</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>Services</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#action2'>Technology Stack</Nav.Link>
              <Nav.Link href='#action2'>Our Process</Nav.Link>
              <Nav.Link href='#action2'>Blog</Nav.Link>
              <Nav.Link href='#action2'>Contact Us</Nav.Link>
            </Nav>

            {props.btnTitle && (
              <Button className='nav-btn'>{props.btnTitle}</Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
