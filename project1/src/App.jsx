import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(15)


const addvalue=()=>{
  // setCount(counter+1)
  setCount((previousCounter)=>previousCounter+1)
  setCount((previousCounter)=>previousCounter+1)
  setCount((previousCounter)=>previousCounter+1)
  setCount((previousCounter)=>previousCounter+1)
  
}
const removevalue=()=>{
  setCount((previousCounter)=>previousCounter-1)
  setCount((previousCounter)=>previousCounter-1)
  setCount((previousCounter)=>previousCounter-1)
  // setCount(counter-1)
  
}
  return (
    <>
      <div>
<h1>Hello this is rohan</h1>
<h2>counter value:{counter}</h2>
<button onClick={addvalue}>Addvalue</button>
<button onClick={removevalue}>Remove</button>
      </div>
      
    </>
  )
}

export default App
