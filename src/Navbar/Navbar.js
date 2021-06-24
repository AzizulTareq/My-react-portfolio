import React from 'react'
import { Nav, Navbar,Container} from 'react-bootstrap'

const NavBar = () => {
    return (
      <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TAREQ</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#education">Experience & Education</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    </div>
    )
}

export default NavBar
