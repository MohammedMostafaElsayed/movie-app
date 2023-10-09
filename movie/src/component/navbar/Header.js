import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";





export default function Header() {
  const counter = useSelector(state => state.watch.initial)
  return (
    <nav className="navbar navbar-expand-lg bg-warning fixed-top">
  <div className="container-fluid  display-flex">
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      {/* <ul className="navbar-nav justify-content-between d-flex justfy-content-space around"> */}
      
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "black",
              };
            }}
          >
            App Movie
          </NavLink>
        
          <NavLink
            to="/watch-page"
            className="nav-link text-end positio-relative display-flex ps-5 flex-reverse"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "black",
              };
            }}             

          >
            Watch List
          </NavLink>
    </div>
  </div>
</nav>
  );
}