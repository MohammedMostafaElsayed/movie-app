import React from "react";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationList({ count, page, handleChange }) {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=api_key=ac35580be554252f7d6877401caadb42&page=4"
      )
      .then((res) => setMovie(res.data.pages))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <div className="w-full-screen text-slate-100 flex justify-center">
      <Stack spacing={4} color="primary">
        <Typography></Typography>
        <Pagination
          size="large"
          count={count}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}