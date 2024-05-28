
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter+1)
    // console.log("clicked", counter)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>COUNTER APP</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>

      <br/>
      <br/>
      
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
