import { Store } from "../_context";
import LoggedIn from "../components/LoggedIn";
import NoLogin from "./../components/NoLogin";
import Page from "./../components/Page";

function index() {
  const [store] = Store();
  return(
  <Page>
    {store.user ? <LoggedIn /> : <NoLogin />}
  </Page>
  );
}

export default index;
