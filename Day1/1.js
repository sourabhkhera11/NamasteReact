const ele = React.createElement("h1", {}, "Hello World from REACT!");
/* {} is used to pass an attribute to react elements  */
console.log(ele); //is just an object
const root = ReactDOM.createRoot(document.getElementById("root"));

//Nested Elements
const ne = React.createElement(
  "div", //tagname
  { id: "parent" }, //attributes
  React.createElement("div", { id: "child" }, 
    //Siblings are kept inside an array
    [
    React.createElement("h1", {}, "Im inside parent->child->h1"),
    React.createElement("h2", {}, "Im inside h2"),
  ]) //content inside
);

//render is responsible to convert the js object into tag in the DOM tree
root.render(ne);
