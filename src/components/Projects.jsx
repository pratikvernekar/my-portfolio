import "./Projects.css";

const Projects = ({ darkMode, id }) => {
  const webProjects = [
    {
      title: "Web Project 1",
      description: "A web project description.",
      link: "#",
    },
    { title: "Web Project 2", description: "Another web project.", link: "#" },
  ];

  const mobileProjects = [
    { title: "Mobile App 1", description: "A mobile app project.", link: "#" },
    { title: "Mobile App 2", description: "Another mobile app.", link: "#" },
  ];

  return (
    <div
      id={id}
      className={`projects-container ${darkMode ? "dark" : "light"}`}
    >
      {/* Web Projects */}
      <div>
        <h2 className="category-title">Web Apps</h2>
        <div className="project-list">
          {webProjects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Projects */}
      <div>
        <h2 className="category-title">Mobile Apps</h2>
        <div className="project-list">
          {mobileProjects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
