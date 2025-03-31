import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter = 15

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20){
    setCounter(counter + 1)}
  
    else{
      console.log('MAx limit reached')}  //displays in inspect console
    }
  

 const removeValue = () => {
  if (counter > 0){
    setCounter(counter - 1)}
  }
   
  

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}>add value</button>
     <br /> <br />
     <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
