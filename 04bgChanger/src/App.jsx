
// import './App.css'

import { useState } from "react"


function App() {

  // const [color, setColor] = useState("#000f0f") ...(1)

  const [color, setColor] = useState("olive")

  return (

    // <div className={`w-full h-screen duration-200 bg-[${color}]`} ...(1)

    <div className="w-full h-screen duration-200"
         style={{backgroundColor: color}}              // we can add inline css inside jsx code using two curly braces
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">

          <button onClick={() => setColor("red")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "red"}}
          >Red</button>

          <button onClick={() => setColor("green")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "green"}}
          >Green</button>

          <button onClick={() => setColor("blue")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "blue"}}
          >Blue</button>

          <button onClick={() => setColor("pink")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "pink"}}
          >Pink</button>

          <button onClick={() => setColor("violet")}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "violet"}}
          >Violet</button>

        </div>

      </div>

    </div>

  )
}

export default App




//Inline CSS in JSX code

// Method 1

// const MyComponent = () => {
//   // Define inline styles as objects
//   const divStyle = {
//     color: 'red',
//     backgroundColor: 'blue',
//     fontSize: '20px',
//     // You can add more styles as needed
//   };

//   return (
//     <div style={divStyle}>
//       This text will have inline styles.
//     </div>
//   );
// };

// Method 2

// const MyComponent = () => {
//   const isDisabled = true;

//   return (
//     <button
//       style={{ 
//         color: 'red',
//         backgroundColor: 'blue',
//         fontSize: '20px',
//         // Add properties conditionally
//         opacity: isDisabled ? 0.5 : 1,
//         cursor: isDisabled ? 'not-allowed' : 'pointer'
//       }}
//     >
//       Click me
//     </button>
//   );
// };