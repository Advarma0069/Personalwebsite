import React from "react";
import "../css/About.css";

const About = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (M.C.A)",
      institute: "Sharda University",
      year: "2023-2025",
      image: "src/assets/education/MCA.jpg",
    },
    {
      degree: "B.S.c Mathematics",
      institute: "Td pg college Jaunpur (Purvanchal University)",
      year: "2021-2023",
      image: "src/assets/education/bse.png",
    },
    {
      degree: "Senior Secondary School",
      institute: "Adarsh Inter College Palhana Azamgarh (UP Board)",
      year: "2018-2020",
      image: "src/assets/education/image.png",
    },
    {
      degree: "Secondary School",
      institute: "Adarsh Inter College Palhana Azamgarh (UP Board)",
      year: "2017-2018",
      image: "src/assets/education/image.png",
    },
  ];

  return (
    <>
    <section className="about-section-dark">

      {/*  ABOUT ME CARD  */}
      <div className="about-card">
        <div className="card-grid">
          <div className="card-image">
            <img src="/ad.jpg" alt="Aditya Varma - Full Stack .NET Developer" />
          </div>

          <div className="card-content">
            <p className="about-tag">About Me</p>
            <h2 className="about-title">
              Full Stack <span>Developer</span>
            </h2>

            <p className="about-text">
              I am a <strong>Software Developer</strong> with experience
              in building secure, scalable, and high-performance web applications.
              I handle backend with Hibernate, RESTful API, 
              & SQL Server, and frontend with React.js, JavaScript, HTML & CSS.
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
                <p>Fresher</p>
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
