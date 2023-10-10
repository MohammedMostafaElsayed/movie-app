import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





export default function Header() {
  const counter = useSelector(state => state.watch.initial)
  return (
    <Navbar expand="lg" className="bg-warning fixed-top" >
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
            className="nav-link text-end positioRelative d-flex ps-5 flexReverse"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "black",
              };
            }}             

          >
            Watch List
          </NavLink>         
        
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  

  );
}