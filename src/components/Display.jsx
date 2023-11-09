import React from 'react';


function Display({select}) {

    // console.log(select)
  return (
    <div>
            <div className='display-image'>
                <img src={`https://image.tmdb.org/t/p/original${select.poster_path}`} alt="" />
            </div>

    </div>
  )
}

export default Display