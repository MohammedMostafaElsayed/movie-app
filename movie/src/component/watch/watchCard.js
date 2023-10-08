import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../store/slice/watch";




export default function WatchCard({ item }) {
  
  const dispatch = useDispatch();

  return (
    <div
      className="col d-flex border border-top-0 rounded-5 shadow bg-body-tertiary m-4 "
      style={{ height: "300px", width: "600px" }}
    >
      <img
        className="card-img-top rounded-5 card m-3 "
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt="..."
      />

      <div className="card-body m-3">
        <div className="d-flex justify-content-between">
          <h2 className="card-title">{item.title}</h2>
          <Checkbox
            defaultChecked
            sx={{ color: "#FFC107", "&.Mui-checked": { color: "#FFC107" } }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            onClick={() => {
              dispatch(deleteCard(item));
            }}
          />
        </div>
        <p className="text-start">{item.release_date}</p>
        <div className="d-flex">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={item.vote_average / 2}
              precision={0.1}
              readOnly
            />
          </Stack>
          <h6 className="ms-3 p-1">{item.vote_count}</h6>
        </div>
        <p className="text-start">{item.overview}</p>
      </div>
    </div>
  );
}
