import { Flex, Image, Stack } from "@chakra-ui/react";

const Original = ({originals, onHandleMovieClick}) => {

// console.log(originals.results);

    return ( 
        <div className="original">
            <h2 className="p-2">Netflix Originals</h2>
            <Flex overflowX="auto"  whiteSpace="nowrap" >
                {originals.results?.map(movie => (
                    <Stack key={movie.id} className="movies">
                        <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="original" onClick={() => onHandleMovieClick(movie.id)}/>
                    </Stack>
                ))}
            </Flex>
        </div>
     );
}
 
export default Original;

