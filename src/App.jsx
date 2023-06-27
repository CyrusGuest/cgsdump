import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Packages from "./pages/Packages";
import ContactUs from "./pages/ContactUs";
import Policy from "./pages/Policy";
import CaseStudies from "./pages/CaseStudies";
import Completed from "./pages/Completed";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/casestudies" element={<CaseStudies />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
