import React from 'react';
import styles from './ProjectsStyles.module.css';
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project2.png';
import { useTheme } from '../../common/ThemeContext';

function Projects() {
  const { theme } = useTheme();
  const lightModeBorder = theme === 'light' ? styles.lightModeBorder : '';

  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/Natanel-solomonov/Fit-GPT-Project" target="_blank" rel="noopener noreferrer">
          <img className={`${styles.projectLogo} ${lightModeBorder}`} src={Project1} alt="Project 1 Logo" />
          <h3>Fit-GPT</h3>
          <p> AI Fitness Assistant App</p>
        </a>
       
        <a href="https://github.com/Natanel-solomonov/Nutritional-Web-Scraper" target="_blank" rel="noopener noreferrer">
          <img className={`${styles.projectLogo} ${lightModeBorder}`} src={Project2} alt="Project 2 Logo" />
          <h3>Nutritional Web Scraper</h3>
          <p>UMD Nutrition Web Scraper</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
