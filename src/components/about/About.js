import React from 'react'
import profile from "../../assets/profile.jpeg";
import { LiaAwardSolid } from "react-icons/lia";
import { MdFolderCopy } from "react-icons/md";
import { Link } from 'react-router-dom';
import "../about/about.css";

const About = () => {
  return (
    <>
    <section>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
      <div className="about_me">
      <div className="about_img">
        <img src={profile} alt='profile_img'/>
      </div>
      </div>
      <div className="about_content">
      <div className="about_cards">
        <article className="about_card">
         <LiaAwardSolid className="about_icon" />
         <h5>Experience</h5>
         <small>1 month </small>
        </article>
        <article className="about_card">
         <MdFolderCopy className="about_icon" />
         <h5>Projects</h5>
         <small>5</small>
        </article>
      </div>
      <p>
      B.Tech Graduate in Instrumentation Technology looking forward to associate with a progressive organization that gives me scope to develop and update knowledge and skills and be a part of the team that dynamically work towards the growth of the company
      </p>
      <Link className="btn btn-purple" to="/contact" style = {{ textDecoration : "none"}}>Let's Talk</Link>
      </div>
      </div>
    </section>
    </>
  )
}

export default About