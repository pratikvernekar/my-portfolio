import "./Skills.css";

const Skills = ({ darkMode, id }) => {
  const skills = [
    "React",
    "React Native",
    "TypeScript",
    "CSS",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div id={id} className={`skills-container ${darkMode ? "dark" : "light"}`}>
      <h2 className="skills-title">Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
