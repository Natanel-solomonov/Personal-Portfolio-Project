import styles from "./HeroStyles.module.css";
import headshot from "../../assets/Headshot.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import Resume from "../../assets/Resume.pdf"; //replace with actual resume later

import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const LinkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

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
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Natanel
          <br />
          Solomonov
        </h1>
        <h2>
          Computer Science Student @ UMD College Park <br /> & Software Engineer
        </h2>
        <span>
          <a
            href="https://github.com/Natanel-solomonov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/natanel-solomonov-13a606239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <div className={styles.description}>
          <p>
            Welcome! I’m a Software Engineer focused on building tools that
            bridge the gap between complex code and everyday utility. This
            portfolio serves as a curated look at my work, ranging from
            full-stack applications to performance optimization in research
            settings. My goal is to show not just the final product, but the
            logic and problem-solving that went into my work.
          </p>
          <p>
            To explore my work, head over to the Projects section, where you'll
            find Versa and Fit-GPT; each includes a detailed contextual
            statement and embedded links so you can see the live code and demos
            for yourself. For a look at my professional background and my work
            in reinforcement learning, you can find the NIST internship details
            under the Experience tab. Thanks for stopping by, and feel free to
            reach out if you’d like to chat about any of these pieces.
          </p>
        </div>

        <div className={styles.ctaRow}>
          <a href={Resume} download>
            <button className="hover">Resume</button>
          </a>
          <a
            href="https://youtu.be/B2aWlPOKveo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover">Video Intro</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
