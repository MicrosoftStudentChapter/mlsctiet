import AboutUs from "./Pages/AboutUs";
import Alumnis from "./Pages/Alumni";
import Community from "./Pages/Community";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import LandingPage from "./Pages/LandingPage";
import OurTeam from "./Pages/OurTeam";
import Projects from "./Pages/Projects";
import Sponsors from "./Pages/Sponsors";
import React from "react";
import Main from "./Pages/Alumni/Main";
import PolaroidGrid from "./Pages/Alumni/PolaroidGrid";
// import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Pages/Errorpage/Errorpage";
import NavbarI from "./Components/NavbarI/NavbarI";

function App() {
  return (
    <Router>
      <NavbarI />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
				<Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
				<Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/sponsors" element={<Sponsors />} />
	<Route path="/alumni" element={<Alumnis />}>
          <Route index element={<Main />} />
          <Route path=":year" element={<PolaroidGrid/>} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
