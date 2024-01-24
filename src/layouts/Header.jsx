import React from "react"
import { Link } from "react-router-dom"

const Header = ()=>{
    return (
        <>
        <nav className="navbar">
            <div className="logo-area">
            <h3 className="logo">Ghs Julian</h3>
            </div>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            </div>

</nav>
        </>
    )
}

export default Header