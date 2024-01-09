import React from 'react'
import cv from "../../assets/cv.pdf";
import { NavLink } from 'react-router-dom';

const MainButton = () => {
  return (
    <>
    <div className="main_button">
        <a href={cv} download className="btn">Download CV</a>
        <NavLink to="/contact" style={{textDecoration: "none"}} className ="btn btn-purple">Let's Talk</NavLink>
    </div>
    </>
  )
}

export default MainButton;