import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import { Container, Navbar } from "react-bootstrap";
import {useEffect } from "react";
import NotFound from "./NotFound";
import TableauEmbed from "./TableauEmbed";

function PageTitleManager() {
  const location = useLocation();

  useEffect(() => {
    let title = "MyDashboard";

    switch (location.pathname) {
      case "/Landing":
        title = "Home | MyDashboard";
        break;
      case "/TableauEmbed":
        title = "Visuals | MyDashboard";
        break;
      case "/About":
        title = "About | MyDashboard";
        break;
      case "/NotFound":
        title = "Not Found | MyDashboard";
        break;
      default:
        title = "MyDashboard";
    }

    document.title = title;
  }, [location.pathname]);

  return null;
}

function App() {

  return (
    <Container className="py-4 text-center">
    <Router>

      <PageTitleManager />

      <Navbar>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/Landing" className="left-nav">Home</Link>
          <Link to="/TableauEmbed">Visuals</Link>
          <Link to="/About">About</Link>
        </nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Navigate to="/Landing" replace />} />

        <Route path="/Landing" element={<Landing/>}/>
        <Route path="/TableauEmbed" element={<TableauEmbed />}/>
        <Route path="/About" element={<About/>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </Container>
  );
}

export default App;
