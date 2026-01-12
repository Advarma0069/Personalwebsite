import React from "react";
import "../css/skills.css";

export default function Skills() {
  const skillsData = [
    { name: "C# / .NET Core", level: 90 },
    { name: "ASP.NET Core MVC & Web API", level: 85 },
    { name: "Entity Framework Core", level: 80 },
    { name: "LINQ", level: 85 },
    { name: "SQL Server", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 70 },
    { name: "HTML & CSS", level: 90 },
    { name: "Git & GitHub", level: 80 },
  ];

  return (
    <section className="skills-section">
      <div className="skills-wrapper">

        {/* LEFT SIDE IMAGE */}
        <div className="skills-image">
          <img src="/ad.jpg" alt="Full Stack .NET Developer" />
        </div>

        {/* RIGHT SIDE SKILLS */}
        <div className="skills-container">
          <h2 className="skills-title">.NET Software Developer</h2>

          {skillsData.map((skill, index) => (
            <div className="skill" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ "--level": `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
