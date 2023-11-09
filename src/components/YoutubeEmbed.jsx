import '../app.css';

const YoutubeEmbed = ({ embedMovie }) => {
    console.log(embedMovie)
    return (
        <div>
           {embedMovie && embedMovie !== '' &&
                <div className="video-responsive">
                    <iframe
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${embedMovie}`}
                        border="none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            }
        </div>
      )
};
  
export default YoutubeEmbed;