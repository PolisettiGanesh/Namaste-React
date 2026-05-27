// const heading = React.createElement("h1", {}, "Heading-1");
// const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(heading) //Object -->that means react element = Javascript Object
// root.render(heading);

//------------------------------------------------------------------
//use attributes
//check in developer console later added attributes

const heading = React.createElement(
  "h1", 
  {id:"heading1",className:"head1"}, 
  "Heading-1"
);
console.log(heading); //React.createElement = object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
