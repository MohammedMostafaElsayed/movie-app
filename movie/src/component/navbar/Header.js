import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";





export default function Header() {
  const counter = useSelector(state => state.watch.initial)
  return (
    <nav className="navbar navbar-expand-lg bg-warning fixed-top">
      <div className="container-fluid  display-flex" >
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 grid gap-3 justify-content-between d-flex" >
            <li className="nav-item">
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
            </li>
            <li className="nav-item">
              <NavLink
                to="/watch-page"
                className="nav-link"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "black" : "black",
                  };
                }}
              >
                watch list
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav >
  );
}