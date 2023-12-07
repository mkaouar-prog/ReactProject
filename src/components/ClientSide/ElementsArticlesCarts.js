import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from '@mui/material';

function ElementsArticle(props) {
  const { cartCount, addItem } = useShoppingCart();
  const [searchTerm, setSearchTerm] = useState('');
  const addToCart = (article) => {
    try {
      console.log('Adding to cart:', article);
  
      const target = {
        id: article.id,
        title: article.reference,
        image: article.imageartpetitf,
        price: article.prixVente,
        qtestock: article.qtestock,
        auteur: article.auteur,
        prixAchat: article.prixAchat,
        prixVente: article.prixVente,
        quantity: 1
      };
  
      console.log('Target:', target);
  
      addItem(target);
      console.log('Item added to cart:', target);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  
  const filteredArticles = props.articles.filter((article) =>
  article.reference.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div>
   

      <div className="container mt-4">
      <form className="d-flex" role="search">
                  <input className="form-control me-2" placeholder="Search a book" aria-label="Search"
                  type="text"
                  
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}/>
                 
                </form>
       <p></p>
        
          
        
        <div className="row">

          {
          filteredArticles.map((article) => {
            return(
                    
            <div key={article.id} className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="card h-100 border-dark text-black">
                <img
                  src={article.imageartpetitf}
                  className="card-img-top"
                  alt={article.designation}
                  style={{ objectFit: 'cover', height: 'auto', width: '100%' }}
                />
                <div className="card-body bg-white"
                style={{ objectFit: 'cover', height: '150px', width: '100%' }}
                >
                    <h5 className="card-title">{article.reference}</h5>
                  <p className="card-title">{article.designation}</p>
                  <div
        className="position-absolute top-0 start-0 bg-black text-white rounded-circle p-2"
        style={{ zIndex: 1 }}
      >
        {article.marque}
      </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-white"
                  style={{ textAlign: 'center' }}
                  >{article.prixVente} TND</li>
                </ul>
                <div className="card-body bg-white"
                style={{ objectFit: 'cover', height: '60px', width: '100%' }}
                >
                  <center>
                  <center> <a href="#" className="btn btn-dark" onClick={() => addToCart(article)}>Add to Cart</a> </center>
                  </center>
                </div>
              </div>
            </div>
          )
        })
    }
        </div>
      </div>
    </div>
  );
}

export default ElementsArticle;
