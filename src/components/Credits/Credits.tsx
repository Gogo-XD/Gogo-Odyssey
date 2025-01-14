import styles from "./Credits.module.css";

function Credits() {
  return (
    <div className={styles.credits}>
      <h2 className={styles.title} id="credits">
        WebBoard
      </h2>
      <p className={styles.description}>This is under development.</p>
    </div>
  );
}

export default Credits;
