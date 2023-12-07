import React from 'react';
import { Link } from 'react-router-dom';
import useAuthDetails from "../../../pages/auth/AuthDetails";
import { useNavigate } from 'react-router-dom';
function ElementsOrders(props) {
    const navigate = useNavigate();

    const { authUser } = useAuthDetails();
    let filteredOrders = [];

  
    if (authUser && authUser.email) {
        filteredOrders =  [...props.orders].reverse().filter(order => order.mail === authUser.email);
      }
    
  return (
    <div className="container" style={{ textAlign: 'left' }}>
        <h2>My Orders</h2>
      <div className="row">
        <div className="container">
          <table className="table table-bordered table-hover" style={{ textAlign: 'left' }}>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Image</th>
                <th>Titles</th>
                <th>Full Name</th>
                <th>Adress</th>
                <th>City</th>
                <th>Zip</th>
                <th>Phone Number</th>
                <th>Price 1x</th>
                <th>Qte</th>
                <th>Total With Delivery</th>
                <th>Status</th>
                
              </tr>
            </thead>
            <tbody>
           
            {filteredOrders.map((order) => (
                <tr key={order.id}>
                    <td><center>{order.id}</center></td>
                  <td>
                  {order.img.split(',').map((img, index) => (
                      <img
                        key={index}
                        src={img.trim()} // trim to remove leading/trailing whitespaces
                        width="150px"
                        height="150px"
                        alt={`${order.designation} Image ${index + 1}`}
                      />
                    ))}
                  </td>
                  <td>{order.ref}</td>
                  <td>{order.name}</td>
                  <td>{order.adress}</td>
                  <td>{order.city}</td>
                  <td>{order.zip}</td>
                  <td>{order.tel}</td>
                 
                  <td> {order.prixVente.split(',').map((prix, index) => (
                      <div key={index}>{prix.trim()}</div>
                    ))}</td>
                   <td> {order.qte.split(',').map((prix, index) => (
                      <div key={index}>{prix.trim()}</div>
                    ))}</td>
                  <td>{(order.totalPrice + 8).toFixed(2)}</td>
                  <td>{order.status === "Processing" ? (
          <button type="button" className="btn btn-warning" disabled>
            Processing
          </button>
        ) : order.status === "Delivered" ? (
          <button type="button" className="btn btn-success">
            Delivered
          </button>
        ) : order.status === "Rejected" ? (
          <button type="button" className="btn btn-danger">
            Rejected
          </button>
        ) : (
          ''
        )}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ElementsOrders;
