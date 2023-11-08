import { Flex, Image, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Original = ({originals}) => {
const [select, setSelect] = useState([])
// console.log(originals.results);
function handleMovieClick(id) {
    console.log(id)
}

    return ( 
        <div className="original">
            <h2 className="p-2">Netflix Originals</h2>
            <Flex overflowX="auto"  whiteSpace="nowrap" >
                {originals.results?.map(movie => (
                    <Stack key={movie.id} className="movies">
                        <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="original" onClick={() => handleMovieClick(movie.id)}/>
                    </Stack>
                ))}
            </Flex>
        </div>
     );
}
 
export default Original;

