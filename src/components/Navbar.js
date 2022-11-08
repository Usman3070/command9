import { Grid } from "@mui/material";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import { Outlet, Link } from "react-router-dom";

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
              <Nav.Link>
                <Link to='/' className='link'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href='#action2'>About</Nav.Link>
              <NavDropdown title='Our Services' id='navbarScrollingDropdown'>
                <NavDropdown.Item>
                  <Link to='/nftmarketplace' className='links'>
                    NFT Marketplace
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/smartcontract' className='links'>
                    Smart Contract
                  </Link>
                </NavDropdown.Item>
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
