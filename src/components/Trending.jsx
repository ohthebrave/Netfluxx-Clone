import { Flex, Image, Stack } from "@chakra-ui/react";


const Trending = ({trending}) => {

    // console.log(trending.results)
    return ( 
        <div className="trending">
            <h2 className="p-2">Trending Now</h2>
            <Flex>
                {trending.results?.map(movie => (
                    <Stack key={movie.id} className="">
                        <Image
                        
                        boxSize='150px'
                        objectFit='cover'
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="original" />
                    </Stack>
                ))}
            </Flex>
        </div>
     );
}
 
export default Trending;