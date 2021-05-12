import React from "react";
import "./Skills.css";
import skills from "./skills.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skills_container">
        <div
          className="skills_left "
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h1>My Skills</h1>
          <li>
            <h3>HTML</h3>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <h3>CSS</h3>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li>
            <h3>Javascript</h3>
            <span className="bar">
              <span className="javascript"></span>
            </span>
          </li>
          <li>
            <h3>React</h3>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
          <li>
            <h3>Python</h3>
            <span className="bar">
              <span className="python"></span>
            </span>
          </li>
        </div>
        <div
          className="skills_right "
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img className="skills_img" src={skills} alt="skills"></img>
        </div>
      </div>
    </div>
  );
}

export default Skills;
