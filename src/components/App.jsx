import React from "react";

// // this works too
// function App() {
//   var [color, setColor] = React.useState("white");
//   function turnBlack() {
//     setColor("black");
//   }
//   function turnWhite() {
//     setColor("white");
//   }
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         onMouseOver={turnBlack}
//         onMouseOut={turnWhite}
//         style={{ backgroundColor: color }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

function App() {
  var [isMouseOver, setIsMouseOver] = React.useState(false);
  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
