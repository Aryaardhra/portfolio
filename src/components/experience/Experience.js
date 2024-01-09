import React from 'react';
import { LiaHtml5 } from "react-icons/lia";
import { DiCss3} from "react-icons/di";
import { RiBootstrapFill } from "react-icons/ri";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa6";
import { DiNodejsSmall } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiPm2 } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { HiMiniCheckBadge } from "react-icons/hi2";
import "../experience/experience.css";

const Experience = () => {
  return (
   <>
   <section>
    <h5>What Skill I Have</h5>
    <div className="container experience_container">
      <div className="frontend">
       <h3>Frontend Development</h3>
       <div className="frontend_content">
        <article className="frontend_details">
          <LiaHtml5 className="details_icons"/>
         <div>
         <h4>HTML</h4>
         </div>
        </article>
        <article className="frontend_details">
          <DiCss3 className="details_icons"/>
          <div>
          <h4>CSS</h4>
          </div>
        </article>
        <article className="frontend_details">
          <RiBootstrapFill className="details_icons"/>
          <div>
          <h4>Bootstrap</h4>
          </div>
        </article>
        <article className="frontend_details">
          <BiLogoCPlusPlus className="details_icons"/>
          <div>
          <h4>C++</h4>
          </div>
        </article>
        <article className="frontend_details">
          <RiJavascriptFill className="details_icons" />
          <div>
          <h4>JavaScript</h4>
          </div>
        </article>
        <article className="frontend_details">
          <FaReact className="details_icons"/>
          <div>
          <h4>React</h4>
          </div>
        </article>
       </div>
      </div>
      <div className="backend">
      <h3>Backend Development</h3>
       <div className="frontend_content">
        <article className="frontend_details">
          <FaNode className="details_icons"/>
          <div>
          <h4>Node JS</h4>
          </div>
        </article>
        <article className="frontend_details">
          <DiNodejsSmall className="details_icons"/>
          <div>
          <h4>Express JS</h4>
          </div>
        </article>
        <article className="frontend_details">
          <BiLogoMongodb className="details_icons"/>
          <div>
          <h4>MongoDB</h4>
          </div>
        </article>
        <article className="frontend_details">
          <SiMysql className="details_icons"/>
          <div>
          <h4>SQL</h4>
          </div>
        </article>
        <article className="frontend_details">
          <SiPm2 className="details_icons"/>
          <div>
          <h4>pm2</h4>
          </div>
        </article>
        <article className="frontend_details">
          <SiGraphql className="details_icons"/>
          <div>
          <h4>GraphQL</h4>
          </div>
        </article>
        <article className="frontend_details">
          <BiLogoFirebase className="details_icons"/>
         <div>
         <h4>Firebase</h4>
         </div>
        </article>
       </div>
      </div>
      <div className="experience">
          <div className="experience_title">
            <h3>My Experience</h3>
          </div>
          <ul className="experience_list">
            <li>
            <h2>Company : NeuroSphere</h2>
            </li>
            <li>
            <p>Junior MERN Stack Developer
            Trivandrum, Kerala, India</p>   
            </li>
            <li><p> Jun 2023 – 1mon</p></li>
            <li>
            <p>Worked collaboratively with the team to develop new
               features using React as the front-end and Next.js as
               the back-end, gaining valuable experience in
               the MERN application.</p>
            </li>
          </ul>
        </div>
        <div className="internship">
          <div className="experience_title">
            <h3>INTERNSHIP</h3>
          </div>
          <ul className="experience_list">
            <li>
            <h2>Company : Global Infonet Inc.</h2>
            </li>
            <li>
            <p>Internship for Software Development</p>   
            </li>
            <li><p> ( JavaScript and React JS )</p></li>
            <li>
           
            </li>
          </ul>
        </div>
      </div>
    
   </section>
   </>
  )
}

export default Experience