import {useState} from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter] =useState(15)

  // let counter=5;

const addValue = () => {
      //  counter=counter+1
    counter<50 ?  setCounter(counter+1):alert("You can't add more value")
}
const removeValue = () => {
  //  counter=counter+1
  counter>0 ? setCounter(counter-1): alert("You can't remove more value")
}
  return (
    <>
      <h1>Pratham Sharma</h1>
      <h2>Counter values: {counter}</h2>

      <button onClick={addValue}> Add value  </button>
      <button onClick={removeValue}>Remove value</button>
          </>
  )
}

export default App
