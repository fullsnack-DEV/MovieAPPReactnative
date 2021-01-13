import axios from "axios";

export default movies = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});
