import { Store } from "../_context";
import LoggedIn from "../components/LoggedIn";
import NoLogin from "./../components/NoLogin";
import Page from "./../components/Page";
import Loader from "./../components/Loader";
import { useState, useEffect } from "react";
import { auth } from "../_firebase";

function index({ data }) {
  const [store] = Store();
  const [Component, setComponent] = useState(<Loader />);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (auth.currentUser) {
        setComponent(<LoggedIn data={data} />);
      } else {
        setComponent(<NoLogin />);
      }
    });
  }, []);
  return <Page>{Component}</Page>;
}

export async function getServerSideProps() {
  const getData = async (url) => {
    let resp = null;
    await fetch(`${URL}${url}`)
      .then((res) => res.json())
      .then((data) => {
        resp = data.results;
      })
      .catch((err) => console.log(err.message));
    return resp;
  };
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
  let trending = await getData(suffixes.trending);
  let originals = await getData(suffixes.originals);
  let topRated = await getData(suffixes.topRated);
  let actionMovies = await getData(suffixes.actionMovies);
  let comedyMovies = await getData(suffixes.comedyMovies);
  let horrorMovies = await getData(suffixes.horrorMovies);
  let romanceMovies = await getData(suffixes.romanceMovies);
  let documenatary = await getData(suffixes.documenatary);

  const props = {
    trending: trending,
    originals: originals,
    topRated: topRated,
    actionMovies: actionMovies,
    comedyMovies: comedyMovies,
    horrorMovies: horrorMovies,
    romanceMovies: romanceMovies,
    documenatary: documenatary,
  };
  return { props: { data: props } };
}

export default index;
