import "./Section.css";
import profilePic from "../assets/profile.jpeg"; // Import image

const Section = ({ id, title, children, darkMode }) => {
  return (
    <section id={id} className={`section ${darkMode ? "dark" : "light"}`}>
      <div className="section-content">
        <div className="text">
          <h2>{title}</h2>
          {children}
          <p className="role">Frontend Developer | React & React Native</p>
          <p className="description">
            I specialize in building high-performance, visually appealing, and
            scalable web & mobile applications. Passionate about writing clean,
            reusable code and constantly learning new technologies.
          </p>
        </div>

        <div className={`image-container`}>
          <img
            src={profilePic}
            alt="Profile"
            className={`profile-image ${darkMode ? "darkBorder" : "lightBorder"}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
