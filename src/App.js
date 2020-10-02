import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Media from "./components/Gallery";
import Contact from "./components/Contact";
import StickyBottomRibbon from "./components/StickyBottomRibbon";
import RelativeBottomRibbon from "./components/RelativeBottomRibbon";

function App() {
  return (
    <Router>
      <>
        <Navbar style={{ backgroundColor: "#000080" }}>
          <Navbar.Brand style={{ color: "white" }} href="/">
            Saskatoon Spartans
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "white" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar>
        <div>
          <Switch>
            <Route path="/gallery">
              <Media />
              <RelativeBottomRibbon />
            </Route>
            <Route path="/contact">
              <Contact />
              <StickyBottomRibbon />
            </Route>
            <Route path="/">
              <Home />
              <RelativeBottomRibbon />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
