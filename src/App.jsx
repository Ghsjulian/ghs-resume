import { useState } from 'react'
import { BrowserRouter as Router , Route,Routes, BrowserRouter } from 'react-router-dom'
import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Header from './layouts/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/projects" exact element={<Projects/>}/>
      <Route path="/resume" exact element={<Resume/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
