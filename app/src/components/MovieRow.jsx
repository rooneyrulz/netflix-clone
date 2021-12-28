import React from "react";
import axios from "../axios";

const BASE_URI = "https://image.tmdb.org/t/p/original";

const MovieRow = ({ title, uri }) => {
  const [state, setState] = React.useState([]);
  const [error, setError] = React.useState({ status: null, message: null });

  const fetchData = React.useCallback(async () => {
    try {
      const { data } = await axios.get(uri);
      console.log(data.results);
      setState(data?.results || []);
    } catch (error) {
      console.log(error?.message);
      setError((s) => ({
        ...s,
        status: 500,
        message: error?.message || "Something went wrong!",
      }));
    }
  }, [uri]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='movie_row'>
      <h2>{title}</h2>

      <div className='movie_row__posters'>
        {state?.map((poster) => (
          <img
            className='movie_row__poster'
            src={`${BASE_URI}${poster?.poster_path}`}
            alt={poster?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
