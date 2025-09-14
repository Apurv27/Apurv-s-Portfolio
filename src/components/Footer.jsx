import React from "react";
//import "../styles/Footer.css"; // If you have styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        Designed and Developed by Apurv R. Jambhulkar
      </div>
      <div className="footer-center">© 2025 ARJ</div>
      <div className="footer-right">
        <h5>
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
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
