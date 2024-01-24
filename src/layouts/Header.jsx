import React from "react"
import { Link } from "react-router-dom"

const Header = ()=>{
    return (
        <>
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Resume</Link>
        </div>
        </>
    )
}

export default Header