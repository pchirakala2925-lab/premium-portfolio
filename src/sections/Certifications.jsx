import "./Certifications.css";

import {
  FaCheckCircle,
  FaTrophy,
  FaBolt,
} from "react-icons/fa";

function Certifications() {

  return (
    <section className="certifications" id="certifications">

      <h1>
        Certifications
      </h1>

      <div className="underline"></div>

      <div className="cert-grid">

        {/* CARD 1 */}

        <div className="cert-card">

          <div className="cert-icon blue">
            <FaCheckCircle />
          </div>

          <span className="badge blue-badge">
            Certification
          </span>

          <h2>
            Programming Essentials in C
          </h2>

          <p>
            Cisco
          </p>

        </div>

        {/* CARD 2 */}

        <div className="cert-card">

          <div className="cert-icon yellow">
            <FaCheckCircle />
          </div>

          <span className="badge yellow-badge">
            Certification
          </span>

          <h2>
            Programming Essentials in Python
          </h2>

          <p>
            Cisco
          </p>

        </div>

        {/* CARD 3 */}

        <div className="cert-card">

          <div className="cert-icon orange">
            <FaTrophy />
          </div>

          <span className="badge orange-badge">
            Participant
          </span>

          <h2>
            Smart India Hackathon
          </h2>

          <p>
            Government of India
          </p>

        </div>

        {/* CARD 4 */}

        <div className="cert-card">

          <div className="cert-icon purple">
            <FaBolt />
          </div>

          <span className="badge purple-badge">
            Participant
          </span>

          <h2>
            Code Sprint Hackathon
          </h2>

          <p>
            VBIT
          </p>

        </div>

      </div>

    </section>
  );
}

export default Certifications;