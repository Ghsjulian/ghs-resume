import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
            {/* <!-- Section Started -->*/}
            <div className="section">
                <div className="hero-section">
                    <img className="hero-logo" src="./images/logo.png" />
                    <div className="hero-text">
                        {/*<!--<h2 id="text-1">Welcome To My Portfolio</h2>-->*/}
                        <h2 id="text-2">
                            Hello There, It's Me <span>Julie</span>
                        </h2>
                        <h2 id="text-3">
                            I Am A <strong id="dev">Web Developer</strong>
                        </h2>
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
                    </div>
                </div>
            </div>
            {/*<!-- Section Finished -->*/}
        </>
    );
};

export default Home;
