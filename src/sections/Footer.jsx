import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      {/* GLOW */}

      <div className="footer-glow"></div>

      {/* TOP */}

      <div className="footer-top">

        <h1>
          Chirakala Pallavi
        </h1>

        <p>
          Building futuristic web experiences with
          creativity, code and innovation.
        </p>

      </div>

      {/* GITHUB STATS */}

      <div className="github-stats">

        <div className="stat-card">

          <h2>
            15+
          </h2>

          <span>
            Projects
          </span>

        </div>

        <div className="stat-card">

          <h2>
            10+
          </h2>

          <span>
            Certifications
          </span>

        </div>

        <div className="stat-card">

          <h2>
            300+
          </h2>

          <span>
            GitHub Contributions
          </span>

        </div>

      </div>

      {/* SOCIALS */}

      <div className="footer-socials">

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
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          Made with <FaHeart className="heart" /> by
          Chirakala Pallavi
        </p>

      </div>

    </footer>

  );
}

export default Footer;