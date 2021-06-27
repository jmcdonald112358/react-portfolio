import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function Projects(Content) {
   const portfolio = Content.Content.portfolio;

   return (
      <Container className="bg-dark">
         <h2 className="justify-content-center">Key Projects I have done or contributed to</h2>
         <CardDeck bg="dark">
            {portfolio.map((item) => {
               return (
                  <Card bg="secondary" text="light" style={{ width: '20rem' }} className="mb-3">
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
         </CardDeck>
      </Container>
   )
};

export default Projects;