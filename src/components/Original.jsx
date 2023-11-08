import { Flex, Image, Stack } from "@chakra-ui/react";

const Original = ({originals}) => {

// console.log(originals.results);

    return ( 
        <div className="original">
            <h2 className="p-2">Netflix Originals</h2>
            <Flex>
                {originals.results?.map(movie => (
                    <Stack key={movie.id} className="original_movie">
                        <Image
                        
                        boxSize='250px'
                        objectFit='cover'
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="original" />
                    </Stack>
                ))}
            </Flex>
        </div>
     );
}
 
export default Original;

{/* <div className="original">
            <div className="fs-1">
                <h3 >Netflix Originals</h3>
            </div>
            <div className="row">
            {originals.results?.map(movie => (
                <div key={movie.id} className="col-md-1 original_movie ">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="original netflix" />
                    {/* <h3>{movie.name}</h3> */}
        //         </div>
        //     ))}
        //     </div>
        // </div> */}