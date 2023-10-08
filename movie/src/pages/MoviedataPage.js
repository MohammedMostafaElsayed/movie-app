import React, { useEffect, useState } from 'react'
import Moviedata from '../component/movie/Moviedata'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function MoviedataPage() {
  const value = useParams();
  console.log(value.id);
  const[card, setcard] = useState();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${value.id}?api_key=ac35580be554252f7d6877401caadb42`)
      .then((res) => setcard(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(card);
  
  return (
    
       card? <Moviedata item={card}/> : ''
    
  )
}
