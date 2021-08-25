import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    return (
      <div>
      <Navbar bg="light" expand="lg">
      <LinkContainer to='/'>
      <Navbar.Brand><span style={{fontWeight: 'bolder'}}>TAR<span style={{color: '#AF255D '}}>EQ</span></span></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <LinkContainer to='/'>
          <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/education'>
          <Nav.Link >Experience & Education</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/skills'>
          <Nav.Link>Skills</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/projects'>
          <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/publications'>
          <Nav.Link>Publications</Nav.Link>
          </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    )
}

export default NavBar
