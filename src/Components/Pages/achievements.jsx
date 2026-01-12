import React from "react";
import "../css/achievements.css";

const Achievements = () => {
  const achievementsData = [
    {
      title: "MERN Stack Certificate",
      platform: "Sharda University",
      date: "2025",
      link: "#", // replace with actual certificate link if available
      image: "src/assets/education/mern.png",
    },
    {
      title: "Generative AI Certificate",
      platform: "LinkedIn Learning",
      date: "2025",
      link: "#", // replace with actual certificate link
      image: "src/assets/education/generativeAI.png",
    },
        {
      title: "Java Developer Intern Certificate",
      platform: "CognoRise Infotech",
      date: "2024",
      link: "#", // replace with actual certificate link
      image: "src/assets/java.png",
    },
  ];

  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-container">
        {achievementsData.map((ach, index) => (
          <div key={index} className="achievement-card">
            <img src={ach.image} alt={ach.title} />
            <div className="achievement-content">
              <h3>{ach.title}</h3>
              <p>{ach.platform}</p>
              <span>{ach.date}</span>
              <a
                href={ach.link}
                target="_blank"
                rel="noreferrer"
                className="view-button"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
