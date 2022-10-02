;
import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
