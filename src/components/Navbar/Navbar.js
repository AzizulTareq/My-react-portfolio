import React from 'react'
import { Nav, Navbar,Container} from 'react-bootstrap'

const NavBar = () => {
    return (
      <div style={{textAlign: 'center'}}>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><span style={{fontWeight: 'bolder'}}>TAR<span style={{color: '#AF255D '}}>EQ</span></span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/education">Experience & Education</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/publications">Publications</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    )
}

export default NavBar
