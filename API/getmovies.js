import movies from "./Tmdb";
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

export default { getpopular, getupcoming };
