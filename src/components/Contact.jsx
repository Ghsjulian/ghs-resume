import React from "react";

const Contact = () => {
    return (
        <>
            {/*<!-- Section Started -->*/}
            <div className="section">
                <div className="contact-section">
                    <div className="contact-text">
                        {/*<!--<h2 id="text-1">Welcome To My Portfolio</h2>-->*/}
                        <h2 id="text-2">
                            Contact - <span>Me</span>
                        </h2>
                        <p id="description">
                            I am a professional web developer and desginer. I
                            have three years of experience in development
                            sector. I can build any website easily. You can
                            directly contact with me or you can follow me on my
                            social media.
                        </p>

                        <div className="contact-form">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Enter Email" />
                            <textarea placeholder="Write Message..."></textarea>
                            <button id="contact-btn">Contact Now </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Section Finished -->*/}
        </>
    );
};

export default Contact;
