import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import styles from "./MobileModal.module.css";

export const MobileModal = () => {
  return (
    <main className={styles.mobileModal}>
      <FontAwesomeIcon
        className={styles.danger}
        icon={faTriangleExclamation}
        size="5x"
      />
      <h3>This application will not render on mobile devices</h3>
      <p>
        The app’s layout is meant for Desktop devices so it will not be rendered
        on smaller screens
      </p>
    </main>
  );
};
