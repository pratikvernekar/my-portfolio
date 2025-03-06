import "./Projects.css";
import s1 from "../assets/a.jpeg";
import s2 from "../assets/a1.jpeg";
import s3 from "../assets/a3.jpeg";
import s4 from "../assets/a4.jpeg";
import s5 from "../assets/a5.jpeg";
import md from "../assets/md1.webm";
import playstore from "../assets/pd1.png";
import appstore from "../assets/ad1.png";
import React, { useState, useEffect } from "react";

const Projects = ({ darkMode, id }) => {
  const descriptions = [
    "Built and optimized scalable mobile applications for iOS and Android using React Native.",
    "Developed UI components for features like appointment scheduling, graphical symptom tracking, and medication management.",
    "Implemented push notifications using OneSignal and Firebase for timely updates.",
    "Worked on the implementation of Google Maps services, integrating geolocation and geocoding features.",
  ];

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
            <p
              className="description"
              style={{ fontWeight: "bold", fontSize: "1.3rem" }}
            >
              MDHEALTHTRAK
            </p>

            <p className="description">
              MDHealthTrak is a health management app designed to simplify
              elderly care. It enables users to track symptoms, schedule
              appointments, log medications, and monitor nutrition. With
              real-time health updates and reminders, it ensures better
              communication with healthcare providers and peace of mind for
              families.
            </p>

            {descriptions.map((item, index) => (
              <p key={index} className="description">
                • {item}
              </p>
            ))}
          </div>
          <div className="downLoad-container">
            <a
              href="https://play.google.com/store/apps/details?id=com.liveayurprana.prod&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playstore}
                alt="Google Play Store"
                className="downloadIcon"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/ayurprana/id6469480400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appstore}
                alt="Apple App Store"
                className="downloadIcon1"
              />
            </a>
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
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Projects;
