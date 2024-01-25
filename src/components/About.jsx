import React from "react"

const About = ()=>{
    return (
        <>
         {/*<!-- Section Started -->*/}
            <div className="section">
                <div className="about-section">
                    <img className="about-logo" src="./images/ghs.png" />
                    <div className="about-text">
                        {/*<!--<h2 id="text-1">Welcome To My Portfolio</h2>-->*/}
                        <h2 id="text-2">
                     About - <span>Myself</span>
                        </h2>
                        <p id="description">
                            I am a professional web developer and desginer. I
                            have three years of experience in development
                            sector. I can build any website easily. You can
                            directly contact with me or you can follow me on my
                            social media.
                        </p>
                    </div>
                </div>
            </div>
           {/* <!-- Section Finished -->*/}
        </>
    )
}

export default About