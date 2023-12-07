import React from "react";
import { Link } from "react-router-dom";
import resetImg from "../../assets/forgot.png";
import { MdOutlineLockReset } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../fireConfig";
import { sendPasswordResetEmail } from "firebase/auth";
const Reset = () => {
    const [email, setEmail] = useState("");
   
  
    const resetPassword = (e) => {
      e.preventDefault();
      
  
      sendPasswordResetEmail(auth, email)
        .then(() => {
          
          toast.success("Check your email for a reset link");
        })
        .catch((error) => {
          
          toast.error(error.message);
        });
    };



  return (
    <section className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <div className="img">
            <img src={resetImg} alt="Reset Password" width="400" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Reset Password<MdOutlineLockReset />
</h2>

              <form onSubmit={resetPassword}> 
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Enter your e-mail" required value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-dark">
                  Reset 
                </button>

                <div className="mt-3">
                  <div className="links">
                    <p>
                    <Link className="btn btn-secondary" to="/login">Login</Link>  |  <Link className="btn btn-secondary" to="/register">SignUp</Link>
                    </p>
                  
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reset;
