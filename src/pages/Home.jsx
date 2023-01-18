import React, { memo, useState } from 'react';
import About from '../components/About';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile'
import Skills from '../components/Skills';
import Slider from '../components/Slider';
import SocialNetwork from '../components/SocialNetwork';
import ContactForm from '../components/ContactForm';
import Reading from '../components/Reading';

const Home = memo(() => {

    const projectData = [
        {
          id: 1,
          title: "Resto",
          date: "August 2022",
          languages: ["html ", "Sass"],
          infos: "Web design and integration",
          img: require("../assets/img/projet-1.jpg"),
          link: "http://www.google.com",
        },
        {
          id: 2,
          title: "React Movie App",
          date: "September 2022",
          languages: ["Sass ", "React"],
          infos: "Movie application using react and open source API",
          img: require("../assets/img/projet-1.jpg"),
          link: "http://www.google.com",
        },
        {
          id: 3,
          title: "Architect portfolio",
          date: "November 2022",
          languages: ["JavaScript ", "CSS"],
          infos: "I did the frontend for this project",
          img: require("../assets/img/projet-3.jpg"),
          link: "http://www.google.com",
        },
        {
          id: 4,
          title: "Kasa",
          date: "December 2022",
          languages: ["Sass ", "React"],
          infos: "",
          img: require("../assets/img/projet-4.jpg"),
          link: "http://www.google.com",
        },
      ];
      
    return (
        <main>
            <div className='home'>
                <SocialNetwork />
                <Profile />
                <About />
                <Skills />
                <Reading />
                <Slider slides={projectData} />
                <ContactForm />
            </div>
            <Navigation />
        </main>
    );
});

export default Home;