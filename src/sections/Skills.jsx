import "./Skills.css";

function Skills() {

  const skills = [

    {
      title:"Frontend",

      items:[
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
      ],
    },

    {
      title:"Backend",

      items:[
        "Node.js",
        "Express.js",
      ],
    },

    {
      title:"Database",

      items:[
        "MongoDB",
        "MySQL",
      ],
    },

    {
      title:"Programming",

      items:[
        "Java",
        "C",
      ],
    },

    {
      title:"Tools",

      items:[
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Power BI",
      ],
    },

    {
      title:"Other",

      items:[
        "Data Structures",
        "Prompt Engineering",
      ],
    },

  ];

  return (

    <section
      className="skills"
      id="skills"
    >

      <h1>
        Skills
      </h1>

      <div className="skills-line"></div>

      <p className="skills-desc">

        A broad and growing toolkit —
        from crafting pixel-perfect UIs
        to scalable backend systems and
        AI-driven experiences.

      </p>

      <div className="skills-grid">

        {skills.map((skill,index)=>(

          <div
            className="skill-card"
            key={index}
          >

            <h2>
              {skill.title}
            </h2>

            <div className="skill-tags">

              {skill.items.map((item,i)=>(

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;