import React from 'react';
import { Link } from 'react-router-dom';

function ElOrdersA(props) {

        


  return (
    <div className="container" style={{ textAlign: 'left' }}>
      <div className="row">
        <div className="container">
          <table className="table table-striped" style={{ textAlign: 'left' }}>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Buyer Mail</th>
                <th>Images</th>
                <th>Titles</th>
                <th>Full Name</th>
                <th>Adress</th>
                <th>City</th>
                <th>Zip</th>
                <th>Phone Number</th>
                <th>Prix Achat</th>
                <th>Prix Vente</th>
                <th>Quantité</th>
                <th style={ {color: 'green'}}>Profits</th>
                <th>Status</th>
                <th>Valider  Modify</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
            {[...props.orders].reverse().map((order) => (
                <tr key={order.id}>
                    <td><center>{order.id}</center></td>
                    <td><span>{order.mail}</span></td>
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
                          
                          <td>
          {order.prixAchat.split(',').map((achat, index) => (
            <div key={index}>{achat.trim()}</div>
          ))}
        </td>
        <td>
          {order.prixVente.split(',').map((vente, index) => (
            <div key={index}>{vente.trim()}</div>
          ))}
        </td>
        <td>
          {order.qte.split(',').map((quantite, index) => (
            <div key={index}>{quantite.trim()}</div>
          ))}
        </td>
        <td>
          <div style={ {color: 'green'}}>
          {order.prixAchat.split(',').map((achat, index) => {
            const prixAchat = parseFloat(achat.trim());
            const prixVente = parseFloat(order.prixVente.split(',')[index].trim());
            const quantite = parseFloat(order.qte.split(',')[index].trim());
            
            const profit = (prixVente - prixAchat) * quantite;
            
            return profit;
          }).reduce((total, profit) => total + profit, 0).toFixed(2) }
          </div>
        </td>



                  

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





                  <td>
                    <Link exact to={`/admin/editorder/${order.id}`} className="btn btn-outline-secondary">
                      Modify
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => {props.deleteProd(order.id)}} className="btn btn-dark">
                      Remove
                    </button>
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

export default ElOrdersA;
