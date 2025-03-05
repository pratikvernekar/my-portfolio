import "./Projects.css";
import s1 from "../assets/a.jpeg";
import s2 from "../assets/a1.jpeg";
import s3 from "../assets/a3.jpeg";
import s4 from "../assets/a4.jpeg";
import s5 from "../assets/a5.jpeg";
import md from "../assets/md1.webm";
import playstore from "../assets/pd.png";
import appstore from "../assets/ad.png";
import React, { useState, useEffect } from "react";

const Projects = ({ darkMode, id }) => {
  const images = [s1, s2, s3, s4, s5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
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
      {/* Mobile Projects */}
      <div>
        <h2 className="category-title">Mobile Apps</h2>
        <div className="section-content">
          <div className="text">
            {/* <h2></h2> */}
            {/* {children} */}
            <p className="role">MDHEALTHTRAK</p>
            <p className="description">
              MDHealthTrak is a health management app designed to simplify
              elderly care. It enables users to track symptoms, schedule
              appointments, log medications, and monitor nutrition. With
              real-time health updates and reminders, it ensures better
              communication with healthcare providers and peace of mind for
              families.
            </p>

            <p className="description">
              • Built and optimized scalable mobile applications for iOS and
              Android using React Native.
            </p>
            <p className="description">
              • Developed UI components for features like appointment
              scheduling, graphical symptom tracking, and medication management.
            </p>
            <p className="description">
              • Implemented push notifications using OneSignal and Firebase for
              timely updates.
            </p>
          </div>
          <div>
            <img src={playstore} alt="Profile" className={`downloadIcon`} />
            <img src={appstore} alt="Profile" className={`downloadIcon`} />
          </div>

          <div className={`ss-container`}>
            <video autoPlay loop muted className="ss-image">
              <source src={md} type="video/webm" />
            </video>
          </div>
        </div>
        {/* <div className="project-list">
          {mobileProjects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div> */}
      </div>

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
    </div>
  );
};

export default Projects;
