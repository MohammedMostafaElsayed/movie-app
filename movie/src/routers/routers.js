import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "../pages/searchPage";
import WatchList from "../component/watch/watchlist";
import moviePage from '../pages/movielPage';

export default function Routers(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/search-page" element={<SearchPage/>} />
            <Route path="/watch-page" element={<WatchList/>}/>
            <Route path="/" element={<moviePage/>}/>

            
            

        </Routes>
        </BrowserRouter>
    );
}