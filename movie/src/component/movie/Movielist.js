import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { deleteCard, addCard } from "../../store/slice/watch";
import Pagination from '@mui/material/Pagination';



export default function Movielist() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
  const [search, setsearch] = useState({
    searchInput: null,
  });

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ac35580be554252f7d6877401caadb42"
      )
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  

  const handelSearch = (e) => {
    if (e.target.name === "searchInp") {
      setsearch({ ...search, searchInput: e.target.value });
    }
  };
  const handelsubmet = (e) => {
    e.preventDefault();
    navigate(`/search-page/${search.searchInput}`);
  };
  return (
    <>
    
      <div className="ps-4 pe-4 pt-5 ">
        <form className="d-flex m-1 p-4 mt-5 bg-body-secondary" role="search">
          <input
            onChange={handelSearch}
            name="searchInp"
            value={search.searchInput}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={handelsubmet}
            className="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="row row-cols-1 row-cols-md-2 g-5 p-5 m-5">
          {movie.map((movies) => {
            return (
              <div>
                <div className="card h-100 bg-warning" style={{ borderRadius: "20px"}}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "300px", borderRadius: "20px 20px 0 0" }}
                    onClick={()=>{navigate(`/moviedata-page/${movies.id}`)}}
                  />
                  <div className="card-body">
                    <div className="justify-content-between" style={{ display: "flex" }}>
                      <Stack spacing={1} > 
                        <Rating className="text-black"
                          name="half-rating-read"
                          defaultValue={movies.vote_average / 2}
                          precision={0.1}
                          readOnly
                          sx={{
                            fontSize: "2rem", 
                            "@media (max-width: 768px)": {
                              fontSize: "1.5rem", 
                            },
                          }}
                        />
                        
                      </Stack>
                      <Checkbox
                        onClick={(e) => {
                          if (e.target.checked === true) {
                            dispatch(addCard(movies));
                          } else {
                            dispatch(deleteCard(movies));
                          }
                        }}
                        
                        sx={{
                          color: "black",
                          "&.Mui-checked": { color: "black" },
                          fontSize: "2rem",  
                          "@media (max-width: 768px)": {
                            fontSize: "1.5rem",
                          },
                        }}
                        
                         
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <h5 className="card-title" style={{ display: "flex" }}>
                        {movies.title}
                      </h5>
                    </div>
                    <p className="card-text" style={{ display: "flex" }}>
                      {movies.release_date}
                    </p>
                  </div>
                  
                </div>
                
              </div>
              
            );
          })}
        </div>
      </div>
  


   <div className="pb-5" style={{alignItems: "center", display: "flex", justifyContent: "center", position: "absolute", textAlign: "center", left: "50%", transform: "translate(-50%, -50%)" }}>
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack>
    </div>
      
    </>
  );
}
