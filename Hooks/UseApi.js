import react, { useState } from "react";
import Movie from "../API/getmovies";

export default useApi = () => {
  const [popular, setpopular] = useState([]);
  const [errorM, seterror] = useState(false);
  const [upcoming, setupcoming] = useState([]);
  const [nowplaying, setnowplaying] = useState([]);
  const [shows, setshows] = useState([]);
  const [onair, setonair] = useState([]);
  const [Arriving, setArriving] = useState([]);

  const request = async () => {
    const response = await Movie.getpopular();
    const response2 = await Movie.getshows();
    const response3 = await Movie.getonair();
    const response4 = await Movie.getupcoming();
    const response5 = await Movie.getNowplaying();
    if (
      !response.ok ||
      !response2.ok ||
      !response3.ok ||
      !response4.ok ||
      !response5.ok
    )
      return seterror(true);

    seterror(false);

    const result = response.data.results;

    setpopular([{ key: "left" }, ...result, { key: "right" }]);
    setupcoming(response4.data.results);
    setnowplaying(response5.data.results);
    setshows(response2.data.results);
    setonair(response3.data.results);
    setArriving(response5.data.results);
  };

  return {
    request,
    popular,
    errorM,
    upcoming,
    nowplaying,
    shows,
    onair,
    Arriving,
  };
};
