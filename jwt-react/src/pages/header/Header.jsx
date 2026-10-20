
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      variant="dark"
      sticky="top"
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="brand">
          <span className="brand-icon">N</span>
          <span className="brand-text">
            Not<span>Loggedin</span>
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          className="custom-toggler"
        />

        {/* Navigation Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto nav-items">
            <Nav.Link
              as={Link}
              to="/login"
              className="custom-link"
            >
              Login
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/register"
              className="signup-link"
            >
              Get Started <span>→</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
