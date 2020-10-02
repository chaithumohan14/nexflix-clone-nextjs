import styles from "../styles/loader.module.css";

function Loader() {
  return (
    <div className={`${styles.parent}`}>
      <div className={`${styles.loader}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loader;
