import React from 'react';
import { createRoot } from 'react-dom/client';

const Title = () => {
   return <h2>React Title Componnet</h2>
};

const HeadingComponent = () => {
   return (
      <div className="conatiner">
        {Title()}
        <Title />
        <Title></Title>
         <h2>{console.log("Second heading")}</h2>
         <h1 className="FC">Heading-1</h1>
      </div>
   );
};

const root = createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
