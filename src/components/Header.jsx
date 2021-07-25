import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Resume from '../assets/Justin_McDonald_Resume_2021_dev.pdf';

function Header() {
   return (
      <Navbar bg="secondary" expand="lg" className="px-3 justify-content-between">
         <Nav variant="tabs">
            <LinkContainer to="https://github.com/jmcdonald112358" className="fs-3">
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
            <NavDropdown title="More">
               <NavDropdown.Item href="https://www.linkedin.com/in/justin-mcdonald-30519a84/" target="_blank">View my LinkedIn</NavDropdown.Item>
               <NavDropdown.Item href="https://github.com/jmcdonald112358" target="_blank">View my GitHub</NavDropdown.Item>
               <NavDropdown.Item href={Resume} target="_blank">View my Resume</NavDropdown.Item>
            </NavDropdown>
         </Nav>
         <Nav className="justify-content-end flex-column">
            <Nav.Link href="mailto:jmcdonald112358@gmail.com"><strong>Email: </strong>jmcdonald112358@gmail.com</Nav.Link>
            <Nav.Link eventKey="disabled"><strong>Phone: </strong>801-859-3654</Nav.Link>
         </Nav>
      </Navbar>
   )
}

export default Header;