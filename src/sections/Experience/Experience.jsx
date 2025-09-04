import React from "react";
import styles from "./ExperienceStyles.module.css";
import NISTLogo from "../../assets/NIST Logo.png";
import EvolveLogo from "../../assets/EvolveLogo.png";

function Experience() {
  const experiences = [
    {
      logo: EvolveLogo,
      logoAlt: "Evolve Logo",
      title: "Lead Engineer",
      company: "HealthTech Startup",
      date: "January 2025 - August 2025",
      isClickable: true,
      linkUrl: "https://github.com/Natanel-solomonov/Evolve-HealthTech-",
      bulletPoints: [
        "Built a gamified wellness platform by combining behavioral science with modern frameworks, helping users stay motivated to maintain healthy habits",
        "Designed and scaled backend architecture using Django and PostgreSQL, enabling efficient data modeling, user tracking, and API integration for an initial user base",
      ],
    },
    {
      logo: NISTLogo,
      logoAlt: "NIST Logo",
      title: "NIST SURF Software Development Intern",
      company: "",
      date: "May 2024 - August 2024",
      isClickable: false,
      linkUrl: "",
      bulletPoints: [
        "Conducted Multiple Verification and Validation tests of an Agent-Based Model using reward signal functions and Cobb-Douglas functions",
        "Boosted the efficiency of a Reinforcement Learning model by over 20% by designing multiple training functions within Julia to help better train agents and promote their decision-making within the model.",
        "Created graphical representations of agent behavior using matplotlib",
        "Increased the organization of the model by designing functions that read various training data into a JSON file",
      ],
    },
  ];

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.experienceContainer}>
          {exp.isClickable ? (
            <a href={exp.linkUrl} target="_blank" rel="noopener noreferrer">
              <img
                className={`${styles.experienceLogo} hover`}
                src={exp.logo}
                alt={exp.logoAlt}
              />
            </a>
          ) : (
            <img
              className={`${styles.experienceLogo} hover`}
              src={exp.logo}
              alt={exp.logoAlt}
            />
          )}
          <div className={styles.experienceDetails}>
            <h3>
              {exp.title}
              {exp.company && ` | ${exp.company}`}
            </h3>
            <p className={styles.date}>{exp.date}</p>
            <ul>
              {exp.bulletPoints.map((point, pointIndex) => (
                <li key={pointIndex} className={styles.bulletPoint}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
