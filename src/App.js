import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Movies from "./Components/Movies"
import People from "./Components/People"
import Locations from "./Components/Locations"
import Nav from "./Components/Nav"

function App() {
  return (
    <div className="app">
      <h1>Welcome to GhibliApp</h1>
      <div> <Nav /> </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People/>} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
