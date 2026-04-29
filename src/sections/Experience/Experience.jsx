import React, { useState } from "react";
import styles from "./ExperienceStyles.module.css";
import NISTLogo from "../../assets/NIST Logo.png";
import ENGL393Abstract from "../../assets/ENGL393Abstract.pdf";

function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      logo: NISTLogo,
      logoAlt: "NIST Logo",
      title: "NIST SURF Software Development Intern",
      company: "",
      date: "May 2024 - August 2024",
      isClickable: true,
      linkUrl: ENGL393Abstract,
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
      <h1 className="sectionTitle">Experience Artifact</h1>
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
            <button
              type="button"
              className={styles.contextLink}
              onClick={() => setIsModalOpen(true)}
            >
              Click Here for Contextual Statement
            </button>
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
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className={styles.modalTitle}>NIST — Contextual Statement</h3>
            <p className={styles.modalPara}>
              During my internship at the{" "}
              <strong>National Institute of Standards and Technology (NIST)</strong>,
              I worked on high-level{" "}
              <strong>Reinforcement Learning (RL) research</strong>. This
              artifact is distinct from my personal projects as it focuses on{" "}
              <strong>optimization and data visualization</strong> within a
              scientific research context. I was tasked with writing complex{" "}
              <strong>training functions in Julia</strong> to improve agent
              decision-making and developing{" "}
              <strong>Matplotlib dashboards</strong> to translate raw data into
              visual insights for a team of over ten researchers.
            </p>
            <p className={styles.modalPara}>
              <strong>Critical Analysis —</strong> This experience reveals my
              capability to contribute to a{" "}
              <strong>professional, collaborative engineering environment</strong>.
              By achieving a <strong>20% increase in model efficiency</strong>,
              I demonstrated a high level of{" "}
              <strong>mathematical literacy</strong> and the ability to optimize
              code for performance-critical tasks.
            </p>
            <p className={styles.modalPara}>
              This experience later turned into a{" "}
              <strong>part-time role (20 hours a week)</strong> during the
              semester, in which I am on a different team but still with NIST.
              My current work with them involves{" "}
              <strong>training a tool to detect AI-generated images</strong> at
              an extremely high level.
            </p>
            <p className={styles.modalLinks}>
              <strong>Related links:</strong>{" "}
              <a
                href={ENGL393Abstract}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalTextLink}
              >
                Internship Abstract
              </a>
            </p>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
