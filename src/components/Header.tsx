import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      if (window.location.hash === href) {
        window.location.hash = "";
      } else {
        window.location.hash = href.substring(1);
        const mapElement = document.getElementById("map");
        if (mapElement) {
          mapElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      if (window.location.hash === href) {
        window.location.hash = "";
      } else {
        window.location.hash = href.substring(1);
        const mapElement = document.getElementById("home");
        if (mapElement) {
          mapElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      window.location.hash = href.substring(1);
      const mapElement = document.getElementById("webboard");
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={styles.header}>
      <h1>
        <a href="#home" onClick={scrollToHome}>
          Gogo
        </a>
      </h1>
      <div className={styles.nav}>
        <a className={styles.navLink} href="#map" onClick={handleNavClick}>
          Map
        </a>
        <a className={styles.navLink} href="#about" onClick={handleNavClick}>
          About
        </a>
        <a className={styles.navLink} href="#projects" onClick={handleNavClick}>
          Projects
        </a>
        <a className={styles.navLink} href="#world" onClick={handleNavClick}>
          World
        </a>
        <a className={styles.navLink} href="#creative" onClick={handleNavClick}>
          Creative
        </a>
        <a
          className={styles.navLink}
          href="#WebBoard"
          onClick={scrollToContact}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
