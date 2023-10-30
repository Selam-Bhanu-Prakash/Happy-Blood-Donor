import React from 'react';
import 'tailwindcss/tailwind.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary !w-full border-2">
      <Container className='!-mx-0 border-2 border-green-500 flex justify-between items-center !w-full'>
        <div className='border-2 border-red-500 w-[50%]'>
          <Navbar.Brand href="#home">Happy Blood Donor</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='border-2 border-blue-500'>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Find a Donor</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
