import Navbar from "./../components/Navbar/Navbar";
import styles from "../styles/login.module.css";
import { useState } from "react";
import Head from "next/head";
function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={`${styles.login__page}`}>
      <Head>
        <title>Sign In</title>
      </Head>
      <Navbar withButton={false} />
      <div className={`${styles.form}`}>
        <div className={`${styles.title}`}>Sign In</div>
        <form>
          <div className={`${styles.input__field}`}>
            <input
              autoComplete="off"
              type="text"
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
          <button className={`${styles.btn}`}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default login;
