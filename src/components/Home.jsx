import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NowShowing from "./NowShowing";
import Original from "./Original";
import Trending from "./Trending";
import TopRated from "./TopRated";

const Home = () => {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const [searchValue, setSearchValue] = useState('')

    const urlOriginal = "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
    const urlTrending = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';
    const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';

  const fetchMovies = async (url, setStateFunction) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setStateFunction(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies(urlOriginal, setOriginals);
    fetchMovies(urlTrending, setTrending);
    fetchMovies(urlTopRated, setTopRated);
  }, []);

function HandleSubmit(e) {
    e.preventDefault()
    console.log(e)
}

  const handleMovieClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} onHandleSearch={HandleSubmit} />
      <NowShowing />
      <Original originals={originals} onHandleMovieClick={handleMovieClick} />
      <Trending trending={trending} />
      <TopRated topRated={topRated} />
    </div>
  );
};

export default Home;


