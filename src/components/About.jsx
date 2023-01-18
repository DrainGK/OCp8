import React from 'react';

const About = () => {
    return (
        <div className='about'>

            <div className="title">
                <p>get to know about me</p>
                <h2>About me</h2>
            </div>
            <div className="about-content">
                <div className="image">
                    <img src="./GuillaumeProfilePicture.jpg" alt="Guillaume Photo"/>
                </div>

                <div className="text-content">
                    <p>
                        Hello, my name is Guillaume Lopez from France and currently based in Tokyo, Japan.
                        I always enjoyed creat things on the web or basically with new technologies.
                        I started from video games since the begining, then I started to code little games with Unity.
                        After this I got passioned for design and then produce poster, ad, web design, content video etc.. <br />
                    </p>

                    <p>
                        Doing websites started from helping my mom and mydad for the family compagnies. I believe that websites is 
                        usefull for peoples and I want to bring my skills to help them grow. Obviously with beautiful design and being 
                        user friendly for visitor. <br />
                    </p>
                    <p>
                        Currently I fell inside the AI and learning how to implement them in my work. Especially <a>OpenChatGPT, </a> 
                        <a>MidJourney, </a>and <a>Stable Diffusion.</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;