import { useState, useEffect } from "react";
import styles from "./Star.module.css";
import neutronMist from "../../assets/NeutronMist.png";
import neutronStar from "../../assets/NeutronStar.png";
import { createPortal } from "react-dom";

function AboutInfo() {
  return (
    <div className={styles.sectionInfo} id="about">
      <h2>About</h2>
      <p>
        Hi, I'm Gogo! I'm a software engineer student at the University of
        Waterloo, but I'm also a creative person who loves to make things. My
        mind loves to wander endlessly, and I'm always looking for new
        opportunities to learn and grow.
        <br />
        <br />
        A bit about me: I have many many interests. Below are just a few of
        them, in no particular order:
        <br />
        - Basketball: I used to play basketball for my high school JV team, and
        I'm a huge fan of the Dallas Mavericks (and obviously Luka).
        <br />
        - Music: I once played the piano and violin competitively, but since
        coming to University have settled on playing casually. I love listening
        specifically to music without lyrics, including movie tracks, game
        audio, and classical music.
        <br />
        - Art: I love to draw sketches, and recently I've been getting into
        digital art. I've also very recently started photography, and I've been
        trying to take more photos of the world around me.
        <br />
        - Programming: As evident of being a software engineering student, I
        absolutely love programming; it has been a passion of mine for a long
        time, and I almost see it as if it's like magic.
        <br />
        <br />
        <br />
        This website is a collection of my projects and creative work, please
        take a look around!
      </p>
    </div>
  );
}

function Star() {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        setShowInfo(true);
      } else {
        setShowInfo(false);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleStarClick = () => {
    setShowInfo(!showInfo);
    if (!showInfo) {
      window.location.hash = "about";
    } else {
      window.location.hash = "";
    }
  };

  const renderStarInfo = () => {
    return createPortal(
      <div className={styles.starInfoOverlay}>
        <div className={styles.starInfo}>
          <AboutInfo />
          <button
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(false);
              window.location.hash = "";
            }}
          >
            ×
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className={styles.star} onClick={handleStarClick}>
      {/* Aura */}
      <div className={styles.aura}>
        <img
          src={neutronMist}
          alt="Neutron Star Aura"
          className={styles.auraImage}
        />
        <img
          src={neutronMist}
          alt="Neutron Star Aura Overlay"
          className={styles.auraImage}
        />
      </div>
      {/* Star */}
      <div className={styles.starContainer}>
        <img
          src={neutronStar}
          alt="Neutron Star Base"
          className={styles.starImage}
        />
        <img
          src={neutronStar}
          alt="Neutron Star Overlay"
          className={styles.starImage}
        />
      </div>
      {showInfo && renderStarInfo()}
    </div>
  );
}

export default Star;
