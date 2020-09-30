import styles from "../../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={`${styles.navbar}`}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
          className={`${styles.brand__logo}`}
          srcSet=""
        />
      </div>
      <button class={`${styles.btn}`}>Sign Up</button>
    </nav>
  );
}

export default Navbar;
