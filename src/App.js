// import React from "react";
// import AboutUs from "./Pages/AboutUs";
// import Alumni from "./Pages/Alumni";
// import Community from "./Pages/Community";
// import Events from "./Pages/Events";
// import Gallery from "./Pages/Gallery";
// import LandingPage from "./Pages/LandingPage";
// import OurTeam from "./Pages/OurTeam";
// // import Projects from "./Pages/Projects";
// import Error from "./Pages/Errorpage/Errorpage";
// import Sponsors from "./Pages/Sponsors";
// import Navbar from "./Components/Navbar/Navbar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Project1 from "./Pages/Projects/Components/Project1/Project1";
// import Project2 from "./Pages/Projects/Components/Project2/Project2";
// import Project3 from "./Pages/Projects/Components/Project3/Project3";
import AboutUs from "./Pages/AboutUs";
import Alumni from "./Pages/Alumni";
// import Community from "./Pages/Community";
import Events from "./Pages/Events";
// import Gallery from "./Pages/Gallery";
import LandingPage from "./Pages/LandingPage";
import OurTeam from "./Pages/OurTeam";
// import Projects from "./Pages/Projects";
import Sponsors from "./Pages/Sponsors";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Project1 from "./Pages/Projects/Components/Project1/Project1";
// import Project2 from "./Pages/Projects/Components/Project2/Project2";
// import Project3 from "./Pages/Projects/Components/Project3/Project3";
// import Explode_img1 from "./Pages/Gallery/components/explode_img1/explode_img1";
// import Explode_img2 from "./Pages/Gallery/components/explode_img2/explode_img2";
// import Explode_img3 from "./Pages/Gallery/components/explode_img3/explode_img3";
// import Explode_img4 from "./Pages/Gallery/components/explode_img4/explode_img4";
import Error from "./Pages/Errorpage/Errorpage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
				{/*<Route path="/community" element={<Community />} />*/}
        <Route path="/events" element={<Events />} />
				{/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/team" element={<OurTeam />} /> */}
        <Route path="/sponsors" element={<Sponsors />} />
        {/* <Route path="/alumni" element={<Alumni />} /> */}
        <Route path="*" element={<Error />} />
				{/*<Route path="/explode_img1" element={<Explode_img1 />} />
        <Route path="/explode_img2" element={<Explode_img2 />} />
        <Route path="/explode_img3" element={<Explode_img3 />} />
        <Route path="/explode_img4" element={<Explode_img4 />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
