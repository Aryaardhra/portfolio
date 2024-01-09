import React from 'react'
import MainButton from './MainButton';
import profile from "../../assets/profile.jpeg";
import SocialMedia from './SocialMedia';
import "../header/header.css";

const Header = () => {
  return (
    <>
     <header>
       <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ardhra E M</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <MainButton />
        <SocialMedia />

        <div className='profile'>
            <img src={profile} alt='profile' />
        </div>
        <a href="#contact" className="scroll_down"> Scroll Down</a>
       </div>
     </header>
    </>
  )
}

export default Header