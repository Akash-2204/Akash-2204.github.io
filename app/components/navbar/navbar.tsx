"use client";

import { useContext, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../contexts/theme";
import { projects, skills, contact } from "../../portfolio";
import "./navbar.css";

const Navbar: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is undefined");
  }

  const { themeName, toggleTheme } = themeContext;
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : undefined }}
        className="nav__list"
      >
        {projects.length > 0 && (
          <ul className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </ul>
        )}

        {Object.keys(skills).length > 0 && (
          <ul className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </ul>
        )}

        {contact.email && (
          <ul className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </ul>
        )}
      </ul>

        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
        >
          {themeName === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
    </nav>
  );
};

export default Navbar;
