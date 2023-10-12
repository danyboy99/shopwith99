import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.js";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//import { LinkContainer } from "react-router-bootstrap";
//import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
function App() {
  return (
    <div className="d-flex flex-column site-container">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav.Link href="/">
            <Navbar.Brand>shopwith99</Navbar.Brand>
          </Nav.Link>
        </Container>
      </Navbar>
      <main>
        <Container>
          <RouterProvider router={routes} />
        </Container>
      </main>
      <footer className="text-center">All rights reserved </footer>
    </div>
  );
}

export default App;
