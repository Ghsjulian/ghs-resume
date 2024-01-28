import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const navRef = useRef(null);
    const mobileNav = () => {
        const isOpen = navRef.current.getAttribute("id");
        if (isOpen === "close") {
            navRef.current.style.display = "block";
            navRef.current.setAttribute("id", "open");
        } else {
            navRef.current.setAttribute("id", "close");
            navRef.current.style.display = "none";
        }
    };
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
                    <i className="bi bi-list" onClick={mobileNav}></i>
                </span>
            </div>
            {/* Mobile Menu Bar */}
            <div id="close" ref={navRef} className="menu">
                <h3>Menu</h3>
                <div className="list">
                    <Link onClick={mobileNav} to="/">
                        Home
                    </Link>
                    <Link onClick={mobileNav} to="/about">
                        About
                    </Link>
                    <Link onClick={mobileNav} to="/contact">
                        Contact
                    </Link>
                    <Link onClick={mobileNav} to="/projects">
                        Projects
                    </Link>
                    <Link onClick={mobileNav} to="/skills">
                        Skills
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
