import React from "react";
import AboutUs from "./Pages/AboutUs";
import Alumnis from "./Pages/Alumni";
import Community from "./Pages/Community";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import LandingPage from "./Pages/LandingPage";
import OurTeam from "./Pages/OurTeam";
import Projects from "./Pages/Projects";
import Error from "./Pages/Errorpage/Errorpage";
import Sponsors from "./Pages/Sponsors";
import Navbar from "./Components/Navbar/Navbar";
import PolaroidGrid from "./Pages/Alumni/PolaroidGrid";
import Main from "./Pages/Alumni/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project1 from "./Pages/Projects/Components/Project1/Project1";
import Project2 from "./Pages/Projects/Components/Project2/Project2";
import Project3 from "./Pages/Projects/Components/Project3/Project3";

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
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/alumni" element={<Alumnis />}>
          <Route index element={<Main />} />
          <Route path=":year" element={<PolaroidGrid />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
