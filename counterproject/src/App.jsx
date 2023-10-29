import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter,setCounter]=useState(15)


  // let counter=15

  const addValue = () => {
    // console.log("clicked", counter);
    // counter=counter+1
    if (counter===20){
      `Counter value cannot go up form 20 ${counter}`

    }else{

      setCounter(counter+1)
    }
  }
  const decreaseValue = () => {
    // console.log("deacrese clicked",counter);
    // counter=counter-1
    if(counter === 0){
      `counter value cannot go less than 0 ${counter}`
    }else{
      setCounter(counter-1)

    }
  }
  
  return (
    <>
      <h1> react counter</h1>
      <h2>Counter Value : {counter} </h2>

      <button
      onClick={addValue}
      >Add Value {counter} </button>
      <br />
      <button
      onClick={decreaseValue}
      >Decrease Value {counter} </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
