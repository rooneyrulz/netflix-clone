import { v4 } from "uuid";
const API_KEY = "5f8dfe431b51d1381f7bf23b6fa39496";

// const API_URI = {
//   trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   original: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// }

const API_URI = [
  {
    id: v4(),
    title: "trending",
    uri: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: v4(),
    title: "original",
    uri: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    id: v4(),
    title: "topRated",
    uri: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: v4(),
    title: "actionMovies",
    uri: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    id: v4(),
    title: "comedyMovies",
    uri: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: v4(),
    title: "horrorMovies",
    uri: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: v4(),
    title: "romanceMovies",
    uri: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    id: v4(),
    title: "documentaries",
    uri: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

export default API_URI;
