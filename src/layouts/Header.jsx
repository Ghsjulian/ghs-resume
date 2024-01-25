import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const mobileNav=()=>{
      console.log("log")
    }
    return (
        <>
            <div className="nav-bar">
                <div className="logo-area">
                    <h3 className="logo">Ghs Julian</h3>
                </div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/skills">Skills</Link>
                </div>
                <span id="mobile-btn">
                    <i className="bi bi-list"></i>
                </span>
            </div>
            {/* Mobile Menu Bar */}
            <div className="menu">
                <h3>Menu</h3>
                <div className="list">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/skills">Skills</Link>
                </div>
            </div>
        </>
    );
};

export default Header;
