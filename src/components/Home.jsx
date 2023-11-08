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
    

    useEffect(() => {
          
          fetch(urlOriginal)
            .then(response => response.json())
            .then(response => setOriginals(response))
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
          
          fetch(urlTrending)
            .then(response => response.json())
            .then(response => setTrending(response))
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
          
          fetch(urlTopRated)
            .then(response => response.json())
            .then(response => setTopRated(response))
            .catch(err => console.error(err));
    }, [])


    return ( 
        <div>
            <NavBar/>
            <NowShowing/>
            <Original originals={originals} />
            <Trending trending={trending} />
            <TopRated topRated={topRated} />
        </div>
     );
}
 
export default Home;