import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    document.title =
        "See My Latest Projects | My All Projects Are Included Here";
    const [Projects_Data, setProject_Data] = useState([]);
    const url = "./data/data.json";
    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data) {
                    setProject_Data(data);
                }
            });
    }, []);

    return (
        <>
            <div className="section">
                <div className="about-section">
                    <img className="about-logo" src="./images/abt_3.png" />
                    <div className="about-text">
                        {/*<!--<h2 id="text-1">Welcome To My Portfolio</h2>-->*/}
                        <h2 id="text-2">
                            My - <span>Projects</span>
                        </h2>
                        <p id="description">
                            I have made so many projects in this 3 years. I can
                            also make PHP website using core PHP and javascript.
                            My experience and skills are depends on the what
                            kinds of projects you wanna build. You can check my
                            GitHub where i have uploaded my all repository and
                            projects.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div id="Projects" className="about-text">
                    <h2 align="center" id="text-2">
                        My Latest - <span>Projects</span>
                    </h2>
                    {Projects_Data.map(project => {
                        return (
                            <>
                                <Link key={project.project_id}
                                    to={project.project_url}
                                    target="_blank"
                                    className="cart-area"
                                >
                                    <div className="cart-list">
                                        <img
                                            src={project.project_img}
                                            alt="Project Image"
                                        />
                                        <div className="cart-div">
                                            <p id="price">
                                                Project ID :
                                                <span id="sp_1">
                                                    {project.project_id}
                                                </span>
                                            </p>
                                            <p id="name">
                                                Build Date :
                                                <span id="sp_3">
                                                    {project.project_date}
                                                </span>
                                            </p>
                                            <p id="name">
                                                Project Name :
                                                <span id="sp_2">
                                                    {project.project_name}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;
