// import About2 from "./Pages/AboutUs2/About2";
// import Community from "./Pages/Community";
// import Projects from "./Pages/Projects";
// import Sponsors from "./Pages/Sponsors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Error from "./Pages/Errorpage/Errorpage";
// import NavbarI from "./Components/NavbarI/NavbarI";
// import Chatbot from "./Components/Chatbot/chatbot";
import AboutUs from "./Pages/AboutUs";
import OurTeam from "./Pages/OurTeam";
import Gallery from "./Pages/Gallery";
import LandingPage from "./Pages/LandingPage";
import Events from "./Pages/Events";

function App() {
  return (
    <Router>
      {/* <NavbarI />
      <Chatbot/> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
				{/* <Route path="/community" element={<Community />} /> */}
        <Route path="/events" element={<Events />} />
				<Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<OurTeam />} />
        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="*" element={<Error />} /> */}
        {/* <Route path="/projects" element={<Projects />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
