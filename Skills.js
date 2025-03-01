import React from "react";
import "./Skills.css";

function Skills() {
  // Array of skills with logos
  const skills = [
    { name: "React", logo: "/logos/react.png" },
    { name: "Java", logo: "/logos/java.webp" },
    { name: "JavaScript", logo: "/logos/js.jpg" },
    { name: "C++", logo: "/logos/c++.png" },
    { name: "DSA", logo: "/logos/dsa-logo.png" },
    { name: "RUST", logo: "/logos/rust.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
    { name: "Python", logo: "/logos/python.jpg" },
    { name: "BootStrap", logo: "/logos/bootstrap.png" },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-slider-wrapper">
        <div className="skills-slider">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img
                src={skill.logo} // Logo ka path
                alt={`${skill.name} logo`} // Alternative text agar image load na ho
                className="skill-logo" // CSS class for styling
                title={skill.name} // Tooltip mein skill ka naam dikhayega
              />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;


