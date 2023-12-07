import { useState } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart, FaTimes } from "react-icons/fa";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useShoppingCart } from 'use-shopping-cart';
import { IoBookOutline } from "react-icons/io5";



import {auth} from "../fireConfig";
import { onAuthStateChanged} from "firebase/auth";



const logo = (
  <div >
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  onAuthStateChanged(auth, (user) => {
    
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const logOut=()=>{

    auth.signOut().then(() => {
         console.log('singOut');
       }).catch((error) => {
         console.log(error);
       });
    
     }
     const {cartCount , addItem} = useShoppingCart();
  return (
    
    <header>
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"><Link className="nav-link active" aria-current="page" to="/"><IoBookOutline /> Book Shop</Link></a>
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdownArticles"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Articles
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownArticles">
          <li>
            <Link className="dropdown-item" to="/articles">
              Liste Des Articles
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/AjoutArticle">
              Ajout Articles
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/id">
              Modifier Article
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdownClients"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Clients
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownClients">
          <li>
            <Link className="dropdown-item" to="/clients">
              Liste Des Clients
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/AjoutClient">
              AjoutClient
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/id1">
              Modifier Client
            </Link>
          </li>
               
        </ul>
        
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/contact">
            Contact Us
        </Link>
      </li>
    </ul>
    <Link className="nav-link "  to="/cart"> <div  style={{"display": "inline-block"}}>{cartCount}</div><ShoppingCartIcon/></Link>
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
  <li className="nav-item" style={{ marginRight: '10px', marginLeft: '10px' }}> 
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search a book" aria-label="Search"/>
      <button className="btn btn-outline-secondary" type="submit">Search</button>
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
            <button className="btn btn-outline-dark" onClick={() => logOut()}>
                Log Out
            </button>
    )}

</ul>




    </div>
  </div>
</nav>
    </header>
  );
};

export default Header;