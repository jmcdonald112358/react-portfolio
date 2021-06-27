import React from 'react';
import Container from 'react-bootstrap/Container';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function Projects(Content) {
   const portfolio = Content.Content.portfolio;

   return (
      <Container className="bg-dark">
         <h2 className="justify-content-center">Key Projects I have done or contributed to</h2>
         <Carousel bg="secondary" className="mb-6" fade>
            {portfolio.map((item) => {
               return (
                  <Carousel.Item key={item.key}>
                     <img 
                        className="d-block w-50 mx-auto"
                        src={item.image}
                        alt={item.name}
                     />
                     <Carousel.Caption className="text-light">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p><a href={item.link}>Check it out!</a></p>
                        <p><a href={item.repo}>View code</a></p>
                     </Carousel.Caption>
                  </Carousel.Item>
               )
            })}
         </Carousel>
         {/* <CardDeck bg="secondary" className="mb-6">
            {portfolio.map((item) => {
               return (
                  <Card bg="secondary" text="light" style={{ width: '35rem' }} className="mb-3" key={item.key}>
                     <Card.Img variant="top" src={item.image} />
                     <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                     </Card.Body>
                     <Card.Footer className="text-center bg-dark">
                        <small className="text-info"><a href={item.link}>Check it out!</a></small><br></br>
                        <small className="text-info"><a href={item.repo}>View code</a></small>
                     </Card.Footer>
                  </Card>
               )
            })}
         </CardDeck> */}
      </Container>
   )
};

export default Projects;