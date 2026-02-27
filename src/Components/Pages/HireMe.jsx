import React from "react";
import "../css/Hireme.css";

const HireMe = () => {
  return (
    <section className="hire-section" id="hire-java">
      <div className="hire-container">

        {/* LEFT CONTENT */}
        <div className="hire-content">
          <h2>Hire Me</h2>

          <h3>
            Full Stack <span>Java Developer</span>
          </h3>

          <p>
            I am a motivated and results-oriented <strong>Full Stack Java Developer</strong>
            with hands-on experience in building scalable, secure, and high-performance applications.
          </p>

          <p>
            I work extensively with <strong>Spring Boot, Hibernate, RESTful APIs</strong>, and <strong>MySQL/PostgreSQL</strong>
            on the backend, and craft responsive user interfaces using <strong>React.js</strong>, JavaScript,
            HTML, and CSS.
          </p>

          <p>
            I follow best coding practices, maintain clean code, and collaborate effectively with teams to
            deliver robust software solutions.
          </p>

          {/* CTA BUTTONS */}
          <div className="hire-buttons">
            <a href="/skills" className="btn-primary">Technical Skills</a>
            <a
              href="https://drive.google.com/file/d/YOUR_JAVA_CV_LINK/view?usp=drivesdk"
              target="_blank"
              className="btn-secondary"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hire-card">
          <h4>Professional Snapshot</h4>

          <div className="hire-info">
            <p><span>Role:</span> Full Stack Java Developer</p>
            <p><span>Experience:</span> 6+ Months</p>
            <p><span>Projects:</span> 8+ Completed</p>
            <p><span>Frontend:</span> React, JS, HTML, CSS</p>
            <p><span>Backend:</span> Spring Boot, Hibernate, REST API</p>
            <p><span>Database:</span> MySQL / PostgreSQL</p>
            <p><span>Location:</span> India</p>
            <p><span>Availability:</span> Immediate</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HireMe;