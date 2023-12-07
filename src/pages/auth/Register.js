import React from "react";
import registerImg from "../../assets/register.png";

import { IoIosAddCircleOutline } from "react-icons/io";

import { useState } from "react";


import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireConfig";
import { toast } from "react-toastify";





const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
 
  
    const navigate = useNavigate();
  
    const registerUser = (e) => {
      e.preventDefault();
      if (password !== cPassword) {
        toast.error("Passwords do not match.");
        return;
      }
     

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
      
        toast.success("Registration Successful...");
       
            navigate("/login");
        
      })
      .catch((error) => {
        toast.error(error.message);
      
       
      });

  
    };
  return (
    <>
    
   
    <section className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Register<IoIosAddCircleOutline /></h2>

              <form  onSubmit={registerUser}>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Email" required  value={email}
                onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" required value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                    value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-dark"  >SignUp</button>
              </form>

              <div className="mt-3">
               
               <Link className="btn btn-secondary" to="/login">Already Have Account ? Login</Link>
               
             </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img">
            <img src={registerImg} alt="Register" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Register;
