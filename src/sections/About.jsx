import "./About.css";

import profile from "../assets/pallavii.png";

import {
  FaCode,
  FaBrain,
  FaLayerGroup,
  FaMagic,
} from "react-icons/fa";

function About() {

  return (

    <section
      className="about"
      id="about"
    >

      <h1>
        About Me
      </h1>

      <div className="underline"></div>

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          {/* IMAGE */}

          <div className="profile-box">

            <img
              src={profile}
              alt="Pallavi"
              className="profile-img"
            />

          </div>

          {/* CARDS */}

          <div className="about-cards">

            <div className="mini-card">

              <FaLayerGroup />

              <h2>
                2+
              </h2>

              <p>
                Projects Built
              </p>

            </div>

            <div className="mini-card">

              <FaBrain />

              <h2>
                15+
              </h2>

              <p>
                Technologies
              </p>

            </div>

            <div className="mini-card">

              <FaCode />

              <h2>
                Dev
              </h2>

              <p>
                Full Stack
              </p>

            </div>

            <div className="mini-card">

              <FaMagic />

              <h2>
                AI
              </h2>

              <p>
                AI Enthusiast
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <h2>

            Hi! I'm

            <span>
              Chirakala Pallavi
            </span>

          </h2>

          <p>

            An aspiring Full Stack Developer with a
            passion for building modern, functional
            and beautiful web applications.

          </p>

          <p>

            I love turning ideas into reality through
            code — from intuitive user interfaces
            to scalable backend systems.

          </p>

          <ul>

            <li>
              Hands-on experience in React,
              Node.js & MongoDB
            </li>

            <li>
              Built Smart Health Queue project
            </li>

            <li>
              Strong foundation in Java,
              DBMS & DSA
            </li>

            <li>
              Exploring AI tools and
              Prompt Engineering
            </li>

          </ul>

          <a href="#contact">

            Let's work together →

          </a>

        </div>

      </div>

    </section>

  );
}

export default About;