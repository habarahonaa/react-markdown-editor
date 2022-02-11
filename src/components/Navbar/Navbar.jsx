import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <div>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faMarkdown} size="3x" />
              </a>
            </li>
          </div>
          <div className={styles.dropdown}>
            <label htmlFor="theme-select">Theme:</label>
            <select id="theme-select" onChange={props.themeChange}>
              <option defaultValue value="vs">
                VS Code Light (default)
              </option>
              <option value="vs-dark">VS Code Dark</option>
              <option value="hc-black">VS Code High Contrast</option>
            </select>
          </div>
          <div className={styles.nav__right}>
            <li>
              <a href="https://github.com/habarahonaa/react-markdown-editor">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faFileArrowDown} size="3x" />
              </a>
            </li>
          </div>

          <FontAwesomeIcon
            icon={faBars}
            className={styles.navToggle}
            size="3x"
          />
        </ul>
      </nav>
    </header>
  );
};
