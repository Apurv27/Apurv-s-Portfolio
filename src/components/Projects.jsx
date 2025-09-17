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
            img={ves}
            title="Voucher Entry system"
            tech="React.js, Node.js, MySQL."
            desc="Voucher Entry System is a streamlined application designed to simplify the process of recording and managing financial vouchers. It allows users to efficiently input, track, and organize expense and payment entries in one place. With an intuitive interface and secure data handling, it helps businesses maintain accurate financial records. The system ensures faster processing and reduces manual errors, making accounting tasks easier and more reliable. Built with user experience and efficiency in mind."
          />
        </div>
        <div className="col-md-4">
          <Pro_card
            img={hpmanagment}
            title="Hospital Management (UI)"
            tech="React.js, Bootstrap"
            desc="Hospital Management UI is a clean and modern user interface designed for a multispeciality hospital. It focuses on providing an organized layout to manage patient information, appointments, and services efficiently. Though it’s a front-end design, it offers a professional and user-friendly experience suitable for healthcare environments. Built with responsive design principles, it ensures accessibility across devices."
          />
        </div>
        <div className="col-md-4">
          <Pro_card
            img={rdpicker}
            title="Recurring Date Picker"
            tech="React.js"
            desc="Recurring Date Picker is a tool that allows users to easily select a start date and set up recurring schedules like daily, weekly, or monthly. It simplifies planning by automatically generating future dates based on the chosen pattern. Designed with user-friendly controls, it helps manage events, tasks, or appointments efficiently. Built using modern frameworks for a seamless and interactive experience."
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
            desc="StudyPlatform is an online learning platform where students can study virtually from anywhere. It offers a user-friendly interface to access study materials, practice quizzes, and collaborate with peers. Designed to make learning interactive and convenient, it helps students stay connected and enhance their academic performance. Built with modern technologies for smooth and responsive experiences."
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
