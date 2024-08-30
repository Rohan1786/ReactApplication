import { useState } from 'react'

import Youtube from './youtube.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hello vite app</h1>
     <Youtube/>
    </>
  )
}

export default App
