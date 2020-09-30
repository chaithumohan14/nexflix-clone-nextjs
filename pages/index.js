import Page from "../components/Page";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/index.module.css";
function index() {
  return (
    <Page>
      <div className={`${styles.hero__page}`}>
        <Navbar />
        <div className={`${styles.hero__text}`}>
          <div className={`${styles.main__title}`}>
            Unlimited movies, TV shows and more.
          </div>
          <div className={`${styles.sub__title}`}>
            Watch anywhere. Cancel anytime.
          </div>
          <div className={`${styles.sub__title}`} style={{ fontSize: "20px" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
        </div>
      </div>
    </Page>
  );
}

export default index;
