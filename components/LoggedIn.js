import Navbar from "./Navbar/Navbar";
import styles from "../styles/loggedin.module.css";
import Page from "./Page";
import { useState, useEffect } from "react";
import CardRow from "./CardRow/CardRow";
function LoggedIn() {
  //
  const API_KEY = "4f2d540fb28b05b52c0443b24ff06b73";
  const URL = "http://api.themoviedb.org/3";
  const suffixes = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US,`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documenatary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };

  const [data, setData] = useState({});

  useEffect(() => {
    const tmpData = {};
    const getData = async (url) => {
      let res = [];
      await fetch(`${URL}${url}`)
        .then((res) => res.json())
        .then((data) => {
          res = data.results;
        })
        .catch((err) => {
          console.log(err.message);
          res = null;
        });
      return res;
    };
    Object.keys(suffixes).forEach(async (suffix) => {
      console.log(suffix);
      tmpData[suffix] = await getData(suffixes[suffix]);
      setData(tmpData);
    });
  }, []);

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
      {Object.keys(data).map((key) => {
        return <CardRow key={key} title={key} datas={data[key]} />;
      })}
    </Page>
  );
}

export default LoggedIn;
