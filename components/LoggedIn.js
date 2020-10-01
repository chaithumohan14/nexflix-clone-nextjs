import Navbar from "./Navbar/Navbar";

function LoggedIn() {
  const API_KEY = "4f2d540fb28b05b52c0443b24ff06b73";
  const URL = "http://api.themoviedb.org/3";
  const suffixes = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US,`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documenatary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };
  return (
    <div style={{ color: "white" }}>
      {" "}
      <Navbar withButton />{" "}
    </div>
  );
}

export default LoggedIn;
