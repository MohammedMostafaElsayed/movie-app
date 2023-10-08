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

  const redirectToDetails = () => {
    navigate(`/moviedata-page/:id`);
  };

  const handelSearch = (e) => {
    if (e.target.name === "searchInp") {
      setsearch({ ...search, searchInput: e.target.value });
    }
  };
  const handelsubmet = (e) => {
    e.preventDefault();
    navigate("/search-page");
  };
  return (
    <>
      <div className="ps-4 pe-4">
        <form className="d-flex m-5 p-5" role="search">
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

        <div className="row row-cols-1 row-cols-md-4 g-5 p-5 m-5">
          {movie.map((movies) => {
            return (
              <div>
                <div className="card h-100" style={{ borderRadius: "20px" }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "300px", borderRadius: "20px 20px 0 0" }}
                    onClick={redirectToDetails}
                  />
                  <div className="card-body">
                    <div style={{display:"flex"}}>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={movies.vote_average / 2}
                        precision={0.1}
                        readOnly
                      />
                    </Stack>
                    <Checkbox
                      onClick={(e) => {
                        if (e.target.checked === true)
                        {
                          dispatch(addCard(movies));

                        }else{
                          dispatch(deleteCard(movies));


                        }
                      }}
                      sx={{
                        color: "yello",
                        "&.Mui-checked": { color: "yellow" },
                      }}
                      style={{ paddingLeft: "55%" , paddingTop:"0"}}
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
    </>
  );
}
