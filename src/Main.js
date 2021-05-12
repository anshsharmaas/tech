import React, { useEffect } from "react";
import avatar from "./mf-avatar.png";
import "./Main.css";
import main from "./main.png";

function Main() {
  useEffect(() => {
    const textEl = document.getElementById("text");
    let idx = 1;
    let speed = 300;
    const text = "Ansh Sharma";

    const writeText = () => {
      textEl.innerText = text.slice(0, idx);
      idx++;

      setTimeout(writeText, 300);
    };
    writeText();
  }, []);
  return (
    <div id="Main" className="main">
      <div className="main_container">
        <img alt="" src={avatar} />
        <h2 id="text">Ansh Sharma</h2>
      </div>
    </div>
  );
}

export default Main;
