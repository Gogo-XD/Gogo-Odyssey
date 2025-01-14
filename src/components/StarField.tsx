import { useMemo } from "react";
import styles from "./StarField.module.css";

type StarFieldProps = {
  children: React.ReactNode;
};

function StarField({ children }: StarFieldProps) {
  const stars = useMemo(() => {
    return Array.from({ length: 500 }).map((_, index) => ({
      id: index,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.floor(Math.random() * 3) + 1,
      delay: Math.random() * -2,
      time: Math.random() * 4 + 2,
    }));
  }, []);

  return (
    <div className={styles.starField}>
      <div className={styles.starsContainer}>
        {stars.map((star) => (
          <div
            key={star.id}
            className={styles.tinyStar}
            style={
              {
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
                "--animation-duration": `${star.time}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      {children}
    </div>
  );
}

export default StarField;
