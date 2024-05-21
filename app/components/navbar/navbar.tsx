"use client";

import { useContext, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../contexts/theme";
import { projects, skills, contact } from "../../portfolio";
import "./Navbar.css";

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
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {Object.keys(skills).length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </button>

      {/* <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button> */}
    </nav>
  );
};

export default Navbar;
