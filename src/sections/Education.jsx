import "./Education.css";

import {
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

function Education() {

  return (

    <section className="education" id="education">

      <h1>
        Education
      </h1>

      <div className="underline"></div>

      <div className="education-list">

        <div className="edu-card">

          <div className="edu-left">

            <div className="edu-icon purple">
              <FaGraduationCap />
            </div>

            <div>

              <h2>
                B.Tech — Computer Science & Engineering
              </h2>

              <h3>
                Vignana Bharathi Institute of Technology
              </h3>

              <p>
                Hyderabad, India
              </p>

            </div>

          </div>

          <div className="edu-right">

            <h4>
              CGPA: 8.31
            </h4>

            <span>
              2024 - Present
            </span>

          </div>

        </div>

        <div className="edu-card">

          <div className="edu-left">

            <div className="edu-icon gray">
              <FaAward />
            </div>

            <div>

              <h2>
                Intermediate — MPC
              </h2>

              <h3>
                Sri Chaitanya Junior College
              </h3>

              <p>
                Hyderabad, India
              </p>

            </div>

          </div>

          <div className="edu-right">

            <h4>
              89.3%
            </h4>

          </div>

        </div>

        <div className="edu-card">

          <div className="edu-left">

            <div className="edu-icon gray">
              <FaAward />
            </div>

            <div>

              <h2>
                SSC — Secondary School
              </h2>

              <h3>
                Dr. K.K.R Gowtham Concept School
              </h3>

              <p>
                India
              </p>

            </div>

          </div>

          <div className="edu-right">

            <h4>
              10/10 GPA
            </h4>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Education;