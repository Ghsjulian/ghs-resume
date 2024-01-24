import { useState } from 'react'
import { BrowserRouter as Router , Route,Routes, BrowserRouter } from 'react-router-dom'
import Home from "./components/Home"
import './App.css'
import Header from './layouts/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
