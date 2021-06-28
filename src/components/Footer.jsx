import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

function Footer() {
   return (
      <Navbar fixed="bottom" bg="light" expand="lg" className="justify-content-center text-info">
         <span>&copy; Copyright Justin McDonald 2020</span>
      </Navbar>
   )
}

export default Footer;