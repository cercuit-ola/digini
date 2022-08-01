import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Title from '../../Components/Title';
import Button from '../../Components/button/Button';

function Header() {
  return (
    <Navbar bg="transparent" expand="lg" className='px-2 px-md-5'>
      <Container fluid>
        <Navbar.Brand href="#" className='d-flex align-items-center'>
            <img src='img/logo.png'/>
            <Title type='logo'>
               digimi 
            </Title>
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
                <Title type="pop-nav">Home </Title>
                </Nav.Link>
            <Nav.Link href="#action2">
           < Title type="pop-nav2">Nav </Title>
            </Nav.Link>
            <Nav.Link href="#action2">
           < Title type="pop-nav2">Nav </Title>
            </Nav.Link>
            <Nav.Link href="#action2">
           < Title type="pop-nav2">Nav </Title>
            </Nav.Link>
            <Nav.Link href="#action2">
           < Title type="pop-nav2">Nav </Title>
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" >
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button>
           < Title type="pop-nav">Connect Wallet </Title>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;