import "./Hero.css";

import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

function Hero() {

  return (

    <section className="hero" id="home">

      {/* BACKGROUND GLOW */}

      <div className="hero-overlay"></div>

      <div className="grid-lines"></div>

      {/* LIGHT DOTS */}

      <div className="light light1"></div>
      <div className="light light2"></div>
      <div className="light light3"></div>
      <div className="light light4"></div>
      <div className="light light5"></div>

      {/* CONTENT */}

      <motion.div
        initial={{ opacity:0, y:60 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="hero-content"
      >

        <p className="small-title">
          HELLO, WORLD! I'M
        </p>

        <h1>

          Chirakala <br />

          <span>
            Pallavi
          </span>

        </h1>

        <h2>

          <Typewriter
            words={[
              "UI/UX Explorer",
              "Full Stack Developer",
              "Creative Designer",
              "AI Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />

        </h2>

        {/* LOCATION */}

        <div className="hero-location">

          <FaMapMarkerAlt />

          <span>
            Hyderabad, India
          </span>

        </div>

        {/* DESC */}

        <p className="hero-desc">

          Building modern web applications with
          creativity and problem-solving.

          Passionate about crafting clean,
          scalable, and user-centric digital
          experiences.

        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-btn"
          >

            View Projects

            <FaArrowRight />

          </a>

          <a
            href="#contact"
            className="secondary-btn"
          >

            Contact Me

            <FaEnvelope />

          </a>

          {/* RESUME */}

          <a
            href="/resume.pdf"
            download
            className="resume-btn"
          >

            Resume

            <FaDownload />

          </a>

        </div>

        {/* SOCIALS */}

        <div className="hero-socials">

          <a
            href="https://github.com/pchirakala2925-lab"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/chirakala-pallavi"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:pchirakala2925@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

    </section>

  );
}

export default Hero;