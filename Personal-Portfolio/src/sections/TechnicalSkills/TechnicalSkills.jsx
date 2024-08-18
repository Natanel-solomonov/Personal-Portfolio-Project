import React from 'react'
import styles from './TechnicalSkillsStyles.module.css'

function TechnicalSkills() {
  return (
    <section id="technical-skills" className={styles.container}>
      <h2 className={styles.title}> Languages / Frameworks</h2>
      <div className={styles.iconsContainer}>
        <img src="https://skillicons.dev/icons?i=react,express,nodejs,html,css,java,python,github" alt="Skills Icons Row 1" className={styles.skillIcons}/>
        <img src="https://skillicons.dev/icons?i=javascript,vscode,eclipse,julia,mongodb" alt="Skills Icons Row 2" className={styles.skillIcons}/>
      </div>
    </section>
  )
}

export default TechnicalSkills
