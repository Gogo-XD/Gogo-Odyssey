import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.hero}>
      <div
        className={styles.content}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <h1 className={`${styles.title} ${styles.fadeIn}`}>
          Welcome to Gogo's Odyssey
        </h1>
        <p className={`${styles.subtitle} ${styles.slideUp}`}>
          This is a personal website, where I share some of my thoughts,
          projects, and creative ideas
        </p>
      </div>
      <div className={styles.scrollIndicator}>
        <span>scroll to continue</span>
        <svg
          className={styles.scrollArrow}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
