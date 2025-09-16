import React from "react";
import Pro_card from "./Pro_card";
import hpmanagment from "../assets/hpm.jpg";
import rdpicker from "../assets/rdp.png";
import ves from "../assets/ves.png";
import weth from "../assets/wethapp.png";
import stdp from "../assets/stdp.png";
import noimage from "../assets/noimg.jpg";

function Projects() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-4">
          <Pro_card
            img={hpmanagment}
            title="Hospital Management (UI)"
            tech="React.js, Bootstrap"
            desc="Dashboard UI for doctors, receptionists, and admin in a multi-speciality hospital."
          />
        </div>
        <div className="col-md-4">
          <Pro_card
            img={rdpicker}
            title="Recurring Date Picker"
            tech="React.js"
            desc="A booking system to pick custom recurring dates for trips and reservations."
          />
        </div>
        <div className="col-md-4">
          <Pro_card
            img={ves}
            title="Voucher Entry system"
            tech="React.js, Node.js, MySQL."
            desc="Leading in This is a Voucher Entry System project, kinda like an erp system."
          />
        </div>
        <div className="col-md-4">
          <Pro_card
            img={weth}
            title="Weather App"
            tech="JavaScript, API"
            desc="A Weather APP where user can put any place or location and can get the weather update."
          />
        </div>
        <div className="col-md-4">
          <Pro_card
            img={stdp}
            title="Study Platform"
            tech="HTML, CSS, JavaScript, PHP, MySQL."
            desc="A platform specially made for students so that they can study using provided online content, where teachers, and professors can put there notes , findings, etc."
          />
        </div>
        <div className="col-md-4">
          <Pro_card
            img={noimage}
            title="More Projects Coming Soon"
            tech="React.js"
            desc="Stay tuned for upcoming projects!"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
