import React from 'react'
import { Navbar ,Container,Nav  } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
    return (
        <header>
              <Navbar expand='sm' bg="dark" variant="dark">
    <Container>
        
        <LinkContainer to='/'>
    <Navbar.Brand >MY-APP</Navbar.Brand>
    </LinkContainer>
    <Nav className="me-auto">
        <LinkContainer to='/Home'>
      <Nav.Link >Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/About'>
      <Nav.Link >About us</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/Contact'>
      <Nav.Link >Contact</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/Gallery'>
      <Nav.Link >Gallery</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/Blog'>
      <Nav.Link >Blog</Nav.Link>
      </LinkContainer>
    </Nav>
    </Container>
  </Navbar>

        </header>
    )
}

export default Header
