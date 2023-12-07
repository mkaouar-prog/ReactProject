import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from 'use-shopping-cart';
import { IoBookOutline } from "react-icons/io5";

import { auth } from "../fireConfig";
import { onAuthStateChanged } from "firebase/auth";
import useAuthDetails from "../pages/auth/AuthDetails";
import { VscAccount } from "react-icons/vsc";

const Header = () => {

    const { authUser } = useAuthDetails();
    

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { cartCount } = useShoppingCart();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logOut = () => {
    auth.signOut().then(() => {
      console.log('Sign out successful');
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <IoBookOutline /> Book Shop
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
                <Link className="nav-link" to="/">
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
              {authUser && 
                <Link className="nav-link" to="/orders">
                  My Orders
                </Link>
                }
              </li>
              {/* Add other navigation links as needed */}
            </ul>
                
            

            <Link className="nav-link" to="/cart">
              <div style={{ display: "inline-block" }}>{cartCount}</div>
              <ShoppingCartIcon />
            </Link>

            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginRight: '10px', marginLeft: '10px' }}>
                <form className="d-flex" role="search">
                
                  
                  {authUser && <h4><VscAccount /> Hi , {authUser.email.split('@')[0]}</h4>}
                 
                </form>
              </li>

              {!isLoggedIn ? (
                <>
                  <li className="nav-item" style={{ marginRight: '10px', marginLeft: '10px' }}>
                    <Link className="btn btn-dark" to="/login">
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item" style={{ marginRight: '1px', marginLeft: '1px' }}>
                    <Link className="btn btn-secondary" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-outline-dark" onClick={logOut}>
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
