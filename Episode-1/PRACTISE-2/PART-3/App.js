
/*
  <div id= "parent">
      <div id ="child">
           <h1> </h1>
     </div>
  </div>
*/

// The below code is for above format 

/*
const parent = React.createElement(
  "div", 
  {id:"parent"}, 
  React.createElement(
    "div",{id:"child"},
    React.createElement("h1",{},"iam heading")
  )
);
console.log(parent); // React element =object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/ 

//------------------------------------------------------------------
/*
  <div id= "parent">
      <div id ="child">
           <h1> </h1>
           <h2> </h2>
     </div>
  </div>
*/
// The below code is for above format 

//This approach comes error in console browser --> Warning: Each child in a list should have a unique "key" prop.
//we will solve this in upcoming lectures guys

/*
const parent = React.createElement(
  "div", 
  {id:"parent"}, 
  React.createElement(
    "div",{id:"child"},
    [React.createElement("h1",{},"Iam heading1"),
      React.createElement("h2",{},"Iam heading2")]
  )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

*/

//-----------------------------------------------------------------------
/*
  <div id= "parent">
      <div id ="child1">
           <h1> </h1>
           <h2> </h2>
     </div>
     <div id ="child2">
           <h1> </h1>
           <h2> </h2>
     </div>
  </div>
*/
//This approch is complex when it goes like the above format
const parent = React.createElement(
  "div", 
  {id:"parent"}, 
  [React.createElement(
    "div",{id:"child1"},
    [React.createElement("h1",{},"Iam heading1"),
      React.createElement("h2",{},"Iam heading2")]
  ),
 React.createElement(
    "div",{id:"child2"},
    [React.createElement("h1",{},"Iam heading1"),
      React.createElement("h2",{},"Iam heading2")]
  )
]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//It is very hard with react know confusing too much so ,to overcome this problem need JSX - Further lecture
