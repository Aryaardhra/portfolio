import React from 'react';
import "../portfolio/portfolio.css";
import data from "../../data.json";

const Portfolio = () => {
  return (
    <>
    <section>
      <h5> My Recent Work </h5>
      <h2> Portfolio </h2>
      <div className=" container portfolio_container">
      {
        data.map((item) => {
          return(
            <article className="portfolio_item" key={item.id}>
            <div className="portfolio_item_img">
             <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio_links">
            <a href={item.github} className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href={item.demo} className="btn btn-purple" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
    </>
  )
}

export default Portfolio