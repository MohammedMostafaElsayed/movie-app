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

const redirectToDetails = () => {
  navigate(`/moviedata-page/:id`)
}


  return (
    <>
    <div className="ps-4 pe-4">
    <form className="d-flex m-5 p-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {movie.map((movies) => {
          return (
              <div>
            <div className="card h-100" onClick={redirectToDetails}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <div className="card-body">
              <h3>{movies.vote_average}</h3>
              <div style={{display:"flex"}}>
              <h5 className="card-title" style={{display:"flex"}}>{movies.title}</h5>
              <Checkbox
              onClick={(e)=>{
                if (e.target.checked == true){
                  dispatch(addCard(movies))
                }
              }}
            sx={{
              color: "yello",
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
