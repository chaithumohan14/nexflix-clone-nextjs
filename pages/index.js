import { Store } from "../_context";
import LoggedIn from "../components/LoggedIn";
import NoLogin from "./../components/NoLogin";
import Page from "./../components/Page";
import Loader from "./../components/Loader";
import { useState, useEffect } from "react";
import { auth } from "../_firebase";

function index() {
  const [store] = Store();
  const [Component, setComponent] = useState(<Loader />);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (auth.currentUser) {
        setComponent(<LoggedIn />);
      } else {
        setComponent(<NoLogin />);
      }
    });
  }, []);
  return <Page>{Component}</Page>;
}

export default index;
