import React from "react";
import "../css/about.css";

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
              Full Stack <span>.NET Developer</span>
            </h2>

            <p className="about-text">
              I am a <strong>.NET Software Developer</strong> with experience
              in building secure, scalable, and high-performance web applications.
              I handle backend with ASP.NET Core, Web API, Entity Framework Core
              & SQL Server, and frontend with React.js, JavaScript, HTML & CSS.
            </p>

            <p className="about-text">
              I completed an online <strong >Java Developer Internship</strong> at <b>CognoRise InfoTech</b>,
              and currently, since August, I am working as a <strong>.NET Developer</strong> at <strong>Sapeagle ERP Pvt Ltd</strong>.
            </p>

            <p className="about-text">
              I collaborate with teams to deliver clean, maintainable code
              following industry best practices and always aim for professional excellence.
            </p>

            <div className="about-info-grid">
              <div>
                <span>Experience</span>
                <p>6+ Months</p>
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
      
      {/*  2 ABOUT ME CARD  */}
      <div className="about-card">
        <div className="card-grid">
          <div className="card-content">
            <p className="about-tag">Looking for</p>
            <h2 className="about-title">
              Aspiring <span>Java Full Stack Developer</span>
            </h2>

            <p className="about-text">
              I am a <strong>Java Full Stack Developer</strong> fresher with knowledge in building
              web applications using <strong>Java, Spring Boot, Hibernate</strong>, and <strong>MySQL </strong>
              for backend, and <strong>React.js, JavaScript, HTML & CSS</strong> for frontend.
            </p>

            <p className="about-text">
              I have completed an online <strong>Java Developer Internship</strong> at
              <b>CognoRise InfoTech</b>, where I worked on small projects and gained hands-on experience
              in building web applications and working with databases.
            </p>

            <p className="about-text">
              I am enthusiastic about learning new technologies, collaborating with teams,
              and contributing to real-world projects to improve my skills as a full stack developer.
            </p>

            <div className="about-info-grid">
              <div>
                <span>Experience</span>
                <p>Fresher</p>
              </div>
              <div>
                <span>Projects</span>
                <p>4+ Completed</p>
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
          <div className="card-image">
            <img src="src/assets/home.jpg" alt="Aditya Varma - Java Developer" />
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
  );
};

export default About;
