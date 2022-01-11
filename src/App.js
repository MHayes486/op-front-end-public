import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import FindUs from "./pages/FindUs";
import AboutUs from "./pages/AboutUs";
import Merch from "./pages/Merch";
import OurCider from "./pages/OurCider";
import CiderDetails from "./pages/CiderDetails";
import Pairings from "./pages/Pairings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/findus" element={<FindUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/ourcider" element={<OurCider />} />
      <Route path="/ourcider/:ciderId" element={<CiderDetails />}></Route>
      <Route path="/pairings" element={<Pairings />} />
      {/* Capture page not found: */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
