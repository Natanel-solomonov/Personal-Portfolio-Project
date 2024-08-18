import styles from './HeroStyles.module.css'
import headshot from '../../assets/Headshot.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import Resume from '../../assets/Resume.pdf' //replace with actual resume later

import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero}
                    src={headshot}
                    alt="Profile Picture of Natanel Solomonov"
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt='Color mode icon'
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>Natanel
                    <br />
                    Solomonov
                </h1>
                <h2>Computer Science Student @ UMD College Park  <br/> & Software Engineer</h2>
                <span>
                    <a href="https://github.com/Natanel-solomonov" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/natanel-solomonov-13a606239/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinIcon} alt="LinkedIn Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    With a passion for Web development,
                    AI, and all things Software Engineering
                </p>
                <a href={Resume} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero
