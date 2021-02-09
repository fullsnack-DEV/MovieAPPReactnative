import { create } from "apisauce";

export const movies = create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

export const tv = create({
  baseURL: "https://api.themoviedb.org/3/tv",
});

export const query = create({
  baseURL: "https://api.themoviedb.org/3/search",
});

export default { movies, tv, query };
