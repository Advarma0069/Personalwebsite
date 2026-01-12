import React from "react";
import "./css/footer.css";
import { Link } from "react-router-dom";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Aditya Varma</h3>
          <p>
            .NET Software Developer building secure, scalable and
            high-performance web applications.

          </p>
        </div>

        {/* Column 2 */}
  <div className="footer-col">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Me</Link></li>
    <li><Link to="/skills">Skills</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/achievements">Achievements</Link></li>
    <li><Link to="/contact">Contact</Link></li>

  </ul>
</div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Expertise</h4>
          <ul>
            <li>.NET Core</li>
            <li>ASP.NET Web API</li>
            <li>React.js</li>
            <li>SQL Server</li>
          </ul>
        </div>

        {/* Column 4 – SOCIAL MEDIA ONLY */}
        <div className="footer-col">
          <h4>Follow Me</h4>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Aditya Varma. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

