import { useState } from 'react'
import './index.css'

import Nav from "./Components/Nav"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="bg-emerald-800 w-screen h-screen"></div>
    </>
  )
}

export default App