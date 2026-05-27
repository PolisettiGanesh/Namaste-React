                    Episode -3
                    ------------

 Instead of using npx parcel index.html always add scripts in
  package.json file

"scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },

--> when we go  for any company ,if we dont know how to run project just go
    to the package.json and add scripts or se the scripts and run using npm
                    -   npm run start
                    -  npm run build
----------------------------------------------------------------------------
      React Element = Object
      ReactDom will take the object and convert it into html and render it on the page

react Element is not beginner friendly

 React.createElement = ReactElement -Js Object ==>HtmlElement(render)
 ---------------------------------------------------------------------------
                           JSX
                         -------
Jsx --> Html like syntax or xml like syntax
Jsx is a Beginner friendly
jsx and raect element is object

Jsx is transpiled before it reaches the js engine

Babel will be convert that jsx to react.createElement then react elemnetat the end is js object after that reactdom convert it into html and render it.

this babel librray already present in parcel we dont need to install separately

//JSX = React.createElement =>ReactElement -Js Object ==>HtmlElement(render)

So we are using jsx from now onwards

In jsx we can use attributes
const heading = <h1 id="Largest Heading" tabIndex="1" className='Headings'>Heading</h1>;

Note: If we can use attributes write in camelCase
----------------------------------------------------------------------------
                        Components
                        ---------
                        1.Functional Based components [new]
                        2.Class Based components [old]

A fucntion which is returning jsx element is known as fucntional component

                    const HeadingComponent = () => {
                        return <h1>Heading-1</h1>
                   }
        const root = createRoot(document.getElementById('root'));
        root.render(<Heading />);


                        import React from 'react';
                        import { createRoot } from 'react-dom/client';

                        const Title = () => {
                          return <h2>React Title Componnet</h2>
                        };

                        const HeadingComponent = () => {
                          return (
                              <div className="conatiner">
                                <Title />
                                <h1 className="FC">Heading-1</h1>
                              </div>
                          );
                        };

                        const root = createRoot(document.getElementById('root'));
                        root.render(<HeadingComponent />);

Note: call the fucntional component before its initialise above this component
            Below both are valid  
         <HeadingComponent></HeadingComponent>
         <HeadingComponent />
