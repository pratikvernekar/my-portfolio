import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Moon, Sun } from "lucide-react"; // Icons
import "./Header.css";
import img from "../assets/profile.jpeg";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(prevScrollY > currentScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <header
      className={`header ${darkMode ? "dark" : "light"} ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <div className="header-left">
        <img src={img} alt="Profile" className="profileImg" />
        <h1 className="logo">Pratik Vernekar</h1>
      </div>
      <div className="header-right">
        <nav>
          <ul className="nav-links">
            {["about", "projects", "skills", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="nav-item"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
