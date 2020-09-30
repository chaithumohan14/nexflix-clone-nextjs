import styles from "../../styles/navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={`${styles.navbar}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
          className={`${styles.brand__logo}`}
          srcSet=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
