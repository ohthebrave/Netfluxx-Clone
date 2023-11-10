import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function MoviesList() {
    const [movies, setMovies] = useState([]);

    const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';

    const fetchMovies = async () => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setMovies(data);
          } else {
            throw new Error("Something went wrong");
          }
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        fetchMovies()
      },[])
 
      console.log(movies)

  return (
    <div>
        <NavBar/>
        <div className="mt-5">
                    {movies.results?.map(movie => (    
                        <img
                        key={movie.id}
                        boxSize='150px'
                        objectFit='cover'
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                        alt="original"/>
                    ))}
                </div>
    </div>
  )
}

export default MoviesList