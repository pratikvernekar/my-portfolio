import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiTypescript, SiReact } from "react-icons/si";
import "./Skills.css";

const Skills = ({ darkMode, id }) => {
  const skills = [
    { name: "React", icon: <FaReact />, link: "https://react.dev/" },
    {
      name: "React Native",
      icon: <SiReact />,
      link: "https://reactnative.dev/",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      link: "https://www.typescriptlang.org/",
    },
    { name: "Redux", icon: <TbBrandRedux />, link: "https://redux.js.org/" },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { name: "Git", icon: <FaGitAlt />, link: "https://git-scm.com/doc" },
  ];

  return (
    <section
      id={id}
      className={`skills-container ${darkMode ? "dark" : "light"}`}
    >
      <h2 className="skills-title">Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="skill"
          >
            {skill.icon}
            <span className={`${!darkMode ? "darkText" : "lightText"}`}>
              {skill.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
