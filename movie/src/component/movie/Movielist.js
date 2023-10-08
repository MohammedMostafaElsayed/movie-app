import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import movieCard from "./movieCard";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/slice/watch";

export default function Movielist() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
  

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
              
            <div className="card h-100">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
              class="card-img-top"
              alt="..."
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h3>{movies.vote_average}</h3>
              <h5 className="card-title">{movies.title}</h5>
              <Checkbox
              onClick={(e)=>{
                if (e.target.checked == true){
                  console.log("hiiiiiiiiii")
                  dispatch(addCard(movies))
                }
              }}
            sx={{
              color: "black",
              "&.Mui-checked": { color: "black" },
            }}
            
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
              <p className="card-text">{movies.release_date}</p>
            </div>
          </div>
          );
        })}
      </div>
    </>
  );
}
