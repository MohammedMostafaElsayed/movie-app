import React from 'react'
import { useDispatch } from 'react-redux';
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { deleteCard } from "../../store/slice/watch";
import axios from "axios";
import {useEffect, useState }from "react";

export default function Moviedata({item}) {
  const dispatch = useDispatch();

  return (
    <div >
      <h1 style={{paddingTop:"60px"}}>{item.title}</h1>
<div className='pe-5' style={{alignItems:"center", justifyContent:"center"}}>
      <div
      className="col d-flex border border-top-0 rounded-5 shadow bg-body-tertiary m-4 "
      style={{ height: "500px", width: "100%" }}
    >
      <img
        className="card-img-top rounded-5 card m-4 "
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt="..."
      />

      <div className="card-body m-3">
        <div className="d-flex justify-content-between">
          <h1 className="card-title" style={{fontSize:"40px"}}>{item.title}</h1>
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
        <p className="text-start pt-4">{item.release_date}</p>
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
        <p style={{fontSize:"24px"}} className="text-start">{item.overview}</p>
      </div>
    </div>
    </div>
    </div>
  )
}
