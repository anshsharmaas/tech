import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "./The.png";

function Navbar() {
  useEffect(() => {
    const toggle = document.getElementById("toggle");
    const nav = document.getElementById("nav");
    toggle.addEventListener("click", () => nav.classList.toggle("active"));
  }, []);
  // const navfunction = () => {
  //   const nav = document.getElementById("nav");
  //   return nav.classList.toggle("active");
  //   console.log("hi");
  // };
  return (
    <div className="navbar">
      <div id="Navbar" className="navbar_container">
        <h1 className="heading">{`<Ansh/>`}</h1>
        <nav className="nav" id="nav">
          <ul>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#info">Info</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
          <button className="icon" id="toggle">
            <div className="line line1"></div>
            <div className="line line2"></div>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
