import React from "react";
import "../css/hireme.css";

const HireMe = () => {
  return (
    <section className="hire-section" id="hire">
      <div className="hire-container">

        {/* LEFT CONTENT */}
        <div className="hire-content">
          <h2>Hire Me</h2>

          <h3>
            Full Stack <span>.NET Developer</span>
          </h3>

          <p>
            I am a motivated and results-oriented <strong>Full Stack .NET Developer </strong>
            with hands-on experience in developing secure, scalable, and
            high-performance web applications.
          </p>

          <p>
            I work extensively with <strong>ASP.NET Core, Web API, Entity Framework Core</strong>,
            and <strong>SQL Server</strong> on the backend, and build modern,
            responsive user interfaces using <strong>React.js</strong>, JavaScript,
            HTML, and CSS.
          </p>

          <p>
            I believe in writing clean, maintainable code and following industry
            best practices while collaborating effectively with teams to deliver
            quality solutions.
          </p>

      
          {/* CTA BUTTONS */}
          <div className="hire-buttons">
            <a href="/skills" className="btn-primary">Technical Skills</a>
            <a
              href="https://drive.google.com/file/d/1TQQemhwawcZj52r4SFA-gHxLWakOZ7zE/view?usp=drivesdk" target="_blank"
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
            <p><span>Role:</span> Full Stack .NET Developer</p>
            <p><span>Experience:</span> 6+ Months</p>
            <p><span>Projects:</span> 8+ Completed</p>
            <p><span>Frontend:</span> React, JS, HTML, CSS</p>
            <p><span>Backend:</span> ASP.NET Core, Web API</p>
            <p><span>Database:</span> SQL Server</p>
            <p><span>Location:</span> India</p>
            <p><span>Availability:</span> Immediate</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HireMe;
