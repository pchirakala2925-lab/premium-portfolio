import "./Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact() {

  return (

    <section className="contact" id="contact">

      {/* GLOW */}

      <div className="contact-glow"></div>

      <div className="contact-container">

        {/* LEFT */}

        <motion.div
          initial={{ opacity:0, x:-100 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="contact-left"
        >

          <h1>
            Get In Touch
          </h1>

          <div className="underline"></div>

          <p className="contact-desc">
            Currently open to internships,
            freelance projects and exciting
            collaborations. Let’s build
            something amazing together.
          </p>

          {/* LOCATION */}

          <div className="location">

            <FaMapMarkerAlt />

            <span>
              Hyderabad, India
            </span>

          </div>

          {/* CONTACT LINKS */}

          <div className="contact-links">

            {/* EMAIL */}

            <a
              href="mailto:pchirakala2925@gmail.com"
              className="contact-card"
            >

              <FaEnvelope />

              <span>
                pchirakala2925@gmail.com
              </span>

            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/pchirakala2925-lab"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <FaGithub />

              <span>
                github.com/pchirakala2925-lab
              </span>

            </a>

            {/* LINKEDIN */}

            <a
              href="https://linkedin.com/in/chirakala-pallavi"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <FaLinkedin />

              <span>
                linkedin.com/in/chirakala-pallavi
              </span>

            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity:0, x:100 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="contact-right"
        >

          <form>

            <label>
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
            />

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">

              Send Message

              <FaPaperPlane />

            </button>

          </form>

        </motion.div>

      </div>

    </section>

  );
}

export default Contact;