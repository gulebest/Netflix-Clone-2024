import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/request";
import "./Banner.css";


function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const validMovies = request.data.results.filter(m => m.backdrop_path);
        const randomMovie =
          validMovies[Math.floor(Math.random() * validMovies.length)];
        console.log("Selected movie:", randomMovie);
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  if (!movie) return null; // wait until movie loads

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button_play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner;
