
import { useState } from "react";
import Display from "./Display";

const Original = ({originals,onHandleMovieClick}) => {
const [select, setSelect] = useState('')
// console.log(originals.results);

function handleMouseOver(id) {
    const filteredMovie = originals.results.filter(movie => {
        return movie.id === id;
    })
    setSelect(filteredMovie[0]);
}

    return ( 
        <div>
            <div className="bar">
                {select !== '' && <Display select={select}/>}
            </div>
            <div className="original">
                <h2 className="p-2">Netfluxx Originals</h2>
                <div className="movies">
                    {originals.results?.map(movie => (    
                        <img
                        key={movie.id}
                        boxSize='150px'
                        objectFit='cover'
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                        alt="original" onMouseOver={() => handleMouseOver(movie.id)}
                        onClick={() => onHandleMovieClick(movie.id)}/>
                    ))}
                </div>
        </div>
        </div>
     );
}
 
export default Original;

