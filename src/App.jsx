import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <Header
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />

      <Section id="about" title="About Me" darkMode={darkMode}></Section>

      <Projects id="projects" darkMode={darkMode} />
      <Skills id="skills" darkMode={darkMode} />
      <Contact id="contact" darkMode={darkMode}/>
    </div>
  );
};

export default App;
