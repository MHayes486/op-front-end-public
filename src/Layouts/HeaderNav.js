import { NavLink } from "react-router-dom";
import { useState, setState, Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./HeaderNav.module.css";
// import Cart from "../components/cart/Cart";
// import CartProvider from "../store/CartProvider";
//import Cart from "../components/cart/Cart";
import CartProvider from "../store/CartProvider";
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../actions/userActions"
import { logInCheckActions } from "../store/Login-check-slice";




//import styles from "./HeaderNav.module.css";
import { useNavigate } from "react-router-dom";

const HeaderNav = (props) => {

  const dispatch = useDispatch();
  // const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };
  const navigate = useNavigate();

  const showCartHandler = () => {
    navigate("/cart");
  };

      const logInStorage = localStorage.getItem("merchUser");
      if (logInStorage === "1") {
        dispatch(logInCheckActions.validate());
      }

        const LoginValid = useSelector((state) => state.logInCheck.logedIn);

  const userstate = useSelector((state) => state.loginUserReducer || {});
  const { currentUser } = userstate;
  const merchUser = localStorage.getItem("merchUser")//, JSON.stringify({currentUser}))
  console.log(merchUser)

  return (
    <Fragment>
      <header className={styles.header} onShowCart={showCartHandler}>
        <img
          src="./logo192.png"
          className={styles.pig_logo}
          alt="pics from backend"
        />

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourcider"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Ciders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pairings"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Pairings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/findus"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                FindUs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/merchandise"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Merchandise
              </NavLink>
            </li>

            {!LoginValid && (
              <li>
                <NavLink
                  to="/login"
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
            {LoginValid && (
              <Fragment>
                <li>
                  <NavLink
                    to="/admin"
                    className={(navData) =>
                      navData.isActive ? styles.active : ""
                    }
                  >
                    Admin
                  </NavLink>
                </li>
                <li>
                
                   <a
                      className="nav-link"
                      href="/login"
                      onClick={logoutUser()}
                    >
                      Logout
                    </a>
                  
                </li>
              </Fragment>
            )}

            {/* <li>
              <NavLink
                to="/login"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                {merchUser ? (
                  <li className="nav-item">
                    <a className="nav-link" href="/admin">
                      Admin
                    </a>

                    <a
                      className="nav-link"
                      href="/login"
                      onClick={logoutUser()}
                    >
                      Logout
                    </a>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                )}
              </NavLink>
            </li> */}
            <li>
              <HeaderCartButton onClick={showCartHandler} />
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default HeaderNav;
