import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/NavBar";
import AddProduct from "../components/AddProduct";

import Home from "../components/Home";
import Orders from "../components/Ordersx";

import ListArticles from "../components/ListArticles";
import ListOrdersA from "../components/ListOrdersA";
import EditOrder from "../components/EditOrder";
import EditArticle from "../components/EditArticle";

const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <div className="navbar">
            <Navbar/>
          </div>
        </div>
       
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="all-products" element={<ListArticles/>} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="orders" element={<ListOrdersA/>} />
            <Route path='/editorder/:id' element={<EditOrder/>}/>
            <Route path='/editArticle/:id' element={<EditArticle/>}/>
          </Routes>
       
      </div>
    </div>
  );
};

export default Admin;
