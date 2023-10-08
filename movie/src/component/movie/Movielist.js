import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import movieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { addCard, deleteCard } from "../../store/slice/watch";

export default function Movielist() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
  const [search, setsearch] = useState({
    searchInput : null
  });
  

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

const handelSearch = (e)=>{
  if(e.target.name === "searchInp"){
    setsearch({...search,searchInput : e.target.value})
  }


  }
  const handelsubmet = (e)=>{
    e.preventDefault();
    navigate('/search-page');


}
  return (
    <>
    <div className="ps-4 pe-4">
    <form className="d-flex m-5 p-5" role="search">
        <input onChange={handelSearch} name="searchInp" value={search.searchInput} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  onClick={handelsubmet} className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {movie.map((movies) => {
          return (
              <div>
            <div className="card h-100" >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }} onClick={redirectToDetails}
            />
            <div className="card-body">
              <h3>{movies.vote_average}</h3>
              <div style={{display:"flex"}}>
              <h5 className="card-title" style={{display:"flex"}}>{movies.title}</h5>
              <Checkbox
              
            sx={{
              color: "yello",
              "&.Mui-checked": { color: "yellow" },
            }}
            onClick={(e)=>{
              if (e.target.checked === true){
                dispatch(addCard(movies));  

              }else{
                dispatch(deleteCard(movies));
              }
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
