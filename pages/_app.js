import "../styles/globals.css";
import { Provider } from "../_context";
import { initialState, reducer } from "../_reducer";
function MyApp({ Component, pageProps }) {
  return (
    <Provider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
