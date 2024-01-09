let root = ReactDOM.createRoot(document.getElementById("root"));


let h1 = React.createElement("h1",{
  title : "first-heading",
  class : "first-heading"
},"First Heading");


let h2 = React.createElement("h2",{
  title : "Second-heading",
  class : "Second-heading"
},"Second Heading");

let div_container = React.createElement("div",{
  id : "container",
  className : "container"
},[h1,h2]); // children are embeded in an array

root.render(div_container);
