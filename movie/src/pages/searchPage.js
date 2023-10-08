import { useEffect, useState } from "react";
import SearchList from "../component/search/searchList";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const value = useParams();
  const [card, setcard] = useState();
  console.log(value.name);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=ac35580be554252f7d6877401caadb42&query=${value.name}`)
      .then((res) => { setcard(res.data.results) })
      .catch((err) => { console.log(err) })
  }, []);
  console.log(card)

  return (
    
   card?  <SearchList item={card} /> : ''
  );

}
