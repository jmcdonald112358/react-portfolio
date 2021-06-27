import React, { useState } from 'react';
import Projects from '../components/Projects';
import Content from '../assets/Content';

function Portfolio() {
   const [project, setProject] = useState([{}]);
   console.log(project);
   console.log(setProject);

   return (
      <>
         <Projects Content={Content} />
      </>
   )
}

export default Portfolio;