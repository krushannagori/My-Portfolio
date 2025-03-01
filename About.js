import React from "react";
import "./About.css";

function About() {
  const aboutDetails = [
    {
      title: "My Education",
      description: "B.Tech in Computer Science, ITM Gwalior",
      image: "./about/itm.jpeg",
    },
    {
      title: "My City",
      description: "Gwalior, MP",
      image: "./about/gwl.jpeg",
    },
    {
      title: "My Email",
      description: "krishnanagori.pvt@gmail.com",
      image: "./about/mail.png",
    },
    {
      title: "Contact",
      description: "+91 9826364300",
      image: "./about/con.png",
    },
  ];

  return (
    <div className="about-container">
      <h2 className="about-heading">About Me</h2>
      <div className="about-cards">
        {aboutDetails.map((detail, index) => (
          <div key={index} className="about-card">
            <img
              src={detail.image}
              alt={detail.title}
              className="card-image"
            />
            <div className="card-content">
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
