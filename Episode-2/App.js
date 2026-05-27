import React from "react";
import { createRoot } from "react-dom/client";

const app = <h1>Heading-1</h1>

const elem = React.createElement("h1" ,null ,"Largest Heading");
const App = ()=>{
  return <h1>Hello</h1>;
}
const root = createRoot(document.getElementById("root"));
root.render(elem);
