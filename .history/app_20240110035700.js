let root = ReactDOM.createRoot(document.getElementById("root"));


let h1 = React.createElement("h1",{
  title : "first-heading",
  className : "first-heading"
},"First Heading");


let h2 = React.createElement("h2",{
  title : "Second-heading",
  className : "Second-heading"
},"Second Heading");

let divcontainer = React.createElement("div",{
  id : "container",
  className : "container"
},[h1,h2]); // children are embeded in an array

root.render(div_container);
