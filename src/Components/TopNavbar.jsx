import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container fluid className="px-0">
          <Link to="/home">
            <div className="navbar-brand" href="http://ubeytdemir.me/netflix-ui">
              <img src="./assets/netflix_logo.png" id="logo" alt="#" />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto menu-items">
              <div className="left-corner d-flex">
                <Link to="/tvshows">
                  <div>Tv Shows</div>
                </Link>
                <Nav.Link href="#pricing">Movies</Nav.Link>
                <Nav.Link href="#deets">Recently Added</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  My List
                </Nav.Link>
              </div>
              <div className="right-corner">
                <div className="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
                <div className="kids">
                  <a className="nav-link" href="#">
                    KIDS
                  </a>
                </div>
                <div className="notification-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill icon" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </div>
                <div>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./assets/avatar.png" id="avatar" />
                  </button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
