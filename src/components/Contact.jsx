import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const Contact = ({ darkMode, id }) => {
  return (
    <div id={id} className={`contact-container ${darkMode ? "dark" : "light"}`}>
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-info">
        <p>
          <FaPhone className="contact-icon" />
          Phone: <a>+91 9535330160</a>
        </p>
        <p>
          <FaEnvelope className="contact-icon" />
          Email:{" "}
          <a href="mailto:vernekarpratik26.pv@gmail.com">
            vernekarpratik26.pv@gmail.com
          </a>
        </p>
        {/* <p>
          <FaGithub className="contact-icon" />
          GitHub:{" "}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            github.com/yourusername
          </a>
        </p>
        <p>
          <FaLinkedin className="contact-icon" />
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourname
          </a>
        </p> */}
        <p>
          <FaFileAlt className="contact-icon" />
          Resume:{" "}
          <a
            href="https://drive.google.com/file/d/1QuIVgRCOdJnUJmhDgE2RadACxlKKYQek/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
