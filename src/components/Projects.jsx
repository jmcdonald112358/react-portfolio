import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function Projects(Content) {
   const portfolio = Content.Content.portfolio;

   return (
      <Container>
         <h2 className="text-center text-success my-3">Key Projects I have completed or contributed to</h2>
         <CardDeck style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '35px' }}>
            {portfolio.map((item) => {
               return (
                  <Card bg="secondary" text="light" style={{ width: '400px'}} className="mx-3 mb-3" key={item.key}>
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