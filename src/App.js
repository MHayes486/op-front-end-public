import { Route, Routes, Navigate } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
// import logo from "./logo.svg";
import "./App.css";
import { Fragment, useContext, useState, useEffect } from "react";
import AgeModal from "./Modal/AgeChecker";

import Home from "./pages/Home";
import FindUs from "./pages/FindUs";
import AboutUs from "./pages/AboutUs";
import Merchandise from "./pages/Merchandise";
import OurCider from "./pages/OurCider";
import CiderDetails from "./pages/CiderDetails";
import Pairings from "./pages/Pairings";
import NotFound from "./pages/NotFound";

function App() {
  const [ageValid, setAgeValid] = useState(false);
  const ctx = useContext(AgeIsValidContext);

  useEffect(() => {
    const ageValidStorage = localStorage.getItem("ageIsValid");
    if (ageValidStorage === "1") {
      setAgeValid(true);
    }
  }, [ageValid, ctx]);

  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/findus" element={<FindUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/ourcider" element={<OurCider />} />
        <Route path="/ourcider/:ciderId" element={<CiderDetails />}></Route>
        <Route path="/pairings" element={<Pairings />} />
        {/* Capture page not found: */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layouts>
  );
}

export default App;
