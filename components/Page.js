import { auth } from "../_firebase";
import { useEffect } from "react";
import { Store } from "../_context";
function Page({ children }) {
  const [, dispatch] = Store();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        let user = {
          email: auth.currentUser.email,
          displayName: auth.currentUser.displayName,
        };
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }
    });
  }, []);
  return <div>{children}</div>;
}

export default Page;
