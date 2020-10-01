import Navbar from "./../components/Navbar/Navbar";
import styles from "../styles/login.module.css";
import { auth } from "../_firebase";
import { Store } from "../_context";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
function login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [alertcontent, setAlertContent] = useState("");
  const [store, dispatch] = Store();
  const handleLogin = async (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        if (store.user) {
          console.log("User Logged In", store.user);
        } else {
          console.log("user not lofgged in");
          let user = {
            email: auth.currentUser.email,
            displayName: auth.currentUser.displayName,
          };
          dispatch({
            type: "SET_USER",
            user: user,
          });
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setshowAlert(true);
        setAlertContent(err.message);
      });
  };
  return (
    <div className={`${styles.login__page}`}>
      <Head>
        <title>Sign In</title>
      </Head>
      <Navbar withButton={false} />
      <div className={`${styles.alert} ${showAlert && styles.showAlert} `}>
        {alertcontent}
      </div>
      <div className={`${styles.form}`}>
        <div className={`${styles.title}`}>Sign In</div>
        <form>
          <div className={`${styles.input__field}`}>
            <input
              required
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">
              <span>Email</span>
            </label>
          </div>
          <div className={`${styles.input__field}`}>
            <input
              required
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">
              <span>Password</span>
            </label>
          </div>
          <button onClick={(e) => handleLogin(e)} className={`${styles.btn}`}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default login;
