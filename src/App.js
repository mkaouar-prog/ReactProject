import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from 'use-shopping-cart';


import { Home, Contact, Login, Register, Reset  } from "./pages";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from "./components/adminonly";
import Admin from "./pages/Admin";

import Orders from "./components/Ordersx";
import ListCards from "./components/ClientSide/ListCards";
import Carts from "./components/ClientSide/Carts";
import PdfCart from "./components/ClientSide/PdfCart";
import Checkout from "./components/ClientSide/Checkout";
import Success from "./components/ClientSide/Success";
import ListOrders from "./components/ClientSide/Orders/ListOrders";
function App() {
  
  return (
    <>
    <ToastContainer/>
    <CartProvider>
      <BrowserRouter>
        <Header/>
        
        <Routes>
        =
         
          <Route path="/" element={<ListCards/>}/>
          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/orders" element={<ListOrders/>} />
          <Route path="/ordersx" element={<Orders/>} />
          <Route path='/cart' element={<Carts/>}/>
          <Route path='/pdfCart' element={<PdfCart/>}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/success" element={<Success/>} />
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />

        </Routes>
        
        <Footer/>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;