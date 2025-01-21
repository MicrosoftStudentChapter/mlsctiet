import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import LandingPage from "./Pages/LandingPage";
import OurTeam from "./Pages/OurTeam";
import Alumni from "./Pages/Alumni";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import NavbarI from "./Components/NavbarI/NavbarI";
import Sponsors from "./Pages/Sponsors";
import Chatbot from "../components/Chatbot/chatbot"

//random addition

function App() {
  return (
    <Router>
      <Chatbot/>
      <NavbarI />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/alumni" element={<Alumni />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sponsors" element={<Sponsors/>} />
      </Routes>
    </Router>
  );
}

export default App;