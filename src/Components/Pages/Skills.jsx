import React, { useEffect, useRef } from "react";
import {
  FaJava,
  FaReact,
  FaShieldAlt,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaChartBar
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiDotnet,
  SiMysql,
  SiApachehadoop,
  SiApachespark
} from "react-icons/si";

import "../css/Skills.css";

export default function Skills() {
  const skillsRef = useRef(null);

  const iconPool = [
    <FaJava />,
    <SiSpringboot />,
    <SiDotnet />,
    <FaReact />,
    <FaDatabase />,
    <SiMysql />,
    <SiMongodb />,
    <SiApachehadoop />,
    <SiApachespark />,
    <FaDocker />,
    <FaAws />,
    <FaGitAlt />,
    <FaChartBar />
  ];

  const skillsData = [
    {
      category: "Backend Development",
      icon: <FaJava />,
      skills: [
        { name: "Java & C#", level: 88 },
        { name: "Spring Boot", level: 80 },
        { name: "Hibernate & JPA", level: 75 },
        { name: "Restful Api", level: 85 },
        { name: "Entity framework / Linq", level: 80 },
        { name: "Asp.NET Core", level: 85 },
      ],
    },
    {
      category: "Frontend Development",
      icon: <FaReact />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "Css3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
      ],
    },
    {
      category: "Database Developement",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Sql Server", level: 85 },
        { name: "Docker", level: 50 },
        { name: "Power BI", level: 65 },
      ],
    },
    {
      category: "Security and Tools",
      icon: <FaShieldAlt  />,
      skills: [
        { name: "JWT", level: 85 },
        { name: "Authentication", level: 85 },
        { name: "Vs Code & Visual Studio", level: 90 },
        { name: "Intellij & Eclipse", level: 95 },
        { name: "Postman ", level: 95 },
        { name: "Git & Github", level: 65 },
      ],
    },
  ];

  useEffect(() => {
    const bars = skillsRef.current.querySelectorAll(".progress-fill");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const level = entry.target.dataset.level;
            entry.target.style.width = level;
          }
        });
      },
      { threshold: 0.4 }
    );

    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={skillsRef}>
      <div className="skills-wrapper">

        <div className="skills-header">
          <h2 className="skills-title">
            Technical Proficiencies
          </h2>
          <p className="skills-subtitle">
            Enterprise-level backend, frontend and data engineering expertise
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((section, index) => (
            <div className="skills-card" key={index}>

              {/* Animated Random Bubbles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`bubble bubble-${i}`}
                  style={{
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  {iconPool[Math.floor(Math.random() * iconPool.length)]}
                </div>
              ))}

              <div className="card-header">
                <div className="card-icon">{section.icon}</div>
                <h3 className="category-title">
                  {section.category}
                </h3>
              </div>

              {section.skills.map((skill, i) => (
                <div className="skill" key={i}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      data-level={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
