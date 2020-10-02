import Navbar from "./Navbar/Navbar";
import styles from "../styles/loggedin.module.css";
import Page from "./Page";
import CardRow from "./CardRow/CardRow";
function LoggedIn({ data }) {
  console.log(data, "from logged in");

  return (
    <Page>
      <div className={`${styles.hero__page}`}>
        <Navbar withButton />
        <div className={`${styles.movie__title}`}> Ratched </div>
        <div className={`${styles.button_container}`}>
          <button className={`${styles.btn}`}>Play</button>
          <button className={`${styles.btn}`}>My List</button>
        </div>
        <div className={`${styles.movie__subtitle}`}>
          An origins story, beginning in 1947, which follows Ratched's journey
          and evolution from nurse to full-fledged monster tracking her
          murderous...
        </div>
      </div>
      <CardRow key={"Originals"} title={"Originals"} datas={data.trending} />
      <CardRow key={"Trending"} title={"Trending"} datas={data.originals} />
      <CardRow key={"topRated"} title={"top Rated"} datas={data.topRated} />
      <CardRow key={"action"} title={"action"} datas={data.actionMovies} />
      <CardRow key={"comedy"} title={"comedy"} datas={data.comedyMovies} />
      <CardRow key={"horror"} title={"horror"} datas={data.horrorMovies} />
      <CardRow key={"romance"} title={"romance"} datas={data.romanceMovies} />
      <CardRow
        key={"documentary"}
        title={"documentary"}
        datas={data.documenatary}
      />
    </Page>
  );
}

export default LoggedIn;
