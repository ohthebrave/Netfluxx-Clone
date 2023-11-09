import { Flex, Image, Stack } from "@chakra-ui/react";

const Trending = ({trending}) => {

    // console.log(trending.results)
    return ( 
        <div className="trending">
            <h2 className="p-2">Trending Now</h2>
            <Flex>
            <Stack className="movies">
                {trending.results?.map(movie => (             
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
 
export default Trending;