import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminOnlyRoute = ({ children }) => {
  const storedPassword = localStorage.getItem("adminPassword");
  const [password, setPassword] = useState(storedPassword || "");
  const [loggedIn, setLoggedIn] = useState(Boolean(storedPassword));

  const handleLogin = () => {
    if (password === "123") {
      setLoggedIn(true);
      localStorage.setItem("adminPassword", password);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("adminPassword")) {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn) {
    return children;
  }

  return (
    <section style={{ height: "80vh" }}>
      <div className="container">
        <h2>Admin Login</h2>
        
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
        <br />
        <Link to="/">
          <button className="--btn">&larr; Back To Home</button>
        </Link>
      </div>
    </section>
  );
};

export const AdminOnlyLink = ({ children }) => {
  const storedPassword = localStorage.getItem("adminPassword");
  const [loggedIn, setLoggedIn] = useState(Boolean(storedPassword));

  useEffect(() => {
    if (localStorage.getItem("adminPassword")) {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn) {
    return children;
  }

  return null;
};

export default AdminOnlyRoute;
