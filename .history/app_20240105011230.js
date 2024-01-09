let root = ReactDOM.createRoot(document.getElementById("root"));

// let heading = React.createElement("h1", {}, "Hello form react");
// console.log(heading);
// heading.textContent = "nothing bro";
// root.render(heading);

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
  class : "container"
},[h1,h2]); // children are embeded in an array

root.render(div_container);
