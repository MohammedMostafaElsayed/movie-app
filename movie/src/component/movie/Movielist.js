import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import movieCard from "./MovieCard";
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

const redirectToDetails = () => {
  navigate(`/moviedata-page/:id`)
}

console.log(movie);
  return (
    <>
    <div className="ps-4 pe-4">
      <h1 style={{display:"flex"}}>Movie APP</h1>
      
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {movie.map((movies) => {
          return (
              <div>
            <div className="card h-100" >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
              class="card-img-top"
              alt="..."
              style={{ height: "300px" }} onClick={redirectToDetails}
            />
            <div className="card-body">
              <h3>{movies.vote_average}</h3>
              <div style={{display:"flex"}}>
              <h5 className="card-title" style={{display:"flex"}}>{movies.title}</h5>
              <Checkbox
              onClick={(e)=>{
                if (e.target.checked == true){
                  console.log("hiiiiiiiiii")
                  dispatch(addCard(movies))
                }
              }}
            sx={{
              color: "black",
              "&.Mui-checked": { color: "yellow" },
            }}
            style={{paddingLeft:"25%"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
          </div>
              <p className="card-text" style={{display:"flex"}}>{movies.release_date}</p>
            </div>
          </div>
          </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
