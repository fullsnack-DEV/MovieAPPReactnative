import axios from "axios";
import { create } from "apisauce";

export const movies = create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

export const tv = create({
  baseURL: "https://api.themoviedb.org/3/tv",
});

export default { movies, tv };
