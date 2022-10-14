import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function NavBarComp() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light" href="/">
          Junk Becho
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <motion.div
              initial={{ scale: 5, opacity: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 2,
              }}>
              <Nav.Link className="text-light" as={Link} to="/">
                Home
              </Nav.Link>
            </motion.div>
            <motion.div
              initial={{ scale: 5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
                bounce: 0.5,
                duration: 2,
              }}>
              <Nav.Link className="text-light" as={Link} to="/contact-us">
                Contact Us
              </Nav.Link>
            </motion.div>
            <motion.div
              initial={{ scale: 5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1,

                type: "spring",
                bounce: 0.5,
                duration: 2,
              }}>
              <Nav.Link className="text-light" as={Link} to="/about">
                About Us
              </Nav.Link>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
