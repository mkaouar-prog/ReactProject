// Orders.js
import React from "react";
import useAuthDetails from "../pages/auth/AuthDetails";


const Orders = () => {
  const { authUser } = useAuthDetails();

  return (
    <div>
      <h1>Orders</h1>
      {authUser && <p>User Email: {authUser.email}</p>}
    
    </div>
  );
};

export default Orders;
