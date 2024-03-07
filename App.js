// const data=React.createElement(
//     "h1",
//     {id:"heading" },
//     "Hello World from React"
//     );


const nested=React.createElement("div",{id:"Parent div"},
React.createElement("div",{id:"div2"},
[React.createElement("h1",{},"hello GUYS Welcome to nested elements") , React.createElement("h2",{},"hello GUYS Welcome to nested elements h2")])
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(nested);