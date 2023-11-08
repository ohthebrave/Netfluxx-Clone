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

    const urlOriginal = "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
    const urlTrending = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';
    const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';
    // const urlTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`;
    

    useEffect(() => {
        async function fetchTrending() {
            return await fetch(urlOriginal).then(response => {
              if (response.ok) {
                return response.json()
              } else {
                throw new Error('something went wrong')
              }
            }).then(data => setOriginals(data))
          }
          fetchTrending()
    }, [])

    useEffect(() => {
        async function fetchTrending() {
            return await fetch(urlTrending).then(response => {
              if (response.ok) {
                return response.json()
              } else {
                throw new Error('something went wrong')
              }
            }).then(data => setTrending(data))
          }
          fetchTrending()
    }, [])

    useEffect(() => {
          
          fetch(urlTopRated)
            .then(response => response.json())
            .then(response => setTopRated(response))
            .catch(err => console.error(err));
    }, [])

    async function getMovieTrailer() {
        return await fetch(urlTrailer).then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('something went wrong')
          }
        })
      }

    const handleMovieClick = (id) => {
        console.log(id)
    }


    return ( 
        <div>
            <NavBar/>
            <NowShowing/>
            <Original originals={originals} onHandleMovieClick={handleMovieClick} />
            <Trending trending={trending} />
            <TopRated topRated={topRated} />
        </div>
     );
}
 
export default Home;