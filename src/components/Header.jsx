import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
   return (
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
         <LinkContainer to="https://github.com/jmcdonald112358">
            <Navbar.Brand>
               Justin McDonald
            </Navbar.Brand>
         </LinkContainer>
         <LinkContainer to="/About">
            <Nav.Link>About</Nav.Link>
         </LinkContainer>
         <LinkContainer to="/Portfolio">
            <Nav.Link>Portfolio</Nav.Link>
         </LinkContainer>
         <LinkContainer to="/Contact">
            <Nav.Link>Contact</Nav.Link>
         </LinkContainer>
         {/* Add resume link, email, and phone like v1 */}
      </Navbar>
   )
}

export default Header;