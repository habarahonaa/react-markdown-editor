import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        {`© ${new Date().getFullYear()} `}
        <a href="https://github.com/habarahonaa">habarahonaa.</a> All rights
        reserved | Powered by Monaco Editor & Marked-React
      </p>
    </footer>
  );
};
