import React, { useState } from "react";
import styles from "./ProjectsStyles.module.css";
import Project1 from "../../assets/Project1.png";
import VersaLogo from "../../assets/VersaLogo_navy.png";
import { useTheme } from "../../common/ThemeContext";

function Projects() {
  const [modalProject, setModalProject] = useState("");
  const { theme } = useTheme();
  const lightModeBorder = theme === "light" ? styles.lightModeBorder : "";
  const modalContent = {
    "Fit-GPT": {
      body: (
        <>
          <p className={styles.modalPara}>
            <strong>Fit-GPT</strong> is a full-stack{" "}
            <strong>(MERN) application</strong> that integrates{" "}
            <strong>artificial intelligence</strong> into personal health
            management. I created this project back in my freshman year to
            explore how generative AI can be distilled into a practical,
            user-facing tool. The application allows users to generate{" "}
            <strong>personalized workout plans</strong> and receive{" "}
            <strong>video-guided responses</strong> to fitness queries. By
            utilizing <strong>MongoDB, Express, React, and Node.js</strong>, I
            built a seamless flow where AI-generated content is stored
            persistently and served securely to authenticated users.
          </p>
          <p className={styles.modalPara}>
            <strong>Critical Analysis —</strong> This artifact showcases my
            proficiency in <strong>asynchronous programming</strong> and{" "}
            <strong>third-party API integration</strong>. The core of this
            project's success was the implementation of{" "}
            <strong>JWT (JSON Web Tokens)</strong>, which reveals my commitment
            to data privacy and session security. Furthermore, my work with{" "}
            <strong>MongoDB</strong> demonstrates an ability to handle
            non-relational data structures effectively, ensuring that complex
            user workout histories are preserved across sessions. Fit-GPT
            highlights my identity as a developer who stays at the forefront of
            emerging technologies, merging{" "}
            <strong>AI integration with traditional full-stack reliability</strong>.
          </p>
        </>
      ),
      primaryLabel: "Fit-GPT Repository",
      primaryUrl: "https://github.com/Natanel-solomonov/Fit-GPT-Project",
      secondaryLabel: "Live Demo",
      secondaryUrl: "https://www.youtube.com/watch?v=Hu6NTbkKQzs&t=128s",
    },
    Versa: {
      body: (
        <>
          <p className={styles.modalPara}>
            <strong>Versa</strong> is a niche{" "}
            <strong>e-commerce platform</strong> designed exclusively for the
            university ecosystem. I developed this project to solve the trust
            issues inherent in general marketplaces like Facebook or Craigslist
            by restricting access to users with{" "}
            <strong>verified .edu email addresses</strong>. Acting as a{" "}
            <strong>full-stack developer</strong>, I engineered the backend
            using <strong>Django and PostgreSQL</strong> and built the mobile
            experience with <strong>React Native</strong>. This artifact
            represents a move from conceptual coding to{" "}
            <strong>product-market fit</strong>, as evidenced by over{" "}
            <strong>300 downloads and 50 active users</strong>.
          </p>
          <p className={styles.modalPara}>
            This project reveals my ability to architect{" "}
            <strong>secure, scalable systems</strong> that handle sensitive user
            data. By implementing{" "}
            <strong>custom authentication logic</strong> for educational domains,
            I demonstrated a deep understanding of{" "}
            <strong>API security and relational database management</strong>.
            Beyond technical execution, Versa highlights my{" "}
            <strong>product mindset and entrepreneurial drive</strong>; I didn't
            just write code, I identified a community need and built a system to
            validate that need.
          </p>
        </>
      ),
      primaryLabel: "Versa Website",
      primaryUrl: "https://versa-shop.com/",
      secondaryLabel: "App Store Listing",
      secondaryUrl:
        "https://apps.apple.com/us/app/versa-marketplace/id6754182239",
    },
  };

  const activeContent = modalContent[modalProject];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className="sectionTitle">Project Artifacts</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <a
            href="https://github.com/Natanel-solomonov/Fit-GPT-Project"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
          >
            <img
              className={`${styles.projectLogo} ${lightModeBorder}`}
              src={Project1}
              alt="Fit-GPT Logo"
            />
          </a>
          <h3 className={styles.projectTitle}>Fit-GPT</h3>
          <button
            type="button"
            className={styles.contextLink}
            onClick={() => setModalProject("Fit-GPT")}
          >
            Contextual Statement
          </button>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://versa-shop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
          >
            <img
              className={`${styles.projectLogo} ${lightModeBorder}`}
              src={VersaLogo}
              alt="Versa Logo"
            />
          </a>
          <h3 className={styles.projectTitle}>Versa</h3>
          <button
            type="button"
            className={styles.contextLink}
            onClick={() => setModalProject("Versa")}
          >
            Contextual Statement
          </button>
        </div>
      </div>
      {modalProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalProject("")}
        >
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className={styles.modalTitle}>{modalProject} — Contextual Statement</h3>
            {activeContent.body}
            <p className={styles.modalLinks}>
              <strong>Related links:</strong>{" "}
              <a
                href={activeContent.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalTextLink}
              >
                {activeContent.primaryLabel}
              </a>
              {" | "}
              <a
                href={activeContent.secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalTextLink}
              >
                {activeContent.secondaryLabel}
              </a>
            </p>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setModalProject("")}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
