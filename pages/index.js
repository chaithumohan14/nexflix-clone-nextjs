import Page from "../components/Page";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/index.module.css";
import StoryCard from "./../components/StoryCard/StoryCard";
import FaqItem from "../components/FaqItem/FaqItem";
import Head from "next/head";
function index() {
  return (
    <Page>
      <Head>
        <title>Netflix</title>
      </Head>
      <div className={`${styles.hero__page}`}>
        <Navbar withButton={true} />
        <div className={`${styles.hero__text}`}>
          <div className={`${styles.main__title}`}>
            Unlimited movies, TV shows and more.
          </div>
          <div className={`${styles.sub__title}`}>
            Watch anywhere. Cancel anytime.
          </div>
          <div className={`${styles.sub__title2}`}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={`${styles.signup__form}`}
          >
            <div className={`${styles.get__started__field}`}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
              <label htmlFor="email">
                <span>Email</span>
              </label>
            </div>
            <button className={`${styles.btn}`}>GET STARTED &gt;</button>
          </form>
        </div>
      </div>
      <StoryCard
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        title="Enjoy on your TV."
        subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      />
      <StoryCard
        reverse
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        title="Download your shows to watch offline."
        subtitle="Save your favourites easily and always have something to watch."
      />
      <StoryCard
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
      <div className={`${styles.faq__title}`}> Frequently Asked Questions </div>
      <FaqItem
        question="What is Netflix ?"
        answers={[
          "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices",
          "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
        ]}
      />
      <FaqItem
        question="What does Netflix cost ?"
        answers={[
          "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 799 to ₹ 199 a month. No extra costs, no contracts.",
        ]}
      />
      <FaqItem
        question="Where can I watch ?"
        answers={[
          "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
          "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        ]}
      />
      <FaqItem
        question="How do I cancel ?"
        answers={[
          "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        ]}
      />
      <FaqItem
        question="What can I watch in Netflix ?"
        answers={[
          "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        ]}
      />
      <div
        className={`${styles.sub__title2}`}
        style={{ color: "white", marginTop: "50px" }}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <form className={`${styles.signup__form}`}>
        <div className={`${styles.get__started__field}`}>
          <input
            type="email"
            id="email_2"
            name="email"
            placeholder="Email Address"
          />
          <label htmlFor="email_2">
            <span>Email</span>
          </label>
        </div>
        <button className={`${styles.btn}`}>GET STARTED &gt;</button>
      </form>
    </Page>
  );
}

export default index;
