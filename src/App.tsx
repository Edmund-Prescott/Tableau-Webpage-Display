import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TableauEmbed from "./TableauEmbed";
import Landing from "./Landing";
import About from "./About";

function App() {

  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/Landing">Home</Link>
        <Link to="/TableauEmbed">Visuals</Link>
        <Link to="/About">About</Link>
      </nav>

      <Routes>
        <Route path="/Landing" element={<Landing/>}/>
        <Route path="/TableauEmbed" element={<TableauEmbed/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
