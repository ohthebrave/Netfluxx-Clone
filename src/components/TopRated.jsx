import { Flex, Image, Stack } from "@chakra-ui/react";

const TopRated = ({topRated}) => {

    console.log(topRated.results)
    return ( 
        <div className="trending">
        <h2 className="p-2">Top Rated Movies</h2>
        <Flex>
            {topRated.results?.map(movie => (
                <Stack key={movie.id} className="">
                    <Image
                    boxSize='150px'
                    objectFit='cover'
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="original" />
                </Stack>
            ))}
        </Flex>
    </div>
     );
}
 
export default TopRated;