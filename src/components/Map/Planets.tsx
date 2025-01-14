import { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Planets.module.css";
import Ceres from "../../assets/Ceres.png";
import Eris from "../../assets/Eris.png";
import Haumea from "../../assets/Haumea.png";
import Makemake from "../../assets/Makemake.png";

function ProjectsInfo() {
  return (
    <div className={styles.sectionInfo} id="projects">
      <h2>Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.projectItem}>
          <h3>Automatic Hand-Tracking Robot Arm</h3>
          <p>
            Myself and a team of 4 other students built a robot arm that can
            track the position of a human hand and move to that position. We
            used OpenCV and Mediapipe models to capture hand movements, then
            simulate the hand positions onto a 3D graph in MatPlotLib.
            <br />
            <br />
            Checkout the video project{" "}
            <a href="https://www.youtube.com/watch?v=fg-T3luJGmg">here</a>.
          </p>
        </div>
        <div className={styles.projectItem}>
          <h3>Chess Engine</h3>
          <p>
            I built a chess engine in c++ using the Minimax algorithm. It can
            play against a human player, and it can also play against itself; it
            has roughly 1000 ELO on{" "}
            <b>
              <a href="https://www.chess.com">chess.com</a>
            </b>
          </p>
        </div>
        <div className={styles.projectItem}>
          <h3>React Website</h3>
          <p>
            This website is my first react project, and was used to help me
            better understand react and front-end development. It is built with
            React, and it is hosted on Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}

function CreativeInfo() {
  return (
    <div className={styles.sectionInfo} id="creative">
      <h2>Creative</h2>
      <p>
        This section is currently empty until I am ready to add content ;-;.
      </p>
      <div className={styles.creativeContainer}></div>
    </div>
  );
}

function WorldInfo() {
  return (
    <div className={styles.sectionInfo} id="world">
      <h2>World</h2>
      <div className={styles.worldInfo}>
        <p>
          Growing up, I had many sources of inspiration from content and media
          such as books, movies, youtube, etc. Below are some of my favorite
          pieces of media:
          <br />
          <br />- Movies: I'm not the biggest fan of movies, but I do enjoy a
          good film with a deep story. My all-time favorite movies is the
          animated film <b>Suzume no Tojimari</b>; it has stellar animation, a
          very thought provoking story, and a lovely atmosphere. As for
          non-animated films, I'm a huge fan of the <b>Matrix</b> series and{" "}
          <b>Interstellar</b>.
          <br />
          <br />- Music: I love listening to all kinds of music, but I'm
          particularly fond of non-lyrical music. My current favourite song is:{" "}
          <b>
            <a href="https://youtu.be/MJDn70jh1V0?si=rgsd0EVKHr6Y4U_Z">
              "City of Tears"
            </a>
          </b>{" "}
          from the Hollow Knight OST, although it does change often.
          <br />
          <br />- Books: I used to read soooo many books, but now I'm not as
          active. My favourite book is the <b>Alchemist</b>, a wonderfully
          written novel about self-discovery and following your dreams.
          <br />
          <br />- Games: I very much enjoy playing games, and I'm a huge fan of
          many different genres as well; however, since University, I haven't
          had much time to play. I can't really pick a favourite game, but I did
          enjoy <b>Minecraft</b>, <b>Terraria</b>, and <b>Genshin Impact</b>.
          <br />
          <br />- Youtube: I enjoy watching youtube, and I'm a huge fan of many
          different types of content. My all-time favourite YouTuber is Grant
          Sanderson from{" "}
          <b>
            <a href="https://www.youtube.com/@3blue1brown">3Blue1Brown</a>
          </b>
          .
        </p>
      </div>
    </div>
  );
}

interface PlanetProps {
  orbitSize: number;
  size: number;
  planetTexture: string;
  planetLabel: string;
  zIndex: number;
  sectionId: string;
}

function Planet({
  orbitSize,
  size,
  planetTexture,
  planetLabel,
  zIndex,
  sectionId,
}: PlanetProps) {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${sectionId}`) {
        setShowInfo(true);
      } else {
        setShowInfo(false);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [sectionId]);

  const planetProperties = useMemo(
    () => ({
      rotationSpeed: Math.floor(Math.random() * 10) + 10,
      randomDelay: Math.floor(Math.random() * -100),
      randomSpeed:
        ((Math.floor(Math.random() * 50) + 50) * orbitSize * orbitSize) / 1000,
    }),
    [orbitSize]
  );

  const textureMap: { [key: string]: string } = {
    Ceres: Ceres,
    Eris: Eris,
    Haumea: Haumea,
    Makemake: Makemake,
  };

  const handlePlanetClick = () => {
    setShowInfo(!showInfo);
    if (!showInfo) {
      window.location.hash = sectionId;
    } else {
      window.location.hash = "";
    }
  };

  const renderPlanetInfo = () => {
    return createPortal(
      <div className={styles.planetInfoOverlay}>
        <div className={styles.planetInfo}>
          {planetLabel === "X1-WRLD" && <WorldInfo />}
          {planetLabel === "X2-PRJS" && <ProjectsInfo />}
          {planetLabel === "X3-CRTV" && <CreativeInfo />}
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
    <div
      className={`${styles.planetOrbit} ${
        showInfo ? styles.pauseAnimations : ""
      }`}
      style={
        {
          "--x-amplitude": `${orbitSize / 2}vw`,
          "--y-amplitude": `${orbitSize / 2}vh`,
          "--speed": `${planetProperties.randomSpeed}s`,
          "--delay": `${planetProperties.randomDelay}s`,
          "--z-index-start": `${zIndex}`,
        } as React.CSSProperties
      }
    >
      <div
        className={`${styles.planet} ${showInfo ? styles.pauseAnimations : ""}`}
        onClick={handlePlanetClick}
        data-section-id={sectionId}
        style={
          {
            width: `${size}vw`,
            height: `${size}vw`,
            "--backgroundImage": `url(${textureMap[planetTexture]})`,
            "--rotationSpeed": `${planetProperties.rotationSpeed}s`,
          } as React.CSSProperties
        }
      >
        <h1
          className={styles.planetLabel}
          style={{ "--size": `${size}vw` } as React.CSSProperties}
        >
          {planetLabel}
        </h1>
        {showInfo && renderPlanetInfo()}
      </div>
    </div>
  );
}

export default Planet;
