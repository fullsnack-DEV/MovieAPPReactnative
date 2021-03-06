import { movies, query, tv } from "./Tmdb";
const getpopular = () => {
  return movies.get(
    "/popular?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );
};

const getupcoming = () => {
  return movies.get(
    "/upcoming?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );
};

const getNowplaying = () => {
  return movies.get(
    "/now_playing?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );
};

const getshows = () => {
  return tv.get(
    "top_rated?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );
};

const getonair = () => {
  return tv.get(
    "on_the_air?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );
};

const Arrivingtoday = () => {
  return tv.get(
    "airing_today?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );
};

const getcredit = (id) => {
  console.log(`this is item ${id}`);
  return movies.get(
    `${id}/credits?api_key=6210c279cdb193474eab3c90fade739b&language=en-US`
  );
};

const getqueryMovie = (term) => {
  return query.get(
    `/movie?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&query=${term}&page=1&include_adult=false`
  );
};
//exports
export default {
  getpopular,
  getupcoming,
  getNowplaying,
  getshows,
  getonair,
  Arrivingtoday,
  getcredit,
  getqueryMovie,
};
