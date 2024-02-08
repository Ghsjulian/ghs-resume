import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const typeRef = useRef(null);
    var colors = [
        "rgb(8,255,252)",
        "rgb(255,255,255)",
        "rgb(0,90,232)",
        "rgb(2,255,100)",
        "rgb(255,151,10)",
        "rgb(255,93,10)",
        "rgb(255,240,1)",
        "rgb(53,255,215)",
        "rgb(22,191,255)",
        "rgb(210,31,251)"
    ];
    var task = [
        "Core PHP Developer",
        "JavaScript Developer",
        "Back-End Developer",
        "Professional Web Developer",
        "Nodejs & Express Developer",
        "Python Developer",
        "Programmer"
    ];
    setInterval(() => {
        var taskIndex = Math.floor(Math.random() * task.length);
        var colorIndex = Math.floor(Math.random() * colors.length);
        typeRef.current.style.color = colors[colorIndex];
        typeRef.current.textContent = task[taskIndex];
    }, 6000);

    return (
        <>
            {/* <!-- Section Started -->*/}
            <div className="section">
                <div className="hero-section">
                    <img className="hero-logo" src="./images/logo.png" />
                    <div className="hero-text">
                        {/*<!--<h2 id="text-1">Welcome To My Portfolio</h2>-->*/}

                        <h1 class="head">
                            Hello, <span>I'm A </span>
                        </h1>
                        <div class="type">
                            <div ref={typeRef} class="typewriter">
                                Front-End Developer
                            </div>
                        </div>
                        {/*
                        <h2 id="text-2">
                            Hello There, It's Me <span>Julie</span>
                        </h2>
                        <h2 id="text-3">
                            I Am A <strong id="dev">Web Developer</strong>
                        </h2>
                        */}
                        <p id="description">
                            I am a professional web developer and desginer. I
                            have three years of experience in development
                            sector. I can build any website easily. You can
                            directly contact with me or you can follow me on my
                            social media.
                        </p>
                        <div className="btn-area">
                            <Link to="#" id="hire">
                                Hire Me
                            </Link>
                            <Link to="#" id="cv">
                                Download CV
                            </Link>
                        </div>
                        <div className="foot">
                            <Link to="https://web.facebook.com/ghs.julian.85" target="_blank">
                                <i className="bi bi-facebook"></i>
                            </Link>
                            <Link to="https://twitter.com/GhsJulian" target="_blank">
                                <i className="bi bi-twitter"></i>
                            </Link>
                            <Link to="https://youtube.com/@GhsJulian" target="_blank">
                                <i className="bi bi-youtube"></i>
                            </Link>
                            <Link to="https://instagram.com/ghs.julian.85" target="_blank">
                                <i className="bi bi-instagram"></i>
                            </Link>
                            <Link to="https://linkedin.com/GhsJulian" target="_blank">
                                <i className="bi bi-linkedin"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Section Finished -->*/}
        </>
    );
};

export default Home;
