import React from "react";

function Pro_card({ img, title, tech, desc }) {
  return (
    <div className="card h-100 border-0 shadow-lg hover-effect">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="text-muted">{tech}</p>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
}

export default Pro_card;
