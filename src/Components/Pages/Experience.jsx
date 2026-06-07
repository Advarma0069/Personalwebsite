import React from "react";
import "../css/Experience.css";

const experiences = [
{
role: "Network Engineer",
company: "Beumer Group India Pvt. Ltd.",
duration: "Apr 2026 - Present",
location: "Navi Mumbai International Airport, Ulwe",
technologies: [
"Cisco",
"Routing & Switching",
"VLAN",
"STP",
"BGP",
"Network Monitoring",
"TCP/IP"
],
responsibilities: [
"Manage and maintain enterprise network infrastructure supporting airport operations.",
"Configure and troubleshoot Layer 2 and Layer 3 networking technologies.",
"Monitor network performance and ensure maximum uptime.",
"Perform root cause analysis and incident resolution.",
"Support mission-critical baggage handling and automation systems.",
"Implement network security best practices and documentation."
]
},
{
role: "Software Developer",
company: "Eagle Pvt. Ltd.",
duration: "Aug 2025 - Feb 2026",
location: "Gurugram, Haryana",
technologies: [
"C#",
".NET",
"ASP.NET MVC",
"Entity Framework",
"LINQ",
"SQL Server",
"REST API",
"JavaScript",
"Git"
],
responsibilities: [
"Developed and maintained enterprise-grade web applications using C# and .NET technologies.",
"Designed and implemented scalable backend solutions using ASP.NET MVC and RESTful APIs.",
"Worked extensively with Entity Framework and LINQ for efficient data access and database operations.",
"Developed complex SQL Server queries, stored procedures, views, and database optimizations.",
"Integrated frontend components with backend services to deliver responsive business applications.",
"Participated in Agile development processes including sprint planning, code reviews, and daily stand-ups.",
"Performed application debugging, troubleshooting, testing, and production deployment activities.",
"Collaborated with cross-functional teams to deliver high-quality software solutions within project timelines.",
"Optimized application performance, reducing response times and improving user experience.",
"Maintained source code repositories and version control using Git."
]
},
{
role: "Java Development Intern",
company: "CognoRise Info Tech",
duration: "Oct 2024 - Nov 2024",
location: "Remote Internship",
technologies: [
"Core Java",
"OOP",
"Collections",
"JDBC",
"MySQL",
"Git"
],
responsibilities: [
"Completed a 30-day technical internship in Java Development.",
"Worked on Core Java and Object-Oriented Programming concepts.",
"Developed applications using JDBC and MySQL.",
"Improved debugging and software testing skills.",
"Collaborated with team members on project assignments."
]
}
];

function Experience() {
return ( <section className="experience-section" id="experience"> <div className="experience-container">

    <div className="section-header">
      <span className="section-tag">Professional Journey</span>

      <h2 className="section-title">
        Work <span>Experience</span>
      </h2>

      <p className="section-subtitle">
        My professional journey spanning Software Development,
        Java Development, and Enterprise Network Engineering.
      </p>
    </div>

    <div className="timeline">
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index}>

          <div className="timeline-marker"></div>

          <div className="experience-card">

            <div className="experience-header">
              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>

              <div className="experience-duration">
                {exp.duration}
              </div>
            </div>

            <div className="experience-location">
              📍 {exp.location}
            </div>

            <div className="tech-stack">
              {exp.technologies.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>

            <ul className="responsibility-list">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>

);
}

export default Experience;
