import styles from "./App.module.css";
import StarField from "./components/StarField";
import Hero from "./components/Hero/Hero";
import Map from "./components/Map/Map";
import Credits from "./components/Credits/Credits";
import Header from "./components/Header";
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <StarField>
        <div className={`${styles.section} ${styles.section1}`} id="home">
          <Hero />
        </div>
        <div className={`${styles.section} ${styles.section2}`}>
          <Map />
        </div>
        <div className={`${styles.section} ${styles.section3}`} id="webboard">
          <Credits />
        </div>
      </StarField>
    </div>
  );
}

export default App;
