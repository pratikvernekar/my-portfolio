import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Moon, Sun, Menu, X } from "lucide-react"; // Icons
import "./Header.css";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className={`header ${isVisible ? "vidsible" : "hiddsen"}`}>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <X size={26} color="#007bff" />
        ) : (
          <Menu size={26} color="#007bff" />
        )}
      </button>
      <div className={`header-right ${menuOpen ? "menu-open" : ""}`}>
        <nav>
          <ul className="nav-links">
            {["about", "projects", "skills", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className={`nav-item box-border ${
                    !darkMode ? "dark-mode" : "light-mode"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? (
            <Sun size={20} color="white" />
          ) : (
            <Moon size={20} color="black" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
