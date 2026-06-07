import React from "react";
import "../css/About.css";
import adImg from "../../assets/ad.jpg";
import mcaImg from "../../assets/education/MCA.jpg";
import bseImg from "../../assets/education/bse.png";
import eduImg from "../../assets/education/image.png";

const About = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (M.C.A)",
      institute: "Sharda University",
      year: "2023-2025",
      image: mcaImg,
    },
    {
      degree: "B.S.c Mathematics",
      institute: "Td pg college Jaunpur (Purvanchal University)",
      year: "2021-2023",
      image: bseImg,
    },
    {
      degree: "Senior Secondary School",
      institute: "Adarsh Inter College Palhana Azamgarh (UP Board)",
      year: "2018-2020",
      image: eduImg,
    },
    {
      degree: "Secondary School",
      institute: "Adarsh Inter College Palhana Azamgarh (UP Board)",
      year: "2017-2018",
      image: eduImg,
    },
  ];

  return (
    <>
      <section className="about-section-dark">

        {/*  ABOUT ME CARD  */}
        <div className="about-card">
          <div className="card-grid">
            <div className="card-image">
              <img src={adImg} alt="Aditya Varma - Full Stack .NET Developer" />
            </div>

            <div className="card-content">
              <p className="about-tag">About Me</p>
              <h2 className="about-title">
                Network <span>Engineer</span>
              </h2>

              <p className="about-text">
                I am a <strong>Network Engineer</strong> with hands-on experience in
                managing and troubleshooting enterprise and industrial network infrastructure,
                including <strong>TCP/IP, Routing & Switching, VLANs, SCADA, HLC, and BHS networks</strong>.

                I also have a background in <strong>Software Development</strong>, building
                responsive and scalable web applications using <strong>React.js, JavaScript, HTML, CSS</strong>,
                along with backend technologies and database management systems.

                I focus on network stability, system monitoring, security, and delivering
                reliable technical solutions in fast-paced environments.
              </p>

              <p className="about-text">
                I completed an online <strong >Java Developer Internship</strong> at <b>CognoRise InfoTech</b>,

              </p>

              <p className="about-text">
                I collaborate with teams to deliver clean, maintainable code
                following industry best practices and always aim for professional excellence.
              </p>

              <div className="about-info-grid">
                <div>
                  <span>Experience</span>
                  <p>6 Months +</p>
                </div>
                <div>
                  <span>Projects</span>
                  <p>6+ Completed</p>
                </div>
                <div>
                  <span>Location</span>
                  <p>India</p>
                </div>
                <div>
                  <span>Availability</span>
                  <p>Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*  EDUCATION SECTION (OUTSIDE CARD)  */}
        <div className="education-section">
          <p className="about-tag"> Education</p>
          <div className="education-grid">
            {educationData.map((edu, index) => (
              <div className="education-card" key={index}>
                <img src={edu.image} alt={edu.degree} />
                <div className="education-info">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institute}</p>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </>
  );
};

export default About;
