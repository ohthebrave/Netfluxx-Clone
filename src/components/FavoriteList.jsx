import React from 'react'

function FavoriteList({movies}) {

  // console.log(searchMovie)
  return (
    <div className='search-box'>
        <div className="movies">
            {movies.map((movie) => (
              <img key={movie.imdbID} className='search-img' src={movie.Poster} alt='movie'/>
			      ))}
                </div>
    </div>
  )
}

export default FavoriteList;