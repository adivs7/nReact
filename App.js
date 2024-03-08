import React from "react"
import ReactDOM  from "react-dom/client";

// const data=React.createElement(
//     "h1",
//     {id:"heading" },
//     "Hello World from React"
//     );

// React.creatElement => Not a HTML element but an object => when rendered to DOM then becomes HTML

const nested=React.createElement("div",{id:"Parent div"},
React.createElement("div",{id:"div2"},
[React.createElement("h1",{},"hello GUYS Welcome to nested elements") , React.createElement("h2",{},"hello GUYS Welcome to nested elements h2")])
);
// This method or way of crating react elements is very clumsy and not readable thus FB developers created JSX

const root=ReactDOM.createRoot(document.getElementById("root"));

// JSX is just a way of writing and it creates a react element (HTML or XML like syntax). Wrap it around parentheses
const jsxObj=( <h1 id="jsxId" className="jsxClass">Hello guys. I created React element using JSX</h1>)

// Everything in react is a component =>1)Class Based, 2) Functional Component
// Component is just a normal JS function which returns JSX or React Element.
// First letter should be capital



  //Inserting another React Component into another React component
const FunctionalComp= ()=>{
   return (<div id="fc">
    {/* <FunctionalComp1/>   */}
    {FunctionalComp1()}
    <h1>{
       a+6000
    }</h1>
     <h1>This is a react component</h1>
     </div>)
}
root.render(<FunctionalComp/>);
const a= 1000;


const FunctionalComp1 = () =>{
    return (    <h1> 
       Welcome to React Component 2
       </h1>)
   }

   // { We can write JS here inside a jsx()}

