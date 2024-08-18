import React from 'react'
import styles from './ExperienceStyles.module.css'
import NISTLogo from '../../assets/NIST Logo.png'


function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceContainer}>
        <img className={`${styles.experienceLogo} hover`} src={NISTLogo} alt="NIST Logo" />
        <div className={styles.experienceDetails}>
          <h3>NIST SURF Software Development Intern</h3>
          <p className={styles.date}>May 2024 - August 2024</p>
          <ul>
            <li className={styles.bulletPoint}>
              Conducted Multiple Verification and Validation tests of an Agent-Based Model using reward signal functions and Cobb-Douglas functions
            </li>
            <li className={styles.bulletPoint}>
              Boosted the efficiency of a Reinforcement Learning model by over 20% by designing multiple training functions within Julia to help better train agents and promote their decision-making within the model.
            </li>
            <li className={styles.bulletPoint}>
              Created graphical representations of agent behavior using matplotlib
            </li>
            <li className={styles.bulletPoint}>
              Increased the organization of the model by designing functions that read various training data into a JSON file
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
