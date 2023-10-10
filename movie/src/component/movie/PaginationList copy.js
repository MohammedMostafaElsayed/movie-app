// import React from "react";
// import Checkbox from "@mui/material/Checkbox";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import Favorite from "@mui/icons-material/Favorite";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteCard } from "../../store/slice/watch";
// import Typography from "@mui/material/Typography";
// import Pagination from "@mui/material/Pagination";

// export default function PaginationList({ count, page, handleChange }) {
//   const value = useParams();
//   console.log(value.id);
//   const[card, setcard] = useState();
//   useEffect(() => {
//     axios
//       .get(`https://api.themoviedb.org/3/movie/popular?api_key=ac35580be554252f7d6877401caadb42&page=4`)
//       .then((res) => setcard(res.page))
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(card);
// function MyComponent({ card, count, page, handleChange }) {
//     return (
//       <div className="w-full-screen text-slate-100 flex justify-center">
//         {card ? <Moviedata item={card} /> : null}
//         <Stack spacing={4} color="primary">
//           <Typography></Typography>
//           <Pagination
//             size="large"
//             count={count}
//             page={page}
//             onChange={handleChange}
//           />
//         </Stack>
//       </div>
//     )
//     }
//   }

