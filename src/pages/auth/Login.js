import React from "react";
import loginImg from "../../assets/login.png";
import { Link , useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { useState } from "react";
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../fireConfig";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    const navigate = useNavigate();
  
    const loginUser = (e) => {
      e.preventDefault();
     
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        
          toast.success("Login Successful...");
          navigate("/");
        })
        .catch((error) => {
         
          toast.error(error.message);
        });
    };
  
    // Login with Goooglr
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          toast.success("Login Successfully");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };






  return (
    <section className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img src={loginImg} alt="Login" className="img-fluid" />
        </div>
        
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login<TbLogin2 /></h2>

              <form onSubmit={loginUser}>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Email" required value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" required value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mt-3">
                  <Link to="/reset">[Forgot your password ?]</Link>
                  <p>  </p>
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
                <p className="mt-3">-- or --</p>
                <button className="btn btn-danger btn-block"  onClick={signInWithGoogle}>
                <FaGoogle color="#fff" /> Login With Google
              </button>
                
               
              </form>

             

              <div className="mt-3">
               
                <Link className="btn btn-secondary" to="/register">Don`t have an account? Sign Up</Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
