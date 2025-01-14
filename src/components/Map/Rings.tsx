import styles from "./Rings.module.css";

interface RingProps {
  size: number; // Size in vw units
}

function Ring({ size }: RingProps) {
  return (
    <div
      className={styles.ringsContainer}
      style={{
        width: `${size}vw`,
        height: `${size}vh`,
      }}
    >
      <div className={styles.ring}></div>
    </div>
  );
}

export default Ring;
