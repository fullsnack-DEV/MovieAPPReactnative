import axios from "axios";

export const movies = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

export const tv = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv",
});

export default { movies, tv };
