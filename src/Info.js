import React, { useEffect } from "react";
import "./Info.css";
import info from "./info.png";
function Info() {
  useEffect(() => {
    const social = document.getElementById("social");

    social.addEventListener("click", () => {
      social.classList.toggle("active");
    });
  }, []);
  return (
    <div id="info" className="info">
      <div className="info_container">
        <div className="info_left">
          <h2>Contact Me on Social Media</h2>
          <div id="social" className="social">
            <div className="social_container">
              <img src="https://img.icons8.com/nolan/64/nui2.png" />
              <a href="https://www.instagram.com/anshsharma.as/">
                <img
                  className="insta"
                  src="https://img.icons8.com/plasticine/100/000000/instagram.png"
                />
              </a>
              <a href="https://github.com/anshsharmaas">
                <img
                  className="github"
                  src="https://img.icons8.com/plasticine/100/000000/github.png"
                />
              </a>
              <a href="https://www.linkedin.com/in/ansh-sharma-89775b1b4/">
                <img
                  className="linkdin"
                  src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="info_right">
          <img className="info_img" src={info} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Info;
