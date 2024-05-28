// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    userName: "Mosin",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
    
      <h1 className='bg-green-400 text-black p-4 rounded-xl hover:scale-110 duration-500 mb-4'>Tailwind Test</h1>

      
      {/* <Card channel = "chaiaurcode" someObj = {myObj} someArr = {newArr} /> */}  

      <Card username = "" btnText = "Click Me" />
      <Card username = "MosinVinchhi" />

    </>
  )
}

export default App