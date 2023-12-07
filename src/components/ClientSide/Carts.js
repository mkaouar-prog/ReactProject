import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Plus from '@mui/icons-material/AddAlarm';
import Minus from '@mui/icons-material/RemoveCircle';
import Delete from '@mui/icons-material/Delete';

import StripeCheckout from 'react-stripe-checkout';


import './Cart.css'; 


function Cart() {
  const { cartDetails, removeItem, incrementItem, decrementItem, clearCart, cartCount , totalPrice} = useShoppingCart();
  
  const navigate = useNavigate();

  
  const [payment, setpayment] = React.useState(false);

  const onToken = (token) => {
  // pour finaliser la transaction vous pouvez aussi envoyer le token au backend
  console.log(token);
  //vider le cart
  clearCart();
  //naviguer vers la page d'accueil
  navigate('/');
  };

  const commander = async () => {
    try {
      setpayment(true);
    } catch (error) {
      console.error('Error in commander function:', error);
    }
  };
  

  
  
  const more = () => {
    navigate('/');
  };

  const clear = () => {
    clearCart();
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleIncrement = (itemId) => {
    incrementItem(itemId);
  };

  const handleDecrement = (itemId) => {
    decrementItem(itemId);
  };

  const calculateTotal = () => {
    return Object.values(cartDetails).reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  };
  const imprimer = () => {
    navigate('/pdfCart');
   };
   const checkoutWithPaymentOnDelivery = () => {
    
    
    navigate('/checkout');
  };


  
  return (
    <div className="cart-container">
     {payment ? (
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51OD1fwAQqOgEMG0TvR03YclPrn07QvVUZvcKEvPRnHs7qqAQKN1gLfVpEKr0Pg2t5laKg6hBP8T0Tx8PTDMgCmVI00qK41fITF"
        amount={totalPrice * 100}
        currency="USD"
      />
      ) : null}
      <h2>Shopping Cart</h2>
      <div>
              <center>
              <Button color="error" variant="outlined" onClick={more}>
            ADD BOOKS
          </Button>
              </center>
            </div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.values(cartDetails).map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  width="80px"
                  height="80px"
                  alt={item.name}
                />
                <span className="item-name">{item.name}</span>
              </td>
              <td className="quantity-cell">
                <button className="btn btn-danger" onClick={() => handleDecrement(item.id)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button  className="btn btn-primary" onClick={() => handleIncrement(item.id)}>+</button>
              </td>
              <td>{item.price} TND</td>
              <td>{(item.price * item.quantity).toFixed(2)} TND</td>
              <td>
                <button className="btn btn-danger"  onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
          <p>Total Articles</p>
          <h4>{cartCount}</h4>
            
      <p className="total">Total: {calculateTotal()} TND</p>
      
      <div>
          
            <Button color="warning" variant="outlined" onClick={commander}>
              Commander With Stripe
            </Button>
                |       |   
                <Button color="success" variant="outlined" onClick={checkoutWithPaymentOnDelivery}>
          Checkout with Payment on Delivery
        </Button>
 |       |   
 <Button color="secondary" variant="outlined" onClick={imprimer}>
              Imprimer PDF
 </Button>
            |       |   
 {/* New button for payment on delivery */}
 <Button color="info" variant="outlined" onClick={clear}>
              Annuler
            </Button>
        
            
          </div>
    </div>
  );
}

export default Cart;
