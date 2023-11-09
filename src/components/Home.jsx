import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NowShowing from "./NowShowing";
import Original from "./Original";
import Trending from "./Trending";
import TopRated from "./TopRated";
import FavoriteList from "./FavoriteList";

const Home = () => {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

    const urlOriginal = "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
    const urlTrending = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';
    const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';
    // const urlTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`;

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

  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  useEffect(() => {
    fetchMovies(urlOriginal, setOriginals);
    fetchMovies(urlTrending, setTrending);
    fetchMovies(urlTopRated, setTopRated);
  }, []);

console.log(searchValue)

  const handleMovieClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <FavoriteList movies={movies} title=""/>
      <Original originals={originals} onHandleMovieClick={handleMovieClick} NowShowing={NowShowing}/>
      <Trending trending={trending} />
      <TopRated topRated={topRated} />
    </div>
  );
};

export default Home;


