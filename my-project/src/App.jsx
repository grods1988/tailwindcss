import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import DriverRankings from "./pages/DriverRankings";
import Navbar from "./pages/Navbar";
import News from "./pages/News";
import RaceResults from "./pages/RaceResults";
import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/driverRankings" element={<DriverRankings />} />
        <Route path="/raceresults" element={<RaceResults />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
