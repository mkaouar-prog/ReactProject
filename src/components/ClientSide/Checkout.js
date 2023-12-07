// Checkout.js
import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import useAuthDetails from "../../pages/auth/AuthDetails";
import { TbLogin2 } from "react-icons/tb";
import CheckoutImg from "../../assets/x.png";
import Alert from "../../assets/alert.svg";
import { auth } from "../../fireConfig";
import { onAuthStateChanged } from "firebase/auth";
import {useEffect} from 'react'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { TbSum } from "react-icons/tb";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Checkout = () => {



    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [mail, setMail] = useState("");
    const [ref, setRef] = useState("");
    const [img, setImg] = useState("");
    const [qte, setQte] = useState("");
  
    const [auteur, setAuteur] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [status, setStatus] = useState("");
    const [prixAchat, setPrixAchat] = useState("");
    const [prixVente, setPrixVente] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
       
        const newOrder = {
        
        name,
        tel,
        mail : authUser.email,
        auteur: Object.values(cartDetails).map(item => `${item.auteur}`).join(','),
        ref: Object.values(cartDetails).map(item => `${item.quantity}x ${item.title}`).join(','),
        adress,
        city,
        zip,
        status: "Processing",
        prixAchat: Object.values(cartDetails).map(item => `${item.prixAchat}`).join(','),
        prixVente: Object.values(cartDetails).map(item => `${item.prixVente}`).join(','), 
        qte : Object.values(cartDetails).map(item => `${item.quantity}`).join(','),
        img: Object.values(cartDetails).map(item => `${item.image}`).join(','),
        totalPrice
        };
    

    axios.post("http://localhost:3001/orders",newOrder)
    .then(res => {  
    console.log(res);
  
    clearCart();   
    navigate('/success')
    })   
    .catch(error=>{
        console.log(error)
        alert("Erreur ! Insertion non effectuée")
        })
           
    }






    
    const { cartDetails, removeItem, incrementItem, decrementItem, clearCart, cartCount , totalPrice} = useShoppingCart();
    const { authUser } = useAuthDetails();
   
  const navigate = useNavigate();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleIncrement = (event, itemId) => {
    event.preventDefault();
    incrementItem(itemId);
  };
  
  const handleDecrement = (event, itemId) => {
    event.preventDefault();
    decrementItem(itemId);
  };
  
  return (
    
    <div>
          {!isLoggedIn ? (
           <center>
           <p></p>
           <div className="col-md-4 ">
           <img src={Alert} alt="Login" className="img-fluid" style={{ width: '50%', height: 'auto' }} />


       </div>
       <div className="mt-3">
              
               <Link className="btn btn-dark" to="/register">Don`t have an account? Sign Up</Link>
               
             </div>
             <p></p>
             </center>
      
       ) : (

        <>
      
        <section className="container">
          <p></p>
        <div className="row d-flex align-items-top">
          <div className="col-md-4 ">
              <p></p>
              
            <img src={CheckoutImg} alt="Login" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
          </div>
          
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title"><MdOutlineShoppingCartCheckout /> Checkout</h2>
  
                <form onSubmit={handleSubmit} >
                  <div className="mb-3">
                      
                    <input type="text" className="form-control" placeholder="Full Name" required value={name}
                  onChange={e => setName(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Full Adress" required value={adress}
                  onChange={e => setAdress(e.target.value)}/>
                  </div>
  
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="City" required value={city}
                  onChange={e => setCity(e.target.value)}/>
                  </div>
  
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Zip" required value={zip}
                  onChange={e => setZip(e.target.value)}/>
                  </div>
  
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Phone Number" required value={tel}
                  onChange={e => setTel(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                  <label><CiMail /> Your Email</label>
                    <input type="text" className="form-control" placeholder={authUser.email} disabled />
                  </div>
                  <div className="mb-3">
                  <label><TbSum /> Total</label>
                    <input type="password" className="form-control" placeholder={totalPrice.toFixed(2)} disabled />
                  </div>
                  <div className="mb-3">
                  <label><MdDeliveryDining /> Total With Delivery </label>
                    <input type="password" className="form-control" placeholder={(totalPrice + 8).toFixed(2)} disabled />
                  </div>
                  <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price 1x</th>
              <th>Total</th>
              
            </tr>
          </thead>
          <tbody>
            {Object.values(cartDetails).map((item) => (
              
              <tr key={item.id}>
                <td>
                <span className="item-name">{item.auteur}</span>
                  <img
                    src={item.image}
                    width="80px"
                    height="80px"
                    alt={item.name}
                  />
                  <span className="item-name">{item.name}</span>
                  
                </td>
                <td className="quantity-cell">
                  <button className="btn btn-secondary" onClick={(e) => handleDecrement(e, item.id)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button  className="btn btn-dark" onClick={(e) => handleIncrement(e, item.id)}>+</button>
                </td>
                <td>{item.price} TND</td>
                <td>{(((item.price * item.quantity)).toFixed(2))} TND</td>
                
              </tr>
            ))}
            <tr>
              <td>Total With Delivery={(totalPrice+8).toFixed(2)} TND</td>
            </tr>
          </tbody>
        </table>
                 
                  <div className="mt-3">
                    <Link to="/">[Add More Books ?]</Link>
                    <p>  </p>
                  </div>
                  <button type="submit" className="btn btn-dark">Checkout Now</button>
                  
                  
                 
                </form>
  
               
  
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <p></p>
  
        </>
        
              )}
    </div>
  );
};

export default Checkout;
