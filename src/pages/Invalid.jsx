import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';


const Invalid = () => {
   return (
      <>
      <Jumbotron fluid="true" className="bg-info text-secondary">
         <Container className="text-center mh-100">
            <Image src="images/skullxbones.png" style={{ width: 250, height: 'auto'}} />
            <h1 className="my-5">404: Page Not Found</h1>
            <p className="my-5">
               <h3>Looks like you tried to go somewhere you ought'nt!</h3>
            </p>
            <p className="my-5">Naughty, naughty!</p>            
         </Container>
      </Jumbotron>
      </>
   );
};

export default Invalid;