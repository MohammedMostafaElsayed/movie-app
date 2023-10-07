import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import movieCard from "./movieCard";

export default function Movielist() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ac35580be554252f7d6877401caadb42"
      )
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.log(err));
  }, []);
console.log(movie);
  return (
    <>
      <h1>movie list</h1>
      <hr></hr>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {movie.map((movies) => {
          return (
              
                <movieCard movieData={movies}/>
           
          );
        })}
      </div>
    </>
  );
}
