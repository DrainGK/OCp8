import React from 'react';
import DynamicText from './DynamicText';

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile-content">
                <div className="profile-picture">
                    <img  src="./guillaumeOpenAi.jpg" alt="guillaumelopez" />
                    <figcaption>@generated from Midjourney</figcaption>
                </div>
                    <div className="WhoAmI">
                        <p className='hi'>
                            Hi, my name is
                        </p>
                        <h2 className='myName'>
                            <DynamicText />
                        </h2>
                        <h2 className='whatIdo'>
                            I build things for the web.
                        </h2>
                        <p>I am a front-end engineer, Currently based in Tokyo, who's specialized in building websites and occasionnaly design (my first hobby). <br />
                        Currently, I am a Quality Advisor for <a>Activision-Blizzard</a> on <a>Modern Warfare 2</a>. My goal is to always build beautifull and user friendly design.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;