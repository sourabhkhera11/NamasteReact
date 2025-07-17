import React from "react";
import ReactDOM from "react-dom/client";

/* EP1 */

const ele = React.createElement("h1", {}, "Hello World from REACT!");
/* {} is used to pass an attribute to react elements  */
console.log(ele); //is just an object
const root = ReactDOM.createRoot(document.getElementById("root"));

/* EP2 */

//Nested Elements
const ne = React.createElement(
  "div", //tagname
  { id: "parent" }, //attributes
  React.createElement(
    "div",
    { id: "child" },
    //Siblings are kept inside an array
    [
      React.createElement("h1", {}, "Im inside parent->child->h1"),
      React.createElement("h2", {}, "Im inside h2"),
    ]
  ) //content inside
);

/* EP3 */

//JSX is not html inside js it is a Html like syntax a syntax sugar to write our html inside js
//Bible(JS compiler) is the one who convert jsx in to js
//JSX->JS(React standards) React.createElement (React element)->Using render (html element and got place in DOM tree)
const wjsx = <h1 id="heading">Hello from jsx!</h1>;
//render is responsible to convert the js object into tag in the DOM tree

/* Now we are creating React Components  */
/* Functional Components */
/* Components should always start with capital */
const Heading2 = () => {
  return <h2>This is the second component </h2>;
};
//Componet composition : Using one component inside another

//React element
//JSX -> converted into React elements by babel
const element = <h1>JS element it is !</h1>;

//All js can also be used inside a JSX using {}
const Heading = () => {
  return (
    <div>
      <h1>Inside the heading component</h1>
      <Heading2 />
      {element}
    </div>
  );
};

root.render(<Heading />);
