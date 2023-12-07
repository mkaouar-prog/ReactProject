import React from 'react';
import useAuthDetails from "../../pages/auth/AuthDetails";
import { IoIosCloudDone } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Success = () => {
    const { authUser } = useAuthDetails();
  return (

    <>
        <p></p>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">THANK YOU FOR YOUR PURCHASE! <IoIosCloudDone /></h3>
              <p className="text-center">An email will been sent out When your Order Approver(s) for review.   {authUser && <p><IoMdMail />
 Your Email is: {authUser.email}</p>}.</p>
              

              <a href="/" className="btn btn-dark d-block mx-auto">Continue Shopping</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Success;
