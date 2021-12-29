import React from 'react'
import axios from "../axios";
import request from "../request";

const BASE_IMAGE_URI = "https://image.tmdb.org/t/p/original";

const AppBanner = () => {
  const [state, setState] = React.useState({});
  const [error, setError] = React.useState({ status: null, message: null });

  const getRandomInt = (length) => {
    return Math.floor(Math.random() * length);
}

  const fetchData = React.useCallback(async () => {
    try {
      const { data } = await axios.get(request[getRandomInt(request?.length)]?.uri);
      setState(data?.results[getRandomInt(data?.results?.length)] || {});
      console.log(data?.results[getRandomInt(data?.results?.length)]);
    } catch (error) {
      console.log(error?.message);
      setError((s) => ({
        ...s,
        status: 500,
        message: error?.message || "Something went wrong!",
      }));
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='app_banner' style={{
      backgroundImage: `url(${BASE_IMAGE_URI}${state?.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="app_banner__content container">
        <h1>{state?.original_title || state?.original_name || state?.title || state?.name}</h1>
        <p>{state?.overview}</p>
        <div className="app_banner__action">
          <button className='app_banner__button'>Play</button>
          <button className='app_banner__button'>My List</button>
        </div>
      </div>
    </div>
  )
}

export default AppBanner
