import React from "react";
import Cards from "./Cards";
import "./Projects.css";
import website from "./busters.png";
import Typed from "react-typed";

function Projects() {
  return (
    <div id="Projects" className="projects">
      {/* <h1>My Work</h1> */}
      <Typed
        className="typed"
        strings={["My Work.."]}
        typeSpeed={60}
        backSpeed={50}
      />
      <div className="projects_container">
        <div className="cards_container">
          <Cards
            img="https://www.nxtbookmedia.com/wp-content/uploads/2014/06/netflix.png"
            title="Netflix clone made by me"
            link="https://netflix-clone8437.web.app/"
          />
          <Cards
            img="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/USRDI3D23UI6XDC6GLSHWQVVDM.jpg"
            title="Amazon clone "
            link="https://clonebyas84.web.app/"
          />
          <Cards
            img="data:image/jpeg;base64,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"
            title="Tinder clone "
            link="https://tinder-clone8437.web.app/"
          />

          <Cards
            img="https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-GitHub-2.png"
            title="Github Finder "
            link="https://githubfinder8437.netlify.app/"
          />
          <Cards
            img="https://www.pngitem.com/pimgs/m/494-4946182_world-wide-web-png-file-vector-website-logo.png"
            title="Static Website"
            link="https://securitybusters.me"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
