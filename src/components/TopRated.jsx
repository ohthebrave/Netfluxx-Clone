import { Flex, Image, Stack } from "@chakra-ui/react";

const TopRated = ({topRated}) => {

    // console.log(topRated.results)
    return ( 
        <div className="trending">
        <h2 className="p-2">Top Rated Movies</h2>
        <Flex>
            <Stack  className="movies">
            {topRated.results?.map(movie => (
                    <Image
                    key={movie.id}
                    boxSize='150px'
                    objectFit='cover'
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="original" />          
            ))}
            </Stack>
        </Flex>
    </div>
     );
}
 
export default TopRated;