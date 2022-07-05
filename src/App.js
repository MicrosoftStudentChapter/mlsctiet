// import AboutUs from "./Pages/AboutUs";
// import Alumni from "./Pages/Alumni";
// import Community from "./Pages/Community";
import Events from "./Pages/Events";
// import Gallery from "./Pages/Gallery";
// import LandingPage from "./Pages/LandingPage";
// import OurTeam from "./Pages/OurTeam";
// import Projects from "./Pages/Projects";
// import Sponsors from "./Pages/Sponsors";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
}

export default App;
