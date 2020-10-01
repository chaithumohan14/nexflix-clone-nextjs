import { Store } from "../../_context";
import { auth } from "../../_firebase";
import styles from "../../styles/navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar({ withButton = false }) {
  const router = useRouter();
  const [store, dispatch] = Store();
  return (
    <nav className={`${styles.navbar}`}>
      <Link href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
          className={`${styles.brand__logo}`}
          srcSet=""
        />
      </Link>
      {withButton &&
        (!store.user ? (
          <button
            onClick={(e) => {
              router.push("/login");
            }}
            className={`${styles.btn}`}
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={(e) => {
              auth.signOut();
              dispatch({
                type: "CLEAR_USER",
              });
            }}
            className={`${styles.btn}`}
          >
            Log Out
          </button>
        ))}
    </nav>
  );
}

export default Navbar;
