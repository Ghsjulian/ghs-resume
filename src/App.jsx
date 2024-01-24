import { useState } from 'react'
import { BrowserRouter as Router , Route,Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
