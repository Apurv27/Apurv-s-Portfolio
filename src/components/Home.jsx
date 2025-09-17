import React from "react";
import homeImg from "../assets/home-main.svg";
import avtarImg from "../assets/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <div>
        <div className="hc1">
          <div className="hc1text">
            <h1>HI THERE</h1>
            <h1>I'M APURV R. JAMBHULKAR</h1>
            <h1>REACT DEVELOPER</h1>
          </div>
          <div className="hc1img-container">
            <img className="hc1img" src={homeImg} alt="Developer" />
          </div>
        </div>
      </div>
      <div className="hc2">
        <div className="hc2txt">
          <h3 style={{ color: "#be27ecff" }}>LET ME INTRODUCE MYSELF</h3>
          <h3>
            {" "}
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️ I am fluent in classics like C, C++ and
            JavaScript. My field of Interest's are building new Web Technologies
            and Products. Whenever possible, I also apply my passion for
            developing products with Node.js and Modern Javascript Library and
            Frameworks like React.js.
          </h3>
        </div>
        <div className="hc2img">
          <img src={avtarImg} alt="" />
        </div>
      </div>
      <div className="hc3">
        <h2>FIND ME ON</h2>
        <h5>Feel free to connect with me</h5>
        <div className="hc3links">
          <h3>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Home;
