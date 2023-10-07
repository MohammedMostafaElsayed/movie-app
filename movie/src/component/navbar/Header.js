import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

function Header() {
  return (
    <Navbar
      className="pt-0 px-0"
      style={{ width: "100%", justifyContent: "space-around" }}
    >
      <Container className="bg-warning text-dark">
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
       
        <Nav.Link href="/watch-page" >
          {" "}
          <Checkbox
            defaultChecked
            sx={{
              color: "black",
              "&.Mui-checked": { color: "black" },
            }}
            
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
           WatchList
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
