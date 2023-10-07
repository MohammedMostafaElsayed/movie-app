import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "../pages/searchPage";
import WatchList from "../component/watch/watchlist";
import Movielist from "../component/movie/movielist";

export default function Routers(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Movielist/>}/>
            <Route path="/search-page" element={<SearchPage/>} />
            <Route path="/watch-page" element={<WatchList/>}/>
            

        </Routes>
        </BrowserRouter>
    );
}