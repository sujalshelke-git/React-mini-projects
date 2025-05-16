import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
//  let counter = 15

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20){
    setCounter(counter + 1)}
  
    else{
      toast('Max limit reached')}  
    }
  

 const removeValue = () => {
  if (counter > 0){
    setCounter(counter - 1)}
   
  else{
      toast('Min limit reached')}  
    }
  
   
  

  return (
    <>
     <h1>React Magic</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}>add value</button>
     <br /> <br />
     <button onClick={removeValue}>remove value</button>

     <ToastContainer 
        position="top-center"     // Position of the toast
        autoClose={3000}          // Toast will close in 3000 milliseconds (3 seconds)
        hideProgressBar={false}   // You can hide or show the progress bar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </>
  )
}



export default App
