import { Store } from "../_context";
import { auth } from "../_firebase";
import NoLogin from "./../components/NoLogin";
function index() {
  const [store] = Store();
  return store.user ? (
    <div style={{ color: "white" }}>Logged In</div>
  ) : (
    <NoLogin />
  );
}

export const getServerSideProps = async (context) => {
  console.log("Server Side", auth);
  return { props: {} };
};

export default index;
