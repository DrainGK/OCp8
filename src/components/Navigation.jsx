import React from 'react';
import { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";




const Navigation = () => {

    const [activeNav, setActiveNav] = useState("#")
    return (
        <ul  className='navigation'>
            <a href='#' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
            <a href='#project' onClick={() => setActiveNav('project')}  className={activeNav === 'project' ? 'active' : ''}><BsFillBookFill/></a>
            <a href='#contact' onClick={() => setActiveNav('contact')}  className={activeNav === 'contact' ? 'active' : ''}><GrMail/></a>
        </ul>
    );
};

export default Navigation;