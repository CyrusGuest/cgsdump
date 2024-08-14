import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Landing from "./pages/Landing";
import ContactMe from "./pages/ContactMe";
import Photos from "./pages/Photos";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
