import React from "react";
import "../css/Home.css";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Icons from "./Icons";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import bgVideo from "../../assets/bg.mp4";
import homeImg from "../../assets/home.jpg";


const Home = () => {
  return (
    <>
      <section className="home-section">
        {/* BACKGROUND VIDEO */}
        <video
          className="home-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
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
              <span>Network Engineer</span> at Beumer Group India Pvt. Ltd., working on enterprise and industrial networking technologies including <span>Routing, Switching, VPNs, Switch Stacking, TCP/IP, VLANs, and Network Troubleshooting</span> to maintain secure, reliable, and scalable network infrastructure.
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
              <a href="/hireme" className="btn hire-btn animate-btn">Hire Me</a>
              <a href="/projects" className="btn project-btn animate-btn">View Projects</a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="home-image animate-right">
            <img src={homeImg} alt="Aditya Varma" />
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Experience />
      <Project />
      <Achievements />
      <Contact />
      <Icons />
    </>


  );
};

export default Home;

