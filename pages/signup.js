import { Store } from "../_context";
import { auth } from "../_firebase";
import Navbar from "./../components/Navbar/Navbar";
import styles from "../styles/signup.module.css";
import Page from "./../components/Page";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function signup() {
  const [store, dispatch] = Store();
  const [showAlert, setshowAlert] = useState(false);
  const [alertcontent, setAlertContent] = useState("");
  const router = useRouter();
  const signup = async (e) => {
    e.preventDefault();
    if (store.signupform.email && store.signupform.password) {
      await auth
        .createUserWithEmailAndPassword(
          store.signupform.email,
          store.signupform.password
        )
        .then((authUser) => {
          let user = {
            email: auth.currentUser.email,
            displayName: auth.currentUser.displayName,
          };
          dispatch({
            type: "SET_USER",
            user: user,
          });
          router.push("/");
        })
        .catch((err) => {
          setAlertContent(err.message);
          setshowAlert(true);
        });
    } else {
      setAlertContent("Please enter a valid email address");
      setshowAlert(true);
    }
  };
  useEffect(() => {
    dispatch({
      type: "SET_SIGNUP_PASSWORD",
      password: "",
    });
  }, []);
  return (
    <Page>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={`${styles.signup__page}`}>
        <Navbar withButton />
        <div className={`${styles.alert} ${showAlert ? styles.showAlert : ""}`}>
          {alertcontent}
        </div>
        <div className={`${styles.border}`}>
          <div className={`${styles.title}`}>
            Welcome back! Joining Netflix is easy.
          </div>

          <div className={`${styles.subtitle}`}>
            Enter your password and you'll be watching in no time.
          </div>
          <div className={`${styles.display__email}`}>
            <div>Email</div>
            <div>{store.signupform.email}</div>
          </div>
          <form onSubmit={(e) => signup(e)}>
            <div className={`${styles.input__field}`}>
              <input
                required
                autoComplete="off"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={store.signupform.password || ""}
                onChange={(e) => {
                  dispatch({
                    type: "SET_SIGNUP_PASSWORD",
                    password: e.target.value || "",
                  });
                }}
              />
              <label htmlFor="password">
                <span>Password</span>
              </label>
            </div>
            <button className={`${styles.btn}`}>Sign Up</button>
          </form>
        </div>
      </div>
    </Page>
  );
}

export default signup;
