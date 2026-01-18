import React from "react";
import "../css/home.css";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Achievements from "./Achievements";
import Contact from "./Contact";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Social Icons


const Home = () => {
  return (
    <>
      <section className="home-section">
        {/* 🎥 BACKGROUND VIDEO */}
        <video
          className="home-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/assets/bg.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="home-overlay"></div>

        <div className="home-container">
          {/* LEFT SIDE CONTENT */}
          <div className="home-content animate-left">
            <h2 className="home-title">
              Hi, I'm <span>Aditya Varma</span>
            </h2>
            <p className="home-description">
              <span>Full Stack .NET Software Developer</span> at Sapeagle ERP Pvt Ltd., working across backend (.NET Core, Web API, SQL Server) and frontend (React, JavaScript) to build responsive and scalable web applications.
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="social-icons animate-social">
              <a href="https://www.linkedin.com/in/aditya-varma-5866972ab/" target="_blank" rel="noreferrer">

                <FaLinkedin />
              </a>
              <a href="https://github.com/Advarma0069" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://twitter.com/your-twitter" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/your-instagram" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>

            {/* BUTTONS */}
            <div className="home-buttons">
              <a href="/HireMe" className="btn hire-btn animate-btn">Hire Me</a>
              <a href="/Projects" className="btn project-btn animate-btn">View Projects</a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="home-image animate-right">
            <img src="/src/assets/home.jpg" alt="Aditya Varma" />
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Project />
      <Achievements />
      <Contact />
    </>


  );
};

export default Home;

