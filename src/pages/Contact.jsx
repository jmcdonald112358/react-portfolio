import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contact() {
   const [validated, setValidated] = useState(false);
   const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      }
      setValidated(true);
   }

   return (
      <Container>
         <h1 className="text-success text-center my-3">Get in touch!</h1>
         <Card className="bg-light mt-4">
            <Card.Body>
               <Form action="https://submit-form.com/Kc5wdGFV" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group>
                     <Form.Label htmlFor="name">Your name</Form.Label>
                        <Form.Control type="text" id="name" name="name" placeholder="Enter your name..." required />
                        <Form.Control.Feedback type="invalid">
                           Please provide your name.
                        </Form.Control.Feedback>
                     <Form.Label htmlFor="email">Your email</Form.Label>
                        <Form.Control type="email" id="email" name="email" placeholder="Enter your email address..." required />
                        <Form.Control.Feedback type="invalid">
                           Please provide a valid email address.
                        </Form.Control.Feedback>
                     <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control 
                           as="textarea"
                           rows={3}
                           id="message"
                           name="message"
                           placeholder="Place details of your inquiry here..."
                           required
                        />
                     <Button className="mt-3" variant="primary" type="submit">Submit</Button>
                  </Form.Group>
               </Form>
            </Card.Body>
         </Card>
      </Container>
   )
}

export default Contact;