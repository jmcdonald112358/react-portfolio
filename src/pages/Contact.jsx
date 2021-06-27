import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';


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
      <Container className="bg-dark">
         <h2 className="text-light justify-content-center">Get in touch!</h2>
         <Card className="bg-secondary mt-4">
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
                     <button type="submit">Submit</button>
                  </Form.Group>
               </Form>
            </Card.Body>
         </Card>
      </Container>
   )
}

export default Contact;