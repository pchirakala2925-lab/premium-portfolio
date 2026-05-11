import "./BeyondCode.css";

import {
  FaLeaf,
  FaFemale,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

function BeyondCode() {

  return (

    <section
      className="beyond"
      id="beyond"
    >

      <h1>
        Beyond Code
      </h1>

      <div className="underline"></div>

      <p className="beyond-desc">

        Leadership, creativity and community
        involvement that shaped my journey
        beyond academics and development.

      </p>

      <div className="beyond-grid">

        {/* ECO CLUB */}

        <div className="beyond-card">

          <FaLeaf />

          <h3 className="club-name">
            Eco Club
          </h3>

          <h2 className="role-title">
            Marketing Coordinator
          </h2>

          <p>
            Led marketing campaigns and outreach
            initiatives for the college Eco Club,
            promoting environmental awareness
            and sustainability events across campus.
          </p>

        </div>

        {/* WOMEN CELL */}

        <div className="beyond-card">

          <FaFemale />

          <h3 className="club-name">
            Women Empowerment Protection Cell
          </h3>

          <h2 className="role-title">
            Designing Coordinator
          </h2>

          <p>
            Created posters, visual content and
            digital designs for awareness programs,
            college events and women empowerment
            initiatives.
          </p>

        </div>

        {/* DATAVEDHI */}

        <div className="beyond-card">

          <FaLaptopCode />

          <h3 className="club-name">
            DataVedhi Club
          </h3>

          <h2 className="role-title">
            Coordinator
          </h2>

          <p>
            Coordinated technical and coding-related
            activities, participated in problem-solving
            sessions and solved programming
            challenges to strengthen analytical skills.
          </p>

        </div>

        {/* CSI */}

        <div className="beyond-card">

          <FaUsers />

          <h3 className="club-name">
            Computer Society of India (CSI)
          </h3>

          <h2 className="role-title">
            Member
          </h2>

          <p>
            Contributed to organizing hackathons,
            workshops and technical events while
            collaborating with teams for student
            engagement and event coordination.
          </p>

        </div>

      </div>

    </section>

  );
}

export default BeyondCode;