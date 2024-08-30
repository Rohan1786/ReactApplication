import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  const changecolor=(color)=>{
    setColor(color);
  }

  return (
    <div style={{backgroundColor:color}}>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
 <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
 <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
  
 <button onClick={()=>{changecolor('red')}}
 className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>red</button>
 <button
 onClick={()=>{changecolor('blue')}}
  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>blue</button>

 </div>
 </div>
    </div>
    </div>
  )
}

export default App
