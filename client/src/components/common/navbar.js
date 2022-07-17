import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from "react-router-dom"
import logo from '../../images/milan_logo.png'
export default function navbar() {
  return (
    <div>
    <Navbar stick="top" collapseOnSelect expand="lg" bg="dark" variant='dark'>
  <Container>
    <Navbar.Brand>
        <Link style= { { textDecoration: 'none' }} to='/'>
        <img src={logo} alt="logo" width="50px" height="50px" />
        <b>MILAN</b>
        </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link><Link style= { { textDecoration: 'none' }} to='./Schedule'> Schedule</Link></Nav.Link>
        <Nav.Link><Link style= { { textDecoration: 'none' }} to='Events'>Events</Link></Nav.Link>
        <Nav.Link> <Link style= { { textDecoration: 'none' }} to='Sponsors'>Sponsors</Link></Nav.Link>
        <Nav.Link> <Link style= { { textDecoration: 'none' }} to='Team'>Team</Link></Nav.Link>
       </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
}
