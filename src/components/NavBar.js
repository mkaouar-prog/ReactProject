import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [userName, setUserName] = useState("Admin");

  const handleLogout = () => {
  
    localStorage.removeItem("adminPassword");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <FaUserCircle size={40} color="#fff" />
          <h4 className="d-inline ml-2">{userName}</h4>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/admin/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/all-products" className="nav-link">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/add-product" className="nav-link">
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/orders" className="nav-link">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" onClick={handleLogout} className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
