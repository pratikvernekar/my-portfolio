import "./Contact.css";

const Contact = ({ darkMode, id }) => {
  return (
    <div id={id} className={`contact-container ${darkMode ? "dark" : "light"}`}>
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourname
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
