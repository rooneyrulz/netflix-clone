import React from "react";
import ReactYouTube from "react-youtube";
import Loader from "react-loader-spinner";
import movieTrailer from "movie-trailer";
import axios from "../axios";
import request from "../request";

const BASE_IMAGE_URI = "https://image.tmdb.org/t/p/original";

const MovieRow = ({ id, title, uri }) => {
  const [state, setState] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [trailerURI, setTrailerURI] = React.useState(null);

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onHandleClick = (movie) => {
    if (trailerURI) {
      setTrailerURI(null);
    } else {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_title ||
          movie?.original_name ||
          ""
      )
        .then((uri) => {
          const uriParams = new URLSearchParams(new URL(uri)?.search);
          setTrailerURI(uriParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const fetchData = React.useCallback(async () => {
    try {
      const { data } = await axios.get(uri);
      setLoading(false);
      setError(null);
      setState(data?.results || []);
    } catch (error) {
      setLoading(false);
      setError({
        status: 500,
        message: error?.message || "Something went wrong!",
      });
    }
  }, [uri]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='movie_row '>
      <div className='container'>
        <h2>{title}</h2>

        <div className='movie_row__posters__wrapper'>
          {loading ? (
            <Loader type='Puff' color='#fff' height={50} width={50} />
          ) : Boolean(error) ? (
            <span className="movie_row__error">{error?.message}</span>
          ) : (
            <div className="movie_row__posters"> {
              state?.map((poster) => (
              <img
                key={poster?.id}
                className='movie_row__poster'
                onClick={() => onHandleClick(poster)}
                src={`${BASE_IMAGE_URI}${
                  request[0]?.id === id
                    ? poster?.poster_path
                    : poster?.backdrop_path
                }`}
                alt={poster?.name}
              />
            ))
            }
            </div>
          )}
        </div>
        {trailerURI ? (
          <ReactYouTube videoId={trailerURI} opts={options} />
        ) : null}
      </div>
    </div>
  );
};

export default MovieRow;
