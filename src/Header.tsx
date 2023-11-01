import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'antd';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary !w-full !bg-white -pr-0" fixed="top">
    <Container className='!-mx-0 flex justify-between items-center !w-screen'>
      <div className=' w-[50%] ml-8'>
        <Navbar.Brand href="#home" className='font-bold !text-red-500'>Happy Blood Donor</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div>
          <Nav className="me-auto flex gap-[30px]">
            <Nav.Link href="#home" className='text-black'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-black'>Find a Donor</Nav.Link>
            <Nav.Link href="#link" className='text-black'>About</Nav.Link>
            <Nav.Link href="#link" className='text-black'>Contact Us</Nav.Link>
          </Nav>
        </div>
        <Button type="primary" className='ml-8 bg-red-800 hover:!bg-red-900 px-12 !items-center justify-center !pb-7'>Register</Button>

      </Navbar.Collapse>
    </Container>
    <Button type="primary" className='ml-2 bg-red-800 hover:!bg-red-900 px-12 !items-center justify-center !pb-7'>Login</Button>
  </Navbar>
  )
}

export default Header