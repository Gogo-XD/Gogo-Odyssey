import { useEffect, useState, useRef } from "react";
import styles from "./Map.module.css";
import Star from "./Star";
import Ring from "./Rings";
import Planet from "./Planets";
import spaceHUD from "../../assets/SpaceHUD.png";
import nanoHUD1 from "../../assets/nanoHUD-1.png";
import nanoHUD2 from "../../assets/nanoHUD-2.png";
import nanoHUD3 from "../../assets/nanoHUD-3.png";
import nanoHUD4 from "../../assets/nanoHUD-4.png";
import nanoHUD5 from "../../assets/nanoHUD-5.png";
import nanoHUD6 from "../../assets/nanoHUD-6.png";
import nanoHUD7 from "../../assets/nanoHUD-7.png";

function Map() {
  const [visibleElements, setVisibleElements] = useState<number>(0);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start showing elements with a delay between each
          let count = 0;
          const interval = setInterval(() => {
            count++;
            setVisibleElements(count);
            // 8 is the total number of elements (1 star + 3 rings + 3 planets + 1 spaceHUD)
            if (count >= 9) clearInterval(interval);
          }, 300); // Adjust timing as needed

          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.map} id="map" ref={mapRef}>
      <div className={styles.background}></div>
      <div className={styles.helpIcon}>
        ?
        <div className={styles.tooltip}>
          Welcome to the Solar System Navigation! Click on any space object to
          explore different sections:
          <br />
          <br />
          • Star - About Me
          <br />
          • X1-WRLD - Culture & Inspiration
          <br />
          • X2-PRJS - Project Portfolio
          <br />• X3-CRTV - Artistic Work
        </div>
      </div>
      <div className={styles.solarSystem}>
        {visibleElements >= 2 && <Ring size={30} />}
        {visibleElements >= 3 && <Ring size={50} />}
        {visibleElements >= 4 && <Ring size={70} />}

        {visibleElements >= 1 && <Star />}
        {visibleElements >= 5 && (
          <Planet
            zIndex={1}
            orbitSize={30}
            size={5}
            planetTexture="Haumea"
            planetLabel="X1-WRLD"
            sectionId="world"
          />
        )}
        {visibleElements >= 6 && (
          <Planet
            zIndex={2}
            orbitSize={50}
            size={7}
            planetTexture="Ceres"
            planetLabel="X2-PRJS"
            sectionId="projects"
          />
        )}
        {visibleElements >= 7 && (
          <Planet
            zIndex={3}
            orbitSize={70}
            size={6}
            planetTexture="Eris"
            planetLabel="X3-CRTV"
            sectionId="creative"
          />
        )}
      </div>
      {visibleElements >= 8 && (
        <div className={styles.spaceHUD}>
          <img src={spaceHUD} alt="Space HUD" />
        </div>
      )}
      {visibleElements >= 9 && (
        <>
          <div className={styles.nanoHUDContainer}>
            <div className={styles.nanoHUD}>
              <img src={nanoHUD1} alt="Nano HUD 1" id="nanoHUD-1" />
            </div>
            <div className={styles.nanoHUD}>
              <img src={nanoHUD2} alt="Nano HUD 2" id="nanoHUD-2" />
            </div>
            <div className={styles.nanoHUD}>
              <img src={nanoHUD3} alt="Nano HUD 3" id="nanoHUD-3" />
            </div>
            <div className={styles.nanoHUD}>
              <img src={nanoHUD4} alt="Nano HUD 4" id="nanoHUD-4" />
            </div>
            <div className={styles.nanoHUD}>
              <img src={nanoHUD5} alt="Nano HUD 5" id="nanoHUD-5" />
            </div>
            <div className={styles.nanoHUD}>
              <img src={nanoHUD6} alt="Nano HUD 6" id="nanoHUD-6" />
            </div>
            <div className={styles.nanoHUD}>
              <img src={nanoHUD7} alt="Nano HUD 7" id="nanoHUD-7" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Map;
