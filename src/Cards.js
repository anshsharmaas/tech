import React from "react";
import "./Cards.css";

function Cards({ img, title, link }) {
  return (
    <div className="card">
      <img className="card_container" alt="" src={img}></img>
      <div className="card_overlay">
        <div className="card_title">{title}</div>
        <a href={link}>
          <button className="button">Visit ></button>
        </a>
      </div>
    </div>
  );
}

export default Cards;
