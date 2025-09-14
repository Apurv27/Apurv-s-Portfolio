// import React from 'react'
// import aboutImg from "../assets/about.png";
// function About() {
//   return (
//     <>
//       <div>
//         <div className="ac1">
//           <h1>Know Who I'M</h1>
//           <h4>
//             Hi Everyone, I am Apurv Ramesh Jambhulkar from Bhandara, Maharashtra
//             India. I am a fresher React developer currently teaching react in a
//             private institute Grace. I have completed B.Sc. in Maths from RTMNU
//             and now pursuing M.Sc. in Maths from LPU. Apart from coding, some
//             other activities that I love to do!
//           </h4>
//           <ul>
//             <li>Playing Games</li>
//             <li>Travelling</li>
//             <li>Teaching</li>
//           </ul>
//         </div>
//         <div className="ac1img-container">
//           <img className="ac1img" src={aboutImg} alt="" />
//         </div>
//       </div>
//       <div className="ac2">
//         <h1> PROFESSIONAL SKILLSET</h1>
//       </div>
//     </>
//   );
// }

// export default About

import React from "react";
import aboutImg from "../assets/about.png";
import SkillCard from "./SkillCard";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="ac1">
          <h1>Know Who I'M</h1>
          <h4>
            Hi Everyone, I am Apurv Ramesh Jambhulkar from Bhandara, Maharashtra
            India. I am a fresher React developer currently teaching react in a
            private institute Grace. I have completed B.Sc. in Maths from RTMNU
            and now pursuing M.Sc. in Maths from LPU. Apart from coding, some
            other activities that I love to do!
          </h4>
          <ul>
            <li>Playing Games</li>
            <li>Travelling</li>
            <li>Teaching</li>
          </ul>
        </div>
        <div className="ac1img-container">
          <img className="ac1img" src={aboutImg} alt="About" />
        </div>
      </div>

      <div className="ac2">
        <h1>PROFESSIONAL SKILLSET</h1>
        <div className="skillcard-container">
          <SkillCard skill=<i className="fa-solid fa-c"></i> />
          <SkillCard skill="C++" />
          <SkillCard skill=<i className="fa-brands fa-square-js"></i> />
          <SkillCard skill=<i className="fa-brands fa-react"></i> />
          <SkillCard skill=<i className="fa-brands fa-node-js"></i> />
          <SkillCard skill="MONGODB" />
          <SkillCard skill=<i className="fa-brands fa-php"></i> />
          <SkillCard skill="MySQL" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1>TOOLS I USE</h1>
        <div className="skillcard-container">
          <SkillCard skill=<i className="fa-brands fa-figma"></i> />
          <SkillCard skill="VS CODE" />
          <SkillCard skill="POSTMAN" />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default About;
