import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layouts from "./Layouts/Layouts";
// import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import AgeModal from "./Modal/AgeChecker";
import { ageCheckActions } from "./store/age-check-slice";

import "bootstrap";

import Home from "./pages/Home";
import FindUs from "./pages/FindUs";
import AboutUs from "./pages/AboutUs";
import Merchandise from "./pages/Merchandise";
import OurCider from "./pages/OurCider";
import CiderDetails from "./pages/CiderDetails";
import Pairings from "./pages/Pairings";
import NotFound from "./pages/NotFound";
import References from "./pages/References";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();
  const ageValidStorage = localStorage.getItem("ageIsValid");
  if (ageValidStorage === "1") {
    dispatch(ageCheckActions.validate());
    console.log("validation");
  }
  const ageValidated = useSelector((state) => state.ageCheck.ageIsValid);

  return (
    <Fragment>
      {!ageValidated && <AgeModal />}
      {ageValidated && (
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
            <Route path="/references" element={<References />} />

            <Route path="/login" element={<LoginUser />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
            {/* Capture page not found: */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layouts>
      )}
    </Fragment>
  );
}

export default App;
