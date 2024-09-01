import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // react hook
  const[counterVal, setCounterVal]= useState(15)
 
  

  const addVal = () => {
      //  counterVal = counterVal + 1;
      setCounterVal(counterVal + 1)
       console.log("counter value ", counterVal);       
  }

  const subtVal = () => {
    setCounterVal(counterVal - 1)
  }

  return (
    <>
      <h1>chai aur react with hitesh sir</h1>
      <h3>counter | {counterVal}</h3>
      <button onClick={addVal}>increVal</button>
      <button onClick={subtVal}>descVal</button>
    </>
  )
}

export default App
