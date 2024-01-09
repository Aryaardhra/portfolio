import React from 'react';
import { HiMiniCheckBadge } from "react-icons/hi2";
import "../services/services.css";

const Services = () => {
  return (
    <>
    <section>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_title">
            <h3>Web Development</h3>
          </div>
          <ul className="services_list">
            <li>
             <HiMiniCheckBadge className="service_list_icon" />
             <p>proficient in both front-end (React.js) and back-end (Node.js, Express.js) development, enabling to create full-stack applications.</p>
            </li>
            <li>
             <HiMiniCheckBadge className="service_list_icon" />
             <p>skilled in designing and implementing RESTful APIs using Express.js, enabling smooth communication between the front-end and back-end components.</p>
            </li>
            <li>
             <HiMiniCheckBadge className="service_list_icon" />
             <p>can develop real-time features and applications using technologies like Socket.io, enabling features like live chat and notifications.</p>
            </li>
            <li>
             <HiMiniCheckBadge className="service_list_icon" />
             <p>Proficient in version control systems like Git, ensure proper code versioning, collaboration, and coordination within development teams.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
    </>
  )
}

export default Services;