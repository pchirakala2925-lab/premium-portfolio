import "./Projects.css";

import { motion } from "framer-motion";

function Projects() {

  const projects = [

    {
      title: "Smart Health Queue",

      desc:
        "A modern hospital queue management system with patient token tracking, notifications and real-time admin dashboard.",

      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
      ],

      github:
        "https://github.com/pchirakala2925-lab",

      live:
        "https://your-live-demo-link.com",
    },

    {
      title: "University Management System",

      desc:
        "Java based university system for managing students, departments, faculty and academic workflows.",

      tech: [
        "Java",
        "OOP",
        "DBMS",
        "DSA",
      ],

      github:
        "https://github.com/pchirakala2925-lab",

      live:
        "https://your-live-demo-link.com",
    },

  ];

  return (

    <section
      className="projects"
      id="projects"
    >

      <motion.div
        initial={{ opacity:0, y:60 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >

        <h1 className="projects-title">
          Featured Projects
        </h1>

        <div className="projects-line"></div>

        <p className="projects-desc">
          Premium full-stack applications and modern
          development projects showcasing UI/UX,
          backend architecture and problem solving.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              whileHover={{ y:-12 }}
              key={index}
              className="project-card"
            >

              <div className="project-glow"></div>

              <h2>
                {project.title}
              </h2>

              <p>
                {project.desc}
              </p>

              <div className="project-tech">

                {project.tech.map((item, i) => (

                  <span key={i}>
                    {item}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                {/* GITHUB */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button className="github-btn">
                    GitHub
                  </button>

                </a>

                {/* LIVE DEMO */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button className="live-btn">
                    Live Demo
                  </button>

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>

  );
}

export default Projects;