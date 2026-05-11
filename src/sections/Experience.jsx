import "./Experience.css";

import {
  FaLaptopCode,
  FaStar,
  FaBriefcase,
} from "react-icons/fa";

function Experience() {

  return (

    <section className="experience" id="experience">

      <h1>
        Experience
      </h1>

      <div className="underline"></div>

      <div className="timeline">

        {/* ITEM 1 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaLaptopCode />
          </div>

          <div className="timeline-content">

            <div className="timeline-top">

              <div>

                <h2>
                  Full Stack Developer Intern
                </h2>

                <h3>
                  Yugayatra Retail Pvt Limited
                </h3>

              </div>

              <span>
                2026 - Present
              </span>

            </div>

            <p>
              Worked on responsive frontend UI,
              dashboard layouts and modern web
              experiences using React.
            </p>

            <div className="tags">

              <span>React</span>

              <span>Frontend</span>

              <span>UI/UX</span>

            </div>

          </div>

        </div>

        {/* ITEM 2 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaStar />
          </div>

          <div className="timeline-content">

            <div className="timeline-top">

              <div>

                <h2>
                  AI Data Contributor
                </h2>

                <h3>
                  Freelance / Remote
                </h3>

              </div>

              <span>
                
              </span>

            </div>

            <p>
              Worked on AI training data,
              prompt engineering and conversational
              AI improvements.
            </p>

            <div className="tags">

              <span>AI Training</span>

              <span>Prompt Engineering</span>

              <span>Data Quality</span>

            </div>

          </div>

        </div>

        {/* ITEM 3 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <div className="timeline-content">

            <div className="timeline-top">

              <div>

                <h2>
                  Full Stack Developer
                </h2>

                <h3>
                  Personal Projects
                </h3>

              </div>

              <span>
                2025
              </span>

            </div>

            <p>
              Built full-stack projects using
              React, Node.js, Express and MongoDB.
            </p>

            <div className="tags">

              <span>React</span>

              <span>Node.js</span>

              <span>MongoDB</span>

              <span>Express</span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Experience;