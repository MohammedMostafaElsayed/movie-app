import { Route, Routes } from "react-router-dom";
import SearchPage from "../pages/searchPage";
import WatchList from "../component/watch/watchlist";
import MoviePage from '../pages/MovielPage';
import Pagenotfound from "../pages/Notfound";

export default function Routers(){
    return(
    
        <Routes>
            <Route path="/search-page" element={<SearchPage/>} />
            <Route path="/watch-page" element={<WatchList/>}/>
            <Route path="/" element={<MoviePage/>}/>
            <Route path="*" element={<Pagenotfound/>}/>

        </Routes>
       
    );
}