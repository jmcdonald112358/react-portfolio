import React from 'react';
import Headshot from '../assets/Headshot.jpg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function AboutMe() {
   return (
      <Container className="bg-dark" variant="dark">
         <Row xs={6} md={4}>
            <Col xs={6} md={4}>
               <Image roundedCircle fluid src={Headshot} alt="headshot image of the author" />
            </Col>
            <Col xs={6} md={8}>
               <Card  body className="mt-3 pt-3 mx-5 bg-secondary">
                  <p>
                  My name is Justin McDonald and I am a soon-to-be graduate of a full-stack web development bootcamp! Currently, I work in technology for a local sales enablement company called Primary Intelligence as a Product Manager. As a Product Manager, I oversee the design and implementation of roughly 40% of our (very large) proprietary web app, TruVoice, which is a robust dashboard and analytics tool we built to support the services we provide to our clients.
                  </p>
                  <p>
                  I decided to pursue learning web dev partly because I've always been interested in coding, partially because I feel it's the logical next step in my career path, and partially because I'm hoping to stay with my company and join the dev team to do the actual coding of our system, instead of just speccing the logic for it. But at the very least, the knowledge from this class will benefit my role as Product Manager too, having a deeper understanding of the underlying technologies that are used to implement the features I design.
                  </p>
                  <p>
                  Now that I have finished the web dev bootcamp, I am updating this portfolio page to showcase some of the skills I learned. To see some of the projects I completed as part of the course, <Link to="/Portfolio">check out my portfolio!</Link> If you're interested in collaborating on a webapp with me, or would like a website built, send a message via my <Link to="/Contact">Contact</Link> page with an overview of what you have in mind and I'll be in touch within 2-3 business days.
                  </p>
               </Card>
            </Col>
         </Row>
         
      </Container>
   )
}

export default AboutMe;