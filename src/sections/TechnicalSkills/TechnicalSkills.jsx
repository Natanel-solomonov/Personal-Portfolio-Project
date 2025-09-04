import React from "react";
import styles from "./TechnicalSkillsStyles.module.css";

function TechnicalSkills() {
  return (
    <section id="technical-skills" className={styles.container}>
      <h2 className={styles.title}>Languages / Frameworks</h2>
      <div className={styles.iconsContainer}>
        {/* Languages */}
        <div className={styles.skillRow}>
          <img
            src="https://skillicons.dev/icons?i=java,python,javascript,typescript,html,css,julia,c,swift"
            alt="Programming Languages"
            className={styles.skillIcons}
          />
        </div>

        {/* Developer Tools */}
        <div className={styles.skillRow}>
          <img
            src="https://skillicons.dev/icons?i=postman,git,github,vscode,eclipse"
            alt="Developer Tools"
            className={styles.skillIcons}
          />
        </div>

        {/* Libraries/Frameworks */}
        <div className={styles.skillRow}>
          <img
            src="https://skillicons.dev/icons?i=nodejs,express,react,nextjs,mongodb,flutter,django,postgresql"
            alt="Libraries and Frameworks"
            className={styles.skillIcons}
          />
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
