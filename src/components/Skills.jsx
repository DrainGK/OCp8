import React from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Skills = () => {
    return (
        <div className='skills'>
            <div className="skills-content">
            <div className="title">
                <p>What Wkills I Have</p>
                <h2>My Experience</h2>
            </div>
                <div className="box-content">
                    <div className="frontend box">
                        <h3>Frontend Developement</h3>
                        <ul className="skill">
                            <li><BsFillCheckCircleFill/> HTML</li>
                            <li><BsFillCheckCircleFill/> CSS / SASS</li>
                            <li><BsFillCheckCircleFill/> JavaScript</li>
                            <li><BsFillCheckCircleFill/> React</li>
                        </ul>
                    </div>
                    <div className="backend box">
                        <h3>Backend Developement</h3>
                        <ul className="skill">
                            <li><BsFillCheckCircleFill/> Node.Js</li>
                            <li><BsFillCheckCircleFill/> MongoDb</li>
                            <li><BsFillCheckCircleFill/> Express</li>
                        </ul>
                    </div>
                    <div className="lang box">
                        <h3>Languages</h3>
                        <ul className="skill">
                            <li><BsFillCheckCircleFill/> French</li>
                            <li><BsFillCheckCircleFill/> Native</li>
                            <li><BsFillCheckCircleFill/> English</li>
                            <li><BsFillCheckCircleFill/> Fluent</li>
                            <li><BsFillCheckCircleFill/> Japanese</li>
                            <li><BsFillCheckCircleFill/> JLPTN3</li>
                        </ul>
                    </div>
                    <div className="adobe box">
                        <h3>Adobe Creative Cloud</h3>
                        <ul className="skill">
                            <li><BsFillCheckCircleFill/> Premier Pro</li>
                            <li><BsFillCheckCircleFill/> PhotoShop</li>
                            <li><BsFillCheckCircleFill/> LightRoom</li>
                            <li><BsFillCheckCircleFill/> Adobe XD</li>
                            <li><BsFillCheckCircleFill/> RedGiant</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Skills;